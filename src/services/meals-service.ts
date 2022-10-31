import { MealCreateDto } from "../models/dtos/meal-create-dto";
import { MealRateDto } from "../models/dtos/meal-rate-dto";
import { BusinessError, InternalError } from "../models/error-types";
import { ChefsRepository } from "../repositories/chefs-repository";
import { CustomersRepository } from "../repositories/customers-repository";
import { MealsRatesRepository } from "../repositories/meals-rates-repository";
import { MealsRepository } from "../repositories/meals-repository";

export class MealsService {
  constructor(
    private readonly _mealsRepository: MealsRepository,
    private readonly _mealsRatesRepository: MealsRatesRepository,
    private readonly _chefsRepository: ChefsRepository,
    private readonly _customerRepository: CustomersRepository
  ) {}

  async getAll(chef_id?: number) {
    return chef_id
      ? await this._mealsRepository.findByChefId(chef_id)
      : await this._mealsRepository.findAll();
  }

  async create(dto: MealCreateDto, userId: number) {
    await this.canCreateMeal(userId);
    return await this._mealsRepository.create(dto);
  }

  private async canCreateMeal(userId) {
    const chef = await this._chefsRepository.findByUserId(userId);
    if (!chef)
      throw new InternalError("Can't find chef for this user")
  }

  async rate(dto: MealRateDto, userId: number) {
    const customer = await this._customerRepository.findByUserId(userId)
    if (!customer)
      throw new InternalError("Can't find customer for this user")

    await this.canRateMeal(dto, userId);
    await this._mealsRatesRepository.create(dto, customer["id"]);

    const avg = await this.getCurrentAverage(dto.meal_id);
    return await this._mealsRepository.saveAvg(dto.meal_id, avg);
  }

  async canRateMeal(dto: MealRateDto, userId: number) {
    const validRates = [1, 2, 3, 4, 5];

    const meal = await this._mealsRepository.findById(dto.meal_id);
    if (!meal)
      throw new BusinessError("Can't find a meal for rate with the given id");

    const previousRate = await this._mealsRatesRepository.findOne(dto.meal_id, userId);
    if (previousRate)
      throw new BusinessError("You can't rate a meal more than once");

    if (!validRates.includes(dto.rate))
      throw new BusinessError(
        "Valid ratings are only between one and five stars"
      );
  }

  private async getCurrentAverage(mealId: number): Promise<number> {
    const result = await this._mealsRatesRepository.findByMealIdAndCountAll(
      mealId
    );

    //we can improve this in the future by calculating it by incremental average
    return (
      result.rows.reduce((sum, mealRate) => sum + <number>mealRate["rate"], 0) /
      result.count
    );
  }
}

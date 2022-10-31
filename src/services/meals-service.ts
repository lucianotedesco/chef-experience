import { MealCreateDto } from "../models/dtos/meal-create-dto";
import { MealRateDto } from "../models/dtos/meal-rate-dto";
import { BusinessError } from "../models/error-types";
import { ChefsRepository } from "../repositories/chefs-repository";
import { MealsRatesRepository } from "../repositories/meals-rates-repository";
import { MealsRepository } from "../repositories/meals-repository";

export class MealsService {
  constructor(
    private readonly _mealsRepository: MealsRepository,
    private readonly _mealsRatesRepository: MealsRatesRepository,
    private readonly _chefsRepository: ChefsRepository
  ) {}

  async getAll(chef_id?: number) {
    return chef_id
      ? await this._mealsRepository.findByChefId(chef_id)
      : await this._mealsRepository.findAll();
  }

  async create(dto: MealCreateDto) {
    await this.canCreateMeal(dto);
    return await this._mealsRepository.create(dto);
  }

  private async canCreateMeal(dto: MealCreateDto) {
    const chefExists = await this._chefsRepository.findById(dto.chef_id);
    if (!chefExists)
      throw new BusinessError("Can't found a chef with the given id");
  }

  async rate(dto: MealRateDto, customerId: number) {
    await this.canRateMeal(dto, customerId);
    await this._mealsRatesRepository.create(dto, customerId);

    const avg = await this.getCurrentAverage(dto.meal_id);
    return await this._mealsRepository.saveAvg(dto.meal_id, avg);
  }

  async canRateMeal(dto: MealRateDto, customerId: number) {
    const validRates = [1, 2, 3, 4, 5];

    const meal = await this._mealsRepository.findById(dto.meal_id);
    if (!meal)
      throw new BusinessError("Can't find a meal for rate with the given id");

    const previousRate = await this._mealsRatesRepository.findOne(dto.meal_id, customerId);
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

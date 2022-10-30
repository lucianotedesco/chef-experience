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

  async getById(id: number) {
    const meal = await this._mealsRepository.findById(id);
    if (!meal)
      throw new BusinessError(
        `Couldn't find a meal with the specified id ${id}:`
      );

    return meal;
  }

  async getAll() {
    const meal = await this._mealsRepository.findAll();
    if (!meal) throw new BusinessError(`Couldn't find any meals`);

    return meal;
  }

  async create(dto: MealCreateDto) {
    await this.canCreateMeal(dto)
    return await this._mealsRepository.create(dto);
  }

  private async canCreateMeal(dto: MealCreateDto) {
    const chefExists = await this._chefsRepository.findById(dto.chef_id);
    if (!chefExists)
      throw new BusinessError("Can't found a chef with the given id");
  }

  async rate(dto: MealRateDto) {
    await this.canRateMeal(dto);
    await this._mealsRatesRepository.create(dto);
  }

  private async canRateMeal(dto) {
    const validRates = [1, 2, 3, 4, 5];

    const previousRate = await this._mealsRepository.findOne(dto);
    if (previousRate)
      throw new BusinessError("You can't rate a meal more than once");

    if (!validRates.includes(dto.rate))
      throw new BusinessError(
        "Valid ratings are only between one and five stars"
      );
  }
}

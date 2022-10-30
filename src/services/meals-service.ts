import { BusinessError } from "../models/error-types";
import { MealsRepository } from "../repositories/meals-repository";

export class MealsService {
  constructor(private readonly _mealsRepository: MealsRepository) {}

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

  async rate(reqBody) {
    await this.canRateMeal(reqBody);
    await this._mealsRepository.create(reqBody)
  }

  private async canRateMeal(reqBody) {
    const validRates = [1, 2, 3, 4, 5];

    const previousRate = await this._mealsRepository.findOne(reqBody);
    if (previousRate)
      throw new BusinessError("You can't rate a meal more than once");

    if (!validRates.includes(reqBody.rate))
      throw new BusinessError(
        "Valid ratings are only between one and five stars"
      );
  }
}

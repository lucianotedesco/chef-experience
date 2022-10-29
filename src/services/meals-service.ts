import { Injectable } from "injection-js";
import { Sequelize } from "sequelize";
import { Op } from "sequelize";
import { Meals } from "../models/entities/meals";
import { MealsRate } from "../models/entities/meals-rates";
import { BusinessError } from "../models/error-types";

@Injectable()
export class MealsService {
  async getById(id: string) {
    const meal = await Meals.findByPk(id);
    if (!meal)
      throw new BusinessError(
        `Couldn't find a meal with the specified id ${id}:`
      );

    return meal;
  }

  async getAll() {
    const meal = await Meals.findAll();
    if (!meal) throw new BusinessError(`Couldn't find any meals`);

    return meal;
  }

  async create(reqBody) {
    return await Meals.create({ id: reqBody.id, name: reqBody.name });
  }

  async rate(reqBody) {
    this.canRateMeal(reqBody);

    const mealRate = await MealsRate.create({
      meal_id: reqBody.meal_id,
      customer_id: reqBody.customer_id,
      rate: reqBody.rate,
    });
  }

  private async canRateMeal(reqBody) {
    const validRates = [1, 2, 3, 4, 5];

    const firstMeal = await MealsRate.findOne({
      where: {
        [Op.and]: [
          { meal_id: reqBody.meal_id },
          { customer_id: reqBody.customer_id },
        ],
      },
    });

    if (!firstMeal)
      throw new BusinessError("You can't rate a meal more than once");

    if (!validRates.includes(reqBody.rate))
      throw new BusinessError(
        "Valid ratings are only between one and five stars"
      );
  }
}

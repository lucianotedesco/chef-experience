import { Op } from "sequelize";
import { Meals } from "../models/entities/meals";
import { MealsRates } from "../models/entities/meals-rates";

export class MealsRepository {
  async findById(id: number) {
    return Meals.findByPk(id);
  }

  async findAll() {
    return Meals.findAll();
  }

  async findOne(reqBody) {
    return MealsRates.findOne({
      where: {
        [Op.and]: [
          { meal_id: reqBody.meal_id },
          { customer_id: reqBody.customer_id },
        ],
      },
    });
  }

  async create(reqBody) {
    return MealsRates.create({
      id: 1,
      meal_id: reqBody.meal_id,
      customer_id: reqBody.customer_id,
      rate: reqBody.rate,
    });
  }
}

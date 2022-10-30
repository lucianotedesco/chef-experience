import { Op } from "sequelize";
import { MealRateDto } from "../models/dtos/meal-rate-dto";
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

  async create(dto: MealRateDto) {
    return MealsRates.create({
      meal_id: dto.meal_id,
      customer_id: dto.customer_id,
      rate: dto.rate,
    });
  }
}

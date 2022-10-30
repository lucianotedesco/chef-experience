import { Op } from "sequelize";
import { MealsRates } from "../models/entities/meals-rates";
import { MealRateDto } from "../models/dtos/meal-rate-dto";
import { Meals } from "../models/entities/meals";

export class MealsRatesRepository {
  async create(dto: MealRateDto) {
    return MealsRates.create({
      meal_id: dto.meal_id,
      customer_id: dto.customer_id,
      rate: dto.rate,
    });
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

  async findByMealIdAndCountAll(mealId: number) {
    return MealsRates.findAndCountAll({
      raw: true,
      where: { meal_id: mealId },
    });
  }

  async findByChefId(chef_id: number) {
    return MealsRates.findAll({
      include: [
        {
          model: Meals,
          where: { chef_id: chef_id },
        },
      ],
    });
  }

  async findAll() {
    return MealsRates.findAll();
  }
}

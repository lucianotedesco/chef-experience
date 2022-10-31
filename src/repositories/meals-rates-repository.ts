import { Op } from "sequelize";
import { MealsRates } from "../models/entities/meals-rates";
import { MealRateDto } from "../models/dtos/meal-rate-dto";
import { DtoMappers } from "../config/dto-mapper-config";

export class MealsRatesRepository {
  async create(dto: MealRateDto) {
    return MealsRates.create({
      meal_id: dto.meal_id,
      customer_id: dto.customer_id,
      rate: dto.rate,
    });
  }

  async findOne(reqBody) {
    const mealRate = await MealsRates.findOne({
      where: {
        [Op.and]: [
          { meal_id: reqBody.meal_id },
          { customer_id: reqBody.customer_id },
        ],
      },
    });

    return DtoMappers.MealDtoMapper.serialize(mealRate);
  }

  async findByMealIdAndCountAll(mealId: number) {
    return MealsRates.findAndCountAll({
      raw: true,
      where: { meal_id: mealId },
    });
  }
}

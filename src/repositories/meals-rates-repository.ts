import { Op } from "sequelize";
import { MealsRates } from "../models/entities/meals-rates";
import { MealRateDto } from "../models/dtos/meal-rate-dto";
import { DtoMappers } from "../config/dto-mapper-config";

export class MealsRatesRepository {
  async create(dto: MealRateDto, customerId: number) {
    return MealsRates.create({
      meal_id: dto.meal_id,
      customer_id: customerId,
      rate: dto.rate,
    });
  }

  async findOne(mealId: number, customerId: number) {
    const mealRate = await MealsRates.findOne({
      where: {
        [Op.and]: [
          { meal_id: mealId },
          { customer_id: customerId },
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

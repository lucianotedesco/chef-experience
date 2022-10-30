import { Op } from "sequelize";
import { MealsRates } from "../models/entities/meals-rates";
import { MealRateDto } from "../models/dtos/meal-rate-dto";

export class MealsRatesRepository {
  async create(dto: MealRateDto) {
    return MealsRates.create({
      meal_id: dto.meal_id,
      customer_id: dto.customer_id,
      rate: dto.rate,
    });
  }
}

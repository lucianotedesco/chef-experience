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

  async getAvg(mealId: number) {
    const result = await MealsRates.findAndCountAll()
    if (result.count == 0)
      return 0;

    // const totalSum = result.rows.reduce((sum, mealRate) => {
    //   return sum + 
    // }


    // rates.rate
  }
}

import { MealDto } from "../models/dtos/meal-dto"
import { MealRateDto } from "../models/dtos/meal-rate-dto";

export class MealsRatesFactory{
    static getMealRate(meal_id: number, rate: number){
        const dto = new MealRateDto();
        dto.meal_id= meal_id,
        dto.rate = rate
        return dto;
    }
}
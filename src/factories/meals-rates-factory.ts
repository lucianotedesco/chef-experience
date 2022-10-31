import { MealDto } from "../models/dtos/meal-dto"
import { MealRateDto } from "../models/dtos/meal-rate-dto";

export class MealsRatesFactory{
    static getMealRate(customer_id: number, meal_id: number, rate: number){
        const dto = new MealRateDto();
        dto.customer_id = customer_id,
        dto.meal_id= meal_id,
        dto.rate = rate
        return dto;
    }
}
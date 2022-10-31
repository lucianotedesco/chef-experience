import { MealDto } from "../models/dtos/meal-dto"

export class MealsFactory{
    static getMeal(description: string, chef_name: string, rate_avg: number){
        const dto = new MealDto();
        dto.Chef_name = chef_name,
        dto.Meal = description,
        dto.Rating = rate_avg
        return dto;
    }
}
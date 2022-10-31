import { dto, include } from "dto-mapper";

@dto()
export class MealRateDto {
  @include()
  meal_id: number;

  @include()
  rate: number;
}

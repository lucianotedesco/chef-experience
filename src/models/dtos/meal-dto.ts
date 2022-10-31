import { dto, include, mapTo } from "dto-mapper";

@dto()
export class MealDto {
  @include()
  @mapTo('chef.name')
  Chef_name: number;

  @include()
  @mapTo('description')
  Meal: string;

  @include()
  @mapTo('rate_avg')
  Rating: number;
}

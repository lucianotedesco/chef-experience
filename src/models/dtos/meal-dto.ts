import { dto, include, mapTo } from "dto-mapper";

@dto()
export class MealDto {
  @include()
  description: string;

  @include()
  @mapTo('chef.name')
  chef_name: number;

  @include()
  rate_avg: number;
}

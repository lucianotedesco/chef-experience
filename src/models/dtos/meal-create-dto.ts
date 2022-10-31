import { dto, include } from "dto-mapper";

@dto()
export class MealCreateDto {
  @include()
  description: string;

  @include()
  chef_id: number;
}

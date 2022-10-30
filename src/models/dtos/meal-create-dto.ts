import { dto, include } from "dto-mapper";

@dto()
export class MealCreateDto {
  @include()
  name: string;

  @include()
  chef_id: number;
}

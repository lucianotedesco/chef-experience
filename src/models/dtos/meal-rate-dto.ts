import { dto, include } from "dto-mapper";

@dto()
export class MealRateDto {
  @include()
  meal_id: number;

  @include()
  customer_id: number;

  @include()
  rate: number;
}

// import { DtoError } from "../error-types";

// export class MealRateDto {
//   constructor(
//     public readonly meal_id: number,
//     public readonly customer_id: number,
//     public readonly rate: number
//   ) {}

//   static from(body) {
//     this.validate(body);
//     return new MealRateDto(body.meal_id, body.customer_id, body.rate);
//   }

//   private static validate(body) {
//     if (!body.meal_id || !body.customer_id || !body.rate) {
//       throw new DtoError("missing properties");
//     }
//   }
// }

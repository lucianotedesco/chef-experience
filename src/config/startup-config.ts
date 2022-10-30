import { buildMapper, IMapper } from "dto-mapper";
import { MealRateDto } from "../models/dtos/meal-rate-dto";
import { sequelize } from "./database-config";

export class StartUp {
  static dtoMapper: IMapper<MealRateDto, unknown>;

  static setup() {
    sequelize
      .authenticate()
      .then(() => {
        console.log("Sequelize: Connected successfully");
      })
      .catch((e: Error) => {
        console.log(e.message);
      });

    this.dtoMapper = buildMapper(MealRateDto);

    const syncSequelize = true;
    if (syncSequelize) {
      sequelize
        .sync()
        .then(() => {
          console.log("Sequelize: Database sync completed");
        })
        .catch((e: Error) => {
          console.log(e.message);
        });
    }
  }
}

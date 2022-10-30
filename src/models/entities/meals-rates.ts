import { DataType } from "sequelize-typescript";
import { sequelize } from "../../config/database-config";
import { Customers } from "./customers";
import { Meals } from "./meals";

export const MealsRates = sequelize.define(
  "meals_rate",
  {
    rate: {
      type: DataType.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

MealsRates.belongsTo(Meals, {
  foreignKey: "meal_id",
  targetKey: "id",
});

MealsRates.belongsTo(Customers, {
  foreignKey: "customer_id",
  targetKey: "id",
});

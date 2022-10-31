import { DataType } from "sequelize-typescript";
import { sequelize } from "../../config/database-config";
import { Chefs } from "./chefs";

export const Meals = sequelize.define(
  "meals",
  {
    description: {
      type: DataType.TEXT,
    },
    rate_avg: {
      type: DataType.INTEGER,
      defaultValue: 0,
    }
  },
  {
    timestamps: false,
  }
);

Meals.belongsTo(Chefs, {
  foreignKey: "chef_id",
  targetKey: "id",
});
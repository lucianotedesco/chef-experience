import { DataType } from "sequelize-typescript";
import { sequelize } from "../../config/database-config";
import { Chefs } from "./chefs";

export const Meals = sequelize.define(
  "meals",
  {
    name: {
      type: DataType.TEXT,
    },
    rate_avg: {
      type: DataType.INTEGER,
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
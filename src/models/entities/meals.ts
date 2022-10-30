import { DataType } from "sequelize-typescript";
import { sequelize } from "../../config/database-config";
import { Chefs } from "./chef";

export const Meals = sequelize.define(
  "meals",
  {
    name: {
      type: DataType.TEXT,
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
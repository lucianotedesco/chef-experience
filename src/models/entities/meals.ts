import { DataType } from "sequelize-typescript";
import { sequelize } from "../../config/database-config";

export const Meals = sequelize.define(
  "meals",
  {
    name: {
      type: DataType.TEXT,
    },
    chef_id: {
      type: DataType.TEXT,
    },
  },
  {
    timestamps: false,
  }
);

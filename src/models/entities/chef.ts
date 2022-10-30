import { DataType } from "sequelize-typescript";
import { sequelize } from "../../config/database-config";

export const Chef = sequelize.define(
  "chefs",
  {
    name: {
      type: DataType.TEXT,
    },
  },
  {
    timestamps: false,
  }
);

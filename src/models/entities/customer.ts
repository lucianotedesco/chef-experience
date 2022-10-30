import { DataType } from "sequelize-typescript";
import { sequelize } from "../../config/database-config";

export const Customers = sequelize.define(
  "customers",
  {
    name: {
      type: DataType.TEXT,
    },
  },
  {
    timestamps: false,
  }
);

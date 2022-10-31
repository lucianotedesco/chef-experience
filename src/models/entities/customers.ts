import { DataType } from "sequelize-typescript";
import { sequelize } from "../../config/database-config";
import { Users } from "./users";

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

Customers.belongsTo(Users, {
  foreignKey: "user_id",
  targetKey: "id",
});   
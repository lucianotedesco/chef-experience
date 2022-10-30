import { DataType } from "sequelize-typescript";
import { sequelize } from "../../config/database-config";
import { Users } from "./users";

export const Chefs = sequelize.define(
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

Chefs.belongsTo(Users, {
  foreignKey: "user_id",
  targetKey: "id",
});

import { DataType } from "sequelize-typescript";
import { sequelize } from "../../config/database-config";

export const Users = sequelize.define(
  "users",
  {
    username: {
      type: DataType.TEXT,
    },
    password: {
      type: DataType.TEXT,
    },
    user_role: {
      type: DataType.ENUM({
        values: ['chef', 'customer']
      })
    }
  },
  {
    timestamps: false,
  }
);

import { DataType } from 'sequelize-typescript'
import { sequelize } from '../../config/database-config';

export const Meals = sequelize.define("meals",
  {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
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
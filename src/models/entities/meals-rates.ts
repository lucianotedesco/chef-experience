import { DataType } from 'sequelize-typescript'
import { sequelize } from '../../config/database-config';

export const MealsRate = sequelize.define("meals_rate",
  {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
    },
    meal_id: {
      type: DataType.TEXT,
    },
    customer_id: {
        type: DataType.TEXT,
    },
    rate: {
        type: DataType.INTEGER
    }
  },
  {
    timestamps: false,
  }
);
import { DataType } from 'sequelize-typescript'
import { sequelize } from '../../config/database-config';

export const MealsRates = sequelize.define("meals_rate",
  {
    meal_id: {
      type: DataType.INTEGER,
    },
    customer_id: {
        type: DataType.INTEGER,
    },
    rate: {
        type: DataType.INTEGER
    }
  },
  {
    timestamps: false,
  }
);
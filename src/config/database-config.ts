import { DataType, Sequelize } from 'sequelize-typescript'

export const sequelize = new Sequelize('chef_experience_db', 'postgres', 'passw0rd', {
    host: 'localhost',
    dialect: 'postgres',
    models: [__dirname + '/models']
});

export const Chef = sequelize.define("chefs",
  {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataType.TEXT,
    }
  },
  {
    timestamps: false,
  }
);

export const Customer = sequelize.define("customers",
  {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataType.TEXT,
    }
  },
  {
    timestamps: false,
  }
);

export const Meals = sequelize.define("meals",
  {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
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

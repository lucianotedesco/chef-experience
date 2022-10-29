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
      primaryKey: true
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



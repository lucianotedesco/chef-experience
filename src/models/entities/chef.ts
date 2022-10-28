import { Table, Model, DataType, PrimaryKey } from "sequelize-typescript";
import { sequelize } from "../../config/database-config";

export const Chef = sequelize.define("chefs",
  {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataType.TEXT,
    },
  },
  {
    timestamps: false,
  }
);

// @Table({
//   timestamps: false,
//   tableName: "chefs",
// })

// export class Chef extends Model {
//   public id: number;
//   public name: string;
// }

// Chef.init(
//   {
//     id: {
//       type: DataType.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: DataType.STRING,
//     },
//   },
//   {
//     sequelize: sequelize,
//   }
// );

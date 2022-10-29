import { sequelize } from "../config/database-config";

const startup = () => {
  
  sequelize
    .authenticate()
    .then(() => {
      console.log("Sequelize: Connected successfully");
    })
    .catch((e: Error) => {
      console.log(e.message);
    });

  // sequelize
  //   .sync()
  //   .then(() => {
  //     console.log("Sequelize: Database sync completed");
  //   })
  //   .catch((e: Error) => {
  //     console.log(e.message);
  //   });
};

export default startup;

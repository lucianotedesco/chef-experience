import { sequelize } from "./database-config";

export default class Config {

  //harcoded here for practical purpose
  public static token = "TKN";

  static startup() {
    sequelize
      .authenticate()
      .then(() => {
        console.log("Sequelize: Connected successfully");
      })
      .catch((e: Error) => {
        console.log(e.message);
      });

    const syncSequelize = false;
    if (syncSequelize) {
      sequelize
        .sync({force: true})
        .then(() => {
          console.log("Sequelize: Database sync completed");
        })
        .catch((e: Error) => {
          console.log(e.message);
        });
    }
  }
}

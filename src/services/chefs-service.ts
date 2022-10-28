import { Chef } from "../config/database-config";

export class ChefService {
  static getChefById = async (id: string) => {
    try {
      const chef = await Chef.findByPk(id);
      if (chef == null)
        throw new Error(`Couldn't find a chef with the specified id ${id}:`);

      return chef;
    } catch (err) {
      throw new Error(
        `An unexpected error occurred while trying to get a Chef ${err.message}`
      );
    }
  };

  static getAllChefs = async () => {
    try {
      const chef = await Chef.findAll();
      if (chef == null) 
        throw new Error(`Couldn't find any chefs`);

      return chef;
    } catch (err) {
      throw new Error(
        `An unexpected error occurred while trying to get all Chefs ${err}`
      );
    }
  };

  static createChef = async (reqBody) => {
    try {
      const chefs = await Chef.create({ reqBody });

      return chefs;
    } catch (err) {
      throw new Error(
        `An unexpected error occurred while trying to create a Chef: ${err}`
      );
    }
  };
}

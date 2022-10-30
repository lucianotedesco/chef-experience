import { Op } from "sequelize";
import { MealCreateDto } from "../models/dtos/meal-create-dto";
import { Meals } from "../models/entities/meals";
import { MealsRates } from "../models/entities/meals-rates";

export class MealsRepository {
  async findById(id: number) {
    return Meals.findByPk(id);
  }

  async findAll() {
    return Meals.findAll();
  }

  async findOne(reqBody) {
    return MealsRates.findOne({
      where: {
        [Op.and]: [
          { meal_id: reqBody.meal_id },
          { customer_id: reqBody.customer_id },
        ],
      },
    });
  }

  async create(dto: MealCreateDto) {
    return Meals.create({
      name: dto.name,
      chef_id: dto.chef_id
    });
  }
}

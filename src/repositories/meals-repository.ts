import { MealCreateDto } from "../models/dtos/meal-create-dto";
import { Chefs } from "../models/entities/chefs";
import { Meals } from "../models/entities/meals";

export class MealsRepository {
  async findById(id: number) {
    return Meals.findByPk(id);
  }

  async findByChefId(chef_id: number) {
    return Meals.findAll({
      include: [
        {
          model: Chefs,
          attributes: ["name"],
        },
      ],
      where: { chef_id: chef_id },
      raw: true,
    });
  }

  async findAll() {
    return Meals.findAll({
      include: [
        {
          model: Chefs,
          attributes: ["name"],
        },
      ],
      raw: true,
    });
  }

  // async findByChefId(chef_id: number) {
  //   return MealsRates.findAll({
  //     include: [{
  //       model: Meals,
  //       where: {chef_id: chef_id}
  //      }]
  //     })
  // }

  async create(dto: MealCreateDto) {
    return Meals.create({
      description: dto.description,
      chef_id: dto.chef_id,
    });
  }

  async saveAvg(mealId: number, avg: number) {
    return Meals.update({ rate_avg: avg }, { where: { id: mealId } });
  }
}

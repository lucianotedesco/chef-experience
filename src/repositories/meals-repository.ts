import { MealCreateDto } from "../models/dtos/meal-create-dto";
import { Meals } from "../models/entities/meals";

export class MealsRepository {
  async findById(id: number) {
    return Meals.findByPk(id);
  }

  async findByChefId(chef_id: number) {
    return Meals.findAll({ where: { chef_id: chef_id } });
  }

  async findAll() {
    return Meals.findAll();
  }

  async create(dto: MealCreateDto) {
    return Meals.create({
      name: dto.name,
      chef_id: dto.chef_id,
    });
  }

  async saveAvg(mealId: number, avg: number) {
    return Meals.update({ rate_avg: avg }, { where: { id: mealId } });
  }
}

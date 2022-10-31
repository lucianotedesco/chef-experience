import { DtoMappers } from "../config/dto-mapper-config";
import { MealCreateDto } from "../models/dtos/meal-create-dto";
import { Chefs } from "../models/entities/chefs";
import { Meals } from "../models/entities/meals";

export class MealsRepository {
  async findById(id: number) {
    const meal = await Meals.findByPk(id);

    return DtoMappers.MealDtoMapper.serialize(meal);
  }

  async findByChefId(chef_id: number) {
    const meals = await Meals.findAll({
      include: [
        {
          model: Chefs,
          attributes: ["name"],
        },
      ],
      where: { chef_id: chef_id },
      raw: true,
    });

    return meals.map(m => DtoMappers.MealDtoMapper.serialize(m));
  }

  async findAll() {
    const meals = await Meals.findAll({
      include: [
        {
          model: Chefs,
          attributes: ["name"],
        },
      ],
      raw: true,
    });

    return meals.map(m => DtoMappers.MealDtoMapper.serialize(m));
  }

  async create(dto: MealCreateDto, chef_id: number) {
    return Meals.create({
      description: dto.description,
      chef_id: chef_id,
    });
  }

  async saveAvg(mealId: number, avg: number) {
    return Meals.update({ rate_avg: Math.round(avg) }, { where: { id: mealId } });
  }
}

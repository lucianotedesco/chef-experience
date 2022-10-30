import { Op } from "sequelize";
import { MealCreateDto } from "../models/dtos/meal-create-dto";
import { Chefs } from "../models/entities/chef";

export class ChefsRepository {
  async findById(id: number) {
    return Chefs.findByPk(id);
  }

  async create(dto: MealCreateDto) {
    return Chefs.create({
      name: dto.name,
      chef_id: dto.chef_id
    });
  }
}

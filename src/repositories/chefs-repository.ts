import { MealCreateDto } from "../models/dtos/meal-create-dto";
import { UserRegisterDto } from "../models/dtos/user-register-dto";
import { Chefs } from "../models/entities/chefs";

export class ChefsRepository {
  async findById(id: number) {
    return Chefs.findByPk(id);
  }

  async create(dto: UserRegisterDto, userId: number) {
    return Chefs.create({
      name: dto.username,
      user_id: userId,
    });
  }
}

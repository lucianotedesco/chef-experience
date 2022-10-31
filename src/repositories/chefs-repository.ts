import { MealCreateDto } from "../models/dtos/meal-create-dto";
import { UserRegisterDto } from "../models/dtos/user-register-dto";
import { Chefs } from "../models/entities/chefs";

export class ChefsRepository {
  async findByUserId(userId: number) {
    return Chefs.findOne({
      where: { user_id: userId },
    });
  }

  async create(dto: UserRegisterDto, userId: number) {
    return Chefs.create({
      name: dto.username,
      user_id: userId,
    });
  }
}

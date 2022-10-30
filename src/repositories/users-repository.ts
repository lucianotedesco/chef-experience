import { MealCreateDto } from "../models/dtos/meal-create-dto";
import { UserRegisterDto } from "../models/dtos/user-register-dto";
import { Users } from "../models/entities/users";

export class UsersRepository {
  async findById(id: number) {
    return Users.findByPk(id);
  }

  async create(dto: UserRegisterDto, hashedPassword: string) {
    return Users.create({
      username: dto.username,
      password: hashedPassword,
      user_role: dto.role
    });
  }

  async findOneByUsername(username: string) {
    return Users.findOne({
      where: { username: username },
    });
  }
}

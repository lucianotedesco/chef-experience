import { DtoMappers } from "../config/dto-mapper-config";
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
      user_role: dto.user_role
    });
  }

  async findOneByUsername(username: string) {
    const user = await Users.findOne({
      where: { username: username },
    });

    return DtoMappers.userRegisterDtoMapper.serialize(user);
  }
}

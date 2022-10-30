import { hash } from "bcrypt";
import { UserRegisterDto } from "../models/dtos/user-register-dto";
import { BusinessError } from "../models/error-types";
import { UsersRepository } from "../repositories/users-repository";

export class AuthService {
  constructor(private readonly _userRepository: UsersRepository) {}

  async register(dto: UserRegisterDto) {
    const userExists = await this._userRepository.findOneByUsername(dto.username);
    if (userExists)
      "An user with that username already exists"

    const hashedPassword = await hash(dto.password, 10);
    return await this._userRepository.create(dto, hashedPassword);
  }
}

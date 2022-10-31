import { compare, hash } from "bcrypt";
import Config from "../config/startup-config";
import { UserLoginDto } from "../models/dtos/user-login-dto";
import { UserRegisterDto } from "../models/dtos/user-register-dto";
import { BusinessError } from "../models/error-types";
import { UsersRepository } from "../repositories/users-repository";
import { sign } from 'jsonwebtoken'

export class AuthService {
  constructor(private readonly _userRepository: UsersRepository) {}

  async register(dto: UserRegisterDto) {
    const userExists = await this._userRepository.findOneByUsername(dto.username);
    if (userExists)
      throw new BusinessError("An user with that username already exists")

    const hashedPassword = await hash(dto.password, 10);
    return await this._userRepository.create(dto, hashedPassword);
  }

  async login(dto: UserLoginDto) {
    const existingUser = await this._userRepository.findOneByUsername(dto.username);

    if(!existingUser)
      throw new BusinessError("Invalid or non-existent user");

    const password_valid = await compare(dto.password, existingUser.password);
    if(!password_valid)
      throw new BusinessError("Incorrect password")

    return sign({ "id" :dto.username ,"role" : existingUser.user_role },Config.token);
  }
}

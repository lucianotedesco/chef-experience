import { compare, hash } from "bcrypt";
import Config from "../config/startup-config";
import { UserLoginDto } from "../models/dtos/user-login-dto";
import { UserRegisterDto } from "../models/dtos/user-register-dto";
import { BusinessError } from "../models/error-types";
import { UsersRepository } from "../repositories/users-repository";
import { sign } from "jsonwebtoken";
import { ChefsRepository } from "../repositories/chefs-repository";
import { CustomersRepository } from "../repositories/customers-repository";

export class AuthService {
  constructor(
    private readonly _userRepository: UsersRepository,
    private readonly _chefsRepository: ChefsRepository,
    private readonly _customersRepository: CustomersRepository
  ) {}

  async register(dto: UserRegisterDto) {
    const userExists = await this._userRepository.findOneByUsername(
      dto.username
    );
    if (userExists)
      throw new BusinessError("An user with that username already exists");

    const hashedPassword = await hash(dto.password, 10);
    const createdUser = await this._userRepository.create(dto, hashedPassword);

    if (dto.user_role == "chef")
      await this._chefsRepository.create(dto, createdUser["id"]);
    else 
      await this._customersRepository.create(dto, createdUser["id"]);
  }

  async login(dto: UserLoginDto) {
    const existingUser = await this._userRepository.findOneByUsername(
      dto.username
    );

    if (!existingUser) throw new BusinessError("Invalid or non-existent user");

    const password_valid = await compare(dto.password, existingUser["password"]);
    if (!password_valid) throw new BusinessError("Incorrect password");

    return sign(
      { id: existingUser["id"], user_name: dto.username , user_role: existingUser["user_role"] },
      Config.token
    );
  }
}

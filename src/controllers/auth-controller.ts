import { RequestHandler } from "express";
import { DtoMappers } from "../config/dto-mapper-config";
import { UserRegisterDto } from "../models/dtos/user-register-dto";
import { AuthService } from "../services/auth-service";

export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  register: RequestHandler = async (req, res, next) => {
    try {
      const userRegisterDto: UserRegisterDto =
        DtoMappers.userRegisterDtoMapper.deserialize({ ...req.body });

      await this._authService.register(userRegisterDto);
      return res.status(200).json({ message: "User registered successfully" });
    } catch (err) {
      next(err);
    }
  };
}

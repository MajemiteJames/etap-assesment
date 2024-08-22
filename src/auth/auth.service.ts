/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from '../user/entities/user.entity';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LoginUserDto } from '../user/dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(loginUserDto: LoginUserDto): Promise<any> {
    const user = await this.usersService.findOneByEmail(loginUserDto.email);
    if (user && (await bcrypt.compare(loginUserDto.password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signup(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.usersService.findOneByEmail(createUserDto.email);
    if (user) {
      throw new ConflictException('Username already exists');
    }
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const userToSave = {
      ...createUserDto,
      password: hashedPassword,
    };
    return this.usersService.createUser(userToSave);
  }
}

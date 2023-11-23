import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';

interface User {
  USR_NAME: string;
  USR_SENHA: string;
  USR_EMAIL: string;
  USR_NOME_COMPLETO: string;
  USR_STAFF: number;
}

@Controller('exemplo')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  @Post('/new')
  async create(@Body() user: User) {
    return this.userService.createUser(user);
  }
}

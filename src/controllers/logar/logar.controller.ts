import { Body, Controller, Get } from '@nestjs/common';
import { LogarService } from 'src/services/logar/logar.service';

interface User {
  USR_SENHA: string;
  USR_EMAIL: string;
}

@Controller('user')
export class LogarController {
  constructor(private readonly logarService: LogarService) {}

  @Get()
  getToken(@Body() user: User) {
    return this.logarService.loginUser(user);
  }
}

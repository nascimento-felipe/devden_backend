import { Body, Controller, Post } from '@nestjs/common';
import { createHmac } from 'node:crypto';
import { CriarUsuarioService } from 'src/services/criar-usuario/criar-usuario.service';

interface User {
  USR_NAME: string;
  USR_SENHA: string;
  USR_EMAIL: string;
  USR_NOME_COMPLETO: string;
  USR_STAFF: number;
}

const sha256 = createHmac('sha256', 'banana');

@Controller('user')
export class CriarUsuarioController {
  constructor(private readonly createUserService: CriarUsuarioService) {}

  @Post('/new')
  async criarUsuario(@Body() user: User) {
    user.USR_SENHA = sha256.update(user.USR_SENHA).digest('hex');

    return this.createUserService.CriarUsuario(user);
  }
}

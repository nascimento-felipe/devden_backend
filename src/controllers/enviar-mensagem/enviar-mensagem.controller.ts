import { Body, Controller, Post } from '@nestjs/common';
import { EnviarMensagemService } from 'src/services/enviar-mensagem/enviar-mensagem.service';

interface Data {
  MEN_MENSAGEM: string;
  FK_TOPICO_TOP_ID: number;
  FK_USUARIOS_USR_ID: number;
}

@Controller('message')
export class EnviarMensagemController {
  constructor(private readonly enviarService: EnviarMensagemService) {}

  @Post('/new')
  async enviarMensagem(@Body() data: Data) {
    return await this.enviarService.EnviarMensagem(data);
  }
}

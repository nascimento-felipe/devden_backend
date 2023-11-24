import { Body, Controller, Get } from '@nestjs/common';
import { BuscarMensagemService } from 'src/services/buscar-mensagem/buscar-mensagem.service';

interface Data {
  FK_TOPICO_TOP_ID: number;
  MEN_MENSAGEM: string;
}

@Controller('messages')
export class BuscarMensagemController {
  constructor(private readonly buscarMensagemService: BuscarMensagemService) {}

  @Get()
  async getByString(@Body() data: Data) {
    return await this.buscarMensagemService.getMessageByString(data);
  }
}

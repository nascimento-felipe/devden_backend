import { Body, Controller, Get, Post } from '@nestjs/common';
import { GerenciarTicketsService } from 'src/services/gerenciar-tickets/gerenciar-tickets.service';

interface Data {
  TIC_MENSAGEM: string;
  FK_USUARIOS_USR_ID: number;
}

@Controller('tickets')
export class GerenciarTicketsController {
  constructor(private readonly ticketsService: GerenciarTicketsService) {}

  @Post('/new')
  async createNew(@Body() data: Data) {
    return await this.ticketsService.createOne(data);
  }

  @Get()
  async getAll() {
    return await this.ticketsService.getAll();
  }
}

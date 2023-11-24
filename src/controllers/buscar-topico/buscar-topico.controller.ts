import { Body, Controller, Get } from '@nestjs/common';
import { BuscarTopicoService } from 'src/services/buscar-topico/buscar-topico.service';

interface Data {
  titulo: string;
}

@Controller('topico')
export class BuscarTopicoController {
  constructor(private readonly service: BuscarTopicoService) {}

  @Get()
  async getByTitulo(@Body() data: Data) {
    return await this.service.getTopico(data.titulo);
  }
}

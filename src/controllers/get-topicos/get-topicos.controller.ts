import { Controller, Get } from '@nestjs/common';
import { GetTopicosService } from 'src/services/get-topicos/get-topicos.service';

@Controller('topicos')
export class GetTopicosController {
  constructor(private readonly getTopicosService: GetTopicosService) {}

  @Get()
  async getAll() {
    return await this.getTopicosService.getAllTopicos();
  }
}

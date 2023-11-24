import { Body, Controller, Post } from '@nestjs/common';
import { CriarPostService } from 'src/services/criar-post/criar-post.service';

interface Data {
  POS_MENSAGEM: string;
  POS_URL_FOTO: string;
  FK_USUARIOS_USR_ID: number;
}

@Controller('post')
export class CriarPostController {
  constructor(private readonly criarPostService: CriarPostService) {}

  @Post()
  async criarPost(@Body() data: Data) {
    return await this.criarPostService.criarPost(data);
  }
}

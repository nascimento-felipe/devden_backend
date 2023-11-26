import { Body, Controller, Delete, Post, Put } from '@nestjs/common';
import { GerenciarTagsService } from 'src/services/gerenciar-tags/gerenciar-tags.service';

interface CreateData {
  TAG_NOME: string;
  FK_USUARIOS_USR_ID: number;
}

interface DeleteData {
  TAG_ID: number;
}

interface AlterData {
  TAG_ID: number;
  TAG_NOME: string;
  FK_USUARIOS_USR_ID: number;
}

@Controller('tags')
export class GerenciarTagsController {
  constructor(private readonly gerenciarTags: GerenciarTagsService) {}

  @Post('/new')
  async criarNovo(@Body() data: CreateData) {
    return await this.gerenciarTags.criarTag(data);
  }

  @Put('/update')
  async mudarTag(@Body() data: AlterData) {
    return await this.gerenciarTags.alterarTag(data);
  }

  @Delete('/delete')
  async excluirTag(@Body() data: DeleteData) {
    return await this.gerenciarTags.removerTag(data);
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

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

@Injectable()
export class GerenciarTagsService {
  constructor(private prisma: PrismaService) {}

  async criarTag(data: CreateData) {
    try {
      console.log(data);
      const tag = await this.prisma.tags.create({
        data: {
          TAG_NOME: data.TAG_NOME,
          FK_USUARIOS_USR_ID: data.FK_USUARIOS_USR_ID,
        },
      });

      return tag;
    } catch (error) {
      console.error(error);
    }
  }

  async removerTag(data: DeleteData) {
    try {
      return await this.prisma.tags.delete({
        where: {
          TAG_ID: data.TAG_ID,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  async alterarTag(data: AlterData) {
    try {
      return await this.prisma.tags.update({
        data: {
          FK_USUARIOS_USR_ID: data.FK_USUARIOS_USR_ID,
          TAG_NOME: data.TAG_NOME,
        },
        where: {
          TAG_ID: data.TAG_ID,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }
}

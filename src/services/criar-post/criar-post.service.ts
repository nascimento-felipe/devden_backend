import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

interface Data {
  POS_MENSAGEM: string;
  POS_URL_FOTO: string;
  FK_USUARIOS_USR_ID: number;
}

@Injectable()
export class CriarPostService {
  constructor(private prisma: PrismaService) {}

  async criarPost(data: Data) {
    try {
      return await this.prisma.posts.create({
        data: {
          POS_MENSAGEM: data.POS_MENSAGEM,
          FK_USUARIOS_USR_ID: data.FK_USUARIOS_USR_ID,
          POS_URL_FOTO: data.POS_URL_FOTO,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BuscarTopicoService {
  constructor(private prisma: PrismaService) {}

  async getTopico(titulo: string) {
    try {
      return await this.prisma.topicos.findFirst({
        where: {
          TOP_TITULO: titulo,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }
}

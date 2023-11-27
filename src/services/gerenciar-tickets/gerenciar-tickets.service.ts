import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

interface Data {
  TIC_MENSAGEM: string;
  FK_USUARIOS_USR_ID: number;
}

@Injectable()
export class GerenciarTicketsService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.tickets.findMany();
  }

  async createOne(data: Data) {
    return await this.prisma.tickets.create({
      data: {
        TIC_MENSAGEM: data.TIC_MENSAGEM,
        FK_USUARIOS_USR_ID: data.FK_USUARIOS_USR_ID,
      },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

interface Data {
  FK_TOPICO_TOP_ID: number;
  MEN_MENSAGEM: string;
}

@Injectable()
export class BuscarMensagemService {
  constructor(private prismaService: PrismaService) {}

  async getMessageByString(data: Data) {
    const mensagens = await this.prismaService.mensagens.findMany({
      where: {
        FK_TOPICO_TOP_ID: data.FK_TOPICO_TOP_ID,
        MEN_MENSAGEM: data.MEN_MENSAGEM,
      },
    });

    let usuarios = [];

    mensagens.forEach(async (mensagem) => {
      await this.prismaService.usuarios
        .findFirst({
          where: {
            USR_ID: mensagem.FK_USUARIOS_USR_ID,
          },
        })
        .then((response) => {
          console.log(response);
          usuarios.push(response);
        });
    });

    return { mensagens, usuarios };
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

interface Data {
  MEN_MENSAGEM: string;
  FK_TOPICO_TOP_ID: number;
  FK_USUARIOS_USR_ID: number;
}

@Injectable()
export class EnviarMensagemService {
  constructor(private prisma: PrismaService) {}

  async EnviarMensagem(data: Data) {
    try {
      const mensagem = await this.prisma.mensagens.create({
        data: {
          MEN_MENSAGEM: data.MEN_MENSAGEM,
          FK_TOPICO_TOP_ID: data.FK_TOPICO_TOP_ID,
          FK_USUARIOS_USR_ID: data.FK_USUARIOS_USR_ID,
        },
      });

      return mensagem;
    } catch (error) {
      console.error(error);
    }
  }
}

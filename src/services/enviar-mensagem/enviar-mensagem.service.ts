import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EnviarMensagemService {
  constructor(private prisma: PrismaService) {}

  async EnviarMensagem(data) {}
}

import { Injectable } from '@nestjs/common';
import { createHmac } from 'crypto';
import { PrismaService } from 'src/prisma.service';

interface user {
  USR_EMAIL: string;
  USR_SENHA: string;
}

const sha256 = createHmac('sha256', 'banana');

@Injectable()
export class LogarService {
  constructor(private prisma: PrismaService) {}

  async loginUser(data: user) {
    const senhaHashed = sha256.update(data.USR_SENHA).digest('hex');

    return await this.prisma.usuarios.findFirst({
      where: {
        USR_EMAIL: data.USR_EMAIL,
        USR_SENHA: senhaHashed,
      },
    });
  }
}

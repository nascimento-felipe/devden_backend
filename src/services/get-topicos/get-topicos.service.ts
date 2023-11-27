import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GetTopicosService {
  constructor(private prisma: PrismaService) {}

  async getAllTopicos() {
    return await this.prisma.topicos.findMany();
  }
}

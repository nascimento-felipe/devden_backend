import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: Prisma.UsuariosCreateInput) {
    await this.prisma.usuarios.create({
      data,
    });

    if (
      this.prisma.usuarios.findFirst({
        where: {
          USR_NAME: data.USR_NAME,
        },
      })
    ) {
      return 'Deu certo';
    } else {
      return 'Deu errado e não escreveu no banco';
    }
  }

  async getAllUsers() {
    return await this.prisma.usuarios.findMany();
  }
}

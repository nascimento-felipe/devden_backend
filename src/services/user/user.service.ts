import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: Prisma.UsuariosCreateInput) {
    try {
      await this.prisma.usuarios.create({
        data,
      });
    } catch (error) {
      return { error };
    }
  }

  async getAllUsers() {
    return await this.prisma.usuarios.findMany();
  }
}

import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CriarUsuarioService {
  constructor(private prisma: PrismaService) {}

  async CriarUsuario(data: Prisma.UsuariosCreateInput) {
    try {
      return await this.prisma.usuarios.create({
        data,
      });
    } catch (error) {
      return { error };
    }
  }
}

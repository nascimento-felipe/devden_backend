import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

type Topico = {
    TOP_TITULO:string,
    TOP_MENSAGEM:string,
    FK_USUARIOS_USR_ID:number
};

@Injectable()
export class CriarTopicoService {
    constructor(private prisma: PrismaService) { }

    async CriarTopico(data:Topico){
        try {
            return await this.prisma.topicos.create({
              data,
            });
          } catch (error) {
            return { error };
          }
    }
}

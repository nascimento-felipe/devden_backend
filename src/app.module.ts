import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user/user.controller';
import { PrismaService } from './prisma.service';
import { UserService } from './services/user/user.service';
import { CriarUsuarioService } from './services/criar-usuario/criar-usuario.service';
import { CriarUsuarioController } from './controllers/criar-usuario/criar-usuario.controller';
import { LogarController } from './controllers/logar/logar.controller';
import { LogarService } from './services/logar/logar.service';
import { CriarTopicoService } from './services/criar-topico/criar-topico.service';
import { CriarTopicoController } from './controllers/criar-topico/criar-topico.controller';
import { EnviarMensagemService } from './services/enviar-mensagem/enviar-mensagem.service';
import { EnviarMensagemController } from './controllers/enviar-mensagem/enviar-mensagem.controller';
import { BuscarMensagemService } from './services/buscar-mensagem/buscar-mensagem.service';
import { BuscarMensagemController } from './controllers/buscar-mensagem/buscar-mensagem.controller';
import { CriarPostService } from './services/criar-post/criar-post.service';
import { CriarPostController } from './controllers/criar-post/criar-post.controller';
import { BuscarTopicoService } from './services/buscar-topico/buscar-topico.service';
import { BuscarTopicoController } from './controllers/buscar-topico/buscar-topico.controller';
import { GerenciarTagsService } from './services/gerenciar-tags/gerenciar-tags.service';
import { GerenciarTagsController } from './controllers/gerenciar-tags/gerenciar-tags.controller';
import { GetTopicosService } from './services/get-topicos/get-topicos.service';
import { GetTopicosController } from './controllers/get-topicos/get-topicos.controller';
import { GerenciarTicketsService } from './services/gerenciar-tickets/gerenciar-tickets.service';
import { GerenciarTicketsController } from './controllers/gerenciar-tickets/gerenciar-tickets.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, CriarUsuarioController, LogarController, CriarTopicoController, EnviarMensagemController, BuscarMensagemController, CriarPostController, BuscarTopicoController, GerenciarTagsController, GetTopicosController, GerenciarTicketsController],
  providers: [AppService, UserService, PrismaService, CriarUsuarioService, LogarService, CriarTopicoService, EnviarMensagemService, BuscarMensagemService, CriarPostService, BuscarTopicoService, GerenciarTagsService, GetTopicosService, GerenciarTicketsService],
})
export class AppModule {}

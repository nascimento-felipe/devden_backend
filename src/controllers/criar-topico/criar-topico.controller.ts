import { Body, Controller, Post } from '@nestjs/common';
import { CriarTopicoService } from 'src/services/criar-topico/criar-topico.service';
type Topico = {
    TOP_TITULO:string,
    TOP_MENSAGEM:string,
    FK_USUARIOS_USR_ID:number
};
@Controller('topico')
export class CriarTopicoController {
    constructor(private readonly createUserService: CriarTopicoService) {}
    @Post('/new')
     criarTopico(@Body() data:Topico){
        return this.createUserService.CriarTopico(data);
    }
}

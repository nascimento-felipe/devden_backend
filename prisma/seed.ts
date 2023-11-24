import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.ticketsTiposDenuncia.deleteMany();
  await prisma.topicosTags.deleteMany();
  await prisma.tipoDenuncia.deleteMany();

  await prisma.mensagens.deleteMany();
  await prisma.posts.deleteMany();
  await prisma.tags.deleteMany();
  await prisma.tickets.deleteMany();
  await prisma.topicos.deleteMany();
  await prisma.usuarios.deleteMany();

  const felipe = await prisma.usuarios.create({
    data: {
      USR_NAME: 'Lama',
      USR_EMAIL: 'felipe@devden.com',
      USR_NOME_COMPLETO: 'Felipe de Andrade',
      USR_SENHA:
        '2304c29366b36f11eb9285fd3fefe8aa57982512a312126fed87da6a25777db3',
      USR_STAFF: 1,
    },
  });

  const filipe = await prisma.usuarios.create({
    data: {
      USR_NAME: 'Muniz',
      USR_EMAIL: 'filipe@devden.com',
      USR_NOME_COMPLETO: 'Filipe Muniz',
      USR_SENHA:
        '2304c29366b36f11eb9285fd3fefe8aa57982512a312126fed87da6a25777db3',
      USR_STAFF: 1,
    },
  });

  const topico = await prisma.topicos.create({
    data: {
      FK_USUARIOS_USR_ID: felipe.USR_ID,
      TOP_MENSAGEM: 'Essa é a mensagem inicial do tópico',
      TOP_TITULO: 'Esse é o título do tópico',
    },
  });

  const post = await prisma.posts.create({
    data: {
      FK_USUARIOS_USR_ID: filipe.USR_ID,
      POS_MENSAGEM: 'Meu nome é muniz',
      POS_URL_FOTO: '',
    },
  });

  await prisma.tags.create({
    data: {
      TAG_NOME: 'Computação gráfica',
      FK_USUARIOS_USR_ID: felipe.USR_ID,
    },
  });

  await prisma.tags.create({
    data: {
      TAG_NOME: 'Computação quântica',
      FK_USUARIOS_USR_ID: filipe.USR_ID,
    },
  });

  await prisma.mensagens.create({
    data: {
      MEN_MENSAGEM: 'Primeira mensagem do topico',
      MEN_DATA: new Date(),
      FK_USUARIOS_USR_ID: filipe.USR_ID,
      FK_TOPICO_TOP_ID: topico.TOP_ID,
    },
  });

  await prisma.tickets.create({
    data: {
      TIC_MENSAGEM: 'Abuso de autoridade',
      FK_USUARIOS_USR_ID: filipe.USR_ID,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });

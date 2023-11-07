## Descrição

Esse repositório tem por objetivo ser o backend do projeto Devden, site de conversa entre desenvolvedores de software.

O backend foi feito usando o framework [Nest.js](https://docs.nestjs.com), prevendo escalabilidade e melhor interação entre os integrantes do projeto para o desenvolvimento fluido do mesmo.

Abaixo estão algumas instruções sobre como criar novas rotas e funcionalidades no projeto, tentando manter a legibilidade e a organização de código.

## Primeiros passos

- Ter [Node](https://nodejs.org/en) instalado, na versão 20 ou +
- Ter algum gerenciador de pacotes Node instalado. Pode ser o npm, que já vem instalado com o próprio Node sem precisar fazer nada a mais. Eu particularmente prefiro [pnpm](https://pnpm.io/installation) por ser mais rápido e eficiente em espaço de disco, mas qualquer um dos dois serve.
  - Obs.: Só perceba que os comandos vão ser com **pnpm** e **npm** vai aparecer logo depois, então toma cuidado na hora de copiar e colar o código
- Por fim, com npm ou pnpm, vamos instalar globalmente a cli do nest pra poder criar depois as funcionalidades no aplicativo. Pra isso, é só rodar:

```bash
$ pnpm add -g @nestjs/cli
```

ou, caso você esteja usando npm:

```bash
$ npm install -g @nestjs/cli
```

## Instalação

Primeiro, você vai precisar clonar o repositório. Pode baixando ele ali em cima, dando um git clone ou ainda usando a [cli do github](https://cli.github.com/) (pra esse último precisa instalar o cli do github antes).

![](./readme_assets/exemploDownload.png)

Quando tiver feito isso, é só

- entrar na pasta onde o projeto foi baixado no seu computador
- entrar nela pelo vs code
- abrir o terminal integrado
- digitar o seguinte comando no terminal

```bash
$ pnpm install
```

ou, se tiver usado npm:

```bash
$ npm install
```

## Rodando o aplicativo

Existem comandos prontos pra rodar o servidor de formas diferentes, mas a maioria das vezes vamos rodar com o _start_ ou _start:dev_. A diferença dos dois é que você precisa desligar e ligar de novo sempre que mudar uma coisa e o outro vai fazer isso automaticamente quando você salvar um arquivo, mas fazem a mesma coisa.

```bash
# desenvolvimento
$ pnpm run start

# watch mode
$ pnpm run start:dev

# modo de produção
$ pnpm run start:prod
```

## Criando novos arquivos

Existem 2 pastas principais no projeto, que vão ser as pastas as quais a gente vai usar mais. As pastas são **services** e **controllers**. Geralmente nós vamos criar um arquivo de Service e outro de Controller pra cada funcionalidade (ou caso de uso) da aplicação. Embaixo eu explico um pouco sobre os dois e as diferenças deles, e depois mostro um exemplo de como vamos fazer na prática.

### Controller

É o arquivo que vai ser responsável por receber e responder a requisição. Nele você vai colocar as rotas e o que elas devem responder, bem como colocar o body caso elas precisarem de um pra criar uma entrada do banco, por exemplo.

Exemplo de controller no nest:

![](./readme_assets/exampleController.png)

Explicações:

- O _@Controller_ em cima da classe serve pra falar pro Nest que esse arquivo é um controller. Todos os controllers precisam ter isso em cima pra funcionarem. Dentro do parênteses a gente costuma colocar a rota que vai ser a base pra todas as outras dentro desse arquivo.
  - Pensando que esse arquivo fosse "UserController" e que seria responsável por fazer todas as coisas de usuário, a gente poderia colocar a base como _@Controller(/users)_ e todas as rotas precisariam começar com isso pra funcionar
- o _@Get_ em cima da função serve pra falar que é uma rota Get. A rota a gente coloca dentro dos parênteses do get, nesse caso da foto a rota é a raiz. Pra acessar esse recurso, então, é só rodar o servidor e entrar em "http://localhost:3000" no seu navegador que já vai estar lá funcionando.

### Service

É a parte que realmente faz as coisas. Na foto do controller dá pra ver que a função _getHello_ está chamando uma outra função que vem de um tal de _appService_. Esse appService é o responsável por dar a resposta necessária, meio que como se o controller fosse o garçom entregando uma comida e o service fosse o cozinheiro que fez a comida.

Exemplo de service no nest:

![](./readme_assets/exampleService.png)

Esse dá pra ver que é só uma classe que tem a função _getHello_ e retorna uma string. Essa string é "Hello, World!".

- Do mesmo jeito que todos os controllers precisam ter o @Controller em cima da classe, os serviços precisam ter o _@Injectable_ em cima pra poderem funcionar legal.

## A parte que vai ser extremamente útil pra gente

Pra não ficar bagunçado o projeto e pra evitar erros de esquecer o @Controller ou @Injectable em cima (acontece com frequência kk), o nest oferece a possibilidade de criar os arquivos pra você!

Direto pelo terminal você consegue criar tanto um service quanto um controller e vou mostrar agora como faz.

Como eu tinha falado lá em cima, a gente tem as pastas _controllers_ e _services_ no projeto. Quando você for criar uma funcionalidade nova, você vai criar um controller E um service pra ela. A ordem não importa, pode criar qualquer um dos dois primeiros que não vai alterar nada. Vou começar mostrando como criar um controller e o nome dele vai ser _user_:

- Abra o terminal e digite:

```bash
$ nest generate controller controllers/user
```

$\textcolor{red}{\text{Precisa ter o nest cli instalado pra isso aqui, então se você não instalou volta lá pra parte de instalação pra fazer isso}}$

e pronto! O controller vai estar criado dentro de controllers/user, junto com um arquivo de testes que a gente não vai usar mas é interessante deixar ele ali por enquanto.

Pra gerar um service é a mesma coisa, só trocar _controller_ por _service_ e _controllers_ por _services_:

```bash
$ nest generate service services/user
```

### Dica

Não precisa digitar o comando todo, eu escrevi ali pra todo mundo saber o que significa o comando e o que ele está fazendo, mas se digitar só a primeira letra de _generate_ e _controller_ ou _service_ ele funciona também.

A pasta e o nome do arquivo depois precisam estar completos e certinhos pra ele poder criar no lugar correto.

Exemplo com service:

```bash
$ nest g s services/user
```

## Dúvidas

É isso, qualquer dúvida pode me chamar no whatsapp ou no discord que eu ajudo a criar os arquivos.

<!-- ## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
``` -->

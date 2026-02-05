# FrontEnd

Este projeto foi gerado usando [Angular CLI](https://github.com/angular/angular-cli) versão 19.1.3.

## Visão Geral

Esta aplicação Angular é um sistema de aluguel de objetos online que permite aos usuários navegar, pesquisar e alugar itens variados como ferramentas, equipamentos de camping, instrumentos musicais, artigos esportivos, eletrônicos e itens para casa. Atualmente usa armazenamento local para persistência de dados e será integrada com uma API REST para comunicação com o backend em futuras atualizações.

## Funcionalidades

- Catálogo de objetos diversificados disponíveis para aluguel
- Sistema de busca e filtros por categoria, cidade, preço e condição
- Processo de anúncio e aluguel de objetos
- Gerenciamento de usuários e autenticação
- Área "Meus Objetos" para gerenciar anúncios pessoais
- Sistema de reservas
- Interface responsiva e intuitiva
- Categorias: Ferramentas, Camping, Instrumentos, Esportes, Eletrônicos, Casa

## Deploy

A aplicação está disponível online em: [dankirent.vercel.app](https://dankirent.vercel.app)

## Servidor de desenvolvimento

Para iniciar um servidor de desenvolvimento local, execute:

```bash
ng serve
```

Após o servidor estar rodando, abra seu navegador e navegue para `http://localhost:4200/`. A aplicação será recarregada automaticamente sempre que você modificar qualquer arquivo fonte.

## Geração de código

O Angular CLI inclui ferramentas poderosas de geração de código. Para gerar um novo componente, execute:

```bash
ng generate component component-name
```

Para uma lista completa de esquemas disponíveis (como `components`, `directives`, ou `pipes`), execute:

```bash
ng generate --help
```

## Build

Para fazer o build do projeto execute:

```bash
ng build
```

Isso irá compilar seu projeto e armazenar os artefatos de build no diretório `dist/`. Por padrão, o build de produção otimiza sua aplicação para performance e velocidade.

## Executando testes unitários

Para executar testes unitários com o test runner [Karma](https://karma-runner.github.io), use o seguinte comando:

```bash
ng test
```

## Executando testes end-to-end

Para testes end-to-end (e2e), execute:

```bash
ng e2e
```

O Angular CLI não vem com um framework de testes end-to-end por padrão. Você pode escolher um que atenda às suas necessidades.

## Recursos Adicionais

Para mais informações sobre o uso do Angular CLI, incluindo referências detalhadas de comandos, visite a página [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
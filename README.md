\# TerraOrbit Mobile



Aplicativo mobile desenvolvido para a Global Solution 2026/1 da FIAP, na disciplina de Mobile Application Development.



\## Sobre o projeto



O TerraOrbit e uma solucao voltada ao monitoramento agricola inteligente. A proposta e apoiar produtores rurais no acompanhamento de suas fazendas, permitindo o cadastro, consulta e gerenciamento de propriedades por meio de um aplicativo mobile integrado a uma API Java.



O projeto foi desenvolvido dentro do tema da Global Solution 2026/1: "O Espaco e a Nova Fronteira". A solucao se conecta ao tema ao explorar o uso de tecnologia, dados e monitoramento para apoiar decisoes no agronegocio, area que pode se beneficiar diretamente de dados climaticos, sensores e infraestrutura espacial.



\## Objetivo do aplicativo



O aplicativo tem como objetivo oferecer uma interface simples para que usuarios possam acessar a plataforma TerraOrbit, autenticar-se e gerenciar suas fazendas cadastradas.



A aplicacao mobile consome a API Java desenvolvida pelo grupo, permitindo que os dados sejam persistidos no backend e no banco de dados, em vez de ficarem apenas localmente no dispositivo.



\## Funcionalidades



\- Cadastro de usuario

\- Login com autenticacao via API Java

\- Logout

\- Protecao de telas internas

\- Listagem das fazendas do usuario autenticado

\- Cadastro de novas fazendas

\- Edicao de fazendas existentes

\- Exclusao de fazendas quando nao possuem vinculos no sistema

\- Feedback visual para carregamento, sucesso e erro

\- Tela Sobre o App com informacoes do projeto e hash do commit

\- Navegacao entre telas com Expo Router



\## Telas do aplicativo



O aplicativo possui as seguintes telas:



\- Tela inicial

\- Login

\- Cadastro

\- Dashboard

\- Minhas Fazendas

\- Cadastro e edicao de Fazenda

\- Sensores

\- Recomendacoes

\- Sobre o App



As telas de Sensores e Recomendacoes foram estruturadas como modulos de expansao da solucao TerraOrbit, pois fazem parte da proposta geral da plataforma.



\## Tecnologias utilizadas



\- React Native

\- Expo

\- Expo Router

\- TypeScript

\- API REST Java Spring Boot

\- Android Emulator

\- EAS Build

\- Git e GitHub



\## Integracao com a API



O aplicativo consome a API Java do projeto TerraOrbit.



Repositorio da API:



https://github.com/TerraOrbit-gs-2026-2/java



Durante o desenvolvimento e testes no Android Emulator, a API local foi acessada pelo endereco:



http://10.0.2.2:8080



Esse endereco permite que o emulador Android acesse a API rodando localmente no computador.



\## Observacao sobre exclusao de fazendas



A exclusao de fazendas funciona quando a fazenda nao possui dados vinculados.



Caso a fazenda possua sensores, incidentes, alertas ou recomendacoes associados, o backend pode impedir a exclusao para preservar a integridade dos dados. Nesses casos, o aplicativo exibe uma mensagem informando que a fazenda possui vinculos no sistema.



\## Como executar o projeto



\### Pre-requisitos



\- Node.js instalado

\- npm instalado

\- Android Studio com emulador configurado

\- API Java TerraOrbit rodando localmente



\### Instalacao



npm install



\### Execucao



npx expo start



Para abrir no Android Emulator, pressione a tecla "a" no terminal do Expo.



\## Build Android



O projeto foi configurado com EAS Build para geracao do APK Android.



Comando utilizado para gerar o build:



eas build --platform android --profile preview



\## Video demonstrativo



Link do video no YouTube:



https://youtu.be/bk3oBW8zS4Y



\## Integrantes



| Nome | RM |

| --- | --- |

| Felipe Anselmo | RM560661 |

| Joao Vinicius | RM559369 |

| Matheus Mariotto | RM560276 |

| Henrique Sladkevicius | RM560698 |

| Victor de Carvalho | RM560395 |



\## Organizacao geral



O projeto esta organizado em telas, componentes reutilizaveis, contexto de autenticacao, servicos de comunicacao com a API, tipos e arquivos de tema.



Essa organizacao foi adotada para separar responsabilidades e facilitar a manutencao do aplicativo.


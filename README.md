\# TerraOrbit Mobile



Aplicativo mobile desenvolvido para a Global Solution 2026/1 da FIAP, na disciplina de Mobile Application Development.



\## Sobre o projeto



O TerraOrbit Ã© uma soluÃ§Ã£o voltada ao monitoramento agrÃ­cola inteligente. A proposta Ã© apoiar produtores rurais no acompanhamento de suas fazendas, permitindo o cadastro, consulta e gerenciamento de propriedades por meio de um aplicativo mobile integrado a uma API Java.



O projeto foi desenvolvido dentro do tema da Global Solution 2026/1: "O EspaÃ§o Ã© a Nova Fronteira". A soluÃ§Ã£o se conecta ao tema ao explorar o uso de tecnologia, dados e monitoramento para apoiar decisÃµes no agronegÃ³cio, Ã¡rea que pode se beneficiar diretamente de dados climÃ¡ticos, sensores e infraestrutura espacial.



\## Objetivo do aplicativo



O aplicativo tem como objetivo oferecer uma interface simples para que usuÃ¡rios possam acessar a plataforma TerraOrbit, autenticar-se e gerenciar suas fazendas cadastradas.



A aplicaÃ§Ã£o mobile consome a API Java desenvolvida pelo grupo, permitindo que os dados sejam persistidos no backend e no banco de dados, em vez de ficarem apenas localmente no dispositivo.



\## Funcionalidades



\- Cadastro de usuÃ¡rio

\- Login com autenticaÃ§Ã£o integrada Ã  API Java

\- Logout

\- ProteÃ§Ã£o de telas internas

\- Listagem das fazendas do usuÃ¡rio autenticado

\- Cadastro de novas fazendas

\- EdiÃ§Ã£o de fazendas existentes

\- ExclusÃ£o de fazendas quando nÃ£o possuem vÃ­nculos no sistema

\- Feedback visual para carregamento, sucesso e erro

\- Tela Sobre o App com informaÃ§Ãµes do projeto e hash do commit



\## Telas do aplicativo



O aplicativo possui as seguintes telas:



\- Tela inicial

\- Login

\- Cadastro

\- Dashboard

\- Minhas Fazendas

\- Cadastro e ediÃ§Ã£o de Fazenda

\- Sensores

\- RecomendaÃ§Ãµes

\- Sobre o App



As telas de Sensores e RecomendaÃ§Ãµes foram estruturadas como mÃ³dulos de expansÃ£o da soluÃ§Ã£o TerraOrbit, pois fazem parte da proposta geral da plataforma.



\## Tecnologias utilizadas



\- React Native

\- Expo

\- Expo Router

\- TypeScript

\- API REST Java Spring Boot

\- Android Emulator

\- EAS Build

\- Git e GitHub



\## IntegraÃ§Ã£o com a API



O aplicativo consome a API Java do projeto TerraOrbit.



RepositÃ³rio da API:



https://github.com/TerraOrbit-gs-2026-2/java



Durante o desenvolvimento e testes no Android Emulator, a API local foi acessada pelo endereÃ§o:



http://10.0.2.2:8080



Esse endereÃ§o permite que o emulador Android acesse a API rodando localmente no computador.



\## ObservaÃ§Ã£o sobre exclusÃ£o de fazendas



A exclusÃ£o de fazendas funciona quando a fazenda nÃ£o possui dados vinculados.



Caso a fazenda possua sensores, incidentes, alertas ou recomendaÃ§Ãµes associados, o backend pode impedir a exclusÃ£o para preservar a integridade dos dados. Nesses casos, o aplicativo exibe uma mensagem informando que a fazenda possui vÃ­nculos no sistema.



\## Como executar o projeto



\### PrÃ©-requisitos



\- Node.js instalado

\- npm instalado

\- Android Studio com emulador configurado

\- API Java TerraOrbit rodando localmente



\### InstalaÃ§Ã£o



npm install



\### ExecuÃ§Ã£o



npx expo start



Para abrir no Android Emulator, pressione a tecla "a" no terminal do Expo.



\## Build Android



O projeto foi configurado com EAS Build para geraÃ§Ã£o do APK Android.



Comando utilizado para gerar o build:



eas build --platform android --profile preview



\## VÃ­deo demonstrativo



Link do vÃ­deo no YouTube:



https://youtu.be/bk3oBW8zS4Y



\## Integrantes



| Nome | RM |

| --- | --- |

| Felipe Anselmo | RM560661 |

| JoÃ£o Vinicius | RM559369 |

| Matheus Mariotto | RM560276 |

| Henrique Sladkevicius | RM560698 |

| Victor de Carvalho | RM560395 |



\## OrganizaÃ§Ã£o geral



O projeto estÃ¡ organizado em telas, componentes reutilizÃ¡veis, contexto de autenticaÃ§Ã£o, serviÃ§os de comunicaÃ§Ã£o com a API, tipos e arquivos de tema.



Essa organizaÃ§Ã£o foi adotada para separar responsabilidades e facilitar a manutenÃ§Ã£o do aplicativo.


\# TerraOrbit Mobile



Aplicativo mobile desenvolvido para a Global Solution 2026/1 da FIAP, na disciplina de Mobile Application Development.



\## Sobre o projeto



O TerraOrbit é uma solução voltada ao monitoramento agrícola inteligente. A proposta é apoiar produtores rurais no acompanhamento de suas fazendas, permitindo o cadastro, consulta e gerenciamento de propriedades por meio de um aplicativo mobile integrado a uma API Java.



O projeto foi desenvolvido dentro do tema da Global Solution 2026/1: "O Espaço é a Nova Fronteira". A solução se conecta ao tema ao explorar o uso de tecnologia, dados e monitoramento para apoiar decisões no agronegócio, área que pode se beneficiar diretamente de dados climáticos, sensores e infraestrutura espacial.



\## Objetivo do aplicativo



O aplicativo tem como objetivo oferecer uma interface simples para que usuários possam acessar a plataforma TerraOrbit, autenticar-se e gerenciar suas fazendas cadastradas.



A aplicação mobile consome a API Java desenvolvida pelo grupo, permitindo que os dados sejam persistidos no backend e no banco de dados, em vez de ficarem apenas localmente no dispositivo.



\## Funcionalidades



\- Cadastro de usuário

\- Login com autenticação integrada à API Java

\- Logout

\- Proteção de telas internas

\- Listagem das fazendas do usuário autenticado

\- Cadastro de novas fazendas

\- Edição de fazendas existentes

\- Exclusão de fazendas quando não possuem vínculos no sistema

\- Feedback visual para carregamento, sucesso e erro

\- Tela Sobre o App com informações do projeto e hash do commit



\## Telas do aplicativo



O aplicativo possui as seguintes telas:



\- Tela inicial

\- Login

\- Cadastro

\- Dashboard

\- Minhas Fazendas

\- Cadastro e edição de Fazenda

\- Sensores

\- Recomendações

\- Sobre o App



As telas de Sensores e Recomendações foram estruturadas como módulos de expansão da solução TerraOrbit, pois fazem parte da proposta geral da plataforma.



\## Tecnologias utilizadas



\- React Native

\- Expo

\- Expo Router

\- TypeScript

\- API REST Java Spring Boot

\- Android Emulator

\- EAS Build

\- Git e GitHub



\## Integração com a API



O aplicativo consome a API Java do projeto TerraOrbit.



Repositório da API:



https://github.com/TerraOrbit-gs-2026-2/java



Durante o desenvolvimento e testes no Android Emulator, a API local foi acessada pelo endereço:



http://10.0.2.2:8080



Esse endereço permite que o emulador Android acesse a API rodando localmente no computador.



\## Observação sobre exclusão de fazendas



A exclusão de fazendas funciona quando a fazenda não possui dados vinculados.



Caso a fazenda possua sensores, incidentes, alertas ou recomendações associados, o backend pode impedir a exclusão para preservar a integridade dos dados. Nesses casos, o aplicativo exibe uma mensagem informando que a fazenda possui vínculos no sistema.



\## Como executar o projeto



\### Pré-requisitos



\- Node.js instalado

\- npm instalado

\- Android Studio com emulador configurado

\- API Java TerraOrbit rodando localmente



\### Instalação



npm install



\### Execução



npx expo start



Para abrir no Android Emulator, pressione a tecla "a" no terminal do Expo.



\## Build Android



O projeto foi configurado com EAS Build para geração do APK Android.



Comando utilizado para gerar o build:



eas build --platform android --profile preview



\## Vídeo demonstrativo



Link do vídeo no YouTube:



A definir



\## Integrantes



| Nome | RM |

| --- | --- |

| Felipe Anselmo | RM560661 |

| João Vinicius | RM559369 |

| Matheus Mariotto | RM560276 |

| Henrique Sladkevicius | RM560698 |

| Victor de Carvalho | RM560395 |



\## Organização geral



O projeto está organizado em telas, componentes reutilizáveis, contexto de autenticação, serviços de comunicação com a API, tipos e arquivos de tema.



Essa organização foi adotada para separar responsabilidades e facilitar a manutenção do aplicativo.


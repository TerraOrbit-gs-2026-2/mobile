\# TerraOrbit Mobile



Aplicativo mobile desenvolvido em React Native com Expo para a Global Solution 2026/1 da FIAP.



\## Contexto da Global Solution



O tema da Global Solution 2026/1 e "O Espaco e a Nova Fronteira".



A proposta do desafio e criar uma solucao que conecte a exploracao espacial com problemas e oportunidades reais aqui na Terra, utilizando tecnologia, dados, infraestrutura espacial ou novos modelos de negocio.



O TerraOrbit se conecta ao tema ao propor uma plataforma de monitoramento agricola inteligente, aproximando dados, sensores, alertas climaticos e recomendacoes para apoiar produtores rurais na tomada de decisao.



\## Sobre a Solucao



O TerraOrbit Mobile e o aplicativo da plataforma TerraOrbit.



A solucao permite que produtores rurais acompanhem suas fazendas cadastradas, visualizem informacoes operacionais e usem uma API Java para gerenciar dados do sistema.



O objetivo e apoiar o agronegocio com tecnologia, permitindo melhor acompanhamento de propriedades rurais, sensores e recomendacoes inteligentes relacionadas a clima e produtividade.



\## Funcionalidades Implementadas



\- Cadastro de usuario

\- Login com autenticacao via API Java

\- Logout

\- Protecao de rotas autenticadas

\- Listagem das fazendas do usuario logado

\- Cadastro de fazendas

\- Edicao de fazendas

\- Exclusao de fazendas

\- Feedback visual de erros e carregamento

\- Tela Sobre o App com hash do commit de referencia

\- Navegacao entre telas com Expo Router



\## Telas do Aplicativo



O aplicativo possui mais de 6 telas, atendendo ao requisito da disciplina:



1\. Tela inicial

2\. Login

3\. Cadastro

4\. Dashboard

5\. Minhas Fazendas

6\. Cadastro/Edicao de Fazenda

7\. Sensores

8\. Recomendacoes

9\. Sobre o App



\## Tecnologias Utilizadas



\- React Native

\- Expo

\- Expo Router

\- TypeScript

\- JavaScript Fetch API

\- API REST Java Spring Boot

\- Android Emulator

\- Git e GitHub



\## Integracao com Backend



O aplicativo consome a API Java do projeto TerraOrbit.



Repositorio da API:



https://github.com/TerraOrbit-gs-2026-2/java



Durante os testes no Android Emulator, a URL utilizada para acessar a API local foi:



http://10.0.2.2:8080



Essa URL permite que o emulador Android acesse a API rodando no computador local.



\## Requisitos de Mobile Application Development



| Requisito | Status |

| --- | --- |

| Minimo de 6 telas | Atendido |

| Navegacao entre telas | Atendido |

| CRUD usando API Java ou .NET | Atendido |

| Autenticacao no aplicativo | Atendido |

| Estilizacao personalizada | Atendido |

| Arquitetura organizada | Atendido |

| Video demonstrando funcionalidades | A definir |

| Publicacao do app | A definir |

| Tela Sobre o App com hash do commit | Atendido |



\## Como Executar o Projeto



\### Pre-requisitos



\- Node.js instalado

\- npm instalado

\- Expo

\- Android Studio com emulador configurado

\- API Java TerraOrbit rodando localmente na porta 8080



\### Instalar dependencias



npm install



\### Rodar o aplicativo



npx expo start



Para abrir no Android Emulator, pressione a tecla "a" no terminal do Expo.



\## Como Rodar a API Java



Em outro terminal, acesse o repositorio Java e execute:



No Windows PowerShell:



.\\mvnw spring-boot:run



A API deve ficar disponivel em:



http://localhost:8080



No Android Emulator, o app acessa essa API por:



http://10.0.2.2:8080



\## Observacoes sobre Exclusao de Fazendas



A exclusao de fazendas funciona para fazendas sem vinculos.



Caso uma fazenda possua sensores, incidentes, alertas ou recomendacoes associados, o backend pode impedir a exclusao por integridade referencial do banco de dados. Nesses casos, o aplicativo exibe uma mensagem informando que a fazenda possui dados vinculados.



\## Video Demonstrativo



Link do video no YouTube:



A definir



\## Integrantes do Grupo



| Nome | RM |

| --- | --- |

| Felipe Anselmo | RM560661 |

| Joao Vinicius | RM559369 |

| Matheus Mariotto | RM560276 |

| Henrique Sladkevicius | RM560698 |

| Victor de Carvalho | RM560395 |



\## Organizacao do Projeto



app/

\- \_layout.tsx

\- index.tsx

\- login.tsx

\- register.tsx

\- dashboard.tsx

\- farms.tsx

\- farm-form.tsx

\- sensors.tsx

\- recommendations.tsx

\- about.tsx



src/

\- components/

\- contexts/

\- services/

\- theme/

\- types/



\## Status do Projeto



Projeto em desenvolvimento para entrega da Global Solution 2026/1.


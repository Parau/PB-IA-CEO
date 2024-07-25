---
sidebar_position: 4
---
import ChatGPTWelcome from '@site/static/img/docs/welcome.jpg';

# Privacidade
No cenário atual, a conformidade com a Lei Geral de Proteção de Dados (LGPD) é uma necessidade inegociável para qualquer organização que busca operar de maneira ética e segura. No entanto, a adoção da IA adiciona uma camada extra de complexidade a essa preocupação.

A o que você deve estar atento?

## Uso de ferramentas prontas
Ao implantar ferramentas prontas de IA em sua organização é importante entender que essas plataformas frequentemente armazenam informações dos usuários para fins de auditoria e melhoria contínua dos modelos de IA. Isso pode levantar preocupações sobre como os dados são usados e protegidos pela empresa que fornece a ferramenta de IA. Portanto é importante analisar a se a ferramenta de IA que se pretende adotar na organização  esteja em conformidade com as regras de privacidade da sua instituição ou regulamentações a LGPD.

Mas não é somente o aspecto da proteção dos dados que é relevante no caso de uso de ferramentas prontas de IA é necessário também os riscos de utilizar na ferramenta de IA dados sigilosos da organização. Temos o exemplo da Samsung que baniu temporariamente o uso do ChatGPT por seus funcionários em dispositivos de trabalho e redes internas. A empresa citou preocupações com a privacidade e a segurança como razões para a proibição. O que aconteceu é que a a equipe de TI identificou que funcionários da Samsung usaram o ChatGPT para revisar código-fonte, otimizar software e redigir atas de reuniões. Nesses processos, dados confidenciais da empresa foram expostos ao ChatGPT.

Aproveitando o exemplo do ChatGPT, mas o cenário é válido para a maioria das ferramentas de IA generativa, os textos que você envia ao ChatGPT podem ser utilizados para o treinamento do modelo. Hoje o ChatGPT possui uma série formas de uso e opções de privacidade que você pode utilizar para controlar as informações que você compartilha com ele durante o seu uso.

<img src={ChatGPTWelcome} class='img-limit' />
<center>Marcar parte "informações sensíveis"</center>

Por isso atenção! Ao compartilhar dados confidenciais da organização com o ChatGPT, há um risco de que esses dados sejam utilizados no treinamento contínuo da ferramenta. Isso pode resultar em potenciais danos futuros caso essas informações sejam inadvertidamente expostas pelo próprio ChatGPT. Por exemplo, se o departamento de RH enviar dados sigilosos dos colaboradores para gerar relatórios, ou se o departamento de marketing utilizar dados confidenciais dos clientes para criar textos personalizados, há um risco significativo de violação de privacidade e segurança.

Lembre-se de que a LGPD exige o tratamento rigorosamente confidencial dos dados pessoais. É fundamental que as empresas implementem medidas adequadas para proteger esses dados contra acessos não autorizados e vazamentos.

## Treinando os seus próprios modelos de IA
Para empresas que que treinam ou personalizam seus próprios modelos de IA a questão da privacidade a preocupação envolve o armazenamento e processamento dos dados usados para treinamento. É essencial implementar medidas rigorosas para proteger esses dados contra acessos não autorizados e vazamentos. Além disso, vale a pena considerar a adoção de técnicas como anonimização e pseudonimização de dados. Isso pode reduzir significativamente os riscos associados ao processamento de informações sensíveis. Essas técnicas ajudam a proteger a identidade dos indivíduos, tornando mais difícil a reidentificação dos dados pessoais em caso de vazamento ou acesso não autorizado.

## Controle de acesso
Especialmente quando estiver treinando modelos de linguagem usando dados da empresa, esteja atento aos níveis de confidencialidade destes dados. Treinar um modelo de linguagem em um grande conjunto de dados de documentos e relatórios da empresa pode ser útil para diversas tarefas, como gerar resumos de documentos, responder a perguntas ou até mesmo criar novos conteúdos. No entanto, é importante ter em mente que, se o modelo for treinado em um conjunto de dados que não leva em consideração os diferentes níveis de acesso dos usuários dentro da organização, ele poderá gerar informações confidenciais que não deveriam ser acessíveis a todos.
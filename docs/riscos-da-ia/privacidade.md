---
sidebar_position: 4
---
import LigaHighlight from '@site/src/components/gsap/highlight'
import BoasVindasChatGPT from '@site/src/components/BoasVindasChatGPT'

# Privacidade
<LigaHighlight />
No cenário atual, a conformidade com a Lei Geral de Proteção de Dados (LGPD) é uma necessidade inegociável para qualquer organização que busca operar de maneira ética e segura. No entanto, a implementação de IA adiciona uma camada extra de complexidade a essa responsabilidade.

A que você deve estar atento?

## Uso de ferramentas prontas
Ao implantar ferramentas de IA prontas em sua organização, é importante estar atento a como essas plataformas lidam com os dados dos usuários. Muitas vezes, essas ferramentas armazenam informações para auditoria e melhoria contínua dos modelos, o que pode levantar preocupações sobre a segurança e o uso dos dados. Portanto, é essencial verificar se a ferramenta de IA está em conformidade com as políticas de privacidade da sua instituição e com a LGPD.

Além da proteção de dados, é importante considerar os riscos associados ao uso de dados sigilosos da organização nessas ferramentas. Por exemplo, enviar dados confidenciais sobre colaboradores para gerar relatórios, ou utilizar informações dos clientes para criar textos personalizados, pode resultar em exposições indesejadas. Um exemplo notável é o da Samsung, que proibiu temporariamente o uso do ChatGPT por seus funcionários em dispositivos de trabalho e redes internas devido a preocupações com privacidade e segurança. Colaboradores da Samsung usaram o ChatGPT para revisar código-fonte, otimizar software e redigir atas de reuniões, o que resultou na exposição de informações confidenciais da empresa.

<BoasVindasChatGPT />
 
É importante destacar que o ChatGPT, assim como outras ferramentas de IA generativa, pode usar os dados que você envia para aprimorar seus modelos. Embora o ChatGPT ofereça opções de privacidade para controlar as informações compartilhadas, é fundamental estar atento ao tipo de dados transmitidos e como são utilizados. O compartilhamento de informações confidenciais pode acarretar riscos futuros, especialmente se esses dados forem integrados inadvertidamente ao modelo.

Lembre-se de que a LGPD exige o tratamento rigorosamente confidencial dos dados pessoais. É fundamental que as empresas implementem medidas adequadas para proteger esses dados contra acessos não autorizados e vazamentos.

## Treinando os seus próprios modelos de IA
Para empresas que que treinam ou personalizam seus próprios modelos de IA a questão da privacidade a preocupação envolve o armazenamento e processamento dos dados usados para treinamento. É essencial implementar medidas rigorosas para proteger esses dados contra acessos não autorizados e vazamentos. Além disso, vale a pena considerar a adoção de técnicas como anonimização e pseudonimização de dados. Isso pode reduzir significativamente os riscos associados ao processamento de informações sensíveis. Essas técnicas ajudam a proteger a identidade dos indivíduos, tornando mais difícil a reidentificação dos dados pessoais em caso de vazamento ou acesso não autorizado.

## Controle de acesso
Especialmente quando estiver treinando modelos de linguagem usando dados da empresa, esteja atento aos níveis de confidencialidade destes dados. Treinar um modelo de linguagem em um grande conjunto de dados de documentos e relatórios da empresa pode ser útil para diversas tarefas, como gerar resumos de documentos, responder a perguntas ou até mesmo criar novos conteúdos. No entanto, é importante ter em mente que, se o modelo for treinado em um conjunto de dados que não leva em consideração os diferentes níveis de acesso dos usuários dentro da organização, ele poderá gerar informações confidenciais que não deveriam ser acessíveis a todos.
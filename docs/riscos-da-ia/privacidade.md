---
sidebar_position: 3
---
# Privacidade
No cenário atual, a conformidade com a Lei Geral de Proteção de Dados (LGPD) é uma necessidade inegociável para qualquer organização que busca operar de maneira ética e segura. No entanto, a adoção da IA adiciona uma camada extra de complexidade a essa preocupação.

A o que você deve estar atento?

## Uso de ferramentas prontas
Ao implantar ferramentas prontas de IA em sua organização é importante entender que essas plataformas frequentemente armazenam informações dos usuários para fins de auditoria e melhoria contínua dos modelos de IA. Isso pode levantar preocupações sobre como os dados são usados e protegidos pela empresa que fornece a ferramenta de IA. Portanto é importante analisar a se a ferramenta de IA que se pretende adotar na organização  esteja em conformidade com as regras de privacidade da sua instituição ou regulamentações a LGPD.

Mas não é somente o aspecto da proteção dos dados que é relevante no caso de uso de ferramentas prontas de IA é necessário também os riscos de utilizar na ferramenta de IA dados sigilosos da organização. Temos o exemplo da Samsung que baniu temporariamente o uso do ChatGPT por seus funcionários em dispositivos de trabalho e redes internas. A empresa citou preocupações com a privacidade e a segurança como razões para a proibição. O que aconteceu é que a a equipe de TI identificou que funcionários da Samsung usaram o ChatGPT para revisar código-fonte, otimizar software e redigir atas de reuniões. Nesses processos, dados confidenciais da empresa foram expostos ao ChatGPT.

Aproveitando o exemplo do ChatGPT, mas o cenário é válido para a maioria das ferramentas de IA generativa, os textos que você envia ao ChatGPT podem ser utilizados para o treinamento do modelo. Hoje o ChatGPT possui uma série formas de uso e opções de privacidade que você pode utilizar para controlar as informações que você compartilha com ele durante o seu uso.

## Treinando os seus próprios modelos de IA
Para empresas que que treinam ou personalizam seus próprios modelos de IA a questão da privacidade a preocupação envolve o armazenamento e processamento dos dados usados para treinamento. É essencial implementar medidas rigorosas para proteger esses dados contra acessos não autorizados e vazamentos. Além disso, vale a pena considerar a adoção de técnicas como anonimização e pseudonimização de dados. Isso pode reduzir significativamente os riscos associados ao processamento de informações sensíveis. Essas técnicas ajudam a proteger a identidade dos indivíduos, tornando mais difícil a reidentificação dos dados pessoais em caso de vazamento ou acesso não autorizado.

## Controle de acesso
Especialmente quando estiver treinando modelos de linguagem usando dados da empresa, esteja atento aos níveis de confidencialidade destes dados. Treinar um modelo de linguagem em um grande conjunto de dados de documentos e relatórios da empresa pode ser útil para diversas tarefas, como gerar resumos de documentos, responder a perguntas ou até mesmo criar novos conteúdos. No entanto, é importante ter em mente que, se o modelo for treinado em um conjunto de dados que não leva em consideração os diferentes níveis de acesso dos usuários dentro da organização, ele poderá gerar informações confidenciais que não deveriam ser acessíveis a todos.







--

Esses exemplos destacam as complexidades e desafios relacionados ao uso da IA generativa, evidenciando a importância de que todas as organizações estejam adequadamente preparadas para enfrentar e mitigar os riscos inerentes a essa tecnologia. Essa abordagem proativa e cautelosa é fundamental para garantir o uso responsável e seguro destas ferramentas, protegendo os interesses das empresas e minimizando os impactos negativos potenciais.

Sugestão de casos para o assunto "black box".
https://venturebeat.com/business/when-ai-flags-the-ruler-not-the-tumor-and-other-arguments-for-abolishing-the-black-box-vb-live/

Sugestões para o viés: - para colocação no capítulo de dicas para implantação da ia na organização
Educação e Treinamento: Os CEOs devem investir em educação e treinamento para sua equipe sobre os riscos e as melhores práticas para evitar o viés em IA. Isso inclui a criação de programas internos de conscientização sobre como identificar e corrigir vieses nos dados e nos modelos.

Diversidade na Equipe de Desenvolvimento: As equipes responsáveis pelo desenvolvimento e implementação de IA devem ser diversificadas. Isso ajuda a garantir que diferentes perspectivas sejam consideradas e que os vieses implícitos sejam minimizados.

Transparência e Auditoria: Implementar processos de auditoria regulares para os sistemas de IA, garantindo que sejam transparentes e que possam ser revisados por terceiros. Isso ajuda a identificar e corrigir vieses que possam surgir ao longo do tempo.

Políticas e Diretrizes: Desenvolver políticas claras e diretrizes para o uso de IA dentro da empresa, incluindo a necessidade de avaliações de impacto sobre viés antes do lançamento de qualquer sistema.

Essas práticas ajudarão a garantir que a implementação da IA na sua organização seja ética, eficaz e alinhada com os valores e objetivos estratégicos da empresa.

Sugestão para cuidado com as interpretações:
He points to the model developed in the 1990s by a group of researchers in Pittsburgh to estimate the severity of patients with pneumonia to triage inpatient vs outpatient treatment. One thing this model learned was that, on average, people with asthma who come in with pneumonia have better health outcomes as a group than non-asthmatics. However, this wasn’t because having asthma is the great health bonus it was flagged as, but because patients with asthma get higher priority care, and also asthma patients are on high alert to go to their doctor as soon as they start to have pulmonary symptoms.

Caso interessante da criação de llms
A recent incident with one of my clients really drove this home. The company, a large e-commerce platform, had deployed a chatbot powered by the open source platform called ChatterBot to handle customer inquiries. The chatbot was a hit, providing quick, personalized responses that improved customer satisfaction. However, things took a dark turn when a malicious actor figured out how to prompt the chatbot to reveal sensitive customer information.
https://www.darkreading.com/cybersecurity-operations/new-mindset-needed-for-large-language-models

Redes neurais?
Será que o problema a ser resolvido na sua empresa precisa utilizar modelos complexos?
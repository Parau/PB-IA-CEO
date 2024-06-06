---
sidebar_position: 2
---
# Viés
Uma expressão popular entre os primeiros desenvolvedores de sistemas décadas atrás dizia: "lixo entra, lixo sai". Isso se refere ao conceito de que dados de entrada defeituosos ou sem sentido em sistemas computacionais resultam em saídas igualmente deficientes, independentemente da qualidade do sistema em si. Esse mesmo princípio se aplica ao treinamento de IA: a qualidade do modelo é tão boa quanto os dados usados para treiná-lo. Se os dados de entrada forem tendenciosos, incompletos ou de má qualidade, isso resultará em um sistema de IA com saídas enviesadas ou imprecisas. Portanto, garantir dados de treinamento de alta qualidade e representatividade é essencial para o desenvolvimento de modelos de IA eficazes.

 Por uma questão de precisão, é importante destacar que a eficácia de um sistema de IA não depende apenas da qualidade dos dados de treinamento, mas também de sua arquitetura, dos algoritmos utilizados e dos métodos de treinamento. Mesmo com dados de alta qualidade, um modelo de IA pode produzir resultados insatisfatórios se não for adequadamente projetado, programado e parametrizado.

O viés em IA é um desafio significativo, tanto que até as maiores empresas de tecnologia enfrentaram, e ainda enfrentam, problemas com ele em suas ferramentas.

Em 2015, o aplicativo de Fotos do Google identificou erroneamente um casal como "gorilas", gerando críticas severas à empresa. O Google reconheceu o erro, e seus executivos fizeram declarações públicas de desculpas.

A Microsoft lançou um ChatBot no Twitter em 2016 para interagir com usuários, jovens e adolescentes, e aprender com eles. No entanto, o ChatBot rapidamente começou a fazer declarações ofensivas e racistas. A Microsoft teve que retirar o robô do ar poucas horas após o lançamento e emitir um pedido de desculpas.

Em 2018, a Amazon enfrentou problemas internos quando sua ferramenta de recrutamento, treinada com dados coletados pelo departamento de recursos humanos ao longo de 10 anos, demonstrou viés. A empresa desativou a ferramenta para solucionar o problema. Em um comunicado, um porta-voz da Amazon esclareceu que o programa nunca foi usado oficialmente. Mesmo assim, esse caso destaca os riscos de sistemas de IA apresentarem vieses prejudiciais.

Em fevereiro de 2024, logo após o lançamento de sua ferramenta de geração de imagens, o Google publicou um pedido de desculpas pelo que descreveu como "imprecisões em algumas representações de imagens históricas geradas" por sua ferramenta de IA Gemini. A empresa admitiu que suas tentativas de criar uma "ampla variedade" de resultados não foram bem-sucedidas.

Essas exemplos reforçam que incorporar a IA na organização exige uma abordagem cuidadosa e crítica por parte de toda a organização e em especial os seus líderes. Sendo que este cuidado deve ocorrer não só no desenvolvimento e implantação da IA, incluindo a necessidade de monitoramento contínuo  e implementação de salvaguardas para mitigar riscos associados ao viés.

Esses exemplos reforçam que incorporar a IA na organização exige uma abordagem cuidadosa e crítica por parte de toda a organização, especialmente dos seus líderes. Esse cuidado deve ocorrer não só na etapa de desenvolvimento ou implantação da IA, mas exige monitoramento contínuo e implementação de salvaguardas para mitigar riscos associados ao viés.

# Viés na prática
Os exemplos de viés que apresentei acima podem fazer você pensar que esse risco está relacionado apenas a questões de preconceito, ofensas ou tratamento desigual. Embora um sistema de IA enviesado possa, de fato, gerar esses cenários, ele também pode fornecer informações ou fazer previsões equivocadas que levam a erros na tomada de decisões. É importante entender que o viés pode afetar diversos aspectos do negócio, comprometendo a precisão das análises e a eficácia das estratégias implementadas.

**Impacto Financeiro**: Um sistema de IA enviesado pode influenciar negativamente as finanças da empresa, como previsões de demanda imprecisas que resultam em excesso ou falta de estoque.

**Reputação da Empresa**: Decisões baseadas em informações enviesadas podem afetar a reputação da empresa, levando a uma perda de confiança por parte dos clientes e parceiros.

**Legal e Regulatória**: Dependendo da indústria, o uso de sistemas de IA enviesados pode levar a complicações legais e regulatórias, incluindo multas e sanções.

**Eficiência Operacional**: Vieses podem impactar a eficiência operacional, como em processos de recrutamento, resultando na contratação de candidatos que não são os mais adequados para a empresa. 

Compreender como a IA funciona é essencial para reconhecer como o viés pode ser introduzido e propagado nos sistemas de IA. Neste tópico, apresento de maneira prática como os dados podem influenciar os resultados de um modelo de IA. Meu objetivo é desmistificar a tecnologia e fornecer *insights* claros que permitirão a você implementar a IA em sua organização de forma responsável e sustentável, mitigando riscos e maximizando benefícios.

# Uma loja de sorvetes
Sim. O título deste tópico está certo. Organizei este exemplo com um mínimo de variáveis para que você possa literalmente ver o viés atuando em um modelo de *machine learning*.

O contexto é o de um proprietário de uma loja de sorvetes que encomendou o desenvolvimento de um sistema de IA para prever a quantidade de sorvetes vendidos, com base na temperatura máxima do dia e no histórico de vendas.

--> exemplo usando os "sorvetes" no observable. Alterar o observable abaixo para que permita ao leitor alterar um dos dados do treinamento relacionado a quantidade de sorvetes vendidos no dia. O exemplo mostra os dados de treinamento, uma tabela com as previsões, o gráfico com o resultado e um slider para alterar uma das linhas da tabela de dados usados para o treinamento do modelo.
<iframe width="100%" height="618.234375" frameborder="0"
  src="https://observablehq.com/embed/5a4e3b0d0f0c7b0b?cells=viewof+polynome_degree%2CGrafico"></iframe>

# Detecção de cancer de pele
Peço desculpas se este assunto é sensível para você. Fique a vontade para pular este tópico e seguir no curso. Mas penso este caso este ser emblemático. Um artigo publicado na revista Nature em 2017 apresentou um trabalho de pesquisa em que foi desenvolvido um sistema de IA que atingiu um nível de precisão comparável ao de dermatologistas humanos no diagnóstico de lesões malignas da pele. O artivo informou que o sistema foi treinado usando um conjunto de dados de quase 130 mil imagens clínicas. Sem dúvida, uma ótima notícia.

Entretanto, após a publicação, os autores do estudo notaram a existência de viés no modelo treinado. O sistema era mais propenso a detectar a ocorrência de cancer se a imagem apresentada ao sistema, ou seja a foto da pele do paciente analisado, incluísse um régua na imagem. Por que?  As imagens médicas de lesões cancerígenas costumam incluir uma régua para fins de escala. Nas não canceríginas não há a preocupação de incluir na imagem a regua para ajudar no controle.  Como resultado, no treinamento o modelo aprendeu a identificar a presença da régua como um indicador importante de malignidade.

Em um novo artigo publicado pelos pesquisadores no ano seguinte eles comentaram sobre os riscos do viés:

>Por exemplo, em nosso trabalho, observamos que o algoritmo parecia ter maior probabilidade de interpretar imagens com réguas como malignas. Por quê? Em nosso conjunto de dados, imagens com réguas eram mais propensas a serem malignas; assim, o algoritmo inadvertidamente “aprendeu” que réguas são malignas. Esses vieses em modelos de IA são inerentes, a menos que se dê atenção específica para lidar com entradas com variabilidade. Uma abordagem alternativa é incorporar padrões rigorosos e/ou hardware que permita a padronização das fotos, mas isso reduz o potencial de escalabilidade. 


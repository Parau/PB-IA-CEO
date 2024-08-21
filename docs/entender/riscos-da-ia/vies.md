---
sidebar_position: 1
---
import LigaHighlight from '@site/src/components/gsap/highlight'

# Viés
<LigaHighlight />
Uma expressão popular entre os primeiros desenvolvedores de sistemas décadas atrás dizia: "lixo entra, lixo sai". Isso se refere ao conceito de que dados de entrada defeituosos ou sem sentido em sistemas computacionais resultam em saídas igualmente deficientes, independentemente da qualidade do sistema em si. Esse mesmo princípio se aplica ao treinamento de IA: <spam class="text-highlight">a qualidade do modelo é tão boa quanto os dados usados</spam> para treiná-lo. Se os dados de entrada forem tendenciosos, incompletos ou de má qualidade, isso resultará em um sistema de IA com saídas enviesadas ou imprecisas. Portanto, garantir dados de treinamento de alta qualidade e representatividade é essencial para o desenvolvimento de modelos de IA eficazes.


:::info
Por uma questão de precisão, é importante destacar que a eficácia de um sistema de IA não depende apenas da qualidade dos dados de treinamento, mas também de sua arquitetura, dos algoritmos utilizados e dos métodos de treinamento. Mesmo com dados de alta qualidade, um modelo de IA pode produzir resultados insatisfatórios se não for adequadamente projetado, programado e parametrizado.
:::

<spam class="text-highlight">O viés em sistemas de IA é um desafio significativo</spam>.Até mesmo as maiores empresas de tecnologia enfrentaram e continuam enfrentando problemas relacionados a isso em suas ferramentas.

 * Em 2015, o aplicativo de Fotos do Google identificou erroneamente um casal como "gorilas", gerando críticas severas à empresa. O Google reconheceu o erro, e seus executivos fizeram declarações públicas de desculpas.

* A Microsoft lançou um ChatBot no Twitter em 2016 para interagir com usuários, jovens e adolescentes, e aprender com eles. No entanto, o ChatBot rapidamente começou a fazer declarações ofensivas e racistas. A Microsoft teve que retirar o robô do ar poucas horas após o lançamento e emitir um pedido de desculpas.

 * Em 2018, a Amazon enfrentou problemas internos quando sua ferramenta de recrutamento, treinada com dados coletados pelo departamento de recursos humanos ao longo de 10 anos, demonstrou viés. A empresa desativou a ferramenta para solucionar o problema. Em um comunicado, um porta-voz da Amazon esclareceu que o programa nunca foi usado oficialmente. Mesmo assim, esse caso destaca os riscos de sistemas de IA apresentarem vieses prejudiciais.

 * Em fevereiro de 2024, logo após o lançamento de sua ferramenta de geração de imagens, o Google publicou um pedido de desculpas pelo que descreveu como "imprecisões em algumas representações de imagens históricas geradas" por sua ferramenta de IA Gemini. A empresa admitiu que suas tentativas de criar uma "ampla variedade" de resultados não foram bem-sucedidas.

Esses exemplos reforçam que <spam class="text-highlight">incorporar a IA na organização exige uma abordagem cuidadosa e crítica</spam> por parte de toda a organização, especialmente dos seus líderes. Esse cuidado deve ocorrer não só na etapa de desenvolvimento ou implantação da IA, mas exige monitoramento contínuo e implementação de salvaguardas para mitigar riscos associados ao viés.

# Viés na prática
Os exemplos de viés que apresentei podem fazer você pensar que esse risco está relacionado apenas a questões de preconceito, ofensas ou tratamento desigual. Embora um sistema de IA enviesado possa, de fato, gerar esses cenários, ele também pode fornecer informações ou fazer previsões equivocadas que levam a erros na tomada de decisões. É importante entender que o viés pode afetar diversos aspectos do negócio, comprometendo a precisão das análises e a eficácia das estratégias implementadas.

**Impacto Financeiro**: Um sistema de IA enviesado pode influenciar negativamente as <spam class="text-highlight">finanças da organização</spam>, como previsões de demanda imprecisas que resultam em excesso ou falta de estoque.

**Reputação da Organização**: Decisões baseadas em informações enviesadas podem afetar a <spam class="text-highlight">reputação da organização</spam>, levando a uma perda de confiança por parte dos clientes e parceiros.

**Legal e Regulatória**: Dependendo da indústria, o uso de sistemas de IA enviesados pode levar a complicações <spam class="text-highlight-end">legais e regulatórias</spam>, incluindo multas e sanções.

**Eficiência Operacional**: Vieses podem impactar a <spam class="text-highlight-end">eficiência operacional</spam>, como em processos de recrutamento, resultando na contratação de candidatos que não são os mais adequados para a organização. 

<spam class="text-highlight-end">Compreender como a IA funciona</spam> é essencial para reconhecer como o viés pode ser introduzido e propagado nos sistemas de IA. Na próxima seção, apresento de maneira prática como os dados podem influenciar os resultados de um modelo de IA. Meu objetivo é desmistificar a tecnologia e fornecer *insights* claros que permitirão a você implementar a IA em sua organização de forma responsável e sustentável, mitigando riscos e maximizando benefícios.
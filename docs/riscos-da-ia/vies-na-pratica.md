---
sidebar_position: 2
---
import ReactPlayer from 'react-player'
import LigaHighlight from '@site/src/components/gsap/highlight'
import ResponsiveIframe from 'react-responsive-embed';

# Dados e viés
<LigaHighlight />
Nesta seção, você terá a oportunidade de <spam class="text-highlight">interagir com um modelo</spam> simples de aprendizado de máquina, observando como ele é treinado e explorando o impacto do viés nos resultados de sistemas de inteligência artificial. Essa experiência prática não apenas desmistificará o problema do viés, mas também <spam class="text-highlight">proporcionará uma visão crítica</spam> sobre sua aplicação responsável em sua organização.

Vou começar criando um contexto e preparando o modelo de aprendizado, para então seguir com a etapa interativa de experimentação.

# Uma loja de sorvetes
Preparei um vídeo que aborda o desenvolvimento de um modelo de aprendizado de máquina para auxiliar na administração de uma loja de sorvetes. Sofia, a proprietária da loja, enfrenta o desafio de equilibrar a produção para atender à demanda sem comprometer a qualidade dos sorvetes.

<center>
<ReactPlayer url='https://youtu.be/KoSiHpQ73FY' width='100%' controls='true' />
</center>
<br />
No vídeo, utilizei a experimentação para encontrar a posição ideal da linha no modelo. Esta linha representa a estimativa de vendas para diferentes temperaturas. O processo de ajustar a linha para que ela se adapte da melhor forma possível aos dados reais é o que chamamos de treinamento do modelo.

Embora a experimentação seja uma prática comum para desenvolvedores de IA, há técnicas específicas para calcular a posição mais precisa da linha. Para facilitar sua interação com o modelo, criei uma ferramenta que realiza esse cálculo automaticamente. Utilizei a técnica de mínimos quadrados, um método estatístico para determinar a linha de regressão. No diagrama abaixo, a linha pontilhada laranja ilustra essa regressão.


<ResponsiveIframe style={{overflow: 'hidden'}}
    src="https://observablehq.com/embed/5a4e3b0d0f0c7b0b@1392?cells=GraficoComLinhaCalculada"
    ratio='4:3'/>

O objetivo aqui não é detalhar o processo matemático, mas permitir que você interaja com o modelo e observe como o viés pode afetar os resultados. O diagrama acima usa os mesmos dados apresentados no vídeo. Por exemplo, para um dia com temperatura máxima de 33°C, o modelo estima a venda de cerca de 204 sorvetes.

Ainda sobre o diagrama, observe que, segundo os dados históricos da sorveteria da Sofia, em um dia com 32°C foram vendidos 180 sorvetes. Agora, imagine um cenário excepcional, como uma promoção de 80% de desconto ou uma notícia viral sobre a longevidade associada ao consumo de sorvetes artesanais de limão 😱. Ou mesmo um erro na coleta de dados. Suponha que, em um dia de 32°C, fossem vendidos 350 sorvetes ao invés dos 180 registrados. Como isso afetaria nosso modelo?

Experimente ajustar o controle abaixo e veja como isso altera o treinamento do modelo.
<ResponsiveIframe  style={{overflow: 'hidden'}}
    src="https://observablehq.com/embed/5a4e3b0d0f0c7b0b@1396?cells=viewof+temperatura32%2CGrafico"
    ratio='12:10'/>

Percebeu como um dado excepcional pode impactar o modelo? Seja um evento especial de vendas ou um erro na coleta de dados. Um valor discrepante (*outlier*) influenciao desempenho do modelo. Se a exceção for muito maior que a realidade, o modelo tenderá a um viés otimista nas vendas.

Na seção anterior, mencionei o caso da Amazon, que enfrentou problemas com sua ferramenta de recrutamento baseada em IA. A empresa usou a IA para avaliar currículos, mas em 2015 descobriu que o sistema não classificava candidatos para cargos técnicos de forma neutra em termos de gênero. Isso ocorreu porque os modelos da Amazon foram treinados com dados históricos, que refletiam uma predominância masculina no setor de tecnologia. O sistema acabou favorecendo candidatos do sexo masculino e penalizando currículos que mencionavam "mulheres" ou instituições exclusivamente femininas.

# Detecção de cancer de pele
Dada a importância e a criticidade do viés na adoção de IA, apresento mais um exemplo relevante. Peço desculpas se o tema for sensível para você; sinta-se à vontade para pular este tópico. Contudo, considero este caso particularmente emblemático.

Em um artigo publicado na revista Nature em 2017, foi descrito um sistema de IA desenvolvido para diagnosticar lesões malignas da pele. O sistema apresentava precisão comparável à de dermatologistas humanos. O estudo revelou que o sistema foi treinado com um conjunto de dados composto por quase 130 mil imagens clínicas, o que representava um avanço significativo na área.

Entretanto, após a publicação, os autores do estudo notaram a existência de viés no modelo treinado. O sistema demonstrou uma tendência maior a detectar câncer quando a imagem do paciente analisada incluía uma régua. Por quê? Em imagens médicas de lesões cancerígenas, a régua é frequentemente utilizada para fornecer uma escala, enquanto em imagens de lesões não cancerígenas, essa preocupação não é comum. Como resultado, o modelo aprendeu a associar a presença da régua a um indicativo de malignidade, em vez de identificar características reais do câncer.

Em um novo artigo publicado no ano seguinte, os pesquisadores discutiram os riscos associados a esse viés:

>Por exemplo, em nosso trabalho, observamos que o algoritmo parecia ter maior probabilidade de interpretar imagens com réguas como malignas. Por quê? Em nosso conjunto de dados, imagens com réguas eram mais propensas a serem malignas; assim, o algoritmo inadvertidamente “aprendeu” que réguas são malignas. Esses vieses em modelos de IA são inerentes, a menos que se dê atenção específica para lidar com entradas com variabilidade. Uma abordagem alternativa é incorporar padrões rigorosos e/ou hardware que permita a padronização das fotos, mas isso reduz o potencial de escalabilidade. 


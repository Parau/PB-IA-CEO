---
sidebar_position: 3
---
import LigaHighlight from '@site/src/components/gsap/highlight'
import BoasVindasChatGPT from '@site/src/components/BoasVindasChatGPTAlucina'
import ReactPlayer from 'react-player'


# Alucinações
Após o lançamento da versão GPT-4o, um colega propôs um desafio visual a essa nova versão do ChatGPT: analisar a foto de uma estátua recém-inaugurada. A resposta peculiar da IA chamou minha atenção. Registrei essa experiência para compartilhar neste capítulo, pois revela de forma vívida as nuances da inteligência artificial em ação.

<center>
<ReactPlayer url='https://youtu.be/l_N_XcEU71s' controls='true' />
</center>
<br />
No vídeo, uma estátua de bronze de um jogador de futebol está posicionada em frente ao Estádio Joaquim Américo, casa do Clube Atlético Paranaense. Na primeira pergunta, o ChatGPT descreve corretamente a estátua, mencionando os detalhes visuais e a localização, mas erra ao identificar o atleta, chamando-o de Alex. Esse tipo de erro, conhecido como alucinação, ocorre quando o modelo gera informações incorretas ou inventadas.

Na segunda pergunta, com novas orientações específicas indicando que o atleta é o maior artilheiro da história do clube, o ChatGPT corrige a resposta e identifica corretamente o jogador. Esse exemplo mostra como fornecer informações adicionais pode ajudar o modelo a gerar respostas mais precisas.

Algum tempo depois, repeti a mesma pergunta e o ChatGPT forneceu a resposta correta. Isso ilustra duas coisas: primeiro, como as ferramentas de IA passam por ajustes constantes baseados nas interações com os usuários; e segundo, o risco de que, devido à forma convincente como os modelos de linguagem geram texto, possamos acreditar em respostas incorretas.

No caso registrado, o ocorrido não gerou consequências significativas além de uma troca de mensagens no WhatsApp entre amigos comentando o erro. No entanto, casos como os da Air Canada e do escritório de advocacia Levidow, Levidow & Oberman, descritos a seguir, mostram que erros em respostas de IA podem ter implicações mais sérias.

## Erro do ChatBot da Air Canada
No tribunal de resoluções civis da Colúmbia Britânica, a companhia aérea Air Canada foi considerada responsável por seu chatbot dar conselhos errados a um passageiro. Em 2022, o chatbot da Air Canada prometeu um desconto que não estava disponível para o passageiro Jake Moffatt, que foi assegurado de que poderia reservar um voo com tarifa integral para o funeral de sua avó e depois solicitar uma tarifa de luto após o fato. 
Disse o chatbot: 

>A Air Canada oferece [tarifas de luto](https://www.aircanada.com/ca/en/aco/home/plan/special-assistance/bereavement-fares.html) reduzidas caso você precise viajar devido à morte iminente ou falecimento de um familiar próximo ...
>
>... Se você precisar viajar imediatamente ou já viajou e deseja solicitar a tarifa de luto reduzida para o seu bilhete, por gentileza, faça-o dentro de 90 dias da data de emissão do bilhete preenchendo o nosso formulário de Solicitação de Reembolso de Passagem.

No entanto, ao solicitar o desconto, a companhia aérea afirmou que o chatbot estava errado — o pedido precisava ser feito antes do voo conforme link presente no texto — e não ofereceria o desconto. A Air Canada argumentou que Moffatt deveria ter seguido o link fornecido pelo chatbot, onde teria visto a política correta. O tribunal da Colúmbia Britânica rejeitou esse argumento, considerando que a Air Canada não explicou por que o passageiro deveria desconfiar de informações fornecidas em seu próprio site pelo chatbot. "Apesar de um chatbot ter um componente interativo, ele ainda é apenas parte do site da Air Canada.  Deveria ser óbvio para a Air Canada que ela é responsável por toda a informação presente em seu site. Não faz diferença se a informação vem de uma página estática ou de um chatbot", escreveu Christopher C. Rivers, Membro do Tribunal, no texto de decisão sobre o caso. 

## Advogados são multados por usar o ChatGPT
Um outro caso que veio a tona em 2023 foi sobre o caso em que o passageiro Roberto Mata moveu um processo contra a companhia aérea Avianca, dizendo que se feriu quando um carrinho de metal atingiu seu joelho durante um voo para o Aeroporto Internacional Kennedy, em Nova York.
Quando a Avianca no decorrer do processo pediu a um juiz federal de Manhattan para encerrar o caso, os advogados do Sr. Mata se opuseram, apresentando um documento de 10 páginas que citava mais de meia dúzia de decisões judiciais relevantes.
Acontece que o advogado responsável pelo caso contra a Avianca, usou o ChatGPT para consultar outros casos semelhantes ao dele e o chatbot respondeu. Para se assegurar da resposta o profissional, então, pediu para o o ChatGPT confirmar se as informações eram verdadeiras e pediu as fontes de onde os processos anteriores poderiam ser encontrados. Novamente, o ChatGPT respondeu. Confiando na IA, ele não verificou as fontes e apresentou as informações no tribunal.
Resultado: ninguém - nem os advogados da companhia aérea, nem mesmo o próprio juiz - conseguiu encontrar as decisões ou citações resumidas no documento. O juiz considerou a situação "sem precedentes" e ordenou uma audiência para avaliar possíveis sanções contra o advogado. Nesta audiência advogados e escritórios foram foram multados em US$ 5.000 por apresentar citações falsas em um documento judicial.

# O risco da alucinação
Uma alucinação nas ferramentas de IA generativa é quando o modelo gera uma resposta que parece plausível, mas é incorreta ou inventada, sem base em dados reais ou fatos.

O termo "alucinação" é usado porque, assim como uma alucinação em seres humanos envolve a percepção de algo que não está presente na realidade, uma alucinação nos modelos de linguagem refere-se à geração de informações que não têm fundamento real, mas que podem parecer convincentes e reais.

# Por que a ferramenta alucina?
Ferramentas baseadas em IA, como o ChatGPT, funcionam prevendo probabilidades de sequências de palavras. Cada palavra gerada é escolhida com base nas probabilidades calculadas a partir do texto atual. Quando o modelo faz uma previsão errada ou menos provável, pode resultar em uma "alucinação", ou seja, uma resposta que não é factualmente correta.

<BoasVindasChatGPT />

O ChatGPT foi treinado em vastos conjuntos de dados de texto, onde aprendeu padrões estatísticos e associações. No entanto, quando confrontado com perguntas ambíguas, incomuns ou com informações insuficientes nos dados de treinamento, a certeza sobre a próxima palavra a ser gerada diminui. Isso significa que a distribuição de probabilidade das possíveis próximas palavras se torna mais dispersa (menos concentrada em uma única palavra).

Embora o termo "alucinação" seja frequentemente associado a ferramentas de IA generativa, o conceito se aplica a qualquer sistema desenvolvido com *machine learning*. Produzir saídas incorretas ou inesperadas é um fenômeno comum a todos os tipos de modelos de aprendizado de máquina.

Isso destaca a importância dos dados de treinamento. A qualidade, quantidade e representatividade desses dados são fundamentais para o desempenho de qualquer modelo de *machine learning*. Dados de treinamento inadequados, enviesados ou incompletos podem levar a previsões errôneas e comportamentos inesperados, seja em modelos generativos ou não.

Empresas que compreendem e aplicam corretamente os princípios de machine learning podem obter uma vantagem competitiva significativa. Como líder na sua organização, é fundamental promover uma cultura que atente aos riscos relacionados ao uso de ferramentas de IA e desenvolver uma base robusta de dados, seja treinando modelos próprios ou adaptando modelos prontos para as necessidades específicas do seu negócio.
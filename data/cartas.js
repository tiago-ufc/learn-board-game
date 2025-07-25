const todasCartas = {
  decisao_arquitetural: [
    {
      "id": 1,
      "tipo": "decisao_arquitetural",
      "titulo": "Escolha da Tecnologia",
      "definicao": "Define quais as tecnologias disponíveis para realizar as demais decisões arquiteturais.",
      "afirmativa": "A escolha da tecnologia é realizada apenas pelo arquiteto pois é a pessoa com mais experiência no time de projeto.",
      "resposta": false,
      "justificativa": "A escolha da tecnologia pode ser feita tanto pelo arquiteto de software como por terceiros.",
      "estrelas": 2
    },
    {
      "id": 2,
      "tipo": "decisao_arquitetural",
      "titulo": "Escolha da Tecnologia",
      "definicao": "Define quais as tecnologias disponíveis para realizar as demais decisões arquiteturais.",
      "afirmativa": "Durante a escolha da tecnologia é analisado a familiaridade interna do time de projeto com a tecnologia como também a disponibilidade de suporte externo.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 3,
      "tipo": "decisao_arquitetural",
      "titulo": "Modelo de Dados",
      "definicao": "Representa a coleção de dados de interesse e como eles são interpretados.",
      "afirmativa": "O modelo de dados identifica os recursos que precisam ser gerenciados pelo sistema.",
      "resposta": false,
      "justificativa": "O modelo de dados identifica as responsabilidades importantes: funções básicas do sistema, infraestrutura arquitetural e satisfação aos critérios de qualidade.",
      "estrelas": 4
    },
    {
      "id": 4,
      "tipo": "decisao_arquitetural",
      "titulo": "Modelo de Dados",
      "definicao": "Representa a coleção de dados de interesse e como eles são interpretados.",
      "afirmativa": "O modelo de dados determina todos os custos que envolvem as tecnologias do projeto.",
      "resposta": false,
      "justificativa": "Determina como as responsabilidades serão alocadas em elementos estruturais e comportamentais (módulos, componentes e conectores).",
      "estrelas": 4
    },
    {
      "id": 5,
      "tipo": "decisao_arquitetural",
      "titulo": "Mapeamento entre Elementos",
      "definicao": "Representa o mapeamento dos elementos de uma arquitetura.",
      "afirmativa": "Um exemplo de mapeamento é o realizado entre unidades de desenvolvimento (módulos) para unidades de execução (processos).",
      "resposta": true,
      "justificativa": "Verdadeiro. outro exemplo é o mapeamento de processos para CPUs específicas onde esses processos são executados.",
      "estrelas": 2
    },
    {
      "id": 6,
      "tipo": "decisao_arquitetural",
      "titulo": "Mapeamento entre Elementos",
      "definicao": "Representa o mapeamento dos elementos de uma arquitetura.",
      "afirmativa": "Uma arquitetura provê dois tipos de mapeamento: (1) entre os elementos em diferentes visões; (2) entre os elementos de software para elementos de hardware.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 4
    },
    {
      "id": 7,
      "tipo": "decisao_arquitetural",
      "titulo": "Binding Time",
      "definicao": "Introduzem faixas de variações permitidas sobre decisões arquiteturais.",
      "afirmativa": "Uma decisão binding time define o escopo, o ponto de ciclo de vida e ainda os mecanismos para atender à variação.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 4
    },
    {
      "id": 8,
      "tipo": "decisao_arquitetural",
      "titulo": "Binding Time",
      "definicao": "Introduzem faixas de variações permitidas sobre decisões arquiteturais.",
      "afirmativa": "Ao tomar uma decisão binding time é preciso considerar tanto os custos para implementar a decisão como os custos para fazer uma modificação após a implementação.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 9,
      "tipo": "decisao_arquitetural",
      "titulo": "Gerenciamento de Recursos",
      "definicao": "Refere-se à utilização de recursos compartilhados na arquitetura.",
      "afirmativa": "As decisões de gerenciamento de recursos determinam as funções básicas do sistema e a infraestrutura arquitetural.",
      "resposta": false,
      "justificativa": "Identifica os recursos que devem ser gerenciados e determina os limites de cada um. Indicando o impacto da saturação em diferentes recursos.",
      "estrelas": 6
    },
    {
      "id": 10,
      "tipo": "decisao_arquitetural",
      "titulo": "Escolha da Tecnologia",
      "definicao": "Define quais as tecnologias disponíveis para realizar as demais decisões arquiteturais.",
      "afirmativa": "A escolha de tecnologia depende de qual atributo de qualidade o software está mais focado, seja na escalabilidade, segurança, ou outros atributos.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 11,
      "tipo": "decisao_arquitetural",
      "titulo": "Escolha da Tecnologia",
      "definicao": "Define quais as tecnologias disponíveis para realizar as demais decisões arquiteturais.",
      "afirmativa": "As decisões de tecnologia de uma arquitetura dizem respeito somente ao software e não ao hardware.",
      "resposta": false,
      "justificativa": "O hardware tem relação com ambiente de desenvolvimento e implantação da aplicação, por isso as tecnologias adequadas devem ser selecionadas considerando software e hardware.",
      "estrelas": 2
    },
    {
      "id": 12,
      "tipo": "decisao_arquitetural",
      "titulo": "Modelo de Dados",
      "definicao": "Representa a coleção de dados de interesse e como eles são interpretados.",
      "afirmativa": "O modelo de dados é a decisão que define as entidades do sistema, como cada uma vai se relacionar e os atributos presentes em cada.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 4
    },
    {
      "id": 13,
      "tipo": "decisao_arquitetural",
      "titulo": "Modelo de Dados",
      "definicao": "Representa a coleção de dados de interesse e como eles são interpretados.",
      "afirmativa": "Uma das representações do modelo de dados são os diagramas UML, como por exemplo o diagrama de Classes.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 4
    },
    {
      "id": 14,
      "tipo": "decisao_arquitetural",
      "titulo": "Mapeamento entre Elementos",
      "definicao": "Representa o mapeamento dos elementos de uma arquitetura.",
      "afirmativa": "No mapeamento entre elementos é definido qual protocolo de comunicação será utilizado entre os elementos.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 15,
      "tipo": "decisao_arquitetural",
      "titulo": "Mapeamento entre Elementos",
      "definicao": "Representa o mapeamento dos elementos de uma arquitetura.",
      "afirmativa": "Essa decisão não tem impacto significativo em características como eficiência, escalabilidade e confiabilidade.",
      "resposta": false,
      "justificativa": "Esse tipo de decisão influencia diretamente nos atributos de qualidade citados.",
      "estrelas": 4
    },
    {
      "id": 16,
      "tipo": "decisao_arquitetural",
      "titulo": "Binding Time",
      "definicao": "Introduzem faixas de variações permitidas sobre decisões arquiteturais.",
      "afirmativa": "Um exemplo de binding time são as configurações que o usuário pode realizar em uma aplicação para ativar novas funcionalidades ou recursos.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 4
    },
    {
      "id": 17,
      "tipo": "decisao_arquitetural",
      "titulo": "Binding Time",
      "definicao": "Introduzem faixas de variações permitidas sobre decisões arquiteturais.",
      "afirmativa": "As decisões de binding time reduzem a complexidade do sistema e os cenários de uso propensos a erros.",
      "resposta": false,
      "justificativa": "As decisões de binding time não visam principalmente reduzir a complexidade ou evitar erros, mas sim determinar quando certas escolhas são feitas durante o desenvolvimento de um sistema ou programa.",
      "estrelas": 2
    },

    {
      "id": 18,
      "tipo": "decisao_arquitetural",
      "titulo": "Gerenciamento de Recursos",
      "definicao": "Refere-se à utilização de recursos compartilhados na arquitetura.",
      "afirmativa": "Esse tipo de decisão arquitetural não lida com o gerenciamento de falhas, pois para ele não é essencial montar uma estratégia em caso de falha de recursos.",
      "resposta": false,
      "justificativa": "O gerenciamento de recursos lida desde o descobrimento da falha até o seu conserto.",
      "estrelas": 6
    },
    {
      "id": 19,
      "tipo": "decisao_arquitetural",
      "titulo": "Gerenciamento de Recursos",
      "definicao": "Refere-se à utilização de recursos compartilhados na arquitetura.",
      "afirmativa": "A CPU é um exemplo de recurso compartilhado considerado no gerenciamento de recursos.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 20,
      "tipo": "decisao_arquitetural",
      "titulo": "Alocação de Responsabilidades",
      "definicao": "Referem-se às decisões que incluem a decomposição funcional, modelagem de objetos do mundo real e agrupamento.",
      "afirmativa": "As decisões de alocação de responsabilidades identificam funções básicas do sistema, a infraestrutura arquitetural e a satisfação aos critérios de qualidade.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 21,
      "tipo": "decisao_arquitetural",
      "titulo": "Alocação de Responsabilidades",
      "definicao": "Referem-se às decisões que incluem a decomposição funcional, modelagem de objetos do mundo real e agrupamento.",
      "afirmativa": "A alocação de responsabilidades determina os mecanismos de comunicação interna e externa ao sistema.",
      "resposta": false,
      "justificativa": "Essa ação é realizada com decisões de modelo de coordenação.",
      "estrelas": 4
    },
    {
      "id": 22,
      "tipo": "decisao_arquitetural",
      "titulo": "Modelo de Coordenação",
      "definicao": "Compreende os mecanismos de comunicação entre os elementos.",
      "afirmativa": "Decisões de modelo de coordenação identificam e atribuem elementos em tempo de execução para processadores.",
      "resposta": false,
      "justificativa": "O modelo de coordenação identifica os elementos do sistema que devem ou não devem coordenar.",
      "estrelas": 4
    },
    {
      "id": 23,
      "tipo": "decisao_arquitetural",
      "titulo": "Modelo de Coordenação",
      "definicao": "Compreende os mecanismos de comunicação entre os elementos.",
      "afirmativa": "As decisões de modelo de coordenação determinam as propriedades de comunicação como segurança, testabilidade e desempenho.",
      "resposta": false,
      "justificativa": "São exemplos de propriedades de comunicação: pontualidade, concorrência, completude, corretude e consistência.",
      "estrelas": 4
    },
    {
      "id": 24,
      "tipo": "decisao_arquitetural",
      "titulo": "Gerenciamento de Recursos",
      "definicao": "Refere-se à utilização de recursos compartilhados na arquitetura.",
      "afirmativa": "As decisões de gerenciamento de recurso buscam maximizar a eficiência de todos os recursos do software, desde a sua programação, desempenho de procedures até mesmo o hardware.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 25,
      "tipo": "decisao_arquitetural",
      "titulo": "Alocação de Responsabilidades",
      "definicao": "Referem-se às decisões que incluem a decomposição funcional, modelagem de objetos do mundo real e agrupamento.",
      "afirmativa": "A decisão arquitetural de alocação de responsabilidades abrange o software como um todo, e não olha especificamente para cada componente do sistema para determinar a funcionalidade de cada um.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 26,
      "tipo": "decisao_arquitetural",
      "titulo": "Alocação de Responsabilidades",
      "definicao": "Referem-se às decisões que incluem a decomposição funcional, modelagem de objetos do mundo real e agrupamento.",
      "afirmativa": "Um exemplo de alocação de responsabilidades é definir que a validação de dados é da camada lógica, enquanto o acesso, armazenamento e recuperação de dados é da camada de acesso a dados.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 4
    },
    {
      "id": 27,
      "tipo": "decisao_arquitetural",
      "titulo": "Modelo de Coordenação",
      "definicao": "Compreende os mecanismos de comunicação entre os elementos.",
      "afirmativa": "O modelo de coordenação deve ser projetado para minimizar os gargalos do sistema, pois impacta ativamente na escalabilidade.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 28,
      "tipo": "decisao_arquitetural",
      "titulo": "Modelo de Coordenação",
      "definicao": "Compreende os mecanismos de comunicação entre os elementos.",
      "afirmativa": "Um exemplo de modelo de coordenação em um sistema de comércio eletrônico é gerenciar estoque, processamento de pagamento e notificações de envio para atender a um pedido.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 4
    },    
  ],
  atributo_qualidade: [
    {
      "id": 29,
      "tipo": "atributo_qualidade",
      "titulo": "Disponibilidade",
      "definicao": "Refere-se à capacidade de um sistema para mascarar um período de interrupção do serviço num intervalo de tempo.",
      "afirmativa": "Não se pode mensurar a disponibilidade de um sistema que esteja disponível 24 horas, em 7 dias por semana.",
      "resposta": false,
      "justificativa": "A disponibilidade pode ser medida pelo tempo percentual, o tempo para detectar uma falha, o tempo para reparar uma falha.",
      "estrelas": 4
    },
    {
      "id": 30,
      "tipo": "atributo_qualidade",
      "titulo": "Disponibilidade",
      "definicao": "Refere-se à capacidade de um sistema para mascarar um período de interrupção do serviço num intervalo de tempo.",
      "afirmativa": "A disponibilidade de um sistema está intimamente relacionada com a segurança, desempenho e qualquer outro atributo que envolva o conceito de falha inaceitável.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 4
    },
    {
      "id": 31,
      "tipo": "atributo_qualidade",
      "titulo": "Interoperabilidade",
      "definicao": "Refere-se ao grau em que dois ou mais sistemas podem trocar informações úteis através de interfaces em um contexto específico.",
      "afirmativa": "É possível medir a interoperabilidade entre sistemas através de uma pré-análise do que se pode alterar no sistema.",
      "resposta": false,
      "justificativa": "É possível medi-la através da porcentagem de troca de informações processadas corretamente ou informações corretamente rejeitadas entre sistemas.",
      "estrelas": 6
    },
    {
      "id": 32,
      "tipo": "atributo_qualidade",
      "titulo": "Interoperabilidade",
      "definicao": "Refere-se ao grau em que dois ou mais sistemas podem trocar informações úteis através de interfaces em um contexto específico.",
      "afirmativa": "Dois sistemas podem trocar informações sem se comunicarem diretamente.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 33,
      "tipo": "atributo_qualidade",
      "titulo": "Disponibilidade",
      "definicao": "Refere-se à capacidade de um sistema para mascarar um período de interrupção do serviço num intervalo de tempo.",
      "afirmativa": "Quando o sistema tem falha de disponibilidade, ele se repara, sendo o mais transparente possível para o usuário.",
      "resposta": false,
      "justificativa": "O sistema busca abstrair o usuário dessa falha.",
      "estrelas": 4
    },
    {
      "id": 34,
      "tipo": "atributo_qualidade",
      "titulo": "Disponibilidade",
      "definicao": "Refere-se à capacidade de um sistema para mascarar um período de interrupção do serviço num intervalo de tempo.",
      "afirmativa": "Ao construir um sistema com alta disponibilidade, um ponto importante é entender de onde surgem as falhas. Uma vez entendidas, estratégias para lidar podem ser projetadas.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 4
    },
    {
      "id": 35,
      "tipo": "atributo_qualidade",
      "titulo": "Interoperabilidade",
      "definicao": "Refere-se ao grau em que dois ou mais sistemas podem trocar informações úteis através de interfaces em um contexto específico.",
      "afirmativa": "A interoperabilidade pode aumentar a eficiência operacional e reduzir custos para as organizações, uma vez que permite a troca eficaz de informações e recursos.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 6
    },
    {
      "id": 36,
      "tipo": "atributo_qualidade",
      "titulo": "Interoperabilidade",
      "definicao": "Refere-se ao grau em que dois ou mais sistemas podem trocar informações úteis através de interfaces em um contexto específico.",
      "afirmativa": "A interoperabilidade total entre sistemas pode ser complexa e requer investimentos significativos em termos de tecnologia, integração e conformidade com padrões.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 37,
      "tipo": "atributo_qualidade",
      "titulo": "Modificabilidade",
      "definicao": "Refere-se à mudança, no custo e nos riscos de fazer alterações no sistema.",
      "afirmativa": "Para realizar uma alteração no sistema é preciso que se considere a probabilidade da alteração, quando a alteração será feita, por quem e qual seu custo.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 38,
      "tipo": "atributo_qualidade",
      "titulo": "Modificabilidade",
      "definicao": "Refere-se à mudança, no custo e nos riscos de fazer alterações no sistema.",
      "afirmativa": "Tornar um sistema mais modificável envolve o custo da introdução dos mecanismos para torná-lo mais modificável e o custo da modificação usando esses mecanismos.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 39,
      "tipo": "atributo_qualidade",
      "titulo": "Desempenho",
      "definicao": "Refere-se ao tempo e à capacidade do sistema de atender aos requisitos de tempo.",
      "afirmativa": "O desempenho do sistema está geralmente associado diretamente à sua escalabilidade.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 4
    },
    {
      "id": 40,
      "tipo": "atributo_qualidade",
      "titulo": "Desempenho",
      "definicao": "Refere-se ao tempo e à capacidade do sistema de atender aos requisitos de tempo.",
      "afirmativa": "É possível medir o desempenho de um sistema pelo grau de satisfação do usuário em utilizá-lo.",
      "resposta": false,
      "justificativa": "O desempenho de um sistema pode ser medido pela taxa de perda, instabilidade, vazão e latência.",
      "estrelas": 2
    },
    {
      "id": 41,
      "tipo": "atributo_qualidade",
      "titulo": "Segurança",
      "definicao": "Refere-se à capacidade do sistema de proteger dados e informações contra acessos não autorizados.",
      "afirmativa": "É possível medir a segurança de um sistema pelo número de ataques detidos, pelo tempo de recuperação após um ataque bem-sucedido.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 42,
      "tipo": "atributo_qualidade",
      "titulo": "Disponibilidade",
      "definicao": "Refere-se à capacidade de um sistema para mascarar um período de interrupção do serviço num intervalo de tempo.",
      "afirmativa": "É possível caracterizar a segurança diante de três características simples: integridade, confidencialidade, disponibilidade.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 4
    },
    {
      "id": 43,
      "tipo": "atributo_qualidade",
      "titulo": "Testabilidade",
      "definicao": "Refere-se à facilidade com que o software pode ser feito para demonstrar suas falhas.",
      "afirmativa": "Se um software gera poucas falhas com diversos testes e tipos de entradas diferentes, ele tem uma alta testabilidade.",
      "resposta": false,
      "justificativa": "Para ter uma alta testabilidade o software tende a gerar muitas falhas de acordo com os testes. A ocultação de falhas tende à baixa testabilidade.",
      "estrelas": 4
    },
    {
      "id": 44,
      "tipo": "atributo_qualidade",
      "titulo": "Testabilidade",
      "definicao": "Refere-se à facilidade com que o software pode ser feito para demonstrar suas falhas.",
      "afirmativa": "A escolha da tecnologia determina quais tecnologias estão disponíveis para ajudar a alcançar os cenários de testabilidade que se aplicam à arquitetura.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 45,
      "tipo": "atributo_qualidade",
      "titulo": "Usabilidade",
      "definicao": "Refere-se à facilidade com que o usuário realiza uma tarefa desejada e com o tipo de suporte que o sistema oferece.",
      "afirmativa": "Por não ser possível medi-la, a usabilidade é uma das questões mais difíceis no desenvolvimento de um software.",
      "resposta": false,
      "justificativa": "É possível medir a usabilidade através do número de erros e de tarefas executadas pelo usuário, pela satisfação do usuário, pelo tempo de tarefa, etc.",
      "estrelas": 4
    },
    {
      "id": 46,
      "tipo": "atributo_qualidade",
      "titulo": "Modificabilidade",
      "definicao": "Refere-se à mudança, no custo e nos riscos de fazer alterações no sistema.",
      "afirmativa": "A modificabilidade está associada à coesão entre esses módulos, que é a dependência entre eles.",
      "resposta": false,
      "justificativa": "Essa forte ligação e acoplamento entre os módulos — alto acoplamento — é inimigo da modificabilidade.",
      "estrelas": 2
    },
    {
      "id": 47,
      "tipo": "atributo_qualidade",
      "titulo": "Modificabilidade",
      "definicao": "Refere-se à mudança, no custo e nos riscos de fazer alterações no sistema.",
      "afirmativa": "Quanto maior a coesão ou a modularidade, menor a probabilidade de que uma determinada mudança afete vários módulos. Alta coesão é boa para modificabilidade.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 48,
      "tipo": "atributo_qualidade",
      "titulo": "Desempenho",
      "definicao": "Refere-se ao tempo e à capacidade do sistema de atender aos requisitos de tempo.",
      "afirmativa": "O desempenho de um sistema está basicamente relacionado aos eventos que podem ocorrer, quando eles podem ocorrer e o tempo de resposta a esses eventos.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 4
    },
    {
      "id": 49,
      "tipo": "atributo_qualidade",
      "titulo": "Desempenho",
      "definicao": "Refere-se ao tempo e à capacidade do sistema de atender aos requisitos de tempo.",
      "afirmativa": "Eventos complexos, que envolvem várias requisições a diferentes componentes da arquitetura, podem comprometer o desempenho.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 50,
      "tipo": "atributo_qualidade",
      "titulo": "Segurança",
      "definicao": "Refere-se à capacidade do sistema de proteger dados e informações contra acessos não autorizados.",
      "afirmativa": "O estado inseguro de um sistema não está só atrelado ao seu software, mas também às partes do seu hardware e do ambiente onde ele está alocado.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 51,
      "tipo": "atributo_qualidade",
      "titulo": "Disponibilidade",
      "definicao": "Refere-se à capacidade de um sistema para mascarar um período de interrupção do serviço num intervalo de tempo.",
      "afirmativa": "Uma estratégia para garantir a segurança é não relatar imediatamente o estado de vulnerabilidade e sim, somente quando tudo estiver resolvido.",
      "resposta": false,
      "justificativa": "Essa estratégia de falha é justamente relatar imediatamente o estado de vulnerabilidade até solucionar o problema.",
      "estrelas": 4
    },
    {
      "id": 52,
      "tipo": "atributo_qualidade",
      "titulo": "Testabilidade",
      "definicao": "Refere-se à facilidade com que o software pode ser feito para demonstrar suas falhas.",
      "afirmativa": "O baixo acoplamento do código gera uma facilidade na testabilidade.",
      "resposta": false,
      "justificativa": "False, para ter uma alta testabilidade o software tende a gerar muitas falhas de acordo com os testes. A ocultação de falhas tende à baixa testabilidade.",
      "estrelas": 4
    },
    {
      "id": 53,
      "tipo": "atributo_qualidade",
      "titulo": "Testabilidade",
      "definicao": "Refere-se à facilidade com que o software pode ser feito para demonstrar suas falhas.",
      "afirmativa": "A testabilidade é somente a atividade de achar uma falha.",
      "resposta": false,
      "justificativa": "A testabilidade abrange desde a detecção do bug até sua correção.",
      "estrelas": 2
    },
    {
      "id": 54,
      "tipo": "atributo_qualidade",
      "titulo": "Usabilidade",
      "definicao": "Refere-se à facilidade com que o usuário realiza uma tarefa desejada e com o tipo de suporte que o sistema oferece.",
      "afirmativa": "A usabilidade não está ligada à diminuição de impactos de erros do usuário, criando táticas para que o usuário não cometa certos erros.",
      "resposta": false,
      "justificativa": "A usabilidade é justamente um atributo que tenta garantir que o produto seja fácil de usar, evitando erros.",
      "estrelas": 4
    },
    {
      "id": 55,
      "tipo": "atributo_qualidade",
      "titulo": "Usabilidade",
      "definicao": "Refere-se à facilidade com que o usuário realiza uma tarefa desejada e com o tipo de suporte que o sistema oferece.",
      "afirmativa": "Para considerar a usabilidade, é preciso que o sistema forneça as funcionalidades necessárias ao usuário e antecipe suas necessidades.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
  ],
  padrao_arquitetural: [
    {
      "id": 56,
      "tipo": "padrao_arquitetural",
      "titulo": "Divisão em Camadas",
      "definicao": "Estruturas de aplicações que podem ser decompostas em subáreas (camadas).",
      "afirmativa": "Podem existir várias camadas em um mesmo nível de abstração dependendo de camadas inferiores.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 57,
      "tipo": "padrao_arquitetural",
      "titulo": "Broker",
      "definicao": "Estruturação de sistemas distribuídos que precisam interagir através de invocação remota de serviços.",
      "afirmativa": "Brokers facilitam alterações dinâmicas nas conexões entre usuários e fornecedores.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 4
    },
    {
      "id": 58,
      "tipo": "padrao_arquitetural",
      "titulo": "Model-View-Controller",
      "definicao": "Aplicações divididas em três componentes: Model, View e Controller.",
      "afirmativa": "O MVC é utilizado quando há a necessidade de várias interfaces com o usuário.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    }, 
    {
      "id": 59,
      "tipo": "padrao_arquitetural",
      "titulo": "Cliente-Servidor",
      "definicao": "Baseado em programas clientes que estabelecem conexões e programas servidores que executam serviços.",
      "afirmativa": "Uma das vantagens do padrão cliente-servidor é a redução dos custos de comunicação.",
      "resposta": false,
      "justificativa": "Há grandes custos com comunicação.",
      "estrelas": 4
    },
    {
      "id": 60,
      "tipo": "padrao_arquitetural",
      "titulo": "Blackboard",
      "definicao": "Coleções de programas independentes que trabalham cooperativamente numa estrutura de dados comum.",
      "afirmativa": "É possível caracterizar a segurança diante de três características simples: integridade, confidencialidade, disponibilidade.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 4
    },
    {
      "id": 61,
      "tipo": "padrao_arquitetural",
      "titulo": "Ponto-a-ponto",
      "definicao": "Conecta um conjunto de entidades computacionais por meio de um protocolo comum.",
      "afirmativa": "No P2P cada nó de comunicação é cliente e servidor ao mesmo tempo.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 62,
      "tipo": "padrao_arquitetural",
      "titulo": "Repositório",
      "definicao": "Subsistemas manipulam uma mesma base de dados compartilhados.",
      "afirmativa": "Em repositório, os dados estão centralizados, tornando mais fácil evoluí-los.",
      "resposta": false,
      "justificativa": "A evolução de dados em repositórios é difícil e dispendiosa.",
      "estrelas": 4
    },
    {
      "id": 63,
      "tipo": "padrao_arquitetural",
      "titulo": "Pipes and Filters",
      "definicao": "Desenvolvimento de sistemas que processa ou transforma um stream de dados.",
      "afirmativa": "Com o Pipes and Filters, dados são processados paralelamente por meio de condutores e filtros.",
      "resposta": false,
      "justificativa": "Os dados são processados sequencialmente.",
      "estrelas": 4
    },    
    {
      "id": 64,
      "tipo": "padrao_arquitetural",
      "titulo": "Divisão em Camadas",
      "definicao": "Estruturas de aplicações que podem ser decompostas em subáreas (camadas).",
      "afirmativa": "Um dos pontos positivos dessa arquitetura é a liberdade entre as camadas, ou seja, uma alteração feita nas camadas inferiores não afeta as camadas superiores.",
      "resposta": false,
      "justificativa": "Um ponto desvantajoso desse padrão é o seu forte acoplamento entre as camadas, sendo assim uma alteração na camada inferior pode sim afetar uma camada superior.",
      "estrelas": 2
    },
    {
      "id": 65,
      "tipo": "padrao_arquitetural",
      "titulo": "Divisão em Camadas",
      "definicao": "Estruturas de aplicações que podem ser decompostas em subáreas (camadas).",
      "afirmativa": "Como a característica do desenvolvimento de uma arquitetura em camadas é justamente o desenvolvimento de partes separadas, é necessário uma baixa coesão.",
      "resposta": false,
      "justificativa": "O desenvolvimento desse padrão não necessariamente busca uma baixa coesão e sim alta, para que componentes dentro de cada camada trabalhem juntos da melhor maneira possível.",
      "estrelas": 2
    },
    {
      "id": 66,
      "tipo": "padrao_arquitetural",
      "titulo": "Divisão em Camadas",
      "definicao": "Estruturas de aplicações que podem ser decompostas em subáreas (camadas).",
      "afirmativa": "Com a construção do sistema em camadas, a sua manutenção se torna mais simples, pois qualquer alteração pode ser feita na camada em específica sem afetar o funcionamento geral do sistema.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 3
    },   
    {
      "id": 67,
      "tipo": "padrao_arquitetural",
      "titulo": "Broker",
      "definicao": "Estruturação de sistemas distribuídos que precisam interagir através de invocação remota de serviços.",
      "afirmativa": "Como o Broker é uma arquitetura construída para um sistema distribuído existe transparência de localização, ou seja, é mostrado onde o servidor e o cliente estão.",
      "resposta": false,
      "justificativa": "O conceito de transparência para esse padrão arquitetural é o oposto: abstrai do cliente sua real localização, mostrando somente um sistema único e coerente.",
      "estrelas": 4
    },
    {
      "id": 68,
      "tipo": "padrao_arquitetural",
      "titulo": "Broker",
      "definicao": "Estruturação de sistemas distribuídos que precisam interagir através de invocação remota de serviços.",
      "afirmativa": "Na arquitetura Broker caso algum servidor caia, o usuário não percebe essa perda, pois outro servidor é chamado para realizar a requisição, sendo algo não visto a nível de cliente.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 4
    },
    {
      "id": 69,
      "tipo": "padrao_arquitetural",
      "titulo": "Broker",
      "definicao": "Estruturação de sistemas distribuídos que precisam interagir através de invocação remota de serviços.",
      "afirmativa": "Uma característica desse padrão arquitetônico é a comunicação assíncrona, o qual os componentes do sistema enviam as mensagens uns para os outros sem a necessidade de uma resposta imediata.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 70,
      "tipo": "padrao_arquitetural",
      "titulo": "Cliente-Servidor",
      "definicao": "Baseado em programas clientes que estabelecem conexões e programas servidores que executam serviços.",
      "afirmativa": "Devido à implementação da comunicação ocorrer através de uma rede, as mensagens podem atrasar e assim diminuir o desempenho do sistema.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 4
    },
    {
      "id": 71,
      "tipo": "padrao_arquitetural",
      "titulo": "Cliente-Servidor",
      "definicao": "Baseado em programas clientes que estabelecem conexões e programas servidores que executam serviços.",
      "afirmativa": "A conexão entre um servidor e seus clientes é estabelecida estaticamente, sendo assim o servidor não sabe quem são seus clientes, por consequência há um baixo acoplamento entre eles.",
      "resposta": false,
      "justificativa": "A comunicação entre Cliente e Servidor é feita dinamicamente.",
      "estrelas": 4
    },
    {
      "id": 72,
      "tipo": "padrao_arquitetural",
      "titulo": "Cliente-Servidor",
      "definicao": "Baseado em programas clientes que estabelecem conexões e programas servidores que executam serviços.",
      "afirmativa": "Esse padrão é caracterizado por uma difícil manutenção, apesar da separação clara entre cliente e servidor o acoplamento do sistema dificulta a manutenção do mesmo.",
      "resposta": false,
      "justificativa": "Devido à sua separação clara entre Cliente e Servidor, a manutenção torna-se mais fácil.",
      "estrelas": 2
    },
    {
      "id": 73,
      "tipo": "padrao_arquitetural",
      "titulo": "Model-View-Controller",
      "definicao": "Aplicações divididas em três componentes: Model, View e Controller.",
      "afirmativa": "Como a arquitetura MVC promove uma separação clara entre as partes do sistema, uma alteração no layout da interface terá consequência para Model ou Controller.",
      "resposta": false,
      "justificativa": "O layout da interface não altera diretamente o Model ou Controller.",
      "estrelas": 2
    },

    {
      "id": 74,
      "tipo": "padrao_arquitetural",
      "titulo": "Model-View-Controller",
      "definicao": "Aplicações divididas em três componentes: Model, View e Controller.",
      "afirmativa": "A arquitetura MVC tende a ter um baixo acoplamento entre a Controller e Views, diminuindo assim sua complexidade.",
      "resposta": false,
      "justificativa": "Falso, o nível de acoplamento entre a Controller e Views pode variar de acordo com a implementação, podendo ser um sistema de baixo acoplamento, como também um com acoplamento alto.",
      "estrelas": 2
    },

    {
      "id": 75,
      "tipo": "padrao_arquitetural",
      "titulo": "Model-View-Controller",
      "definicao": "Aplicações divididas em três componentes: Model, View e Controller.",
      "afirmativa": "Uma das vantagens desse padrão de arquitetura é a segurança da consistência dos dados, pois a Controller funciona como um filtro não permitindo que algum dado incoerente chegue no Model.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 4
    },
    {
      "id": 76,
      "tipo": "padrao_arquitetural",
      "titulo": "Repositório",
      "definicao": "Subsistemas manipulam uma mesma base de dados compartilhados.",
      "afirmativa": "Caso haja muitas requisições ao mesmo tempo, pode se formar um gargalo, diminuindo o desempenho do sistema.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 77,
      "tipo": "padrao_arquitetural",
      "titulo": "Repositório",
      "definicao": "Subsistemas manipulam uma mesma base de dados compartilhados.",
      "afirmativa": "Uma das características do Repositório é a abstração de dados, que facilita o acesso e a manipulação de informações de maneira consistente em todo o sistema.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 4
    },
    {
      "id": 78,
      "tipo": "padrao_arquitetural",
      "titulo": "Repositório",
      "definicao": "Subsistemas manipulam uma mesma base de dados compartilhados.",
      "afirmativa": "Essa arquitetura tem como vantagem a falta de um único ponto de falha já que existem vários clientes e um repositório de dados compartilhados.",
      "resposta": false,
      "justificativa": "Esse padrão tem como ponto de falha o próprio repositório, pois caso haja muitas requisições o mesmo pode ter instabilidade.",
      "estrelas": 4
    },
    {
      "id": 79,
      "tipo": "padrao_arquitetural",
      "titulo": "Pipes and Filters",
      "definicao": "Desenvolvimento de sistemas que processa ou transforma um stream de dados.",
      "afirmativa": "A arquitetura Pipes and Filters é a melhor escolha para sistemas em tempo real.",
      "resposta": false,
      "justificativa": "Os dados são processados sequencialmente.",
      "estrelas": 4
    },
    {
      "id": 80,
      "tipo": "padrao_arquitetural",
      "titulo": "Pipes and Filters",
      "definicao": "Desenvolvimento de sistemas que processa ou transforma um stream de dados.",
      "afirmativa": "O padrão arquitetural Pipes and Filters não se preocupa com a organização sequencial do processamento de dados, permitindo que as etapas de processamento ocorram de forma aleatória.",
      "resposta": false,
      "justificativa": "O Pipes and Filters é um padrão que funciona de forma sequencial, o processamento ocorre em uma ordem predefinida.",
      "estrelas": 2
    },
    {
      "id": 81,
      "tipo": "padrao_arquitetural",
      "titulo": "Pipes and Filters",
      "definicao": "Desenvolvimento de sistemas que processa ou transforma um stream de dados.",
      "afirmativa": "O componente pipeline, responsável por dividir tarefas complexas em pequenas partes, é altamente escalável e paralelizável.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 6
    },
    {
      "id": 82,
      "tipo": "padrao_arquitetural",
      "titulo": "Arquitetura Orientada a Serviços (SOA)",
      "definicao": "Promove a integração do negócio com a tecnologia da informação por meio de componentes de serviços.",
      "afirmativa": "Sempre que ocorre a entrada dos serviços é feita uma validação, aumentando assim o desempenho do serviço e diminuindo o tempo de resposta do mesmo.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 83,
      "tipo": "padrao_arquitetural",
      "titulo": "Arquitetura Orientada a Serviços (SOA)",
      "definicao": "Promove a integração do negócio com a tecnologia da informação por meio de componentes de serviços.",
      "afirmativa": "No SOA, os serviços são componentes de software altamente acoplados e não podem ser reutilizados em diferentes partes do sistema.",
      "resposta": false,
      "justificativa": "A ideia desse padrão arquitetural é reduzir o acoplamento do sistema e dividir as funcionalidades em serviços reutilizáveis.",
      "estrelas": 4
    },
    {
      "id": 84,
      "tipo": "padrao_arquitetural",
      "titulo": "Arquitetura Orientada a Serviços (SOA)",
      "definicao": "Promove a integração do negócio com a tecnologia da informação por meio de componentes de serviços.",
      "afirmativa": "O barramento de serviços é o componente que facilita a comunicação entre os consumidores e os provedores dos serviços.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 4
    },
    {
      "id": 85,
      "tipo": "padrao_arquitetural",
      "titulo": "Ponto-a-Ponto (P2P)",
      "definicao": "Conecta um conjunto de entidades computacionais por meio de um protocolo comum.",
      "afirmativa": "Apesar de todos os nós fornecerem e consumirem os mesmos serviços e utilizarem protocolos iguais, ainda assim existem nós mais críticos que outros tendo assim um ponto de falha.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 86,
      "tipo": "padrao_arquitetural",
      "titulo": "Ponto-a-Ponto (P2P)",
      "definicao": "Conecta um conjunto de entidades computacionais por meio de um protocolo comum.",
      "afirmativa": "Como cada nó é cliente e servidor ao mesmo tempo, a segurança de seus dados é um ponto de desvantagem para essa arquitetura.",
      "resposta": false,
      "justificativa": "Nesse padrão arquitetural não existe ponto de falha, todos os nós têm a mesma complexidade.",
      "estrelas": 4
    },
    {
      "id": 87,
      "tipo": "padrao_arquitetural",
      "titulo": "Ponto-a-Ponto (P2P)",
      "definicao": "Conecta um conjunto de entidades computacionais por meio de um protocolo comum.",
      "afirmativa": "Um ponto de vantagem desse padrão arquitetural é a escalabilidade, pois a adição de novos nós à rede não requer uma infraestrutura central adicional.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 88,
      "tipo": "padrao_arquitetural",
      "titulo": "Blackboard",
      "definicao": "Coleções de programas independentes que trabalham cooperativamente numa estrutura de dados comum.",
      "afirmativa": "O Blackboard é um modelo de arquitetura de software muito rígido e difícil de adaptar a novos problemas.",
      "resposta": false,
      "justificativa": "O padrão Blackboard é projetado para lidar com problemas complexos de forma fluida.",
      "estrelas": 2
    },
    {
      "id": 89,
      "tipo": "padrao_arquitetural",
      "titulo": "Blackboard",
      "definicao": "Coleções de programas independentes que trabalham cooperativamente numa estrutura de dados comum.",
      "afirmativa": "O modelo Blackboard é padrão adequado para ser utilizado quando se tem problemas complexos e sem uma solução única e direta.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 90,
      "tipo": "padrao_arquitetural",
      "titulo": "Blackboard",
      "definicao": "Coleções de programas independentes que trabalham cooperativamente numa estrutura de dados comum.",
      "afirmativa": "Uma característica desse padrão é a capacidade de selecionar o conhecimento mais adequado para um dado instante no processo de resolução do problema.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 4
    },    
    {
      "id": 91,
      "tipo": "padrao_arquitetural",
      "titulo": "Publish-Subscribe",
      "definicao": "Consiste na criação e publicação de dados por Publishers e no consumo desses dados por Subscribers.",
      "afirmativa": "Os intermediários (brokers) no Publish-Subscribe não têm um papel relevante, pois os emissores e receptores se comunicam diretamente entre si, sem mediação.",
      "resposta": false,
      "justificativa": "Os brokers desempenham um papel fundamental na comunicação, mediando entre os emissores (Publishers) e os receptores (Subscribers).",
      "estrelas": 4
    },
    {
      "id": 92,
      "tipo": "padrao_arquitetural",
      "titulo": "Publish-Subscribe",
      "definicao": "Consiste na criação e publicação de dados por Publishers e no consumo desses dados por Subscribers.",
      "afirmativa": "A arquitetura Publish-Subscribe é estritamente síncrona e requer que os assinantes respondam imediatamente após a publicação de um evento.",
      "resposta": false,
      "justificativa": "Uma das principais características desse padrão é a assincronicidade, permitindo que o assinante responda no seu tempo e de acordo com sua lógica.",
      "estrelas": 4
    },
    {
      "id": 93,
      "tipo": "padrao_arquitetural",
      "titulo": "Publish-Subscribe",
      "definicao": "Consiste na criação e publicação de dados por Publishers e no consumo desses dados por Subscribers.",
      "afirmativa": "Para receberem informações, os Subscribers precisam se conectar a um broker e se inscrever em tópicos disponibilizados por Publishers.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 94,
      "tipo": "padrao_arquitetural",
      "titulo": "Map-Reduce",
      "definicao": "Permite realizar uma ordenação distribuída e paralela de um grande volume de dados.",
      "afirmativa": "Esse padrão arquitetural é caracterizado por um mapa que realiza a extração e transformação de parte dos dados e um redutor que carrega os resultados.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 4
    },
    {
      "id": 95,
      "tipo": "padrao_arquitetural",
      "titulo": "Map-Reduce",
      "definicao": "Permite realizar uma ordenação distribuída e paralela de um grande volume de dados.",
      "afirmativa": "Apesar de ter dois componentes para o processamento de dados, o Map-Reduce não é uma arquitetura que lida bem com um volume muito grande de dados.",
      "resposta": false,
      "justificativa": "O Map-Reduce é um padrão criado justamente para lidar com o alto volume de dados.",
      "estrelas": 2
    },
    {
      "id": 96,
      "tipo": "padrao_arquitetural",
      "titulo": "Map-Reduce",
      "definicao": "Permite realizar uma ordenação distribuída e paralela de um grande volume de dados.",
      "afirmativa": "O padrão Map-Reduce consiste em uma única etapa de processamento que executa todas as operações em uma única passagem pelos dados.",
      "resposta": false,
      "justificativa": "Esse padrão é caracterizado por dividir os dados em menores volumes para tratá-los sem esforço.",
      "estrelas": 2
    },
    { /* duplicado */
      "id": 97,
      "tipo": "padrao_arquitetural",
      "titulo": "Publish-Subscribe",
      "definicao": "Consiste na criação e publicação de dados por Publishers e no consumo desses dados por Subscribers.",
      "afirmativa": "Para receberem informações, os Subscribers precisam se conectar a um broker e se inscrever em tópicos disponibilizados por Publishers.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 98,
      "tipo": "padrao_arquitetural",
      "titulo": "Map-Reduce",
      "definicao": "Permite realizar uma ordenação distribuída e paralela de um grande volume de dados.",
      "afirmativa": "O Map-Reduce facilita tanto a leitura, como a análise dos dados após o processamento.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 2
    },
    {
      "id": 99,
      "tipo": "padrao_arquitetural",
      "titulo": "Arquitetura Orientada a Serviços (SOA)",
      "definicao": "Promove a integração do negócio com a tecnologia da informação por meio de componentes de serviços.",
      "afirmativa": "Este tipo de arquitetura evita replicação de dados e facilita a manutenção dos sistemas.",
      "resposta": true,
      "justificativa": "",
      "estrelas": 4
    },
  ],
    sorte_reves: [
    {
      "id": 100,
      "tipo": "sorte_reves",
      "titulo": "Sorte",
      "definicao": "Você teve sorte dessa vez!<br><br><b>Avance três casas</b> no tabuleiro.",
      "afirmativa": "",
      "resposta": true,
      "justificativa": "",
      "estrelas": 0
    },
    {
      "id": 101,
      "tipo": "sorte_reves",
      "titulo": "Sorte",
      "definicao": "Você teve sorte dessa vez!<br><br>Com esta carta você <b>pode consultar algum material antes de responder a uma pergunta.</b>",
      "afirmativa": "",
      "resposta": true,
      "justificativa": "",
      "estrelas": 0
    },
    {
      "id": 102,
      "tipo": "sorte_reves",
      "titulo": "Sorte",
      "definicao": "Você teve sorte dessa vez!<br><br><b>Avance duas casas</b> no tabuleiro.",
      "afirmativa": "",
      "resposta": true,
      "justificativa": "",
      "estrelas": 0
    },
    {
      "id": 103,
      "tipo": "sorte_reves",
      "titulo": "Revés",
      "definicao": "Poxa que azar!<br><br><b>Volte três casas</b> no tabuleiro.",
      "afirmativa": "",
      "resposta": false,
      "justificativa": "",
      "estrelas": 0
    },
    {
      "id": 104,
      "tipo": "sorte_reves",
      "titulo": "Revés",
      "definicao": "Poxa que azar!<br><br>A sua <b>próxima pergunta valerá metade</b> das estrelas.",
      "afirmativa": "",
      "resposta": false,
      "justificativa": "",
      "estrelas": 0
    },
    {
      "id": 105,
      "tipo": "sorte_reves",
      "titulo": "Revés",
      "definicao": "Poxa que azar!<br><br><b>Volte duas casas</b> no tabuleiro.",
      "afirmativa": "",
      "resposta": false,
      "justificativa": "",
      "estrelas": 0
    },
    {
      "id": 106,
      "tipo": "sorte_reves",
      "titulo": "Revés",
      "definicao": "Poxa que azar!<br><br><b>Volte uma casas</b> no tabuleiro.",
      "afirmativa": "",
      "resposta": false,
      "justificativa": "",
      "estrelas": 0
    },
    {
      "id": 107,
      "tipo": "sorte_reves",
      "titulo": "Sorte",
      "definicao": "Você teve sorte dessa vez!<br><br><b>A sua próxima pergunta valerá o dobro</b> das estrelas.",
      "afirmativa": "",
      "resposta": true,
      "justificativa": "",
      "estrelas": 0
    },
    {
      "id": 108,
      "tipo": "sorte_reves",
      "titulo": "Sorte",
      "definicao": "Você teve sorte dessa vez!<br><br><b>Jogue duas vezes consecutivas.<b>",
      "afirmativa": "",
      "resposta": true,
      "justificativa": "",
      "estrelas": 0
    },
    {
      "id": 109,
      "tipo": "sorte_reves",
      "titulo": "Sorte",
      "definicao": "Você teve sorte dessa vez!<br><br><b>Avance uma casa</b> no tabuleiro.",
      "afirmativa": "",
      "resposta": true,
      "justificativa": "",
      "estrelas": 0
    },
    {
      "id": 110,
      "tipo": "sorte_reves",
      "titulo": "Sorte",
      "definicao": "Você teve sorte dessa vez!<br><br>Com esta carta você <b>pode consultar algum material antes de responder à próxima pergunta.</b>",
      "afirmativa": "",
      "resposta": true,
      "justificativa": "",
      "estrelas": 0
    },
    {
      "id": 111,
      "tipo": "sorte_reves",
      "titulo": "Sorte",
      "definicao": "Você teve sorte dessa vez!<br><br><b>Avance duas casas</b> no tabuleiro.",
      "afirmativa": "",
      "resposta": true,
      "justificativa": "",
      "estrelas": 0
    },
    {
      "id": 112,
      "tipo": "sorte_reves",
      "titulo": "Revés",
      "definicao": "Poxa que azar!<br><br><b>Volte duas casas</b> no tabuleiro.",
      "afirmativa": "",
      "resposta": false,
      "justificativa": "",
      "estrelas": 0
    },
    {
      "id": 113,
      "tipo": "sorte_reves",
      "titulo": "Revés",
      "definicao": "Poxa que azar!<br><br><b>Volte três casas</b> no tabuleiro.",
      "afirmativa": "",
      "resposta": false,
      "justificativa": "",
      "estrelas": 0
    },
    {
      "id": 114,
      "tipo": "sorte_reves",
      "titulo": "Revés",
      "definicao": "Poxa que azar!<br><br>A sua <b>próxima pergunta valerá metade</b> das estrelas!<br><b>Volte uma casa.</b>",
      "afirmativa": "",
      "resposta": false,
      "justificativa": "",
      "estrelas": 0
    },
    {
      "id": 115,
      "tipo": "sorte_reves",
      "titulo": "Revés",
      "definicao": "Poxa que azar!<br><br><b>Volte duas casas</b> no tabuleiro.",
      "afirmativa": "",
      "resposta": false,
      "justificativa": "",
      "estrelas": 0
    },
    {
      "id": 116,
      "tipo": "sorte_reves",
      "titulo": "Revés",
      "definicao": "Poxa que azar!<br><br><b>Volte uma casa</b> no tabuleiro.",
      "afirmativa": "",
      "resposta": false,
      "justificativa": "",
      "estrelas": 0
    },
    {
      "id": 117,
      "tipo": "sorte_reves",
      "titulo": "Sorte",
      "definicao": "Você teve sorte dessa vez!<br><br>A sua <b>próxima pergunta valerá o dobro</b> das estrelas.",
      "afirmativa": "",
      "resposta": true,
      "justificativa": "",
      "estrelas": 0
    },
    {
      "id": 118,
      "tipo": "sorte_reves",
      "titulo": "Sorte",
      "definicao": "Você teve sorte dessa vez!<br><br><b>Jogue duas vezes consecutivas!</b><br><b>Avance uma casa.</b>",
      "afirmativa": "",
      "resposta": true,
      "justificativa": "",
      "estrelas": 0
    },
    {
      "id": 119,
      "tipo": "sorte_reves",
      "titulo": "Sorte",
      "definicao": "Você teve sorte dessa vez!<br><br><b>Avance uma casa</b> no tabuleiro.",
      "afirmativa": "",
      "resposta": true,
      "justificativa": "",
      "estrelas": 0
    },
    {
      "id": 120,
      "tipo": "sorte_reves",
      "titulo": "Revés",
      "definicao": "Poxa que azar!<br><br><b>Volte três casas</b> no tabuleiro.",
      "afirmativa": "",
      "resposta": false,
      "justificativa": "",
      "estrelas": 0
    },
    {
      "id": 121,
      "tipo": "sorte_reves",
      "titulo": "Sorte ou Revés",
      "definicao": "Sorte ou revés?<br><br><b>Escolha um dos baralhos de conteúdo</b> para responder.<br><br><b>Acerto: jogue novamente.</b><br><b>Erro: volte uma casa.</b>",
      "afirmativa": "",
      "resposta": true,
      "justificativa": "",
      "estrelas": 0
    },
    {
      "id": 122,
      "tipo": "sorte_reves",
      "titulo": "Sorte",
      "definicao": "Você teve sorte dessa vez!<br><br><b>Avance uma casa</b> no tabuleiro.",
      "afirmativa": "",
      "resposta": true,
      "justificativa": "",
      "estrelas": 0
    },
    {
      "id": 123,
      "tipo": "sorte_reves",
      "titulo": "Revés",
      "definicao": "Poxa que azar!<br><br>Fique <b>uma partida sem jogar.</b>",
      "afirmativa": "",
      "resposta": false,
      "justificativa": "",
      "estrelas": 0
    },
    {
      "id": 124,
      "tipo": "sorte_reves",
      "titulo": "Sorte",
      "definicao": "Sorte ou revés?<br><br><b>Escolha um dos baralhos de conteúdo</b> para responder.<br><br><b>Acerto: jogue novamente</b><br><b>Erro: volte uma casa!</b>",
      "afirmativa": "",
      "resposta": true,
      "justificativa": "",
      "estrelas": 0
    },
    {
      "id": 125,
      "tipo": "sorte_reves",
      "titulo": "Sorte",
      "definicao": "Você teve sorte dessa vez!<br><br><b>Avance duas casas</b> no tabuleiro.",
      "afirmativa": "",
      "resposta": true,
      "justificativa": "",
      "estrelas": 0
    },
    {
      "id": 126,
      "tipo": "sorte_reves",
      "titulo": "Revés",
      "definicao": "Poxa que azar!<br><br><b>Fique uma partida sem jogar.</b>",
      "afirmativa": "",
      "resposta": false,
      "justificativa": "",
      "estrelas": 0
    },
    {
      "id": 127,
      "tipo": "sorte_reves",
      "titulo": "Sorte",
      "definicao": "Sorte ou revés?<br><br><b>Escolha um dos baralhos de conteúdo</b> para responder.<br><br><b>Acerto: jogue novamente<br>Erro: volte uma casa!</b>",
      "afirmativa": "",
      "resposta": true,
      "justificativa": "",
      "estrelas": 0
    }
  ]
};
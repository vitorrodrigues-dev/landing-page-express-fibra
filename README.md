# Express Fibra — Landing Page

> Um projeto real, para um cliente real, construído por alguém que estava — e ainda está — aprendendo.

---

## Como tudo começou

Eu estava passando pelo Instagram quando encontrei o perfil de um empresário da minha região. Ele tinha uma empresa de internet por fibra ótica, atendia várias cidades do norte de Minas Gerais, mas não tinha nada que mostrasse isso de verdade na internet. Sem presença digital organizada. Sem uma página que transformasse visitante em cliente.

Naquele momento eu vi uma oportunidade. Não de ganhar dinheiro — porque esse projeto não teve cobrança financeira — mas de aplicar na prática tudo que eu vinha estudando dentro de um contexto completamente real.

Entrei em contato. Expliquei o que era uma landing page, por que ela funciona melhor do que um perfil no Instagram quando o objetivo é converter visita em contato, como ela poderia fortalecer a presença digital da empresa e criar um caminho claro entre o cliente que não conhece e o cliente que manda mensagem no WhatsApp. Ele topou.

A partir daí, eu passei a tratar esse projeto exatamente como um projeto profissional.

---

## Do contato à primeira linha de código

Antes de abrir qualquer editor, eu precisava entender o negócio. Peguei as informações da empresa, as cores da marca, o logo, uma foto da loja física, os planos disponíveis, as cidades atendidas, os números que representavam o histórico deles — anos de mercado, clientes ativos, infraestrutura.

Só depois disso é que comecei a pensar na estrutura da interface.

Nesse momento, os conceitos que eu estava estudando na matéria de Prototyping — focada em UX/UI — fizeram total sentido. Eu não estava apenas "montando uma página bonita". Eu estava pensando em como o usuário ia navegar por aquela página, qual seria o caminho natural dos olhos, onde colocar o CTA principal, como criar hierarquia visual sem precisar de muita explicação, o que precisava aparecer primeiro e o que podia esperar mais para baixo.

Pensei em escaneabilidade: o usuário não lê uma landing page, ele escaneia. Então cada seção precisava comunicar seu propósito em segundos. Pensei em coerência visual: as cores, os espaçamentos, os tamanhos de fonte tinham que criar um sistema que fizesse sentido junto, não elementos aleatórios jogados na tela. Pensei em conversão: cada seção tinha que empurrar suavemente o usuário em direção a uma ação — assinar um plano, entrar em contato, descobrir a cobertura.

Queria criar algo moderno, responsivo, humanizado e profissional. Não queria que parecesse um template genérico de internet.

---

## A escolha das tecnologias

Como ainda não estudei React, Next.js ou qualquer framework front-end, decidi desenvolver a aplicação inteira com HTML5, CSS e JavaScript (que só fui saber depois).

Essa foi uma decisão estratégica, não uma limitação.

Eu poderia ter tentado usar um framework seguindo tutoriais, mas eu sabia que não teria base suficiente para entender o que estava acontecendo — e para mim, não entender o que aplico no código é inaceitável. Preferi fortalecer os fundamentos antes de avançar para abstrações mais complexas.

Trabalhar com HTML, CSS e JavaScript(básico) me forçou a entender cada detalhe: por que um elemento se comporta de determinada forma, como o CSS calcula dimensões, como o JavaScript manipula o DOM sem nenhuma camada no meio. Esse tipo de conhecimento é o que faz diferença quando você encontra um bug difícil num projeto em React — você sabe onde está o problema porque entende o que está por baixo.

---

## O curso que andou junto com o projeto

Durante o desenvolvimento, eu estava fazendo o curso da Alura *"HTML e CSS: Estrutura, Ambiente e Estilo"*. E o que aconteceu foi algo que eu não esperava: o projeto e o curso se alimentaram um do outro.

O que eu aprendia no curso sobre HTML semântico eu aplicava diretamente no projeto — não como exercício, mas com um propósito real. Usar `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>` não é apenas boa prática; é o que faz o Google entender a estrutura da página e o que faz leitores de tela navegarem corretamente por ela.

Aprendi sobre o Box Model e imediatamente entendi por que alguns elementos não se posicionavam onde eu esperava. Aprendi sobre tipografia no CSS e fui diretamente ajustar os tamanhos, pesos e espaçamentos de texto da landing page. Aprendi sobre Git e GitHub Pages e já estava usando para versionar o projeto e pensar em hospedagem.

Não foi um curso paralelo ao projeto. Foi um curso que conversou com o projeto o tempo inteiro.

---

## Arquitetura e organização

O projeto é organizado em três arquivos principais:

```
files/
├── index.html    — estrutura e conteúdo
├── style.css     — toda a estilização
└── script.js     — comportamento e interatividade
```

Essa separação pode parecer óbvia, mas ela tem um impacto real no desenvolvimento. Quando a estrutura, o estilo e o comportamento estão separados, você consegue localizar um problema com muito mais facilidade. Se algo visual está errado, você vai direto ao CSS. Se algo não está acontecendo na interação, você abre o JavaScript. Se a estrutura não está fazendo sentido semanticamente, você corrige no HTML sem tocar nos outros.

Essa organização também facilitou a leitura do código. Qualquer pessoa que abrir o projeto consegue entender onde cada coisa está. Para mim, que ainda estou construindo meus hábitos de desenvolvimento, manter esse padrão desde o início foi importante — porque hábito ruim começa cedo.

---

## CSS: muito além de "deixar bonito"

O CSS desse projeto foi onde eu passei mais tempo e onde aprendi mais.

Comecei criando um Design System básico com variáveis CSS. As cores principais da marca — o vermelho `#f51b0e` e o amarelo `#fede07` — ficaram centralizadas em variáveis no `:root`, assim como espaçamentos, raios de borda e sombras recorrentes. Isso significa que se precisar ajustar alguma cor em toda a página, muda em um lugar só.

Usei Flexbox e Grid para construir os layouts. A seção de planos usa Grid para criar as três colunas que se reorganizam em coluna única no mobile. O navbar usa Flexbox para alinhar logo, links e botão de CTA de forma que funcione tanto em desktop quanto em dispositivos menores. Aprender quando usar um e quando usar o outro foi um aprendizado prático — não tem regra absoluta, tem o que faz sentido para aquela estrutura.

Para tipografia responsiva, utilizei `clamp()`, que permite que um tamanho de fonte cresça e diminua de acordo com a largura da tela sem precisar de media queries para cada ajuste. Parece um detalhe pequeno, mas muda completamente como o texto se comporta em telas intermediárias.

As animações foram feitas com `@keyframes` e CSS transitions. O botão do WhatsApp tem uma animação de pulso que chama atenção sem ser agressiva. As seções entram suavemente na tela conforme o usuário rola a página — um efeito de reveal que é acionado pelo JavaScript mas executado pelo CSS. Os cards de planos têm hover effects que dão feedback visual imediato.

Implementei Glassmorphism em alguns elementos — aquele efeito de vidro fosco com fundo desfocado — que combinou com o tema escuro da página. Usei gradientes e glow effects para criar profundidade e separar visualmente as seções sem precisar de bordas explícitas.

Cada escolha de estilo teve uma razão: não existe elemento ali que eu coloquei "porque ficou bonito". Existe elemento que ficou bonito porque serviu a um propósito.

---

## O dia que o JavaScript entrou em cena

Chegou um momento no projeto em que eu percebi que HTML e CSS sozinhos não iam resolver tudo que eu queria construir.

A navbar precisava mudar de aparência quando o usuário rolasse a página. As seções precisavam aparecer com animação conforme ficassem visíveis. Os números precisavam contar de zero até o valor real quando o usuário chegasse naquela parte. O menu mobile precisava abrir e fechar. Tudo isso era comportamento — e comportamento é JavaScript.

Eu já tinha uma base de lógica de programação antes de chegar no JavaScript. Então, quando comecei a estudar, ele não pareceu impossível como eu imaginava que seria. Variáveis, condicionais, loops, funções — o raciocínio era familiar. O que era novo era a conexão com o navegador: como o JavaScript enxerga o HTML, como ele consegue encontrar elementos, modificar classes e reagir a eventos.

Aprendi sobre o DOM — Document Object Model — que é basicamente a representação que o navegador faz do HTML como uma árvore de objetos manipuláveis. Aprendi a usar `querySelector`, `classList.toggle`, `addEventListener`. Aprendi a usar a `IntersectionObserver API`, que é uma forma moderna e performática de detectar quando um elemento entra na área visível da tela, sem precisar ficar calculando posições de scroll a cada milissegundo.

O counter animation foi um dos desafios mais interessantes. Eu queria que os números — 5 anos de mercado, 11 cidades, 500 clientes — contassem de zero até o valor real quando o usuário chegasse naquela seção. Para isso usei `requestAnimationFrame`, que sincroniza a atualização com a taxa de refresco da tela e garante uma animação a 60fps sem causar travamento.

Tive bastante ajuda durante esse processo — e falo sobre isso mais à frente. Mas em nenhum momento apliquei código sem entender o que ele fazia. Cada função nova que aparecia, eu pesquisava. Cada conceito que eu via mas não entendia, eu parava, estudava, testava isoladamente e só depois integrava ao projeto.

---

## UX/UI: pensar no usuário antes de pensar no código

Uma coisa que me surpreendeu durante o projeto foi o quanto as decisões de código são, na verdade, decisões de experiência do usuário.

A hierarquia visual da página foi pensada para guiar o olhar: o hero mostra o essencial logo de cara, os planos ficam acessíveis sem rolagem excessiva, as provas sociais — depoimentos, números — aparecem antes do CTA final para construir confiança primeiro. Isso é CRO na prática: Conversion Rate Optimization. Não é só estética, é estratégia.

O menu mobile tem um comportamento específico: quando o usuário clica em um link, o menu fecha automaticamente. Quando clica fora do menu, ele fecha também. Isso parece pequeno, mas é a diferença entre uma interface que parece profissional e uma que parece inacabada.

O botão flutuante do WhatsApp fica sempre visível, independente de onde o usuário esteja na página. É o caminho mais curto entre o interesse e o contato — e em uma landing page para um provedor regional, esse contato direto tem muito valor.

As microinterações — aqueles pequenos feedbacks visuais que acontecem quando você passa o mouse em um botão, quando um card levanta levemente no hover, quando o link do menu ativo muda de cor — existem para comunicar ao usuário que a interface está respondendo. Não são frescura. São o que separa uma página que parece viva de uma que parece estática.

---

## SEO e acessibilidade

Essas são as partes do projeto que mais facilmente passam despercebidas — mas que têm impacto real.

No HTML, usei `aria-label` nos botões que não têm texto descritivo, atributos `alt` em todas as imagens, e a hierarquia correta de headings: um único `<h1>` por página, seguido de `<h2>` para seções e `<h3>` para subseções. Isso importa tanto para leitores de tela quanto para o Google.

Implementei Schema.org com marcação de `LocalBusiness`, o que ajuda o Google a entender que aquela página representa uma empresa local com endereço, telefone e área de atuação. Para um provedor regional como a Express Fibra, SEO local tem peso enorme — a maior parte dos clientes potenciais está procurando "internet fibra Águas Vermelhas" ou cidades próximas.

As meta tags de Open Graph garantem que quando alguém compartilhar o link da página no WhatsApp ou nas redes sociais, apareça um preview bonito com título, descrição e imagem — não só um link quebrado.

O projeto também tem um fallback de imagem implementado em JavaScript: se a foto da loja não carregar, o sistema exibe automaticamente uma arte construída em CSS puro simulando uma fachada de loja. É um detalhe de resiliência — a página nunca fica com um elemento quebrado, independente de qualquer falha de carregamento.

---

## Sobre o uso de IA

Quero ser direto sobre isso porque acho que fingir que não usei seria desonesto — e porque a forma como usei diz mais sobre o meu aprendizado do que qualquer outra coisa.

Usei inteligência artificial como ferramenta de apoio durante o desenvolvimento. Para pesquisar conceitos que eu ainda não conhecia bem, para entender por que determinado comportamento estava acontecendo, para revisar lógica de funções JavaScript mais complexas, para pensar em abordagens alternativas quando eu estava emperrado.

O que eu não fiz foi copiar código sem entender. Cada vez que a IA sugeria uma solução, eu precisava entender o que aquele código estava fazendo antes de aplicar. Se aparecia um método novo, eu pesquisava a documentação. Se aparecia um padrão que eu não reconhecia, eu testava isoladamente. Se eu não conseguia explicar com minhas próprias palavras o que aquele trecho fazia, eu não avançava.

Isso criou um processo de aprendizado muito mais rápido do que estudar teoria sem praticar, mas sem abrir mão do entendimento. A IA virou uma espécie de professor disponível 24 horas — não para fazer por mim, mas para me ajudar a entender quando eu estava travado.

Acredito que saber usar IA de forma estratégica, sem perder o protagonismo sobre o que você está construindo, é uma habilidade importante para qualquer desenvolvedor hoje.

---

## O que esse projeto representa

Quando comecei, eu sabia o básico de HTML e CSS. Quando terminei, eu tinha construído uma landing page real, para um cliente real, com uma interface responsiva, animações suaves, integração com WhatsApp, SEO local implementado, JavaScript funcional com IntersectionObserver e requestAnimationFrame, um Design System com variáveis CSS, e uma preocupação genuína com acessibilidade e experiência do usuário.

Esse projeto foi um divisor de águas para mim.

Ele me mostrou que aprender na prática acelera absurdamente a evolução. Que teoria sem projeto é base sem construção. Que os problemas reais ensinam mais do que qualquer exercício controlado — porque quando o projeto é real, a solução precisa ser real também.

Me fez perder o medo do JavaScript. Me mostrou que UX não é só para designers — é uma mentalidade que qualquer desenvolvedor deveria ter. Me mostrou que código resolve problemas reais de pessoas reais, e que isso muda completamente o significado do que estamos construindo.

E me deixou com uma certeza que quero carregar para o resto da carreira:

**Se eu sei fazer, ótimo. Se eu não sei, eu aprendo.**

---

## Tecnologias utilizadas

- HTML5 semântico
- CSS3 com variáveis, Flexbox, Grid, animações e responsividade
- JavaScript vanilla (ES6+)
- Google Fonts — Barlow e Barlow Condensed
- Schema.org para SEO local
- IntersectionObserver API
- GitHub Pages para hospedagem

---

## Estrutura do projeto

```
files/
├── index.html    — estrutura semântica e conteúdo
├── style.css     — estilização completa com Design System
├── script.js     — interatividade e comportamento
├── logo.png      — logomarca da empresa
├── loja.jpg      — foto da loja física
└── favicon.png   — ícone da aba do navegador
```

---

## Como visualizar

Clone o repositório e abra o `index.html` diretamente no navegador, ou acesse pela hospedagem no GitHub Pages.

---

*Feito com muito estudo, muita pesquisa e a convicção de que a melhor forma de aprender é construindo algo real.*

let baralhoAtual = null;
let posicao = 0;
let jogadores = [];
const coresPinos = ["#2196f3", "#f44336", "#4caf50", "#ff9800", "#9c27b0", "#3f51b5", "#009688", "#795548"];
const tipoPorCasa = {
  0: "inicio",                    // ⚪ Cinza-claro
  1: "decisao_arquitetural",      // 🔵 Azul
  2: "sorte_reves",               // 🟢 Verde
  3: "padrao_arquitetural",       // 🔴 Vermelho
  4: "padrao_arquitetural",       // 🔴 Vermelho
  5: "atributo_qualidade",        // 🟡 Amarelo  
  6: "decisao_arquitetural",      // 🔵 Azul
  7: "padrao_arquitetural",       // 🔴 Vermelho
  8: "sorte_reves",               // 🟢 Verde
  9: "padrao_arquitetural",       // 🔴 Vermelho
  10: "atributo_qualidade",       // 🟡 Amarelo
  11: "sorte_reves",              // 🟢 Verde
  12: "padrao_arquitetural",      // 🔴 Vermelho /--/
  13: "atributo_qualidade",       // 🟡 Amarelo  
  14: "decisao_arquitetural",     // 🔵 Azul
  15: "atributo_qualidade",       // 🟡 Amarelo
  16: "sorte_reves",              // 🟢 Verde
  17: "atributo_qualidade",       // 🟡 Amarelo  
  18: "padrao_arquitetural",      // 🔴 Vermelho
  19: "padrao_arquitetural",      // 🔴 Vermelho
  20: "atributo_qualidade",       // 🟡 Amarelo  
  21: "decisao_arquitetural",     // 🔵 Azul
  22: "sorte_reves",              // 🟢 Verde /--/
  23: "atributo_qualidade",       // 🟡 Amarelo
  24: "sorte_reves",              // 🟢 Verde
  25: "atributo_qualidade",       // 🟡 Amarelo  
  26: "decisao_arquitetural",     // 🔵 Azul
  27: "padrao_arquitetural",      // 🔴 Vermelho
  28: "sorte_reves",              // 🟢 Verde
  29: "decisao_arquitetural",     // 🔵 Azul
  30: "atributo_qualidade",       // 🟡 Amarelo
  31: "decisao_arquitetural",     // 🔵 Azul
  32: "padrao_arquitetural",      // 🔴 Vermelho  
  33: "decisao_arquitetural",     // 🔵 Azul
  34: "sorte_reves",              // 🟢 Verde /--/
  35: "decisao_arquitetural",     // 🔵 Azul
  36: "padrao_arquitetural",      // 🔴 Vermelho
  37: "atributo_qualidade",       // 🟡 Amarelo  
  38: "sorte_reves",              // 🟢 Verde
  39: "atributo_qualidade",       // 🟡 Amarelo
  40: "decisao_arquitetural",     // 🔵 Azul  
  41: "decisao_arquitetural",     // 🔵 Azul  
  42: "padrao_arquitetural",      // 🔴 Vermelho
  43: "sorte_reves",              // 🟢 Verde
  44: "fim"                       // ⚪ Cinza-claro
};

let turnoAtual = 0;
let historicoMovimentos = [];
let refazerMovimentos = [];


const corPorBaralho = {
  inicio: "#c8e6c9",                // azul claro
  fim: "#c8e6c9",                   // verde claro
  decisao_arquitetural: "#90caf9",  // azul
  atributo_qualidade: "#fff9c4",    // amarelo
  padrao_arquitetural: "#ef9a9a",   // vermelho
  sorte_reves: "#a5d6a7"            // verde
};

// const corPorBaralho = {
//   inicio: "#b3e5fc",                // azul claro
//   fim: "#c8e6c9",                   // verde claro
//   decisao_arquitetural: "#2196f3",  // azul
//   atributo_qualidade: "#ffeb3b",    // amarelo
//   padrao_arquitetural: "#f44336",   // vermelho
//   sorte_reves: "#4caf50"            // verde
// };

window.addEventListener("load", () => {
  const salvo = localStorage.getItem("estadoLearnBoardGame");
  if (salvo) {
    const estado = JSON.parse(salvo);
    jogadores = estado.jogadores;
    turnoAtual = estado.turnoAtual;
    estadoPorBaralho = estado.estadoPorBaralho;
    jogadores.forEach(jogador => {
      criarPino(jogador.id);
      posicionarPino(jogador.id, jogador.posicao);
    });
    destacarTurno();
    document.getElementById("jogadores-setup").style.display = "none";
  }
});

let estadoPorBaralho = {
  decisao_arquitetural: { fila: [], indice: 0 },
  atributo_qualidade: { fila: [], indice: 0 },
  padrao_arquitetural: { fila: [], indice: 0 },
  sorte_reves: { fila: [], indice: 0 }
};

function criarInputsJogadores() {
  const container = document.getElementById("nomesJogadores");
  container.innerHTML = "";
  const qtd = parseInt(document.getElementById("qtdJogadores").value);

  for (let i = 0; i < qtd; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Nome do jogador ${i + 1}`;
    input.id = `jogador-${i}`;
    container.appendChild(input);
  }
}

function iniciarJogo() {
  jogadores = [];
  turnoAtual = 0;
  const qtd = parseInt(document.getElementById("qtdJogadores").value);
  for (let i = 0; i < qtd; i++) {
    const nome = document.getElementById(`jogador-${i}`).value || `Jogador ${i + 1}`;
    jogadores.push({ nome, posicao: 0, cor: coresPinos[i], id: i });
    criarPino(i);
    setTimeout(() => {
      posicionarPino(i, jogadores[i].posicao);
    }, 0);
  }
  turnoAtual = (turnoAtual) % jogadores.length;
  const jogadorAtual = jogadores[turnoAtual];
  document.getElementById("carta").innerHTML = `
    <div class="carta-centralizada">
      <p class="text-muted"><strong>Selecione um baralho para o jogador "${jogadorAtual.nome}"</strong>.</p>
    </div>
  `;
  document.getElementById("carta").backgroundColor = 'white';
  destacarTurno();
  document.getElementById("jogadores-setup").style.display = "none";  
}

function registrarEventosDasCasas() {
  document.querySelectorAll(".casa").forEach((casa, index) => {
    const tipo = tipoPorCasa[index];
    casa.setAttribute("data-baralho", tipo);
    casa.style.backgroundColor = corPorBaralho[tipo] || "#e0e0e0";
  });
  document.querySelectorAll('.casa').forEach(casa => {
    // Suporte para arrastar com mouse (PC)
    casa.addEventListener('dragover', e => e.preventDefault());
    casa.addEventListener('drop', e => {
      e.preventDefault();
      const jogadorId = parseInt(e.dataTransfer.getData('text/plain'), 10);
      const casaIndex = parseInt(casa.getAttribute('data-casa-index'), 10);
      moverPinoManualPara(jogadorId, casaIndex); // Move no DOM e atualiza estado
      // console.log('drop');
      // Limpa o estilo visual do pino movido
      document.querySelectorAll('.pino.movendo').forEach(pino => pino.classList.remove('movendo'));
    });
    // Suporte para toque em PC
    casa.addEventListener('click', () => {
      if (elementoArrastando) {
        const jogadorId = parseInt(elementoArrastando.getAttribute('data-jogador-id'), 10);
        const casaIndex = parseInt(casa.getAttribute('data-casa-index'), 10);
        moverPinoManualPara(jogadorId, casaIndex);
        // console.log('click na casa — movimento manual concluído');
        elementoArrastando.classList.remove('movendo');
        elementoArrastando = null;
      }
    });
    // Suporte para toque em celular
    casa.addEventListener('touchend', e => {
      if (elementoArrastando) {
        const jogadorId = parseInt(elementoArrastando.getAttribute('data-jogador-id'), 10);
        const casaIndex = parseInt(casa.getAttribute('data-casa-index'), 10);
        moverPinoManualPara(jogadorId, casaIndex); // Atualiza posição visual e lógica
        // console.log('touchend casa');
        elementoArrastando.classList.remove('movendo');
        elementoArrastando = null;
      }
      e.preventDefault();
    });
  });
}

function registrarEventosDoPino(pino, i) {
  pino.setAttribute("draggable", "true");
  pino.setAttribute("data-jogador-id", i);
  // Mouse  
  pino.addEventListener('click', () => {
    elementoArrastando = pino;
    // pino.classList.add('movendo');
  });
  pino.addEventListener('dragstart', e => {
    // console.log('dragstart');
    e.dataTransfer.setData('text/plain', pino.getAttribute('data-jogador-id'));
    // pino.classList.add('movendo');
    // // Cria clone visual
    // const dragClone = pino.cloneNode(true);
    // dragClone.style.cursor = 'grabbing';
    // dragClone.style.cursor = '-webkit-grabbing';
    // dragClone.style.cursor = '-moz-grabbing';
    // dragClone.style.transform = 'scale(1.6)';
    // dragClone.style.opacity = '0.9';
    // dragClone.style.position = 'absolute';
    // dragClone.style.pointerEvents = 'none';
    // dragClone.style.top = '-1000px'; // fora da tela
    // dragClone.style.width = '50px';
    // dragClone.style.height = '50px';
    // dragClone.style.fontSize = '1.4rem';
    // dragClone.style.borderRadius = '50%';
    // dragClone.style.lineHeight = '50px'; // centraliza texto
    // document.body.appendChild(dragClone);
    // Usa como imagem de arrasto
    // e.dataTransfer.setDragImage(dragClone, 15, 15);
    // Remove depois de usar
    // setTimeout(() => dragClone.remove(), 0);
  });
  pino.addEventListener('dragend', () => {
    // console.log('dragend');
    pino.classList.remove('movendo')   
  });
  // Toque
  pino.addEventListener('touchstart', e => {
    elementoArrastando = pino;
    const touch = e.touches[0];
    dragClone = pino.cloneNode(true);
    // dragClone.style.position = 'fixed';
    // dragClone.style.pointerEvents = 'none';
    // dragClone.style.opacity = '0.8';
    // dragClone.style.zIndex = '9999';
    // dragClone.style.width = '70px';
    // dragClone.style.height = '70px';
    // dragClone.style.lineHeight = '70px';
    // dragClone.style.fontSize = '1.4rem';
    // dragClone.style.borderRadius = '50%';
    // dragClone.style.boxShadow = '0 0 12px rgba(0,0,0,0.2)';
    // dragClone.style.backgroundColor = pino.style.backgroundColor;
    // dragClone.style.color = pino.style.color;
    // dragClone.style.transform = 'translate(-50%, -50%)';
    // document.body.appendChild(dragClone);
    // dragClone.style.left = `${touch.clientX}px`;
    // dragClone.style.top = `${touch.clientY}px`;
    e.preventDefault();

  });
  pino.addEventListener('touchmove', e => {
    if (dragClone) {
      const touch = e.touches[0];
      dragClone.style.left = `${touch.clientX}px`;
      dragClone.style.top = `${touch.clientY}px`;
    }
    e.preventDefault();
  });
  pino.addEventListener("touchend", e => {
    if (dragClone) {
      dragClone.remove();
      dragClone = null;
    }
    const touch = e.changedTouches[0];
    const destino = document.elementFromPoint(touch.clientX, touch.clientY);
    if (destino && destino.classList.contains("casa")) {
      const casaIndex = parseInt(destino.getAttribute("data-casa-index"), 10);
      const jogadorId = parseInt(pino.getAttribute("data-jogador-id"), 10);
      moverPinoManualPara(jogadorId, casaIndex);
    }
    pino.classList.remove("movendo");
    elementoArrastando = null;
  });
  pino.addEventListener('touchend', e => {
    // console.log('touchend no pino — ativando seleção manual');
    elementoArrastando = pino;
    pino.classList.remove('movendo');
  });
}

window.addEventListener("load", () => {
  registrarEventosDasCasas();
});

function criarPino(i) {
  const tabuleiro = document.getElementById("tabuleiro");
  const pino = document.createElement("div");
  pino.classList.add("pino");
  pino.id = `pino-${i}`;
  pino.style.backgroundColor = jogadores[i].cor;
  const letra = jogadores[i].nome.trim()[0].toUpperCase();
  pino.textContent = `${letra}${i + 1}`; // Exemplo: J1, A2
  // Define atributos úteis
  pino.setAttribute("draggable", "true");
  pino.setAttribute("data-jogador-id", i);
  // Permite seleção por clique e toque
  const ativarTurno = () => {
    turnoAtual = i;
    destacarTurno();
    // atualizarBaralhoDoJogador();
  };
  pino.addEventListener("click", ativarTurno);
  pino.addEventListener("touchstart", ativarTurno);
  // Adiciona ao DOM
  tabuleiro.appendChild(pino);
  // Registra eventos de drag/toque
  registrarEventosDoPino(pino, i);
}

function posicionarPino(jogadorId, casaIndex) {
  const casa = document.querySelector(`[data-casa-index="${casaIndex}"]`);
  const pino = document.getElementById(`pino-${jogadorId}`);
  const tabuleiro = document.getElementById("tabuleiro");
  if (!casa || !pino) return; // evita erros se algo não existir
  const topBase = casa.offsetTop;
  const leftBase = casa.offsetLeft;
  const largura = casa.offsetWidth;
  const altura = casa.offsetHeight;
  const slot = jogadorId % 9;
  const col = slot % 3;
  const row = Math.floor(slot / 3);
  const offsetX = (largura / 3) * col + (largura / 12);
  const offsetY = (altura / 3) * row + (altura / 12);
  pino.style.top = `${topBase + offsetY}px`;
  pino.style.left = `${leftBase + offsetX}px`;
}

function destacarTurno() {
  document.querySelectorAll('.pino').forEach(p => p.classList.remove('ativo'));
  const atual = jogadores[turnoAtual];
  const pinoAtual = document.getElementById(`pino-${atual.id}`);
  if (pinoAtual) {
    pinoAtual.classList.add('ativo');
  }
}

function responder(respostaUsuario, respostaCorreta, estrelas, justificativa) {
  if (!jogadores || jogadores.length === 0) {
    alert("Inicie o jogo selecionando os jogadores.");
    return;
  }

  const jogador = jogadores[turnoAtual];
  const tagJogador = `${jogador.nome.trim()[0].toUpperCase()}${jogador.id + 1}`;

  let resultadoTexto = "";
  if (respostaUsuario === respostaCorreta) {
    jogador.posicao += estrelas;
    resultadoTexto = `✅ ${tagJogador} (${jogador.nome}) acertou!\nAvançou ${estrelas} casa(s).`;
  } else {
    resultadoTexto = `❌ ${tagJogador} (${jogador.nome}) errou!\nPermanece na casa ${jogador.posicao}.`;
  }

  if (jogador.posicao >= document.querySelectorAll(".casa").length) {
    jogador.posicao = document.querySelectorAll(".casa").length - 1;
  }

  posicionarPino(jogador.id, jogador.posicao);

  const resultadoEl = document.getElementById("resultado");
  resultadoEl.innerText = resultadoTexto;
  resultadoEl.style.borderLeftColor = respostaUsuario === respostaCorreta ? "#4caf50" : "#f44336";

  const justificativaEl = document.getElementById("justificativa");
  if (justificativaEl && !respostaCorreta) {
    justificativaEl.innerHTML =  '<b>Resposta:</b> (Falsa) ' + justificativa;
  } else {
    justificativaEl.innerHTML = '';
  }
  
  historicoMovimentos.push({ jogadorId: jogador.id, de: jogador.posicao - estrelas, para: jogador.posicao });
  refazerMovimentos = []; // limpa refazer ao fazer novo movimento
  salvarEstadoLocal()

  // turnoAtual = (turnoAtual + 1) % jogadores.length;
  // destacarTurno();
  // atualizarBaralhoDoJogador();
}

function iniciarBaralho(tipo) {
  baralhoAtual = tipo;

  const cartas = todasCartas[tipo];
  if (!cartas || cartas.length === 0) {
    alert("Baralho vazio!");
    return;
  }

  const estado = estadoPorBaralho[tipo];
  if (estado.fila.length === 0) {
    estado.fila = embaralharArray([...cartas]); // embaralha por padrão
    estado.indice = 0;
  }

  mostrarCarta();
  atualizarBotaoSelecionado(tipo);
}

function ordenarCartas() {
  if (!baralhoAtual || !todasCartas[baralhoAtual]) {
    alert("Selecione um baralho primeiro!");
    return;
  }

  const cartasOriginais = [...todasCartas[baralhoAtual]];
  const estado = estadoPorBaralho[baralhoAtual];
  estado.fila = cartasOriginais.sort((a, b) => a.id - b.id);
  estado.indice = 0;
  mostrarCarta();
  salvarEstadoLocal()
}

function embaralharCartas() {
  if (!baralhoAtual || !todasCartas[baralhoAtual]) {
    alert("Selecione um baralho primeiro!");
    return;
  }

  const cartasOriginais = [...todasCartas[baralhoAtual]];
  const estado = estadoPorBaralho[baralhoAtual];
  estado.fila = embaralharArray(cartasOriginais);
  estado.indice = 0;
  mostrarCarta();
  salvarEstadoLocal()
}

function embaralharArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function mostrarCarta() {
  if (!baralhoAtual) return;
  const estado = estadoPorBaralho[baralhoAtual];
  const fila = estado.fila;
  const indice = estado.indice;
  if (!fila || fila.length === 0) {
    alert("Nenhuma carta disponível. Embaralhe ou selecione um baralho.");
    return;
  }
  if (indice >= fila.length) {
    alert("Você chegou ao fim do baralho! As cartas serão embaralhadas automaticamente.");
    embaralharCartas();
    return;
  }
  const carta = fila[indice];
  estado.indice++;
  document.getElementById("contador").textContent =
    `Carta ${estado.indice} de ${fila.length}`;
  exibirCarta(carta);
}

function recuarCarta() {
  if (!baralhoAtual) return;

  const estado = estadoPorBaralho[baralhoAtual];
  if (estado.indice <= 1) {
    /* alert("Você está na primeira carta!"); */
    return;
  }

  estado.indice -= 2;
  mostrarCarta();
}

function avancarCarta() {
  if (!baralhoAtual) return;
  const estado = estadoPorBaralho[baralhoAtual];
  if (estado.indice >= estado.fila.length) {
    alert("Você chegou ao fim do baralho! As cartas serão embaralhadas automaticamente.");
    embaralharCartas();
    return;
  }
  mostrarCarta();
}

function exibirCarta(carta) {
  const cartaDiv = document.getElementById("carta");
  const corFundo = obterCorBaralho(baralhoAtual);
  cartaDiv.style.backgroundColor = corFundo;

  const corPorTipoForte = {
    inicio: "bg-inicio",
    fim: "bg-fim",
    decisao_arquitetural: "bg-decisao",
    atributo_qualidade: "bg-atributo",
    padrao_arquitetural: "bg-padrao",
    sorte_reves: "bg-sorte"
  };

  // const justificativaSegura = JSON.stringify(carta.justificativa);  
  const justificativaSegura = carta.justificativa
    .replace(/\\/g, "\\\\")     // escapa barras invertidas
    .replace(/'/g, "\\'")       // escapa aspas simples
    .replace(/\n/g, " ")        // remove quebras de linha
    .replace(/\r/g, " ")        // remove retornos de carro
    .trim();
  
  const classeCor = corPorTipoForte[carta.tipo] || "";

  if (carta.afirmativa) {
    cartaDiv.innerHTML = `        
        <h4 class="titulo-carta ${classeCor}">${carta.titulo}</h4>  
        <div class="bloco-definicao">
          <strong>Definição</strong><br>
          <div class="t-justify b-border">${carta.definicao}</div>
        </div>  
        <div class="bloco-afirmativa">
          <strong>Questão</strong><br>
          <div class="t-justify">[V ou F] ${carta.afirmativa}</div>
        </div>  
        <div class="botoes-resposta">
          <button class="botao-verde" onclick="responder(true, ${carta.resposta}, ${carta.estrelas}, '${justificativaSegura}')">Verdadeira</button>
          <button class="botao-vermelho" onclick="responder(false, ${carta.resposta}, ${carta.estrelas}, '${justificativaSegura}')">Falsa</button>
        </div>
        <div class="estrelas">${'⭐'.repeat(carta.estrelas)}</div>
        <!--
        <div class="campo-resposta">
          <p><strong>Resposta:</strong></p>          
        </div>
        -->
    `;
  } else {
    cartaDiv.innerHTML = `
      <h4 class="titulo-carta ${classeCor}">${carta.titulo}</h4>      
      <p>${carta.definicao}</p>
    `;
  }
}

function atualizarBotaoSelecionado(tipo) {
  const botoes = {
    decisao_arquitetural: "deck-decisao",
    atributo_qualidade: "deck-atributo",
    padrao_arquitetural: "deck-padrao",
    sorte_reves: "deck-sorte"
  };

  Object.values(botoes).forEach(id => {
    document.getElementById(id).classList.remove("active");
  });

  const ativo = botoes[tipo];
  document.getElementById(ativo).classList.add("active");
}

function obterCorBaralho(tipo) {
  const cores = {
    decisao_arquitetural: "#e3f2fd", // azul claro
    atributo_qualidade: "#fff9c4",   // amarelo suave
    padrao_arquitetural: "#ffebee",  // vermelho suave
    sorte_reves: "#e8f5e9"           // verde claro
  };
  return cores[tipo] || "#ffffff"; // cor padrão branco
}

function desfazerMovimento() {
  if (historicoMovimentos.length === 0) return;

  const mov = historicoMovimentos.pop();
  const jogador = jogadores[mov.jogadorId];
  jogador.posicao = mov.de;
  refazerMovimentos.push(mov);
  posicionarPino(jogador.id, jogador.posicao);
}

function refazerMovimento() {
  if (refazerMovimentos.length === 0) return;

  const mov = refazerMovimentos.pop();
  const jogador = jogadores[mov.jogadorId];
  jogador.posicao = mov.para;
  historicoMovimentos.push(mov);
  posicionarPino(jogador.id, jogador.posicao);
}

function moverPinoManual(casaIndex) {
  const jogador = jogadores[turnoAtual];
  historicoMovimentos.push({ jogadorId: jogador.id, de: jogador.posicao, para: casaIndex });
  jogador.posicao = casaIndex;
  refazerMovimentos = [];
  posicionarPino(jogador.id, jogador.posicao);
  salvarEstadoLocal()
}

function moverPinoManualPara(jogadorId, casaIndex) {
  const jogador = jogadores[jogadorId];
  historicoMovimentos.push({ jogadorId, de: jogador.posicao, para: casaIndex });
  jogador.posicao = casaIndex;
  refazerMovimentos = [];
  posicionarPino(jogadorId, casaIndex);
  salvarEstadoLocal()
}

function salvarEstadoLocal() {
  const estado = {
    jogadores,
    turnoAtual,
    estadoPorBaralho
  };
  localStorage.setItem("estadoLearnBoardGame", JSON.stringify(estado));
}

function confirmarReinicio() {
  const confirmar = confirm("Tem certeza que deseja reiniciar o jogo? Todas as jogadas serão perdidas.");
  if (confirmar) {
    localStorage.removeItem("estadoLearnBoardGame");
    location.reload();
  }
}

// function podeEscolherBaralho(jogador) {
//   const tipoNaCasa = tipoPorCasa[jogador.posicao];
//   return tipoNaCasa === "inicio" || tipoNaCasa === "sorte_reves";
// }

// function baralhoObrigatorio(jogador) {
//   const tipoNaCasa = tipoPorCasa[jogador.posicao];
//   return (tipoNaCasa !== "inicio" && tipoNaCasa !== "fim") ? tipoNaCasa : null;
// }

// function atualizarEstiloBotaoSelecionado(tipo) {
//   const botoes = {
//     decisao_arquitetural: "deck-decisao",
//     atributo_qualidade: "deck-atributo",
//     padrao_arquitetural: "deck-padrao",
//     sorte_reves: "deck-sorte"
//   };

//   Object.values(botoes).forEach(id => {
//     document.getElementById(id).classList.remove("active");
//   });

//   const ativo = botoes[tipo];
//   if (ativo) {
//     document.getElementById(ativo).classList.add("active");
//   }
// }

// function atualizarBaralhoDoJogador() {
//   const jogadorAtual = jogadores[turnoAtual];
//   const tipoObrigatorio = baralhoObrigatorio(jogadorAtual);
//   // Habilita ou desabilita os botões de baralho
//   document.querySelectorAll(".baralho-cards button").forEach(botao => {
//     const tipo = botao.id.replace("deck-", "");
//     const podeEscolher = podeEscolherBaralho(jogadorAtual);
//     botao.disabled = !podeEscolher && tipo !== tipoObrigatorio;
//   });
//   // Se estiver numa casa com baralho obrigatório, seleciona automaticamente
//   if (tipoObrigatorio) {
//     iniciarBaralho(tipoObrigatorio);        // seleciona o baralho adequado
//     atualizarEstiloBotaoSelecionado(tipoObrigatorio); // marca botão ativo
//   }
// }
// atualizarBaralhoDoJogador();

function atualizarRankingModal() {
  const lista = document.getElementById("listaRanking");
  lista.innerHTML = "";

  const ranking = [...jogadores].sort((a, b) => b.posicao - a.posicao);

  ranking.forEach((jogador, index) => {
    const item = document.createElement("li");
    item.className = "list-group-item d-flex justify-content-between align-items-center";

    const apelido = jogador.nome.trim()[0].toUpperCase() + (jogador.id + 1);

    item.innerHTML = `
      <strong>${index + 1}º</strong>
      <span>${jogador.nome} <span class="text-muted">(${apelido})</span></span>
      <span class="badge bg-primary rounded-pill">Casa ${jogador.posicao}</span>
    `;
    lista.appendChild(item);
  });
}


function corClaraDoJogador(indice, percentual = 0.3) {
  const hex = coresPinos[indice].replace("#", "");
  let r = parseInt(hex.slice(0, 2), 16);
  let g = parseInt(hex.slice(2, 4), 16);
  let b = parseInt(hex.slice(4, 6), 16);

  r = Math.min(255, Math.floor(r + (255 - r) * percentual));
  g = Math.min(255, Math.floor(g + (255 - g) * percentual));
  b = Math.min(255, Math.floor(b + (255 - b) * percentual));

  return `rgb(${r}, ${g}, ${b})`;
}


// Atualiza o ranking sempre que abrir o modal
document.getElementById("rankingModal").addEventListener("show.bs.modal", atualizarRankingModal);

function continuarTurno() {
  turnoAtual = (turnoAtual + 1) % jogadores.length;
  destacarTurno();
  reiniciarCronometro();
  
  const jogadorAtual = jogadores[turnoAtual];
  const tipoObrigatorio = tipoPorCasa[jogadorAtual.posicao];
  const apelido = jogadorAtual.nome.trim()[0].toUpperCase() + (jogadorAtual.id + 1);
  document.getElementById("resultado").innerText = `${jogadorAtual.nome} (${apelido})`;  
  
  // Se estiver na casa 0 (início) ou "sorte_reves", não iniciar automaticamente
  if (tipoObrigatorio === "inicio") {
    document.getElementById("carta").innerHTML = `
    <div class="carta-centralizada">
      <p class="text-muted"><strong>Selecione um baralho para:<br>${jogadorAtual.nome}</strong>.</p>
    </div>
    `;
    document.getElementById("carta").style.backgroundColor = 'white';    
    return;
  }

  if (tipoObrigatorio === "fim"){  
    document.getElementById("carta").innerHTML = `
      <div class="carta-centralizada">
        <p class=""><strong>Parabéns ${jogadorAtual.nome}<br>Você concluiu o Game!</strong>.</p>        
        <p><i class="bi bi-trophy h1"></i></p>
      </div>
    `;
    const corClara = corClaraDoJogador(jogadorAtual.id, 0.7);
    document.getElementById("carta").style.backgroundColor = corClara;    
    return;
  }
  iniciarBaralho(tipoObrigatorio); // inicia baralho obrigatório
  // atualizarEstiloBotaoSelecionado(tipoObrigatorio); // marca botão ativo   
}

window.addEventListener("resize", () => {
  jogadores.forEach(jogador => {
    posicionarPino(jogador.id, jogador.posicao);
  });
});



let milliseconds = 0;
let interval = null;
let isRunning = false;

function updateDisplay() {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const secs = String(totalSeconds % 60).padStart(2, '0');
  const ms = String(Math.floor((milliseconds % 1000) / 10)).padStart(2, '0');

  document.getElementById('display').childNodes[0].textContent = `${hrs}:${mins}:${secs}`;
  document.getElementById('msDisplay').textContent = ms;
}

document.getElementById('startPauseBtn').addEventListener('click', function () {
  const icon = this.querySelector('i');
  const resetIcon = document.getElementById('resetBtn').querySelector('i');

  if (!isRunning) {
    interval = setInterval(() => {
      milliseconds += 10;
      updateDisplay();
    }, 10);
    icon.className = 'bi bi-pause-fill';
    resetIcon.className = 'bi bi-arrow-repeat'; // vira reload
    isRunning = true;
  } else {
    clearInterval(interval);
    icon.className = 'bi bi-play-fill';
    resetIcon.className = 'bi bi-stop-fill'; // vira stop
    isRunning = false;
  }
});

document.getElementById('resetBtn').addEventListener('click', function () {
  const icon = document.getElementById('startPauseBtn').querySelector('i');

  milliseconds = 0;
  updateDisplay();

  if (isRunning) {
    // continua rodando do zero
    clearInterval(interval);
    interval = setInterval(() => {
      milliseconds += 10;
      updateDisplay();
    }, 10);
  }
});

function reiniciarCronometro() {
  clearInterval(interval);
  milliseconds = 0;
  updateDisplay();
  interval = setInterval(() => {
    milliseconds += 10;
    updateDisplay();
  }, 10);
  isRunning = true;
  document.getElementById('startPauseBtn').querySelector('i').className = 'bi bi-pause-fill';
  document.getElementById('resetBtn').querySelector('i').className = 'bi bi-arrow-repeat';
}
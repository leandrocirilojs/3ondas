const pages = document.querySelectorAll(".page");
const navBtns = document.querySelectorAll(".nav-btn");
const goBtns = document.querySelectorAll("[data-go]");
const xpFill = document.getElementById("xpFill");
const xpText = document.getElementById("xpText");
const levelName = document.getElementById("levelName");

let xp = 0;
let visitedPages = new Set(["home"]);

function addXP(value) {
  xp = Math.min(100, xp + value);
  xpFill.style.width = xp + "%";
  xpText.textContent = xp + " XP";

  if (xp >= 80) levelName.textContent = "Mestre da IA";
  else if (xp >= 55) levelName.textContent = "Especialista IA";
  else if (xp >= 30) levelName.textContent = "Pesquisador IA";
  else levelName.textContent = "Aluno IA Iniciante";
}

function showPage(id) {
  pages.forEach(page => page.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  navBtns.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.page === id);
  });

  if (!visitedPages.has(id)) {
    visitedPages.add(id);
    addXP(8);
  }
}

navBtns.forEach(btn => btn.addEventListener("click", () => showPage(btn.dataset.page)));
goBtns.forEach(btn => btn.addEventListener("click", () => showPage(btn.dataset.go)));

const cinemaData = [
  {
    year: "1950",
    node: 1,
    title: "1ª Onda — Sistemas baseados em regras",
    text: "A IA começa seguindo regras criadas por humanos. Ela não aprende sozinha. Exemplo: SE acontecer X, ENTÃO faça Y."
  },
  {
    year: "1980",
    node: 2,
    title: "2ª Onda — Machine Learning e redes neurais",
    text: "A IA passa a aprender com dados. Em vez de receber todas as regras prontas, ela observa exemplos e identifica padrões."
  },
  {
    year: "2000+",
    node: 3,
    title: "3ª Onda — Big Data e IA Cognitiva",
    text: "A IA moderna usa muitos dados, internet, nuvem, GPUs e modelos avançados para entender texto, imagem, voz e comportamento."
  }
];

let cinemaIndex = 0;

function renderCinema() {
  const data = cinemaData[cinemaIndex];
  document.getElementById("cinemaYear").textContent = data.year;
  document.getElementById("cinemaTitle").textContent = data.title;
  document.getElementById("cinemaText").textContent = data.text;

  [1,2,3].forEach(n => {
    document.getElementById("node" + n).classList.toggle("active", n === data.node);
  });
}

document.getElementById("nextCinema").addEventListener("click", () => {
  cinemaIndex = Math.min(cinemaData.length - 1, cinemaIndex + 1);
  renderCinema();
  addXP(3);
});

document.getElementById("prevCinema").addEventListener("click", () => {
  cinemaIndex = Math.max(0, cinemaIndex - 1);
  renderCinema();
});

renderCinema();

const waveData = {
  1: {
    title: "1ª Onda — Sistemas Baseados em Regras",
    explain: "Nessa fase, a inteligência estava nas regras que os humanos escreviam. O computador apenas obedecia.",
    example: "MYCIN: sistema especialista usado na medicina.",
    important: ["Regras fixas", "Conhecimento manual", "Sistema especialista", "Não aprende sozinho"],
    trap: "Pegadinha: MYCIN não é Machine Learning. É sistema especialista da 1ª onda."
  },
  2: {
    title: "2ª Onda — Machine Learning e Redes Neurais",
    explain: "A máquina aprende com exemplos e dados. Ela encontra padrões e usa esses padrões para prever ou classificar.",
    example: "Sistema antifraude que aprende padrões de transações suspeitas.",
    important: ["Aprendizado com dados", "Treinamento", "Redes neurais", "Reconhecimento de padrões"],
    trap: "Pegadinha: na 2ª onda, o programador não escreve todas as regras; ele treina o modelo com dados."
  },
  3: {
    title: "3ª Onda — Big Data e IA Cognitiva",
    explain: "A IA passa a usar dados massivos, internet, nuvem, GPUs e modelos avançados para resolver problemas complexos.",
    example: "ChatGPT, Netflix, Alexa, reconhecimento facial e diagnósticos por imagem.",
    important: ["Big Data", "Cloud Computing", "GPUs", "NLP", "Visão computacional", "IA cognitiva"],
    trap: "Pegadinha: Big Data sozinho não é IA. Ele fornece grande volume de dados para treinar e alimentar sistemas inteligentes."
  }
};

function renderWave(n) {
  const w = waveData[n];
  document.getElementById("waveContent").innerHTML = `
    <h3>${w.title}</h3>
    <p>${w.explain}</p>

    <div class="wave-grid">
      <div class="wave-section">
        <h4>Exemplo clássico</h4>
        <p>${w.example}</p>
      </div>

      <div class="wave-section">
        <h4>Pontos importantes</h4>
        <ul>${w.important.map(i => `<li>${i}</li>`).join("")}</ul>
      </div>

      <div class="wave-section">
        <h4>Pegadinha de prova</h4>
        <p>${w.trap}</p>
      </div>
    </div>
  `;
}

document.querySelectorAll(".wave-tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".wave-tab").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderWave(btn.dataset.wave);
    addXP(4);
  });
});

renderWave(1);

const simulations = {
  fraude: {
    1: `1ª ONDA — FRAUDE COM REGRAS

SE valor > R$ 5.000
ENTÃO marcar como suspeito.

SE compra em outro país
ENTÃO bloquear.

Problema:
Se o fraudador fugir dessas regras, o sistema pode falhar.`,
    2: `2ª ONDA — FRAUDE COM MACHINE LEARNING

A IA analisa milhares de transações:
- normais
- suspeitas
- fraudulentas

Ela aprende padrões de fraude.

Resultado:
Consegue identificar casos que não estavam escritos em regras fixas.`,
    3: `3ª ONDA — FRAUDE COM BIG DATA

A IA analisa em tempo real:
- histórico do cliente
- localização
- tipo de compra
- comportamento no app
- padrões globais

Resultado:
Detecção mais rápida, personalizada e inteligente.`
  },
  filme: {
    1: `1ª ONDA — RECOMENDAÇÃO COM REGRAS

SE gosta de ação
ENTÃO recomendar filme de ação.

Simples, mas pouco personalizado.`,
    2: `2ª ONDA — RECOMENDAÇÃO COM APRENDIZADO

A IA aprende com:
- filmes assistidos
- notas
- gêneros preferidos
- usuários parecidos

Resultado:
Recomendação mais inteligente.`,
    3: `3ª ONDA — RECOMENDAÇÃO COM BIG DATA

A plataforma analisa milhões de pessoas:
- cliques
- tempo assistido
- pausas
- buscas
- comportamento global

Resultado:
Recomendações como Netflix.`
  },
  medico: {
    1: `1ª ONDA — DIAGNÓSTICO COM REGRAS

SE febre + exame alterado
ENTÃO sugerir hipótese.

Exemplo:
MYCIN.`,
    2: `2ª ONDA — DIAGNÓSTICO COM MACHINE LEARNING

A IA aprende com exames antigos e diagnósticos confirmados.

Resultado:
Ajuda a encontrar padrões em novos pacientes.`,
    3: `3ª ONDA — DIAGNÓSTICO COM IA COGNITIVA

A IA analisa:
- imagens médicas
- prontuários
- exames
- linguagem natural
- milhões de casos

Resultado:
Apoio médico muito mais avançado.`
  }
};

document.querySelectorAll("[data-sim]").forEach(btn => {
  btn.addEventListener("click", () => {
    const problem = document.getElementById("problemSelect").value;
    const wave = btn.dataset.sim;
    document.getElementById("terminal").textContent = simulations[problem][wave];
    addXP(5);
  });
});

const flashcards = [
  ["Qual é o macete das 3 ondas?", "RAB: Regras, Aprendizado, Big Data."],
  ["O que caracteriza a 1ª onda?", "Sistemas baseados em regras criadas por humanos."],
  ["MYCIN pertence a qual onda?", "1ª onda: sistemas especialistas."],
  ["O que caracteriza a 2ª onda?", "Machine Learning: aprender com dados."],
  ["O que são redes neurais?", "Modelos inspirados no cérebro para reconhecer padrões."],
  ["O que caracteriza a 3ª onda?", "Big Data, IA cognitiva, nuvem, GPUs e dados massivos."],
  ["ChatGPT é exemplo de qual onda?", "3ª onda."],
  ["Sistema antifraude com aprendizado é exemplo de qual onda?", "2ª onda."],
  ["Qual a pegadinha da 1ª onda?", "Ela não aprende sozinha; segue regras."],
  ["Big Data sozinho é IA?", "Não. Big Data alimenta sistemas de IA, mas não é IA sozinho."]
];

let flashIndex = 0;
let answerVisible = false;

function renderFlash() {
  document.getElementById("flashQuestion").textContent = flashcards[flashIndex][0];
  document.getElementById("flashAnswer").textContent = flashcards[flashIndex][1];
  document.getElementById("flashAnswer").classList.add("hidden");
  document.getElementById("flashCounter").textContent = `${flashIndex + 1}/${flashcards.length}`;
  answerVisible = false;
}

document.getElementById("showFlash").addEventListener("click", () => {
  answerVisible = !answerVisible;
  document.getElementById("flashAnswer").classList.toggle("hidden", !answerVisible);
  addXP(2);
});

document.getElementById("prevFlash").addEventListener("click", () => {
  flashIndex = Math.max(0, flashIndex - 1);
  renderFlash();
});

document.getElementById("nextFlash").addEventListener("click", () => {
  flashIndex = Math.min(flashcards.length - 1, flashIndex + 1);
  renderFlash();
});

renderFlash();

const quiz = [
  {
    q: "Qual alternativa mostra corretamente a evolução das 3 ondas da IA?",
    options: ["Regras → Machine Learning → Big Data/IA Cognitiva", "Big Data → Regras → Redes", "Hardware → Software → Internet", "Nuvem → Planilha → Chatbot"],
    answer: 0,
    wave: "geral",
    exp: "A ordem correta é: 1ª regras, 2ª aprendizado com dados, 3ª Big Data e IA cognitiva."
  },
  {
    q: "MYCIN é exemplo de:",
    options: ["Sistema especialista da 1ª onda", "Rede neural da 2ª onda", "Chatbot da 3ª onda", "Big Data"],
    answer: 0,
    wave: "onda1",
    exp: "MYCIN é um sistema especialista baseado em regras, portanto pertence à 1ª onda."
  },
  {
    q: "A principal característica da 2ª onda é:",
    options: ["Seguir regras fixas", "Aprender com dados", "Usar apenas internet", "Não usar algoritmos"],
    answer: 1,
    wave: "onda2",
    exp: "A 2ª onda é marcada por Machine Learning, ou seja, aprendizado com dados."
  },
  {
    q: "A 3ª onda está associada principalmente a:",
    options: ["Big Data, nuvem, GPUs e IA cognitiva", "Somente regras manuais", "Ábaco e calculadora", "Sistemas sem dados"],
    answer: 0,
    wave: "onda3",
    exp: "A 3ª onda depende de dados massivos e alto poder computacional."
  },
  {
    q: "Qual afirmação está errada?",
    options: ["1ª onda usa regras", "2ª onda aprende com dados", "3ª onda usa Big Data", "MYCIN é exemplo da 3ª onda"],
    answer: 3,
    wave: "onda1",
    exp: "MYCIN é exemplo da 1ª onda, não da 3ª."
  },
  {
    q: "Se uma questão falar em 'SE condição ENTÃO ação', ela provavelmente fala da:",
    options: ["1ª onda", "2ª onda", "3ª onda", "Cloud Computing"],
    answer: 0,
    wave: "onda1",
    exp: "Esse formato representa regras fixas, típico da 1ª onda."
  },
  {
    q: "Netflix recomendando filmes com base em milhões de usuários se relaciona mais com:",
    options: ["3ª onda", "1ª onda apenas", "Nenhuma onda", "Máquina de Turing"],
    answer: 0,
    wave: "onda3",
    exp: "Recomendação moderna usa Big Data e aprendizado em larga escala."
  }
];

let quizIndex = 0;
let score = 0;
let answered = false;
const stats = { onda1: 0, onda2: 0, onda3: 0, geral: 0 };
const totalStats = { onda1: 0, onda2: 0, onda3: 0, geral: 0 };

function renderQuiz() {
  answered = false;
  const item = quiz[quizIndex];

  document.getElementById("quizQuestion").textContent = `${quizIndex + 1}. ${item.q}`;
  document.getElementById("quizOptions").innerHTML = item.options.map((op, i) => `
    <button class="option" data-option="${i}">${op}</button>
  `).join("");

  document.getElementById("feedback").style.display = "none";
  document.getElementById("feedback").innerHTML = "";
  document.getElementById("score").textContent = `Pontuação: ${score}/${quiz.length}`;

  document.querySelectorAll(".option").forEach(btn => {
    btn.addEventListener("click", () => {
      if (answered) return;
      answered = true;

      const selected = Number(btn.dataset.option);
      const correct = item.answer;

      totalStats[item.wave]++;

      document.querySelectorAll(".option").forEach((button, index) => {
        if (index === correct) button.classList.add("correct");
        if (index === selected && selected !== correct) button.classList.add("wrong");
      });

      if (selected === correct) {
        score++;
        stats[item.wave]++;
        addXP(8);
      }

      const feedback = document.getElementById("feedback");
      feedback.style.display = "block";
      feedback.innerHTML = selected === correct
        ? `<strong>✅ Correto!</strong><br>${item.exp}`
        : `<strong>❌ Errado.</strong><br>${item.exp}`;

      document.getElementById("score").textContent = `Pontuação: ${score}/${quiz.length}`;
      updateDiagnostic();
    });
  });
}

document.getElementById("nextQuiz").addEventListener("click", () => {
  quizIndex++;

  if (quizIndex >= quiz.length) {
    document.querySelector(".quiz-card").innerHTML = `
      <h3>Quiz finalizado!</h3>
      <p>Você acertou <strong>${score}</strong> de <strong>${quiz.length}</strong>.</p>
      <p>${score >= 6 ? "Excelente! Você está muito bem para prova." : "Revise flashcards e mapa mental antes da prova."}</p>
      <button class="primary" onclick="showPage('diagnostico')">Ver diagnóstico</button>
    `;
    updateDiagnostic();
    return;
  }

  renderQuiz();
});

function updateDiagnostic() {
  const percent = Math.round((score / quiz.length) * 100);
  document.getElementById("finalScore").textContent = `Conhecimento geral: ${percent}%`;

  const labels = {
    onda1: "1ª Onda — Regras",
    onda2: "2ª Onda — Machine Learning",
    onda3: "3ª Onda — Big Data",
    geral: "Conceito geral"
  };

  let html = "";
  Object.keys(labels).forEach(key => {
    const total = totalStats[key] || 0;
    const value = total ? Math.round((stats[key] / total) * 100) : 0;
    html += `
      <div class="bar-row">
        <p>${labels[key]}: ${value}%</p>
        <div class="bar-track"><div class="bar-fill" style="width:${value}%"></div></div>
      </div>
    `;
  });

  document.getElementById("diagnosticBars").innerHTML = html;

  const weak = [];
  Object.keys(labels).forEach(key => {
    const total = totalStats[key] || 0;
    const value = total ? Math.round((stats[key] / total) * 100) : 0;
    if (total > 0 && value < 70) weak.push(labels[key]);
  });

  document.getElementById("weakPoints").innerHTML = weak.length
    ? `<h3>Pontos fracos para revisar:</h3><ul>${weak.map(w => `<li>${w}</li>`).join("")}</ul>`
    : `<h3>Ótimo!</h3><p>Nenhum ponto fraco grave identificado até agora.</p>`;
}

renderQuiz();
updateDiagnostic();

/**
 * Quiz de Geografia – Neon Clean (A)
 * Recursos:
 * - 15 questões baseadas na pré-prova (relevo, altitude, hipobaropatia, formas de relevo, agentes internos/externos,
 *   solo/agricultura/moradia, impermeabilização, formação do solo, ciclo da água, oceanos).
 * - Nome e Dia salvos no localStorage
 * - Barra de progresso, explicação após conferir
 * - Animações suaves (hover, shake, fade)
 * - Imagens nas alternativas e/ou no topo da questão (coloque os arquivos na pasta /img)
 * - Acessar resultado a qualquer momento via botão “Resultado”
 * - Sem botões de Refazer/Compartilhar
 */

// ======== DADOS DO QUIZ (15 questões) ======== //
const QUIZ = [
    {
      title: "O que é relevo?",
      media: { img: "img/relevo-montanhas.jpg", alt: "Montanhas ao pôr do sol" },
      options: [
        "As formas da superfície da Terra, como montanhas, planaltos e planícies",
        "O movimento da água entre mares e rios",
        "Somente áreas planas formadas por rios",
        "O conjunto de países de um continente",
      ],
      answer: 0,
      explain:
        "Relevo é o conjunto das diferentes formas da superfície terrestre: montanhas, planaltos, planícies e depressões.",
    },
    {
      title: "Altitude é…",
      options: [
        "A profundidade de um rio",
        "A altura de um lugar em relação ao nível do mar",
        "A distância entre duas cidades",
        "O tamanho de uma montanha",
      ],
      answer: 1,
      explain:
        "Altitude mede a altura de um ponto comparando com o nível do mar (0 m). Quanto maior a altitude, mais frio e menos oxigênio.",
    },
    {
      title: "Hipobaropatia (mal da altitude) acontece porque…",
      options: [
        "Em grandes altitudes o ar tem menos oxigênio (ar rarefeito)",
        "No alto a gravidade é maior",
        "No alto chove mais",
        "No alto o solo é mais fértil",
      ],
      answer: 0,
      explain:
        "Em lugares muito altos, o ar é mais rarefeito (menos oxigênio), o que pode causar dor de cabeça, tontura e cansaço.",
    },
    {
      title: "Identifique a forma de relevo:",
      media: null,
      options: [
        { img: "img/montanha.jpg", label: "Montanha" },
        { img: "img/planicie.jpg", label: "Planície" },
        { img: "img/planalto.jpg", label: "Planalto" },
        { img: "img/depressao.jpeg", label: "Depressão" },
      ],
      answer: 0, // ajuste se quiser que a correta seja outra imagem
      explain:
        "Montanhas: grandes elevações; Planícies: áreas planas; Planaltos: superfícies elevadas aplainadas; Depressões: áreas mais baixas que o entorno.",
    },
    {
      title: "Agentes internos do relevo incluem:",
      options: [
        "Chuvas e ventos",
        "Rios e ondas do mar",
        "Placas tectônicas, vulcanismo e terremotos",
        "Geleiras e variações de temperatura",
      ],
      answer: 2,
      explain:
        "Agentes internos (endógenos) atuam no interior da Terra: tectonismo, vulcanismo e sismos. Eles criam/grandes estruturas do relevo.",
    },
    {
      title: "Agentes externos do relevo incluem:",
      options: [
        "Placas tectônicas e vulcanismo",
        "Chuvas, rios, vento, ondas do mar, gelo e temperatura",
        "Somente rios",
        "Apenas o vento",
      ],
      answer: 1,
      explain:
        "Agentes externos (exógenos) desgastam, transportam e depositam materiais: água (chuva/rios/mar), vento, gelo e variações de temperatura.",
    },
    {
      title: "Técnica agrícola que constrói 'degraus' em encostas:",
      options: ["Rotação de culturas", "Policultura", "Terraceamento", "Monocultura"],
      answer: 2,
      explain:
        "O terraceamento cria patamares em morros, reduzindo a erosão e facilitando o plantio em áreas inclinadas.",
    },
    {
      title: "Sobre moradia e riscos no relevo, assinale a correta:",
      options: [
        "Encostas e margens de rios são áreas de risco",
        "Planícies nunca alagam",
        "Construir sobre aterros elimina riscos",
        "Impermeabilizar o solo (asfalto) reduz enchentes",
      ],
      answer: 0,
      explain:
        "Encostas têm risco de deslizamento e margens de rios podem alagar. Impermeabilização geralmente aumenta a chance de enchentes.",
    },
    {
      title: "Solo impermeabilizado (muito asfalto/cimento) tende a…",
      media: { img: "img/rua-alagada.jpg", alt: "Rua alagada em área urbana" },
      options: [
        "Aumentar as enchentes por dificultar a infiltração",
        "Diminuir as enchentes por segurar a água",
        "Aumentar a fertilidade do solo",
        "Diminuir a erosão sempre",
      ],
      answer: 0,
      explain:
        "Com o solo coberto, a água não infiltra e escoa rapidamente para ruas e rios, elevando o risco de enchentes.",
    },
    {
      title: "A formação do solo depende principalmente de:",
      options: [
        "Somente da chuva",
        "Rochas (rocha-mãe), clima (chuva/temperatura) e seres vivos",
        "Apenas do vento",
        "Somente de terremotos",
      ],
      answer: 1,
      explain:
        "O solo se forma a partir da rocha-mãe, sendo transformada ao longo do tempo pelo clima e pela ação de seres vivos (raízes, microrganismos).",
    },
    {
      title: "Planeta Água: a maior parte da água do planeta é…",
      options: [
        "Doce e fica nos rios",
        "Salgada e está nos oceanos",
        "Doce e fica nas nuvens",
        "Doce e fica apenas no subsolo",
      ],
      answer: 1,
      explain:
        "Cerca de 97% da água do planeta é salgada e está nos oceanos; a água doce está principalmente em geleiras e no subsolo.",
    },
    {
      title: "Ciclo da água: qual processo forma nuvens?",
      options: ["Evaporação", "Condensação", "Precipitação", "Infiltração"],
      answer: 1,
      explain:
        "A condensação ocorre quando o vapor d’água esfria e forma gotículas, originando as nuvens.",
    },
    {
      title: "Sobre estados e mudanças da água, assinale a correta:",
      options: [
        "Sólido → líquido = Fusão; gasoso → líquido = Condensação",
        "Sólido → líquido = Condensação; gasoso → líquido = Fusão",
        "Líquido → gasoso = Condensação; gasoso → líquido = Fusão",
        "Sólido → gasoso = Fusão; gasoso → sólido = Evaporação",
      ],
      answer: 0,
      explain:
        "Fusão: sólido para líquido. Condensação: gasoso para líquido. (Evaporação é líquido → gasoso).",
    },
    {
      title: "Quantos oceanos a Terra possui?",
      media: { img: "img/mapa-mundi.jpg", alt: "Mapa-múndi com oceanos" },
      options: ["3", "4", "5", "6"],
      answer: 2,
      explain:
        "São cinco oceanos: Pacífico, Atlântico, Índico, Ártico e Antártico.",
    },
    {
      title: "Qual é o maior oceano do mundo?",
      options: ["Atlântico", "Índico", "Pacífico", "Antártico"],
      answer: 2,
      explain:
        "O Oceano Pacífico é o maior oceano do planeta.",
    },
  ];
  
  // ======== ELEMENTOS (do seu index.html) ======== //
  const $ = (q) => document.querySelector(q);
  const qTitle = $("#qTitle");
  const qIndex = $("#qIndex");
  const qMedia = $("#qMedia");
  const options = $("#options");
  const bar = $("#bar");
  const progressText = $("#progressText");
  const explanation = $("#explanation");
  const btnCheck = $("#btnCheck");
  const btnNext = $("#btnNext");
  const btnSkip = $("#btnSkip");
  const btnPeek = $("#btnPeek");
  
  const dlgResult = $("#dlgResult");
  const scorePct = $("#scorePct");
  const ring = $("#ring");
  const scoreTitle = $("#scoreTitle");
  const scoreDesc = $("#scoreDesc");
  const metaName = $("#metaName");
  const metaDate = $("#metaDate");
  const btnClose = $("#btnClose");
  
  const stuName = $("#stuName");
  const stuDate = $("#stuDate");
  const btnSaveStu = $("#btnSaveStu");
  
  // ======== ESTADO ======== //
  let order = [...Array(QUIZ.length).keys()];
  shuffle(order);               // embaralha a ordem das questões
  let i = 0;                    // índice da questão atual na ordem
  let selected = null;          // índice da alternativa escolhida
  let locked = false;           // bloqueia interação após conferir
  let score = 0;                // acertos
  
  // ======== LOCAL STORAGE ======== //
  const store = {
    get() {
      try { return JSON.parse(localStorage.getItem("quiz-geo-6") || "{}"); }
      catch { return {}; }
    },
    set(data) {
      localStorage.setItem("quiz-geo-6", JSON.stringify({ ...store.get(), ...data }));
    },
  };
  
  // ======== INICIALIZAÇÃO ======== //
  restoreStudent();
  start();
  
  function start() {
    i = 0;
    selected = null;
    locked = false;
    score = 0;
    explanation.classList.remove("show");
    showQuestion();
    updateBar();
    progressText.textContent = `${score} acertos`;
  }
  
  function showQuestion() {
    const q = QUIZ[order[i]];
    qIndex.textContent = `${i + 1}/${QUIZ.length}`;
    qTitle.textContent = q.title;
  
    // mídia (imagem no topo da questão)
    qMedia.innerHTML = "";
    if (q.media?.img) {
      const img = document.createElement("img");
      img.src = q.media.img;
      img.alt = q.media.alt || "";
      qMedia.appendChild(img);
    }
  
    // opções
    options.innerHTML = "";
    selected = null;
    locked = false;
    explanation.classList.remove("show");
  
    q.options.forEach((opt, idx) => {
      const isObj = typeof opt === "object";
      const li = document.createElement("div");
      li.className = "option";
      li.setAttribute("role", "option");
      li.setAttribute("tabindex", "0");
      li.setAttribute("aria-selected", "false");
      li.dataset.index = idx;
  
      li.addEventListener("click", () => select(idx));
      li.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); select(idx); }
        if (ev.key === "ArrowDown") { ev.preventDefault(); focusNext(li); }
        if (ev.key === "ArrowUp") { ev.preventDefault(); focusPrev(li); }
      });
  
      li.innerHTML = `
        <div class="radio"></div>
        <div class="opt-content">
          ${isObj && opt.img ? `<img class="opt-img" src="${opt.img}" alt="${opt.label || ""}">` : ""}
          <div class="opt-text">${isObj ? (opt.label || "") : opt}</div>
        </div>`;
  
      options.appendChild(li);
    });
  
    btnCheck.disabled = false;
    btnNext.disabled = true;
  }
  
  function select(idx) {
    if (locked) return;
    selected = idx;
    [...options.children].forEach((el) => {
      const isSel = Number(el.dataset.index) === idx;
      el.classList.toggle("selected", isSel);
      el.setAttribute("aria-selected", String(isSel));
    });
  }
  
  function check() {
    if (selected === null) { bounce(options); return; }
  
    const q = QUIZ[order[i]];
    const correct = q.answer;
    locked = true;
  
    [...options.children].forEach((el) => {
      const idx = Number(el.dataset.index);
      if (idx === correct) el.classList.add("correct");
      if (idx === selected && selected !== correct) el.classList.add("wrong");
    });
  
    if (selected === correct) score++;
    progressText.textContent = `${score} acertos`;
  
    explanation.textContent = q.explain || "";
    explanation.classList.add("show");
  
    btnNext.disabled = false;
  }
  
  function next() {
    if (i < QUIZ.length - 1) {
      i++;
      showQuestion();
      updateBar();
    } else {
      updateBar(100);
      openResult();
    }
  }
  
  function skip() {
    if (locked) return next();
    next();
  }
  
  function updateBar(force) {
    const pct = force ?? (i / QUIZ.length) * 100;
    bar.style.width = pct + "%";
  }
  
  function openResult() {
    const pct = Math.round((score / QUIZ.length) * 100);
    scorePct.textContent = pct + "%";
    ring.style.setProperty("--pct", pct + "%");
    scoreTitle.textContent = pct >= 70 ? "Mandou muito bem! 🎉" : "Boa! Continue praticando 💪";
    scoreDesc.textContent = `Você acertou ${score} de ${QUIZ.length} questões.`;
  
    const { name, date } = store.get();
    metaName.textContent = `Aluno(a): ${name || "—"}`;
    metaDate.textContent = `Data: ${date || "—"}`;
  
    if (typeof dlgResult.showModal === "function") dlgResult.showModal();
    else dlgResult.setAttribute("open", "");
  }
  
  function closeResult() {
    if (typeof dlgResult.close === "function") dlgResult.close();
    else dlgResult.removeAttribute("open");
  }
  
  // ======== UX & ACESSIBILIDADE ======== //
  function focusNext(el) { const nxt = el.nextElementSibling; if (nxt) nxt.focus(); }
  function focusPrev(el) { const prv = el.previousElementSibling; if (prv) prv.focus(); }
  function bounce(el) { el.style.transform = "translateY(-2px)"; setTimeout(() => (el.style.transform = ""), 120); }
  function shuffle(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
      const k = Math.floor(Math.random() * (j + 1));
      [arr[j], arr[k]] = [arr[k], arr[j]];
    }
  }
  
  // ======== EVENTOS ======== //
  btnCheck.addEventListener("click", check);
  btnNext.addEventListener("click", next);
  btnSkip.addEventListener("click", skip);
  btnPeek.addEventListener("click", openResult);
  btnClose.addEventListener("click", closeResult);
  
  document.addEventListener("keydown", (ev) => {
    if (dlgResult.open && ev.key === "Escape") closeResult();
    if (!dlgResult.open) {
      if (ev.key === "Enter") { if (!locked) check(); else next(); }
    }
  });
  
  btnSaveStu.addEventListener("click", () => {
    const name = stuName.value.trim();
    const date = stuDate.value;
  
    if (!name || !date) {
      [stuName, stuDate].forEach((inEl) => {
        if (!inEl.value) {
          inEl.classList.add("warn"); // seu CSS pode não ter .warn; é opcional
          setTimeout(() => inEl.classList.remove("warn"), 600);
        }
      });
      return;
    }
  
    store.set({ name, date });
    btnSaveStu.textContent = "Salvo!";
    setTimeout(() => (btnSaveStu.textContent = "Salvar"), 1200);
  });
  
  function restoreStudent() {
    const { name, date } = store.get();
    if (name) stuName.value = name;
    if (date) stuDate.value = date;
  }
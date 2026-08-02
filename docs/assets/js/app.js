import {
  ALLAH_NAMES,
  DEVOTIONALS,
  FEATURED_SURAHS,
  SURAHS,
  TOPIC_CATEGORIES,
  TOPIC_DETAILS,
  TOPICS
} from "./data.js";
import { SITE_CONFIG } from "./config.js";

const STORAGE = {
  theme: "luzdoalcorao:theme",
  favorites: "luzdoalcorao:favorites"
};

const page = document.body.dataset.page;
const params = new URLSearchParams(window.location.search);

const normalize = (value = "") => value
  .toString()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/[^\p{L}\p{N}\s']/gu, " ")
  .replace(/\s+/g, " ")
  .trim();

const escapeHtml = (value = "") => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const getFavorites = () => {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE.favorites) || "[]");
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch {
    return new Set();
  }
};

const toggleFavorite = (key) => {
  const favorites = getFavorites();
  favorites.has(key) ? favorites.delete(key) : favorites.add(key);
  localStorage.setItem(STORAGE.favorites, JSON.stringify([...favorites]));
  return favorites.has(key);
};

const setFavoriteButton = (button, active, label = "Favoritar") => {
  if (!button) return;
  button.classList.toggle("active", active);
  button.setAttribute("aria-pressed", String(active));
  button.innerHTML = active ? "★ Salvo" : `☆ ${label}`;
};

const pageLinks = {
  home: "index.html",
  surahs: "suratas.html",
  surah: "suratas.html",
  devotional: "devocional.html",
  library: "biblioteca.html",
  topic: "biblioteca.html",
  names: "nomes-de-allah.html",
  prophet: "profeta-muhammad.html",
  studies: "estudos.html",
  pillars: "estudos.html",
  theology: "estudos.html",
  sharia: "estudos.html",
  currents: "estudos.html",
  method: "metodologia.html",
  author: "autor.html"
};

class SiteHeader extends HTMLElement {
  connectedCallback() {
    const current = pageLinks[page];
    const currentAttr = (href) => current === href ? ' aria-current="page"' : "";
    this.innerHTML = `
      <header class="site-header">
        <div class="container header-inner">
          <a class="brand" href="index.html" aria-label="Luz do Alcorão — início">
            <span class="brand-mark" aria-hidden="true">ل</span>
            <span class="brand-copy"><strong>Luz do Alcorão</strong><small>Biblioteca islâmica</small></span>
          </a>
          <nav class="desktop-nav" aria-label="Navegação principal">
            <a href="index.html"${currentAttr("index.html")}>Início</a>
            <a href="suratas.html"${currentAttr("suratas.html")}>Alcorão</a>
            <a href="devocional.html"${currentAttr("devocional.html")}>Devocional</a>
            <a href="biblioteca.html"${currentAttr("biblioteca.html")}>Biblioteca</a>
            <a href="nomes-de-allah.html"${currentAttr("nomes-de-allah.html")}>Nomes de Allah</a>
            <a href="estudos.html"${currentAttr("estudos.html")}>Estudos</a>
          </nav>
          <div class="header-actions">
            <a class="icon-button" href="biblioteca.html#pesquisa" aria-label="Pesquisar no site" title="Pesquisar">⌕</a>
            <a class="icon-button" href="suratas.html?favoritos=1" aria-label="Ver favoritos" title="Favoritos">☆</a>
            <button class="icon-button theme-toggle" type="button" aria-label="Alternar tema" title="Alternar tema">◐</button>
            <button class="icon-button menu-button" type="button" aria-label="Abrir menu" aria-expanded="false">☰</button>
          </div>
        </div>
      </header>
      <div class="mobile-nav" aria-hidden="true">
        <nav aria-label="Navegação móvel">
          <a href="index.html">Início</a>
          <a href="suratas.html">As 114 Suratas</a>
          <a href="devocional.html">Devocional do dia</a>
          <a href="biblioteca.html">Biblioteca</a>
          <a href="nomes-de-allah.html">Nomes de Allah</a>
          <a href="profeta-muhammad.html">Profeta Muhammad ﷺ</a>
          <a href="estudos.html">Estudos</a>
          <a href="pilares.html">— Pilares e artigos de fé</a>
          <a href="teologia.html">— Teologia</a>
          <a href="sharia.html">— Sharia e ética</a>
          <a href="correntes.html">— Correntes e pensadores</a>
          <a href="metodologia.html">Metodologia</a>
          <a href="autor.html">Sobre o autor</a>
        </nav>
      </div>`;
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-about">
              <a class="brand" href="index.html">
                <span class="brand-mark" aria-hidden="true">ل</span>
                <span class="brand-copy"><strong>Luz do Alcorão</strong><small>Biblioteca islâmica</small></span>
              </a>
              <p>Um projeto educativo independente para estudo e devoção islâmica em língua portuguesa, desenvolvido com reverência às fontes.</p>
            </div>
            <div class="footer-column">
              <h2>Alcorão</h2>
              <a href="suratas.html">114 Suratas</a>
              <a href="devocional.html">Versículo do dia</a>
              <a href="biblioteca.html?busca=tafsir">Tafsir</a>
            </div>
            <div class="footer-column">
              <h2>Biblioteca</h2>
              <a href="nomes-de-allah.html">Nomes de Allah</a>
              <a href="profeta-muhammad.html">Profeta Muhammad ﷺ</a>
              <a href="estudos.html">Estudos temáticos</a>
              <a href="biblioteca.html?busca=profetas">Histórias dos Profetas</a>
              <a href="biblioteca.html?busca=virtudes">Virtudes</a>
            </div>
            <div class="footer-column">
              <h2>Projeto</h2>
              <a href="metodologia.html">Metodologia</a>
              <a href="fontes.html">Fontes e créditos</a>
              <a href="autor.html">Sobre o autor</a>
              <a href="privacidade.html">Privacidade</a>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© ${new Date().getFullYear()} Luz do Alcorão · concebido, escrito e programado por <a href="autor.html">Dr. Eduardo D'Angelo Mimessi</a></span>
            <span>Texto sagrado, hadith, Tafsir e comentário editorial são apresentados em níveis distintos.</span>
          </div>
        </div>
      </footer>`;
  }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);

function initializeTheme() {
  const saved = localStorage.getItem(STORAGE.theme);
  const preferred = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  const active = saved || preferred;
  document.documentElement.dataset.theme = active;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", active === "dark" ? "#073c35" : "#fffdf7");

  document.querySelector(".theme-toggle")?.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem(STORAGE.theme, next);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", next === "dark" ? "#073c35" : "#fffdf7");
  });
}

function initializeNavigation() {
  const button = document.querySelector(".menu-button");
  const navigation = document.querySelector(".mobile-nav");
  if (!button || !navigation) return;

  const setOpen = (open) => {
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    button.textContent = open ? "×" : "☰";
    navigation.classList.toggle("open", open);
    navigation.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("nav-open", open);
  };

  button.addEventListener("click", () => setOpen(button.getAttribute("aria-expanded") !== "true"));
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
}

function dayIndex(length) {
  const now = new Date();
  const utcDay = Math.floor(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) / 86400000);
  return ((utcDay % length) + length) % length;
}

function activeDevotional() {
  const requested = params.get("id");
  return DEVOTIONALS.find((item) => item.id === requested) || DEVOTIONALS[dayIndex(DEVOTIONALS.length)];
}

function updateMetadata(title, description, canonical) {
  document.title = `${title} — Luz do Alcorão`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
  if (canonical) {
    const link = document.querySelector('link[rel="canonical"]') || document.head.appendChild(Object.assign(document.createElement("link"), { rel: "canonical" }));
    link.href = canonical;
  }
}

function initializeHome() {
  const daily = activeDevotional();
  document.querySelector("#daily-arabic").textContent = daily.arabic;
  document.querySelector("#daily-translation").textContent = `“${daily.translation}”`;
  document.querySelector("#daily-reference").textContent = daily.ref;
  const button = document.querySelector("[data-favorite-daily]");
  const key = `devotional:${daily.id}`;
  const draw = () => {
    const active = getFavorites().has(key);
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
    button.querySelector("span").textContent = active ? "★" : "☆";
    button.setAttribute("aria-label", active ? "Remover dos favoritos" : "Adicionar aos favoritos");
  };
  button?.addEventListener("click", () => {
    toggleFavorite(key);
    draw();
  });
  draw();
}

function initializeSurahs() {
  const grid = document.querySelector("#surah-grid");
  const input = document.querySelector("#surah-search");
  const count = document.querySelector("#surah-count");
  const empty = document.querySelector("#surah-empty");
  let filter = params.get("favoritos") === "1" ? "favorites" : "all";
  if (params.get("busca")) input.value = params.get("busca");

  document.querySelectorAll("[data-surah-filter]").forEach((button) => {
    button.classList.toggle("active", button.dataset.surahFilter === filter);
    button.addEventListener("click", () => {
      filter = button.dataset.surahFilter;
      document.querySelectorAll("[data-surah-filter]").forEach((item) => item.classList.toggle("active", item === button));
      render();
    });
  });

  function render() {
    const query = normalize(input.value);
    const favorites = getFavorites();
    const results = SURAHS.filter((surah) => {
      const searchable = normalize(`${surah.id} ${surah.transliteration} ${surah.arabic} ${FEATURED_SURAHS[surah.id]?.meaning || ""}`);
      const matchesQuery = !query || searchable.includes(query);
      const matchesFilter = filter === "all" || surah.type === filter || (filter === "favorites" && favorites.has(`surah:${surah.id}`));
      return matchesQuery && matchesFilter;
    });

    grid.innerHTML = results.map((surah) => {
      const active = favorites.has(`surah:${surah.id}`);
      return `
        <a class="surah-card" href="surata.html?id=${surah.id}">
          <span class="surah-index"><span>${surah.id}</span></span>
          <span>
            <h2>${escapeHtml(surah.transliteration)}</h2>
            <span class="surah-card-meta">${surah.type === "meccan" ? "Meca" : "Medina"} · ${surah.verses} versículos</span>
          </span>
          <span class="surah-card-arabic" dir="rtl" lang="ar">${surah.arabic}</span>
          <button class="mini-favorite${active ? " active" : ""}" type="button" data-surah-favorite="${surah.id}" aria-label="${active ? "Remover dos favoritos" : "Adicionar aos favoritos"}">${active ? "★" : "☆"}</button>
        </a>`;
    }).join("");
    count.textContent = `${results.length} ${results.length === 1 ? "Surata encontrada" : "Suratas encontradas"}`;
    empty.hidden = results.length > 0;

    grid.querySelectorAll("[data-surah-favorite]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        toggleFavorite(`surah:${button.dataset.surahFavorite}`);
        render();
      });
    });
  }

  input.addEventListener("input", render);
  render();
}

function initializeSurah() {
  const id = Number(params.get("id"));
  const surah = SURAHS.find((item) => item.id === id) || SURAHS[0];
  const featured = FEATURED_SURAHS[surah.id];
  const place = surah.type === "meccan" ? "Meca" : "Medina";
  const title = `${surah.id}. ${surah.transliteration}`;
  const fallbackSummary = `${surah.transliteration} é a Surata ${surah.id} do Alcorão, com ${surah.verses} versículos e classificação predominante como revelação de ${place}. A síntese histórica e o comentário verso a verso estão na fila de revisão editorial do projeto.`;
  const fallbackCommentary = "Para preservar o rigor, esta página não apresenta uma interpretação genérica como se fosse o comentário específico da Surata. A leitura integral já está disponível; resumo, contexto, temas, hadiths relacionados e sínteses de Tafsir serão acrescentados somente após revisão das fontes clássicas.";
  const themes = featured?.themes || ["Leitura do Alcorão", "Orientação", "Estudo em revisão"];

  document.querySelector("#surah-number").textContent = `Surata ${String(surah.id).padStart(3, "0")}`;
  document.querySelector("#surah-title").textContent = surah.transliteration;
  document.querySelector("#surah-meaning").textContent = featured?.meaning || "Nome transliterado";
  document.querySelector("#surah-arabic").textContent = surah.arabic;
  document.querySelector("#surah-meta").innerHTML = `<span>${place}</span><span>${surah.verses} versículos</span><span>Ordem no Mushaf: ${surah.id}</span>`;
  document.querySelector("#surah-summary").textContent = featured?.summary || fallbackSummary;
  document.querySelector("#surah-commentary").textContent = featured?.commentary || fallbackCommentary;
  document.querySelector("#surah-themes").innerHTML = themes.map((theme) => `<span>${escapeHtml(theme)}</span>`).join("");

  ["#surah-read-link", "#surah-external-link"].forEach((selector) => {
    const link = document.querySelector(selector);
    link.href = surah.quranUrl;
  });

  const favoriteButton = document.querySelector("#surah-favorite");
  const key = `surah:${surah.id}`;
  const draw = () => setFavoriteButton(favoriteButton, getFavorites().has(key));
  favoriteButton.addEventListener("click", () => {
    toggleFavorite(key);
    draw();
  });
  draw();

  updateMetadata(`${surah.transliteration} (${surah.arabic})`, `${fallbackSummary}`, `https://luzdoalcorao.com.br/surata.html?id=${surah.id}`);
}

function initializeLibrary() {
  const requestedTopic = params.get("tema");
  const directTopic = TOPICS.find((topic) => topic.slug === requestedTopic);
  if (directTopic) {
    window.location.replace(directTopic.url);
    return;
  }

  const grid = document.querySelector("#library-grid");
  const input = document.querySelector("#library-search");
  const filters = document.querySelector("#library-filters");
  const count = document.querySelector("#library-count");
  let category = "all";
  input.value = params.get("busca") || "";
  filters.innerHTML = [
    `<button class="filter-chip active" type="button" data-category="all">Todos</button>`,
    ...Object.entries(TOPIC_CATEGORIES).map(([key, label]) => `<button class="filter-chip" type="button" data-category="${key}">${label}</button>`)
  ].join("");

  filters.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      category = button.dataset.category;
      filters.querySelectorAll("[data-category]").forEach((item) => item.classList.toggle("active", item === button));
      render();
    });
  });

  function render() {
    const query = normalize(input.value);
    const results = TOPICS.filter((topic) => {
      const searchable = normalize(`${topic.title} ${topic.description} ${topic.refs.join(" ")} ${TOPIC_CATEGORIES[topic.category]}`);
      return (category === "all" || topic.category === category) && (!query || searchable.includes(query));
    });
    grid.innerHTML = results.map((topic, index) => `
      <a class="library-card" href="${topic.url}">
        <span class="library-card-index">${String(index + 1).padStart(2, "0")}</span>
        <span class="tag">${TOPIC_CATEGORIES[topic.category]}</span>
        <h2>${escapeHtml(topic.title)}</h2>
        <p>${escapeHtml(topic.description)}</p>
        <span class="card-action">Abrir estudo ←</span>
      </a>`).join("");
    count.textContent = `${results.length} ${results.length === 1 ? "estudo encontrado" : "estudos encontrados"}`;
  }

  input.addEventListener("input", render);
  render();
}

function initializeTopic() {
  const topic = TOPICS.find((item) => item.slug === params.get("slug")) || TOPICS.find((item) => item.slug === "virtudes-islamicas");
  const detail = TOPIC_DETAILS[topic.slug] || TOPIC_DETAILS.default;
  const favoriteButton = document.querySelector("#topic-favorite");
  const key = `topic:${topic.slug}`;

  document.querySelector("#topic-category").textContent = TOPIC_CATEGORIES[topic.category];
  document.querySelector("#topic-title").textContent = topic.title;
  document.querySelector("#topic-intro").textContent = topic.description;
  document.querySelector("#topic-content").innerHTML = `
    <section class="content-block">
      <p class="eyebrow">Visão geral</p>
      <h2>Compreendendo ${escapeHtml(topic.title)}</h2>
      <p>${escapeHtml(detail.overview)}</p>
    </section>
    <section class="content-block">
      <p class="eyebrow">Evidências corânicas</p>
      <h2>Referências para leitura</h2>
      ${topic.refs.map((ref) => `
        <div class="verse-citation">
          <span>Alcorão · ${escapeHtml(ref)}</span>
          <blockquote>Leia o versículo no contexto completo da Surata antes de consultar a síntese interpretativa.</blockquote>
          <a href="https://quran.com/pt/${encodeURIComponent(ref)}" target="_blank" rel="noopener">Abrir Alcorão ${escapeHtml(ref)} ↗</a>
        </div>`).join("")}
    </section>
    <section class="content-block interpretation-block">
      <div class="label-row"><span class="content-label">Comentário · não é texto revelado</span><span class="source-badge">Síntese de Tafsir</span></div>
      <h2>Leitura orientada</h2>
      <p>${escapeHtml(detail.commentary)}</p>
      <p class="editorial-note">Síntese editorial baseada nos comentários de Ibn Kathir e As-Sa'di das referências indicadas. Al-Tabari e Al-Qurtubi integram a revisão ampliada.</p>
    </section>
    <section class="content-block">
      <p class="eyebrow">Aplicação prática</p>
      <h2>Transformar estudo em ação</h2>
      <p>${escapeHtml(detail.practice)}</p>
    </section>
    <section class="content-block">
      <p class="eyebrow">Fontes-base</p>
      <h2>Para aprofundar</h2>
      <ul class="source-list">
        <li>Alcorão: ${topic.refs.map(escapeHtml).join("; ")}</li>
        <li>Tafsir Ibn Kathir, comentários dos versículos citados</li>
        <li>Tafsir As-Sa'di, comentários dos versículos citados</li>
        <li>Tafsir Al-Tabari e Al-Qurtubi, na revisão de divergências</li>
      </ul>
    </section>`;

  const draw = () => setFavoriteButton(favoriteButton, getFavorites().has(key));
  favoriteButton.addEventListener("click", () => {
    toggleFavorite(key);
    draw();
  });
  draw();
  updateMetadata(topic.title, topic.description, `https://luzdoalcorao.com.br/tema.html?slug=${topic.slug}`);
}

function devotionalTemplate(item) {
  return `
    <section class="devotional-section" id="versiculo">
      <p class="eyebrow">Alcorão · texto revelado</p>
      <p class="arabic-display" lang="ar" dir="rtl">${item.arabic}</p>
      <div class="verse-citation">
        <span>${escapeHtml(item.ref)} · tradução aproximada do sentido</span>
        <blockquote>“${escapeHtml(item.translation)}”</blockquote>
        <a href="https://quran.com/pt/${encodeURIComponent(item.ref.replace("Alcorão ", ""))}" target="_blank" rel="noopener">Ler no contexto ↗</a>
      </div>
    </section>
    <section class="devotional-section" id="contexto">
      <p class="eyebrow">Breve contexto</p>
      <h2>Onde o versículo se encontra</h2>
      <p>${escapeHtml(item.context)}</p>
    </section>
    <section class="devotional-section interpretation-block" id="comentario">
      <div class="label-row"><span class="content-label">Comentário · interpretação</span><span class="source-badge">Tafsir clássico</span></div>
      <h2>Leitura orientada</h2>
      <p>${escapeHtml(item.commentary)}</p>
      <p class="editorial-note">Este texto é síntese editorial atribuída às fontes listadas; não faz parte do Alcorão.</p>
    </section>
    <section class="devotional-section" id="pratica">
      <p class="eyebrow">Aplicação prática</p>
      <h2>Um passo para hoje</h2>
      <p>${escapeHtml(item.practice)}</p>
    </section>
    <section class="devotional-section" id="dua">
      <p class="eyebrow">Du'a</p>
      <h2>Invocação</h2>
      <div class="dua-block">
        <p class="dua-arabic" lang="ar" dir="rtl">${item.duaArabic}</p>
        <p>${escapeHtml(item.dua)}</p>
      </div>
    </section>
    <section class="devotional-section" id="hadith">
      <p class="eyebrow">Sunnah · hadith relacionado</p>
      <h2>Ensinamento profético</h2>
      <div class="hadith-citation">
        <span>Paráfrase do sentido</span>
        <blockquote>${escapeHtml(item.hadith)}</blockquote>
        <a href="${item.hadithUrl}" target="_blank" rel="noopener">${escapeHtml(item.hadithRef)} ↗</a>
      </div>
    </section>
    <section class="devotional-section" id="reflexao">
      <p class="eyebrow">Perguntas para reflexão</p>
      <h2>Antes de seguir</h2>
      <ol class="reflection-list">${item.questions.map((question) => `<li>${escapeHtml(question)}</li>`).join("")}</ol>
    </section>
    <section class="devotional-section">
      <p class="eyebrow">Fontes</p>
      <h2>Referências deste devocional</h2>
      <ul class="source-list">${item.sources.map((source) => `<li>${escapeHtml(source)}</li>`).join("")}<li>${escapeHtml(item.hadithRef)}</li></ul>
    </section>`;
}

function initializeDevotional() {
  let currentIndex = DEVOTIONALS.findIndex((item) => item.id === activeDevotional().id);
  const date = new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "long", year: "numeric" }).format(new Date());
  document.querySelector("#devotional-date").textContent = date;

  const render = () => {
    const item = DEVOTIONALS[currentIndex];
    document.querySelector("#devotional-title").textContent = item.title;
    document.querySelector("#devotional-lead").textContent = item.lead;
    document.querySelector("#devotional-content").innerHTML = devotionalTemplate(item);
    const key = `devotional:${item.id}`;
    const button = document.querySelector("#devotional-favorite");
    setFavoriteButton(button, getFavorites().has(key));
    button.onclick = () => {
      toggleFavorite(key);
      setFavoriteButton(button, getFavorites().has(key));
    };
    window.history.replaceState({}, "", `devocional.html?id=${item.id}`);
    updateMetadata(item.title, item.lead, `https://luzdoalcorao.com.br/devocional.html?id=${item.id}`);
  };

  document.querySelector("#devotional-previous").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + DEVOTIONALS.length) % DEVOTIONALS.length;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.querySelector("#devotional-next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % DEVOTIONALS.length;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  render();
}

function initializeNames() {
  const grid = document.querySelector("#names-grid");
  const input = document.querySelector("#names-search");
  const count = document.querySelector("#names-count");

  const render = () => {
    const query = normalize(input.value);
    const results = ALLAH_NAMES.filter((name) => !query || normalize(`${name.id} ${name.transliteration} ${name.arabic} ${name.meaning}`).includes(query));
    grid.innerHTML = results.map((name) => `
      <article class="name-card">
        <span class="name-card-index">${String(name.id).padStart(2, "0")}</span>
        <p class="name-card-arabic" lang="ar" dir="rtl">${name.arabic}</p>
        <h2>${escapeHtml(name.transliteration)}</h2>
        <p>${escapeHtml(name.meaning)}</p>
        <span class="evidence">${escapeHtml(name.evidence)}</span>
      </article>`).join("");
    count.textContent = `${results.length} de 99`;
  };
  input.addEventListener("input", render);
  render();
}

function initializeSharing() {
  document.querySelectorAll("[data-share]").forEach((button) => {
    button.addEventListener("click", async () => {
      const data = { title: document.title, text: document.querySelector("meta[name='description']")?.content || "", url: window.location.href };
      try {
        if (navigator.share) {
          await navigator.share(data);
        } else {
          await navigator.clipboard.writeText(window.location.href);
          const original = button.textContent;
          button.textContent = "Link copiado";
          setTimeout(() => { button.textContent = original; }, 1800);
        }
      } catch (error) {
        if (error.name !== "AbortError") console.warn("Não foi possível compartilhar.", error);
      }
    });
  });
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator && window.location.protocol === "https:") {
    window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
  }
}

function initializeAnalytics() {
  const measurementId = SITE_CONFIG.googleAnalyticsId?.trim();
  if (!/^G-[A-Z0-9]+$/i.test(measurementId || "")) return;
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, { anonymize_ip: true });
}

initializeTheme();
initializeNavigation();

({
  home: initializeHome,
  surahs: initializeSurahs,
  surah: initializeSurah,
  library: initializeLibrary,
  topic: initializeTopic,
  devotional: initializeDevotional,
  names: initializeNames
}[page] || (() => {}))();

initializeSharing();
registerServiceWorker();
initializeAnalytics();

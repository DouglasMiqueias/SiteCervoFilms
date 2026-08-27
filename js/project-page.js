/**
 * project-page.js
 */
import PROJECTS from "./projects-data.js";

const getParam = (key) => new URLSearchParams(window.location.search).get(key);

function esc(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

class ProjectPage {
  constructor() {
    this.projectId = getParam("id");
    this.project   = this.projectId ? PROJECTS[this.projectId] : null;
  }

  init() {
    if (!this.project) { this._renderNotFound(); return; }
    this._updateMeta();
    this._renderHero();
    this._renderDetails();
    this._renderRelated();
    this._initScrollReveal();
    this.autoPlay = null;
    this.autoIndex = 0;
  }

  _updateMeta() {
    const p = this.project;
    document.title = `${p.title} — Cervo Films`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", p.about.replace(/\s+/g, " ").trim());
  }

  _renderHero() {
    const p       = this.project;
    const section = document.getElementById("project-hero");
    if (!section) return;

    const mockupClass = p.videoOrientation === "horizontal"
      ? "device-mockup--horizontal"
      : "device-mockup--vertical";

    section.innerHTML = `
      <div class="project-hero-overlay"></div>

      <div class="project-hero-left">
        <div class="project-hero-text">
          <h1 class="project-title">${esc(p.title)}</h1>
          <p class="project-subtitle">${esc(p.subtitle)}</p>
          <div class="project-meta">
            <span class="project-category">${esc(p.category)}</span>
            ${p.duration !== "—" ? `<span class="project-duration">${esc(p.duration)}</span>` : ""}
          </div>
        </div>
        ${this._buildGalleryHTML(p.gallery)}
      </div>

      <div class="device-mockup-wrapper">
        <div class="${mockupClass}">
          <div class="device-screen">
            <iframe
              src="${esc(p.videoSrc)}"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowfullscreen
              referrerpolicy="strict-origin-when-cross-origin"
              title="${esc(p.title)}">
            </iframe>
          </div>
        </div>
      </div>
    `;

    if (!document.querySelector('script[src*="vimeo.com/api/player"]')) {
      const s = document.createElement("script");
      s.src = "https://player.vimeo.com/api/player.js";
      document.body.appendChild(s);
    }

    // Inicializa o carrossel após o render
    requestAnimationFrame(() => this._initGalleryDrag());
  }

  startAutoPlay(track, items) {
  this.stopAutoPlay();

  this.autoPlay = setInterval(() => {
    if (!items.length) return;

    this.autoIndex = (this.autoIndex + 1) % items.length;

    track.scrollTo({
      left: items[this.autoIndex].offsetLeft,
      behavior: "smooth"
    });
  }, 3000);
}

stopAutoPlay() {
  clearInterval(this.autoPlay);
}

  _buildGalleryHTML(images = []) {
    if (!images.length) return "";

    const items = images.map((src, i) => `
      <div class="gallery-item" style="--i:${i}">
        <img src="${esc(src)}" alt="Foto ${i + 1}" loading="lazy" draggable="false">
      </div>
    `).join("");

    const dots = images.map((_, i) =>
      `<button class="gallery-dot${i === 0 ? " active" : ""}" data-index="${i}" aria-label="Foto ${i + 1}"></button>`
    ).join("");

    return `
      <div class="project-gallery">
        <div class="gallery-track" id="galleryTrack">${items}</div>
        <div class="gallery-dots" id="galleryDots">${dots}</div>
      </div>
    `;
  }

  _initGalleryDrag() {
    const track = document.getElementById("galleryTrack");
    const dots  = document.getElementById("galleryDots");
    if (!track) return;

    let isDown = false, startX = 0, scrollLeft = 0;

    // ===== LÓGICA DE ARRASTE (DRAG) =====
    const down = (e) => {
      isDown = true;
      track.classList.add("dragging");
      // Desativa o snap momentaneamente para um arrasto fluido
      track.style.scrollSnapType = "none";
      startX = (e.touches ? e.touches[0].pageX : e.pageX) - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    };

    const up = () => {
      if (!isDown) return;
      isDown = false;
      track.classList.remove("dragging");
      // Reativa o snap para alinhar ao item mais próximo após soltar
      track.style.scrollSnapType = "x mandatory";
    };

    const move = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = (e.touches ? e.touches[0].pageX : e.pageX) - track.offsetLeft;
      const walk = (x - startX) * 1.4; // Multiplicador de velocidade
      track.scrollLeft = scrollLeft - walk;
    };

    track.addEventListener("mousedown", down);
    track.addEventListener("mousedown", () => this.stopAutoPlay());
track.addEventListener("touchstart", () => this.stopAutoPlay());

track.addEventListener("mouseup", () => this.startAutoPlay(track, items));
track.addEventListener("mouseleave", () => this.startAutoPlay(track, items));
track.addEventListener("touchend", () => this.startAutoPlay(track, items));


    

    // ===== LÓGICA DOS INDICADORES (DOTS) =====
    if (!dots) return;
    const items   = track.querySelectorAll(".gallery-item");
    const dotBtns = dots.querySelectorAll(".gallery-dot");

   const syncDots = () => {
  let closestIndex = 0;
  let minDiff = Infinity;

  items.forEach((item, i) => {
    const diff = Math.abs(
      item.getBoundingClientRect().left -
      track.getBoundingClientRect().left
    );

    if (diff < minDiff) {
      minDiff = diff;
      closestIndex = i;
    }
  });

  dotBtns.forEach((btn, i) => {
    btn.classList.toggle("active", i === closestIndex);
  });
};

    track.addEventListener("scroll", syncDots, { passive: true });

    dotBtns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        const target = items[i];
        if (target) {
          track.scrollTo({
            left: target.offsetLeft,
            behavior: "smooth"
          });
        }
      });
    });

    

    syncDots(); // Sync inicial

    let autoIndex = 0;
    let autoPlay;

    const startAutoPlay = () => {
      autoPlay = setInterval(() => {
        if (items.length === 0) return;

        autoIndex = (autoIndex + 1) % items.length;

        track.scrollTo({
          left: items[autoIndex].offsetLeft,
          behavior: "smooth"
        });
      }, 3000); // tempo entre slides (3s)
    };

    const stopAutoPlay = () => {
      clearInterval(autoPlay);
    };

    this.startAutoPlay(track, items);

  }

  _renderDetails() {
    const p = this.project;
    const section = document.getElementById("project-details");
    if (!section) return;

    section.innerHTML = `
      <div class="container">
        <div class="project-details-grid" style="justify-content: center;">
        </div>
      </div>
    `;
  }

  _renderRelated() {
    const p = this.project;
    const section = document.getElementById("project-related");
    if (!section) return;



const MAX = 3;

const ids = Object.keys(PROJECTS)
  .filter(id => id !== this.projectId)
  .map(id => {
    const proj = PROJECTS[id];

    let score = 0;

    // Peso por categoria (principal fator)
    if (proj.category === p.category) score += 3;

    // Peso por tipo de conteúdo (ex: presença de vídeo)
    if (proj.videoOrientation === p.videoOrientation) score += 1;

    // Peso leve aleatório (variação)
    score += Math.random();

    return { id, score };
  })
  .sort((a, b) => b.score - a.score)
  .slice(0, MAX)
  .map(item => item.id);

    
    if (!ids.length) { section.style.display = "none"; return; }

    const cards = ids.map((id) => {
      const rel = PROJECTS[id];
      const thumb = rel.gallery?.[0] || "";
      return `
        <a href="portfolio-project.html?id=${id}" class="related-card pp-reveal">
          ${thumb
            ? `<img src="${esc(thumb)}" alt="${esc(rel.title)}" loading="lazy">`
            : `<div class="related-placeholder"><span class="related-placeholder-title">${esc(rel.title)}</span></div>`}
          <div class="related-overlay">
            <p class="related-name">${esc(rel.title)}</p>
            <p class="related-sub">${esc(rel.category)}</p>
          </div>
        </a>
      `;
    }).join("");

    section.innerHTML = `
      <div class="container">
        <h2 class="section-title pp-reveal">Projetos Relacionados</h2>
        <div class="related-grid">${cards}</div>
      </div>
    `;
  }

  _initScrollReveal() {
    const els = document.querySelectorAll(".pp-reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("pp-visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("pp-visible");
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
  }

  _renderNotFound() {
    const main = document.querySelector("main");
    if (!main) return;
    main.innerHTML = `
      <div style="min-height:80vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:2rem;color:var(--color-primary);">
        <h1 style="font-size:6rem;margin:0;opacity:.15">404</h1>
        <h2 style="margin-top:0">Projeto não encontrado</h2>
        <p style="color:var(--color-text-muted);max-width:400px">O projeto que você procura não existe ou o link está incorreto.</p>
        <a href="index.html#portfolio" class="btn btn-primary" style="margin-top:2rem">← Voltar ao Portfólio</a>
      </div>
    `;
  }

  _whatsappIcon() {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="flex-shrink:0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;
  }
}

document.addEventListener("DOMContentLoaded", () => new ProjectPage().init());
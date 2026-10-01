/* Los Compadres Centro — interacciones */
(function () {
  "use strict";

  // Correo que recibe las respuestas del formato de quejas y sugerencias
  const SURVEY_EMAIL = "garzadanielg@gmail.com";
  const SURVEY_ENDPOINT = "https://formsubmit.co/ajax/" + SURVEY_EMAIL;

  const ACCENTS = {
    orange: "var(--orange)", red: "var(--red)", magenta: "var(--magenta)",
    blue: "var(--blue)", lime: "#9fb01a", purple: "var(--purple)"
  };

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Navegación móvil ---------- */
  const toggle = $(".nav-toggle");
  const nav = $("#nav");
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open", !open);
  });
  $$("#nav a").forEach((a) => a.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
  }));

  /* ---------- Menú con pestañas ---------- */
  function renderItem(item, compact) {
    const [name, price, desc, badge] = item;
    return `<li class="menu-item">
      <div class="menu-item-head">
        <span class="menu-item-name">${escapeHtml(name)}${badge ? `<span class="badge">${escapeHtml(badge)}</span>` : ""}</span>
        <span class="menu-item-dots"></span>
        <span class="menu-item-price">${escapeHtml(price)}</span>
      </div>
      ${!compact && desc ? `<p class="menu-item-desc">${escapeHtml(desc)}</p>` : ""}
    </li>`;
  }

  function renderMenu() {
    const tabs = $(".menu-tabs");
    const panels = $(".menu-panels");
    if (!tabs || typeof MENU === "undefined") return;

    tabs.innerHTML = MENU.map((cat, i) =>
      `<button class="menu-tab" role="tab" id="tab-${cat.id}" aria-controls="panel-${cat.id}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${escapeHtml(cat.tab)}</button>`
    ).join("");

    panels.innerHTML = MENU.map((cat, i) => `
      <div class="menu-panel" role="tabpanel" id="panel-${cat.id}" aria-labelledby="tab-${cat.id}" ${i === 0 ? "" : "hidden"} style="--accent:${ACCENTS[cat.color] || ACCENTS.orange}">
        <div class="menu-photo"><img src="${cat.image}" alt="${escapeHtml(cat.tab)} Los Compadres Centro" loading="lazy"></div>
        <div class="menu-content">
          ${cat.sections.map((sec) => `
            <div class="menu-section">
              <h3 class="menu-section-title">${escapeHtml(sec.title)}</h3>
              ${sec.note ? `<p class="menu-note">${escapeHtml(sec.note)}</p>` : ""}
              ${sec.list ? `<ul class="menu-chips">${sec.list.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul>` : ""}
              ${sec.items ? `<ul class="menu-items${sec.compact ? " compact" : ""}">${sec.items.map((it) => renderItem(it, sec.compact)).join("")}</ul>` : ""}
            </div>`).join("")}
        </div>
      </div>`).join("");

    const tabEls = $$(".menu-tab", tabs);
    function select(tab, focus) {
      tabEls.forEach((t) => {
        const on = t === tab;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
        $("#" + t.getAttribute("aria-controls")).hidden = !on;
      });
      tab.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
      if (focus) tab.focus();
    }
    tabEls.forEach((t, i) => {
      t.addEventListener("click", () => select(t));
      t.addEventListener("keydown", (e) => {
        let j = null;
        if (e.key === "ArrowRight") j = (i + 1) % tabEls.length;
        if (e.key === "ArrowLeft") j = (i - 1 + tabEls.length) % tabEls.length;
        if (e.key === "Home") j = 0;
        if (e.key === "End") j = tabEls.length - 1;
        if (j !== null) { e.preventDefault(); select(tabEls[j], true); }
      });
    });
  }
  renderMenu();

  /* ---------- Formato de quejas y sugerencias ---------- */
  const RATINGS = ["Servicio", "Alimentos", "Limpieza", "Ambiente"];
  const LABELS = ["", "Muy mala", "Mala", "Regular", "Buena", "Excelente"];

  const ratingsBox = $("#ratings");
  ratingsBox.innerHTML = RATINGS.map((r, idx) => {
    const id = "r" + idx;
    let stars = "";
    for (let v = 5; v >= 1; v--) {
      stars += `<input type="radio" id="${id}-${v}" name="Calificación ${r}" value="${v}">` +
               `<label for="${id}-${v}" title="${v} · ${LABELS[v]}" aria-label="${v} de 5, ${LABELS[v]}">★</label>`;
    }
    return `<div class="rating-row" data-rating="${r}">
      <span class="rating-label" id="${id}-label">${r}</span>
      <div class="rating-right">
        <div class="stars" role="radiogroup" aria-labelledby="${id}-label">${stars}</div>
        <span class="rating-value" aria-hidden="true"></span>
      </div>
    </div>`;
  }).join("");
  $$(".rating-row").forEach((row) => {
    row.addEventListener("change", (e) => {
      $(".rating-value", row).textContent = e.target.value + " · " + LABELS[e.target.value];
      row.classList.remove("invalid");
    });
  });

  const form = $("#survey-form");
  const status = $(".form-status", form);
  const submitBtn = $("button[type=submit]", form);

  // Fecha y hora actuales por defecto, folio único
  function pad(n) { return String(n).padStart(2, "0"); }
  function resetDefaults() {
    const now = new Date();
    $("#visit-date").value = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
    $("#visit-time").value = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
    $("#folio").textContent = `${String(now.getFullYear()).slice(2)}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
  }
  resetDefaults();

  // Campos "Otro" con texto
  $$("input[data-other]", form).forEach((cb) => {
    const other = $("#" + cb.dataset.other);
    cb.addEventListener("change", () => {
      other.hidden = !cb.checked;
      if (cb.checked) other.focus(); else other.value = "";
    });
  });
  $$("[data-group] input[type=checkbox]", form).forEach((cb) =>
    cb.addEventListener("change", () => cb.closest("[data-group]").classList.remove("invalid")));

  function setStatus(msg, type) {
    status.textContent = msg;
    status.className = "form-status" + (type ? " " + type : "");
  }

  function validate() {
    let firstBad = null;
    const mark = (el, bad) => { el.classList.toggle("invalid", bad); if (bad && !firstBad) firstBad = el; };

    ["#visit-date", "#visit-time"].forEach((s) => mark($(s).closest(".field"), !$(s).value));
    $$("[data-group]", form).forEach((g) => mark(g, !$("input:checked", g)));
    $$(".rating-row", form).forEach((row) => mark(row, !$("input:checked", row)));

    if (firstBad) {
      firstBad.scrollIntoView({ behavior: "smooth", block: "center" });
      setStatus("Por favor completa los campos marcados: motivo, área y las cuatro calificaciones.", "error");
      return false;
    }
    return true;
  }

  function collect() {
    const data = {};
    const fd = new FormData(form);
    for (const [k, v] of fd.entries()) {
      if (k === "_honey") continue;
      const val = String(v).trim();
      if (!val) continue;
      data[k] = data[k] ? data[k] + ", " + val : val;
    }
    RATINGS.forEach((r) => {
      const v = data["Calificación " + r];
      if (v) data["Calificación " + r] = "★".repeat(v) + "☆".repeat(5 - v) + ` (${v}/5 · ${LABELS[v]})`;
    });
    const motivo = data["Motivo"] || "Comentario";
    return Object.assign({ Folio: $("#folio").textContent }, data, {
      _subject: `${motivo} · Folio ${$("#folio").textContent} · Los Compadres Centro`,
      _template: "table",
      _captcha: "false"
    });
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if ($("input[name=_honey]", form).value) return; // bot
    if (!validate()) return;

    const payload = collect();
    submitBtn.disabled = true;
    setStatus("Enviando…");

    try {
      const res = await fetch(SURVEY_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload)
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || String(json.success) === "false") throw new Error(json.message || "Error " + res.status);

      form.innerHTML = `<div class="survey-thanks">
        <h3>¡Muchas gracias!</h3>
        <p>Recibimos tu comentario (folio <strong>${escapeHtml(payload.Folio)}</strong>).<br>Gracias por ayudarnos a mejorar <strong>Los Compadres Centro</strong>.</p>
        <a href="#menu" class="btn btn-primary">Ver el menú</a>
      </div>`;
    } catch (err) {
      // Respaldo: abrir el correo del cliente con las respuestas ya escritas
      const body = Object.entries(payload)
        .filter(([k]) => !k.startsWith("_"))
        .map(([k, v]) => `${k}: ${v}`).join("\n");
      const mailto = `mailto:${SURVEY_EMAIL}?subject=${encodeURIComponent(payload._subject)}&body=${encodeURIComponent(body)}`;
      status.innerHTML = `No pudimos enviar en este momento. <a href="${mailto}">Envíalo por correo aquí</a> o inténtalo de nuevo.`;
      status.className = "form-status error";
      submitBtn.disabled = false;
    }
  });

  /* ---------- Año del pie de página ---------- */
  $("#year").textContent = new Date().getFullYear();
})();

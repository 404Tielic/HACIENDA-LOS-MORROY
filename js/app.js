/* =====================================================================
   APP.JS · Lógica de la página. Normalmente NO necesitas editarlo;
   todo el contenido está en js/config.js
   ===================================================================== */
(function () {
  const C = CONFIG;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const cart = new Set();   // elementos agregados a la cotización

  // Arco con foto real, o recuadro de ejemplo si no hay foto
  const arch = (foto, n) => foto
    ? `<div class="arch"><img loading="lazy" src="${esc(foto)}" alt="${esc(n)}"></div>`
    : `<div class="arch empty"><span>Foto · ${esc(n)}</span></div>`;
  const addBtn = (n, kind) => `<button class="add" data-n="${esc(n)}" data-kind="${kind}" aria-pressed="${cart.has(n)}">${cart.has(n) ? "✓ En tu cotización" : "Agregar a cotización"}</button>`;
  const card = (i, kind) => `<article class="card">${arch(i.foto, i.n)}
    <div class="body">${i.hot ? '<span class="tag">Más solicitados</span>' : ""}<h3>${esc(i.n)}</h3><p>${esc(i.d)}</p>${addBtn(i.n, kind)}</div></article>`;

  /* ---------- Render ---------- */
  function renderCards() {
    document.querySelectorAll("[data-cat]").forEach((sec, idx) => {
      const k = sec.dataset.cat, g = C.catalogo[k];
      sec.firstElementChild.innerHTML = `
        <div class="ch-head rv in"><div class="num">0${idx + 1}</div><h2>${esc(g.titulo)}</h2><p>${esc(g.intro)}</p></div>
        <div class="rail">${g.items.map(i => card(i, k)).join("")}</div>`;
    });
    $("#ambarTxt").textContent = C.ambar.texto;
    $("#ambarRail").innerHTML = C.ambar.items.map(i => card(i, "servicios")).join("");
  }
  $("#spaces").innerHTML = C.espacios.map(s => `
    <article class="sp">${arch(s.foto, s.n)}<h3>${esc(s.n)}</h3><p>${esc(s.d)}</p><span class="cap">${esc(s.cap)}</span></article>`).join("");
  $("#steps").innerHTML = C.pasos.map((p, i) => `<div class="st rv"><b>${i + 1}</b><div><h3>${esc(p.t)}</h3><p>${esc(p.d)}</p></div></div>`).join("");

  // Portada y cifras
  if (C.portada.foto) $("#heroArch").outerHTML = `<div class="arch"><img src="${esc(C.portada.foto)}" alt="Hacienda Los Monroy"></div>`;
  const nums = document.querySelectorAll(".trust b");
  nums[0].textContent = C.catalogo.eventos.items.length;
  nums[1].textContent = C.catalogo.momentos.items.length;

  // Cinta de nombres
  const names = [...C.catalogo.eventos.items, ...C.catalogo.momentos.items, ...C.catalogo.servicios.items].map(i => i.n);
  const run = names.map(n => `<span>${esc(n)}</span><span><i>✦</i></span>`).join("");
  $("#mq").innerHTML = run + run;

  /* ---------- Cotizador ---------- */
  const eventNames = [...C.catalogo.eventos.items, ...C.catalogo.momentos.items].map(i => i.n);
  const serviceNames = [...C.ambar.items, ...C.catalogo.servicios.items].map(i => i.n);
  $("#evt").insertAdjacentHTML("beforeend", eventNames.map(n => `<option>${esc(n)}</option>`).join(""));
  $("#checks").innerHTML = serviceNames.map(n => `<label><input type="checkbox" value="${esc(n)}"> ${esc(n)}</label>`).join("");

  function message() {
    const v = id => $("#" + id).value.trim();
    const svc = serviceNames.filter(n => cart.has(n));
    const L = ["Hola, me gustaría cotizar un evento en Hacienda Los Monroy."];
    if (v("name")) L.push("Nombre: " + v("name"));
    if (v("evt")) L.push("Evento: " + v("evt"));
    if (v("date")) L.push("Fecha aproximada: " + v("date"));
    if (v("guests")) L.push("Invitados: " + v("guests"));
    L.push("Servicios: " + (svc.length ? svc.join(", ") : "por definir"));
    L.push("¿Me pueden compartir disponibilidad y precios? Gracias.");
    return L.join("\n");
  }
  const wa = t => "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(t);
  function sync() {
    document.querySelectorAll("#checks input").forEach(c => (c.checked = cart.has(c.value)));
    const m = message();
    $("#preview").textContent = m;
    $("#send").href = wa(m);
    document.querySelectorAll("[data-wa]").forEach(a => (a.href = wa("Hola, quiero cotizar un evento en Hacienda Los Monroy.")));
    $("#cartBtn").textContent = "Mi cotización (" + cart.size + ")";
  }
  function toggle(n, kind) {
    cart.has(n) ? cart.delete(n) : cart.add(n);
    if (kind !== "servicios") $("#evt").value = cart.has(n) ? n : ($("#evt").value === n ? "" : $("#evt").value);
    // Actualiza solo los botones (conserva la posición del carrusel)
    document.querySelectorAll(".add").forEach(b => {
      const on = cart.has(b.dataset.n);
      b.setAttribute("aria-pressed", on);
      b.textContent = on ? "✓ En tu cotización" : "Agregar a cotización";
    });
    sync();
  }
  document.addEventListener("click", e => { const a = e.target.closest(".add"); if (a) toggle(a.dataset.n, a.dataset.kind); });
  $("#checks").addEventListener("change", e => {
    const n = e.target.value;
    if (e.target.checked !== cart.has(n)) toggle(n, "servicios");
  });
  ["evt", "date", "guests", "name"].forEach(id => $("#" + id).addEventListener("input", sync));

  /* ---------- Pie de página ---------- */
  $("#addr").textContent = C.direccion;
  [["mapLink", C.mapa], ["ig", C.instagram], ["fb", C.facebook]].forEach(([id, url]) => {
    if (url) { $("#" + id).href = url; $("#" + id).hidden = false; }
  });

  /* ---------- Aparición, progreso y chip activo ---------- */
  const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }), { threshold: .08 });
  document.querySelectorAll(".rv:not(.in)").forEach(el => io.observe(el));
  const bar = $("#progress"), chips = [...document.querySelectorAll(".chip")];
  function onScroll() {
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = "scaleX(" + (h > 0 ? Math.min(scrollY / h, 1) : 0) + ")";
    let cur = "";
    ["eventos", "momentos", "servicios", "ambar", "espacios"].forEach(id => { if ($("#" + id).getBoundingClientRect().top < innerHeight * .4) cur = id; });
    chips.forEach(c => c.classList.toggle("on", c.getAttribute("href") === "#" + cur));
  }
  addEventListener("scroll", onScroll, { passive: true });

  renderCards(); sync(); onScroll();
})();

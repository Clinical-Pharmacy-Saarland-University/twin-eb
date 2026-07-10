/* =====================================================================
   TWIN-EB — shared site chrome (nav + footer) + progressive enhancements.
   Single source of truth: every page injects the same navigation/footer.
   Pages set <body data-page="..."> for the active state. No build step.
   ===================================================================== */
(function () {
  "use strict";

  var LINKS = [
    { key: "eb-rdeb",       href: "eb-rdeb.html",       label: "EB &amp; RDEB" },
    { key: "losartan",      href: "losartan.html",      label: "Losartan" },
    { key: "virtual-twins", href: "virtual-twins.html", label: "Virtual Twins" },
    { key: "project",       href: "project.html",       label: "Project" },
    { key: "team",          href: "team.html",          label: "Team" },
    { key: "publications",  href: "publications.html",  label: "Publications" }
  ];

  var current = (document.body && document.body.getAttribute("data-page")) || "home";

  function navMarkup() {
    var items = LINKS.map(function (l) {
      var on = l.key === current ? ' class="is-active" aria-current="page"' : "";
      return '<li><a href="' + l.href + '"' + on + ">" + l.label + "</a></li>";
    }).join("");
    var cta =
      '<li class="nav__cta"><a class="btn btn--accent" href="families.html"' +
      (current === "families" ? ' aria-current="page"' : "") +
      ">For families</a></li>";
    return (
      '<div class="container nav__inner">' +
        '<a class="brand brand--wordmark" href="index.html" aria-label="TWIN-EB — home">TWIN-EB</a>' +
        '<button class="nav__toggle" id="navToggle" aria-label="Menu" aria-expanded="false" aria-controls="navLinks">' +
          "<span></span><span></span><span></span></button>" +
        '<ul class="nav__links" id="navLinks">' + items + cta + "</ul>" +
      "</div>"
    );
  }

  function footerMarkup() {
    return (
      '<div class="container">' +
        '<div class="footer__grid">' +
          "<div>" +
            '<div class="footer__brand">TWIN-EB</div>' +
            '<p style="max-width:36ch;font-size:.92rem">From Virtual Twins to Clinical Trials. ' +
              "Model-informed losartan dosing for children with recessive dystrophic epidermolysis bullosa.</p>" +
          "</div>" +
          "<div><h4>Explore</h4><ul>" +
            '<li><a href="eb-rdeb.html">EB &amp; RDEB</a></li>' +
            '<li><a href="losartan.html">Losartan in RDEB</a></li>' +
            '<li><a href="virtual-twins.html">Virtual Twins</a></li>' +
            '<li><a href="project.html">The project</a></li>' +
            '<li><a href="publications.html">Publications</a></li>' +
          "</ul></div>" +
          "<div><h4>Get involved</h4><ul>" +
            '<li><a href="families.html">For families</a></li>' +
            '<li><a href="team.html">Team &amp; partners</a></li>' +
            '<li><a href="mailto:twineb@uni-saarland.de">Email the team</a></li>' +
          "</ul></div>" +
        "</div>" +
        '<div class="footer__bottom">' +
          '<span>&copy; <span id="year">2026</span> TWIN-EB project &middot; Saarland University. ' +
            "Funded by DEBRA International &amp; LifeArc.</span>" +
          '<span><a href="changelog.html">v0.1.0-beta &middot; What&rsquo;s new</a></span>' +
        "</div>" +
      "</div>"
    );
  }

  var navEl = document.getElementById("site-nav");
  if (navEl) navEl.innerHTML = navMarkup();
  var footEl = document.getElementById("site-footer");
  if (footEl) footEl.innerHTML = footerMarkup();

  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function onScroll() { if (navEl) navEl.classList.toggle("is-scrolled", window.scrollY > 8); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  var revealables = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealables.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add("is-visible"); });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();

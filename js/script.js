/* ============================================================
   EXPRESS FIBRA — script.js
   Funcionalidades: navbar dinâmica, scroll reveal,
   menu mobile, scroll spy, counter animation (stats)
   ============================================================ */

(function () {
  'use strict';

  // ---- Elementos do DOM ------------------------------------ //
  var navbar      = document.getElementById('navbar');
  var navToggle   = document.getElementById('navToggle');
  var navLinks    = document.getElementById('navLinks');
  var allReveal   = document.querySelectorAll('.reveal');
  var allNavLinks = document.querySelectorAll('.nav-link');

  // ---- Navbar: scroll state -------------------------------- //
  function handleNavScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // ---- Menu mobile toggle ---------------------------------- //
  function closeMenu() {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    var isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  // Fecha ao clicar em link do menu
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Fecha ao clicar fora
  document.addEventListener('click', function (e) {
    if (!navbar.contains(e.target) && navLinks.classList.contains('open')) {
      closeMenu();
    }
  });

  // ---- Scroll Reveal (IntersectionObserver) --------------- //
  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('visible');

        // Stagger suave nos irmãos do mesmo pai
        var siblings = entry.target.parentElement.querySelectorAll('.reveal');
        siblings.forEach(function (el, i) {
          el.style.transitionDelay = (i * 0.08) + 's';
        });

        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  allReveal.forEach(function (el) { revealObserver.observe(el); });

  // ---- Scroll Spy: nav link ativo ------------------------- //
  var sections = document.querySelectorAll('section[id]');

  var spyObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.getAttribute('id');
        allNavLinks.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      });
    },
    { threshold: 0.35 }
  );

  sections.forEach(function (sec) { spyObserver.observe(sec); });

  // ---- Counter Animation (Stats Bar) --------------------- //
  // Anima os números de 0 até data-target ao entrar em tela
  var counters = document.querySelectorAll('.stat-counter');

  if (counters.length > 0) {
    var counterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;

          var el     = entry.target;
          var target = parseInt(el.getAttribute('data-target'), 10);
          var dur    = 1500; // duração em ms
          var start  = null;

          function step(ts) {
            if (!start) start = ts;
            var progress = Math.min((ts - start) / dur, 1);
            // Easing: ease-out quadrático
            var eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target);
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              el.textContent = target;
            }
          }

          requestAnimationFrame(step);
          counterObserver.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(function (c) { counterObserver.observe(c); });
  }

  // ---- Eventos -------------------------------------------- //
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  navToggle.addEventListener('click', toggleMenu);

  // Estado inicial do navbar
  handleNavScroll();

  // ---- Foto da loja: swap img ↔ placeholder --------------- //
  var lojaImg         = document.getElementById('lojaImg');
  var lojaPlaceholder = document.getElementById('lojaPlaceholder');

  if (lojaImg && lojaPlaceholder) {
    function showLojaImg() {
      lojaImg.classList.add('loaded');
      lojaPlaceholder.style.display = 'none';
    }
    function showLojaPlaceholder() {
      lojaImg.style.display = 'none';
      lojaPlaceholder.style.display = 'flex';
    }

    if (lojaImg.complete && lojaImg.naturalWidth > 0) {
      showLojaImg(); // já estava em cache
    } else {
      lojaImg.addEventListener('load', showLojaImg);
      lojaImg.addEventListener('error', showLojaPlaceholder);
    }
  }

  // ---- Console friendly ----------------------------------- //
  console.log('%c⚡ Express Fibra', 'color:#f51b0e;font-weight:900;font-size:18px;');
  console.log('%cHTML + CSS + JS puro. Sem frameworks, só código limpo.', 'color:#888;font-size:12px;');

})();

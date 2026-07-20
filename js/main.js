/* New Shampoo — i18n IT/EN, intro "lo specchio", nav, reveal, watchdog */
(function () {
  'use strict';

  /* ---------- i18n ---------- */

  var translations = {
    it: {
      skip: 'Salta al contenuto',
      menu: 'Menu',
      nav_story: "Dagli anni '80",
      nav_salon: 'Il salone',
      nav_team: 'Il team',
      nav_prices: 'Il listino',
      nav_hours: 'Orari e dove',
      book_short: 'Prenota',
      book_cta: 'Prenota un appuntamento',
      prices_cta: 'Guarda il listino',
      call_cta: 'Chiama',
      hero_eyebrow: 'Parrucchieri · Porta Venezia, Milano · Via Lambro 9',
      hero_claim: 'Capelli perfetti, dagli anni Ottanta.',
      hero_lead: 'Mauro veniva dai camerini di artisti e cantanti, Enrico dalle sfilate. Da allora fanno una cosa sola, e la fanno bene: teste a posto, in via Lambro 9.',
      hero_badge: '484 recensioni verificate su Treatwell',
      hero_foto_alt: 'La vetrina di New Shampoo in via Lambro 9: facciata chiara, insegna Aveda e la scritta New Shampoo sul vetro',
      hero_foto_cap: 'Via Lambro 9 — la vetrina del salone',
      story_num: "01 · Dagli anni '80",
      story_title: 'Prima il backstage,\npoi il salone.',
      story_p1: "Mauro Condorelli ed Enrico Soffritti cominciano nella Milano degli anni Ottanta, e non in un salone qualsiasi: Mauro cura l'immagine di artisti e cantanti, Enrico lavora tra sfilate e moda. È lì che imparano la regola che vale ancora oggi: il taglio giusto è quello che funziona anche quando il fotografo se n'è andato.",
      story_p2: 'Negli anni Novanta aprono New Shampoo, in via Lambro 9. Tagli moderni e facili da mantenere anche a casa, colori sicuri e naturali, otto persone in squadra e la formazione continua come abitudine — non come slogan. Ci sono clienti che si affidano a loro da più di trent\'anni.',
      t1_q: "Anni '80",
      t1_c: "Camerini, palchi e passerelle: l'immagine di artisti e sfilate",
      t2_q: "Anni '90",
      t2_c: 'Apre New Shampoo, in via Lambro 9 a Porta Venezia',
      t3_q: 'Oggi',
      t3_c: "4,9 su 5 in 484 recensioni, con clienti fedeli da trent'anni",
      quote: '«La mia gioia è vedere le persone uscire soddisfatte per il loro colore o taglio. Il passaparola è uno dei nostri migliori strumenti di marketing.»',
      salon_num: '02 · Il salone',
      salon_title: 'Metà salone,\nmetà galleria.',
      salon_illu: 'Illustrazione al tratto del salone: specchi, poltrone e quadri alle pareti',
      salon_p1: 'Il salone è ampio e luminoso, e alle pareti non ci sono poster di piega: ci sono quadri e opere di artisti locali, che ruotano come in una piccola galleria di quartiere. Ci si siede per un colore e si esce avendo visto una mostra.',
      salon_p2: 'Sui capelli passa solo il meglio: prodotti Aveda e Wella, colori sicuri e naturali, tagli pensati per essere facili da rifare a casa. E ogni anno tutta la squadra torna a scuola — quella vera, dei corsi di aggiornamento.',
      salon_brands: 'Aveda · Wella · Formazione continua',
      team_num: '03 · Il team',
      team_title: 'Si prenota una persona,\nnon una poltrona.',
      p1_r: "Fondatore · l'immagine di artisti e cantanti, dagli anni '80",
      p2_r: 'Fondatore · dalle sfilate e dalla moda',
      p_style: 'Hair stylist',
      p_rec: 'Reception · la prima voce che sentite',
      p_rec2: 'vi trova sempre un posto',
      rev217: '217 recensioni',
      rev65: '65 recensioni',
      rev38: '38 recensioni',
      rev29: '29 recensioni',
      rev27: '27 recensioni',
      rev21: '21 recensioni',
      team_note: 'Le valutazioni sono quelle dei clienti su Treatwell, aggiornate a luglio 2026.',
      prices_num: '04 · Il listino',
      prices_title: 'Prezzi chiari,\nteste ancora di più.',
      c1: 'Taglio',
      v1: 'Taglio donna', v2: 'Taglio uomo', v3: 'Bambini e teenager', v4: 'Frangia',
      c2: 'Colore',
      v5: 'Colore', v6: 'Tonalizzante', v7: 'Henné',
      c3: 'Piega e trattamenti',
      v8: 'Piega', v9: 'Trattamenti cute e capello', v10: 'Definizione e design sopracciglia',
      c4: 'Consulenza',
      v11: 'Consulenza stile e colore',
      da: 'da',
      tech_note: 'Per i servizi tecnici — colore, henné, cambi di testa importanti — la consulenza si fa a voce: chiamateci allo 02 2951 3543.',
      prices_note: 'Listino Treatwell, luglio 2026 — in salone può variare',
      hours_num: '05 · Orari e dove',
      hours_title: 'Via Lambro 9.',
      hours_caption: 'Orari di apertura',
      mon: 'Lunedì', tue: 'Martedì', wed: 'Mercoledì', thu: 'Giovedì',
      fri: 'Venerdì', sat: 'Sabato', sun: 'Domenica',
      closed: 'chiuso',
      metro: 'M1 Porta Venezia, due passi da corso Buenos Aires',
      maps: 'Apri in Google Maps',
      phone_note: 'Per il colore e i servizi tecnici, meglio due parole al telefono prima di prenotare.',
      f_contacts: 'Contatti',
      f_where: 'Dove',
      f_what: 'Il salone',
      f_line: 'Tagli, colori e teste a posto dagli anni Ottanta, con opere di artisti locali alle pareti.',
      aria_top: 'New Shampoo — torna su',
      aria_nav: 'Navigazione principale'
    },
    en: {
      skip: 'Skip to content',
      menu: 'Menu',
      nav_story: 'Since the ’80s',
      nav_salon: 'The salon',
      nav_team: 'The team',
      nav_prices: 'Price list',
      nav_hours: 'Hours & location',
      book_short: 'Book',
      book_cta: 'Book an appointment',
      prices_cta: 'See the price list',
      call_cta: 'Call',
      hero_eyebrow: 'Hairdressers · Porta Venezia, Milan · Via Lambro 9',
      hero_claim: 'Perfect hair, since the Eighties.',
      hero_lead: 'Mauro came from the dressing rooms of artists and singers, Enrico from the catwalks. Ever since, they have done one thing and done it well: great heads of hair, at Via Lambro 9.',
      hero_badge: '484 verified reviews on Treatwell',
      hero_foto_alt: 'The New Shampoo shopfront at Via Lambro 9: a light facade, the Aveda sign and the New Shampoo lettering on the glass',
      hero_foto_cap: 'Via Lambro 9 — the salon shopfront',
      story_num: '01 · Since the ’80s',
      story_title: 'First the backstage,\nthen the salon.',
      story_p1: "Mauro Condorelli and Enrico Soffritti started out in 1980s Milan, and not in just any salon: Mauro shaped the image of artists and singers, Enrico worked in fashion shows. That's where they learned the rule that still holds today: the right cut is the one that works after the photographer has gone home.",
      story_p2: 'In the Nineties they opened New Shampoo at Via Lambro 9. Modern cuts that are easy to keep up at home, safe and natural colours, a team of eight and continuous training as a habit — not a slogan. Some clients have trusted them for over thirty years.',
      t1_q: 'The ’80s',
      t1_c: 'Dressing rooms, stages and catwalks: styling artists and fashion shows',
      t2_q: 'The ’90s',
      t2_c: 'New Shampoo opens at Via Lambro 9, Porta Venezia',
      t3_q: 'Today',
      t3_c: '4.9 out of 5 across 484 reviews, with clients loyal for thirty years',
      quote: '“My joy is seeing people walk out happy with their colour or cut. Word of mouth is one of our best marketing tools.”',
      salon_num: '02 · The salon',
      salon_title: 'Half salon,\nhalf gallery.',
      salon_illu: 'Line illustration of the salon: mirrors, chairs and artworks on the walls',
      salon_p1: "The salon is wide and bright, and the walls don't hold blow-dry posters: they hold paintings and works by local artists, rotating like a small neighbourhood gallery. You sit down for a colour and leave having seen an exhibition.",
      salon_p2: 'Only the best touches your hair: Aveda and Wella products, safe and natural colours, cuts designed to be easy to redo at home. And every year the whole team goes back to school — the real one, of training courses.',
      salon_brands: 'Aveda · Wella · Continuous training',
      team_num: '03 · The team',
      team_title: 'You book a person,\nnot a chair.',
      p1_r: 'Founder · styling artists and singers since the ’80s',
      p2_r: 'Founder · from fashion shows and catwalks',
      p_style: 'Hair stylist',
      p_rec: 'Reception · the first voice you hear',
      p_rec2: 'always finds you a spot',
      rev217: '217 reviews',
      rev65: '65 reviews',
      rev38: '38 reviews',
      rev29: '29 reviews',
      rev27: '27 reviews',
      rev21: '21 reviews',
      team_note: 'Ratings are from clients on Treatwell, updated July 2026.',
      prices_num: '04 · Price list',
      prices_title: 'Clear prices,\nclearer heads.',
      c1: 'Cut',
      v1: 'Women’s cut', v2: 'Men’s cut', v3: 'Children & teenagers', v4: 'Fringe',
      c2: 'Colour',
      v5: 'Colour', v6: 'Toner', v7: 'Henna',
      c3: 'Blow-dry & treatments',
      v8: 'Blow-dry', v9: 'Scalp & hair treatments', v10: 'Eyebrow shaping & design',
      c4: 'Consultation',
      v11: 'Style & colour consultation',
      da: 'from',
      tech_note: 'For technical services — colour, henna, big changes — the consultation happens out loud: call us on +39 02 2951 3543.',
      prices_note: 'Treatwell price list, July 2026 — may vary in the salon',
      hours_num: '05 · Hours & location',
      hours_title: 'Via Lambro 9.',
      hours_caption: 'Opening hours',
      mon: 'Monday', tue: 'Tuesday', wed: 'Wednesday', thu: 'Thursday',
      fri: 'Friday', sat: 'Saturday', sun: 'Sunday',
      closed: 'closed',
      metro: 'M1 Porta Venezia, steps from Corso Buenos Aires',
      maps: 'Open in Google Maps',
      phone_note: 'For colour and technical services, a quick phone chat before booking works best.',
      f_contacts: 'Contact',
      f_where: 'Find us',
      f_what: 'The salon',
      f_line: 'Cuts, colours and great heads of hair since the Eighties, with local artists’ works on the walls.',
      aria_top: 'New Shampoo — back to top',
      aria_nav: 'Main navigation'
    }
  };

  var current = 'it';
  try {
    var saved = localStorage.getItem('newshampoo-lang');
    if (saved === 'en' || saved === 'it') current = saved;
  } catch (e) { /* storage non disponibile: si resta in IT */ }

  function applyLang(lang) {
    var dict = translations[lang];
    if (!dict) return;
    current = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] === undefined) return;
      var testo = dict[key];
      if (testo.indexOf('\n') !== -1) {
        el.textContent = '';
        testo.split('\n').forEach(function (riga, i) {
          if (i > 0) el.appendChild(document.createElement('br'));
          el.appendChild(document.createTextNode(riga));
        });
      } else {
        el.textContent = testo;
      }
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (dict[key] !== undefined) el.setAttribute('alt', dict[key]);
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem('newshampoo-lang', lang); } catch (e) { /* ok */ }
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  if (current !== 'it') applyLang(current);

  /* ---------- intro "lo specchio" ---------- */

  var intro = document.getElementById('intro');
  if (intro) {
    var introReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var giaVista = document.documentElement.classList.contains('intro-vista');
    if (introReduced || giaVista) {
      intro.remove();
    } else {
      try { sessionStorage.setItem('ns-intro', '1'); } catch (e) { /* ok */ }
      var introDone = false;
      var sfuma = function () {
        intro.classList.add('intro--via');
      };
      var finishIntro = function () {
        if (introDone) return;
        introDone = true;
        clearTimeout(viaTimer);
        clearTimeout(endTimer);
        document.body.classList.remove('intro-lock');
        intro.remove();
        window.removeEventListener('pointerdown', finishIntro, true);
        window.removeEventListener('keydown', finishIntro, true);
      };
      document.body.classList.add('intro-lock');
      var viaTimer = setTimeout(sfuma, 2450);
      var endTimer = setTimeout(finishIntro, 3100);
      window.addEventListener('pointerdown', finishIntro, true);
      window.addEventListener('keydown', finishIntro, true);
    }
  }

  /* ---------- copyright dinamico ---------- */

  var nowYear = new Date().getFullYear();
  document.querySelectorAll('[data-current-year]').forEach(function (el) {
    el.textContent = String(nowYear);
  });

  /* ---------- nav mobile ---------- */

  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  if (nav && toggle) {
    var chiudiNav = function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    };
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.nav-menu a').forEach(function (link) {
      link.addEventListener('click', chiudiNav);
    });
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        chiudiNav();
        toggle.focus();
      }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 920) chiudiNav();
    });
  }

  /* ---------- reveal on scroll ---------- */

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll(
      '.hero-nome, .hero-claim, .hero-lead, .hero-cta, .hero-badge, .hero-foto, ' +
      '.sezione-num, .sezione-titolo, .storia-testo, .tappa, .citazione, ' +
      '.salone-illustrazione, .salone-testo, .persona, .squadra-nota, ' +
      '.listino-cat, .listino-nota, .listino-cta, .orari-tabella, .dove'
    );
    targets.forEach(function (t) { t.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    targets.forEach(function (t) { io.observe(t); });
  }

  /* ---------- rete di sicurezza: se IntersectionObserver non parte, mostra tutto ---------- */

  if ('IntersectionObserver' in window) {
    var ioVivo = false;
    var sentinella = new IntersectionObserver(function () { ioVivo = true; sentinella.disconnect(); });
    sentinella.observe(document.body);
    setTimeout(function () {
      if (!ioVivo) {
        document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
      }
    }, 1500);
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }
})();

// Instituto ACRE — script principal
document.addEventListener('DOMContentLoaded', function () {

  // Menu mobile
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('is-open');
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('is-open'); });
    });
  }

  // Filtro de projetos (página projetos.html)
  var filterBtns = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.proj-card');
  if (filterBtns.length && cards.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        var cat = btn.getAttribute('data-filter');
        cards.forEach(function (card) {
          if (cat === 'todos' || card.classList.contains('cat-' + cat)) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Lightbox da galeria (página galeria.html)
  var lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    var lbImg = lightbox.querySelector('img');
    var lbCaption = lightbox.querySelector('.lightbox-caption');
    var closeBtn = lightbox.querySelector('.lightbox-close');

    document.querySelectorAll('.gallery-grid figure').forEach(function (fig) {
      fig.addEventListener('click', function () {
        var img = fig.querySelector('img');
        var caption = fig.querySelector('figcaption');
        lbImg.src = img.src;
        lbImg.alt = img.alt || '';
        lbCaption.textContent = caption ? caption.textContent : '';
        lightbox.classList.add('is-open');
      });
    });

    function closeLightbox() { lightbox.classList.remove('is-open'); lbImg.src = ''; }
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  // Ano atual no rodapé
  var yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

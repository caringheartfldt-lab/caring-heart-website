/* ============================================================
   Social icon injector
   Icons render via CSS mask classes in assets/css/icons.css
   ============================================================ */
(function () {
  const LINKS = [
    { cls: 'ico-facebook',  url: 'https://www.facebook.com/share/17tQqmAt1m/', label: 'Facebook' },
    { cls: 'ico-instagram', url: 'https://instagram.com/caringheartfl/',        label: 'Instagram' },
    { cls: 'ico-tiktok',    url: 'https://www.tiktok.com/@caringheartfl',       label: 'TikTok' },
    { cls: 'ico-youtube',   url: 'https://youtube.com/@caringheartfl',          label: 'YouTube' },
    { cls: 'ico-twitter',   url: 'https://www.twitter.com/',                    label: 'Twitter / X' }
  ];

  function build() {
    return LINKS.map(function (i) {
      return '<a href="' + i.url + '" target="_blank" rel="noopener" ' +
             'aria-label="' + i.label + '" title="' + i.label + '">' +
             '<span class="social-ico ' + i.cls + '"></span></a>';
    }).join('');
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.header-socials, .footer-socials').forEach(function (el) {
      el.innerHTML = build();
    });
  });
})();
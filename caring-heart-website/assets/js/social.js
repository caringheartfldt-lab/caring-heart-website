/* Social icon injector: builds trusted, hard-coded links with DOM APIs. */
(function () {
  const LINKS = [
    { cls: 'ico-facebook',  url: 'https://www.facebook.com/share/17tQqmAt1m/', label: 'Facebook' },
    { cls: 'ico-instagram', url: 'https://instagram.com/caringheartfl/',        label: 'Instagram' },
    { cls: 'ico-tiktok',    url: 'https://www.tiktok.com/@caringheartfl',       label: 'TikTok' },
    { cls: 'ico-youtube',   url: 'https://youtube.com/@caringheartfl',          label: 'YouTube' },
    { cls: 'ico-twitter',   url: 'https://www.twitter.com/',                    label: 'Twitter / X' }
  ];

  function buildInto(el) {
    LINKS.forEach(function (item) {
      const link = document.createElement('a');
      link.href = item.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', item.label);
      link.title = item.label;

      const icon = document.createElement('span');
      icon.className = 'social-ico ' + item.cls;
      link.appendChild(icon);
      el.appendChild(link);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.header-socials, .footer-socials').forEach(buildInto);
  });
})();

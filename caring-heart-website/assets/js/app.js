(function(){
  const root = document.documentElement;
  const languageSelect = document.getElementById('languageSelect');
  const themeToggle = document.getElementById('themeToggle');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  function applyLanguage(lang){
    const normalized = lang === 'zh-HK' ? 'zh-HK' : (lang === 'zh-CN' ? 'zh-CN' : 'en');
    document.querySelectorAll('[data-en]').forEach(el=>{
      if(normalized === 'zh-HK' && el.dataset.zhHk !== undefined) el.textContent = el.dataset.zhHk;
      else if(normalized === 'zh-CN' && el.dataset.zh !== undefined) el.textContent = el.dataset.zh;
      else el.textContent = el.dataset.en;
    });
    document.documentElement.lang = normalized;
    if(languageSelect) languageSelect.value = normalized;
    localStorage.setItem('chf-language', normalized);
  }

  function applyTheme(theme){
    root.classList.toggle('dark', theme === 'dark');
    if(themeToggle) themeToggle.textContent = theme === 'dark' ? '☀' : '☾';
    localStorage.setItem('chf-theme',theme);
  }

  const storedLang = localStorage.getItem('chf-language');
  const savedLang = storedLang === 'zh-TW' ? 'zh-HK' : (storedLang || 'en');
  const savedTheme = localStorage.getItem('chf-theme') || 'light';
  applyLanguage(savedLang);
  applyTheme(savedTheme);

  languageSelect?.addEventListener('change',()=>applyLanguage(languageSelect.value));
  themeToggle?.addEventListener('click',()=>applyTheme(root.classList.contains('dark') ? 'light' : 'dark'));
  menuToggle?.addEventListener('click',()=>nav?.classList.toggle('open'));

  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

  document.querySelectorAll('[data-demo-form]').forEach(form=>{
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const msg = root.lang === 'zh-HK'
        ? '感謝您的關注！正式上線前請連接安全的表單／後台服務。'
        : (root.lang === 'zh-CN' ? '感谢您的关注！正式上线前请连接安全的表单/后台服务。' : 'Thank you for reaching out! Connect this form to a secure backend/form service before launch.');
      alert(msg);
    });
  });

  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();
})();

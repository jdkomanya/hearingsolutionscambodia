(function () {
  const body = document.body;
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const backToTop = document.querySelector('[data-back-to-top]');
  const savedTheme = localStorage.getItem('hsc-theme');
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);

  menuToggle?.addEventListener('click', () => {
    const open = body.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  navLinks.forEach((link) => link.addEventListener('click', () => {
    body.classList.remove('menu-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }));

  themeToggle?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', current);
    localStorage.setItem('hsc-theme', current);
    themeToggle.setAttribute('aria-label', current === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.16 });
  document.querySelectorAll('.reveal, .step').forEach((el) => observer.observe(el));

  document.querySelectorAll('[data-faq-question]').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const open = item.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
    });
  });

  window.addEventListener('scroll', () => {
    if (!backToTop) return;
    backToTop.classList.toggle('show', window.scrollY > 500);
  }, { passive: true });

  backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const form = document.querySelector('[data-contact-form]');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    let valid = true;
    form.querySelectorAll('[data-required]').forEach((field) => {
      const wrapper = field.closest('.field');
      const isEmail = field.type === 'email';
      const empty = !field.value.trim();
      const badEmail = isEmail && field.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
      wrapper.classList.toggle('invalid', empty || badEmail);
      if (empty || badEmail) valid = false;
    });
    const success = form.querySelector('.success-message');
    if (valid && success) {
      success.style.display = 'block';
      success.focus();
      form.reset();
    }
  });
})();

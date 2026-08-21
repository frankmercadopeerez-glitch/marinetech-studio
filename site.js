const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');
const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 16);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });
menuButton?.addEventListener('click', () => {
  const open = menu?.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(Boolean(open)));
  document.body.classList.toggle('menu-open', Boolean(open));
});
menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}));
document.querySelectorAll('[data-year]').forEach((node) => { node.textContent = new Date().getFullYear(); });
const form = document.querySelector('[data-contact-form]');
const status = document.querySelector('[data-form-status]');
const isEnglish = document.documentElement.lang === 'en';
form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const button = form.querySelector('button[type="submit"]');
  const label = button.querySelector('span');
  const original = label.textContent;
  button.disabled = true;
  label.textContent = isEnglish ? 'Sending…' : 'Enviando…';
  status.textContent = '';
  status.className = 'form-status';
  try {
    const response = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error('Form submission failed');
    form.reset();
    status.textContent = isEnglish ? 'Request sent. We will reply personally.' : 'Solicitud enviada. Te responderemos personalmente.';
    status.classList.add('success');
  } catch {
    status.textContent = isEnglish ? 'We could not send the request. Email us at info@marinetechstudio.com.' : 'No pudimos enviar la solicitud. Escríbenos a info@marinetechstudio.com.';
    status.classList.add('error');
  } finally {
    button.disabled = false;
    label.textContent = original;
  }
});

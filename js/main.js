/**
 * BAYKUŞ HUKUK — Ana Site JavaScript
 * Navigasyon, bileşen render ve sayfa fonksiyonları
 */

'use strict';

// ── Aktif nav linkini işaretle ──
function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && (href === page || href.endsWith(page))) {
      a.classList.add('active');
    }
  });
}

// ── Sidebar: son makaleler ──
function renderSidebarRecent() {
  const el = document.getElementById('sidebar-recent');
  if (!el) return;
  const articles = getArticles().filter(a => a.published).slice(0, 5);
  el.innerHTML = articles.map(a => `
    <a href="makale.html?slug=${a.slug}" class="sidebar-recent-item">
      <div class="sri-dot"></div>
      <div>
        <div class="sri-title">${a.title}</div>
        <div class="sri-meta">${a.date}</div>
      </div>
    </a>
  `).join('');
}

// ── Sidebar: kategoriler ──
function renderSidebarCats() {
  const el = document.getElementById('sidebar-cats');
  if (!el) return;
  const articles = getArticles().filter(a => a.published);
  const cats = {};
  articles.forEach(a => { cats[a.cat] = (cats[a.cat] || 0) + 1; });
  el.innerHTML = Object.entries(cats).map(([cat, count]) =>
    `<a href="makaleler.html?cat=${encodeURIComponent(cat)}" class="sidebar-tag">${cat} (${count})</a>`
  ).join('');
}

// ── Sidebar: hızlı linkler ──
function renderSidebarLinks() {
  const el = document.getElementById('sidebar-links');
  if (!el) return;
  const links = getLinks().slice(0, 5);
  el.innerHTML = links.map(l => `
    <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="sidebar-link-item">
      <span class="sli-icon">${l.icon}</span>
      <span class="sli-name">${l.name}</span>
      <span style="color:var(--gold);font-size:.7rem">↗</span>
    </a>
  `).join('') || '<p style="font-size:.82rem;color:var(--muted)">Link bulunamadı.</p>';
}

// ── Site ayarlarını uygula ──
function applySiteSettings() {
  const s = getSettings();
  // Başlıklar
  document.querySelectorAll('[data-setting]').forEach(el => {
    const key = el.dataset.setting;
    if (s[key]) {
      if (el.tagName === 'INPUT') el.value = s[key];
      else el.innerHTML = s[key];
    }
  });
}

// ── İletişim formu gönder ──
function submitContact() {
  const name    = document.getElementById('cf-name')?.value.trim();
  const email   = document.getElementById('cf-email')?.value.trim();
  const subject = document.getElementById('cf-subject')?.value.trim();
  const message = document.getElementById('cf-message')?.value.trim();

  if (!name || !email || !message) {
    notify('Lütfen zorunlu alanları doldurun.', 'error');
    return;
  }

  // E-posta doğrulama
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    notify('Geçerli bir e-posta adresi giriniz.', 'error');
    return;
  }

  // Mesajı kaydet (gerçek projede sunucuya gönderilir)
  const messages = Store.get('contact_messages', []);
  messages.unshift({
    id: Date.now(),
    name, email, subject: subject || 'İletişim Formu',
    message, date: formatDate(), read: false
  });
  Store.set('contact_messages', messages);

  ['cf-name','cf-email','cf-subject','cf-message'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });

  notify('Mesajınız alındı. En kısa sürede yanıtlayacağız. ✓');
}

// ── DOMContentLoaded ──
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  applySiteSettings();
  renderSidebarRecent();
  renderSidebarCats();
  renderSidebarLinks();
});

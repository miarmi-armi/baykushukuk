/**
 * BAYKUŞ HUKUK — Paylaşılan Veri Deposu & Yardımcı Fonksiyonlar
 * Bu dosya tüm sayfalarda ortak kullanılan verileri ve fonksiyonları içerir.
 * Gerçek bir projede bu veriler sunucudan (PHP/Node.js + veritabanı) gelir.
 */

'use strict';

// ═══════════════════════════════════════════════
// ANAHTAR: localStorage ile kalıcı veri saklama
// ═══════════════════════════════════════════════

const Store = {
  get(key, fallback = null) {
    try {
      const item = localStorage.getItem('bh_' + key);
      return item ? JSON.parse(item) : fallback;
    } catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem('bh_' + key, JSON.stringify(value)); } catch {}
  },
  remove(key) {
    try { localStorage.removeItem('bh_' + key); } catch {}
  }
};

// ═══════════════════════════════════════════════
// ÖRNEK VERİLER (ilk yüklemede kullanılır)
// ═══════════════════════════════════════════════

const DEFAULT_ARTICLES = [
  {
    id: 1,
    slug: 'is-kazasi-tazminat-haklari',
    title: 'İş Kazası Geçiren İşçinin Tazminat Hakları',
    cat: 'İş Hukuku',
    excerpt: 'İş kazası geçiren işçilerin yasal hakları, tazminat hesaplama yöntemleri ve dava süreçleri hakkında kapsamlı bir rehber.',
    content: `<p>İş kazası, işçinin iş yerinde veya işin yürütümü sırasında maruz kaldığı kaza olarak tanımlanmaktadır. Türkiye'de iş kazaları; 5510 sayılı Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu ile 6331 sayılı İş Sağlığı ve Güvenliği Kanunu kapsamında değerlendirilmektedir.</p>
    <h2>İş Kazasında İşverenin Sorumluluğu</h2>
    <p>İşveren, iş yerinde iş sağlığı ve güvenliği tedbirlerini almakla yükümlüdür. Bu yükümlülüğü yerine getirmeyen işveren, işçiye karşı hukuki ve cezai sorumluluk taşır.</p>
    <h3>Tazminat Türleri</h3>
    <ul>
      <li>Maddi tazminat (gelir kaybı, tedavi giderleri)</li>
      <li>Manevi tazminat</li>
      <li>SGK tarafından bağlanan sürekli iş göremezlik geliri</li>
    </ul>
    <blockquote>İş kazası sonucunda açılacak tazminat davalarında zamanaşımı süresi 10 yıldır. Bu nedenle kaza sonrası vakit kaybetmeden hukuki destek almanız önemlidir.</blockquote>
    <h2>Dava Süreci</h2>
    <p>İş kazası nedeniyle açılacak tazminat davalarında iş mahkemeleri yetkilidir. Dava açmadan önce arabuluculuk yoluna başvurmak zorunludur.</p>`,
    author: 'Av. Baykuş Hukuk',
    date: '15 Ocak 2025',
    img: '',
    emoji: '⚖️',
    published: true,
    views: 342
  },
  {
    id: 2,
    slug: 'bosanma-nafaka-velayet',
    title: 'Boşanma Davalarında Nafaka ve Velayet',
    cat: 'Aile Hukuku',
    excerpt: 'Boşanma sürecinde çocukların velayeti ve nafaka miktarının belirlenmesinde dikkat edilmesi gereken hususlar.',
    content: `<p>Boşanma davalarının en hassas konuları arasında çocukların velayeti ve nafaka hakları yer almaktadır. Türk Medeni Kanunu çerçevesinde bu meseleler incelendiğinde, mahkemelerin her zaman çocuğun üstün yararını esas aldığı görülmektedir.</p>
    <h2>Velayet Kararı</h2>
    <p>Velayet kararı verilirken mahkeme; çocuğun yaşı, cinsiyeti, ebeveynlerin mali durumu, yaşam koşulları ve çocukla olan bağı gibi faktörleri göz önünde bulundurur.</p>
    <h2>Nafaka Türleri</h2>
    <ul>
      <li>İştirak nafakası (çocuk için)</li>
      <li>Yoksulluk nafakası (eş için)</li>
      <li>Tedbir nafakası (dava süresince)</li>
    </ul>
    <p>Nafaka miktarı belirlenirken her iki tarafın ekonomik durumu, çocuğun ihtiyaçları ve yaşam standardı dikkate alınmaktadır.</p>`,
    author: 'Av. Baykuş Hukuk',
    date: '8 Şubat 2025',
    img: '',
    emoji: '👨‍👩‍👧',
    published: true,
    views: 518
  },
  {
    id: 3,
    slug: 'kira-sozlesmesi-haklari',
    title: 'Kiracı ve Kiraya Verenin Hakları',
    cat: 'Gayrimenkul',
    excerpt: 'Kira sözleşmelerinde tarafların hak ve yükümlülükleri, kira artışı sınırları ve tahliye koşulları.',
    content: `<p>Kira hukuku, Türk Borçlar Kanunu'nun 299-356. maddeleri arasında düzenlenmektedir. Konut ve çatılı işyeri kiraları, kanunun özel hükümleri kapsamında güçlü kiracı korumasına sahiptir.</p>
    <h2>Kira Artışı</h2>
    <p>Türkiye'de kira artışları, TÜFE (Tüketici Fiyat Endeksi) oranı ile sınırlandırılmıştır. Taraflar bu oranın üzerinde bir artış kararlaştıramazlar.</p>
    <h2>Tahliye Koşulları</h2>
    <p>Kiraya veren, ancak kanunda belirtilen hallerde kiracının tahliyesini isteyebilir. Bu haller arasında kiracının kira borcunu ödememesi, kiralananı amacına aykırı kullanması ve kiraya verenin konut ihtiyacı sayılabilir.</p>`,
    author: 'Av. Baykuş Hukuk',
    date: '22 Mart 2025',
    img: '',
    emoji: '🏛️',
    published: true,
    views: 276
  }
];

const DEFAULT_GUNDEM = [
  {
    id: 1,
    title: 'Yeni Kira Kanunu Değişiklikleri Yürürlüğe Girdi',
    tag: 'Mevzuat',
    text: 'Konut kira sözleşmelerine ilişkin yeni düzenlemeler 1 Ocak 2025 itibarıyla yürürlüğe girmiştir.',
    link: '',
    date: '2 Oca 2025'
  },
  {
    id: 2,
    title: 'İş Mahkemelerinde Arabuluculuk Zorunlu Hale Geldi',
    tag: 'Hukuk',
    text: 'İş uyuşmazlıklarında dava açmadan önce arabuluculuğa başvurma zorunluluğu genişletildi.',
    link: '',
    date: '18 Şub 2025'
  },
  {
    id: 3,
    title: 'Yargıtay Kararı: Whatsapp Mesajları Delil Sayılabilir',
    tag: 'İçtihat',
    text: 'Yargıtay son kararında dijital mesajların uygun koşullar altında hukuki delil olarak kabul edilebileceğini hükmetti.',
    link: '',
    date: '5 Mar 2025'
  }
];

const DEFAULT_LINKS = [
  { id: 1, name: 'Türkiye Büyük Millet Meclisi', url: 'https://www.tbmm.gov.tr', desc: 'Mevzuat ve kanun bilgileri', icon: '🏛️' },
  { id: 2, name: 'Resmi Gazete', url: 'https://www.resmigazete.gov.tr', desc: 'Kanun, yönetmelik, tebliğ yayınları', icon: '📰' },
  { id: 3, name: 'Yargıtay', url: 'https://www.yargitay.gov.tr', desc: 'Yargıtay kararları ve içtihat', icon: '⚖️' },
  { id: 4, name: 'Danıştay', url: 'https://www.danistay.gov.tr', desc: 'İdari yargı kararları', icon: '🏛️' },
  { id: 5, name: 'e-Devlet Kapısı', url: 'https://www.turkiye.gov.tr', desc: 'Devlet hizmetlerine erişim', icon: '💻' },
  { id: 6, name: 'Türkiye Barolar Birliği', url: 'https://www.barobirlik.org.tr', desc: 'Avukatlık mevzuatı ve haberler', icon: '📋' }
];

const DEFAULT_SITE_SETTINGS = {
  title: 'Baykuş Hukuk',
  subtitle: 'Profesyonel Hukuk Bürosu',
  tagline: 'Haklarınızı Güvence Altına Alıyoruz',
  phone: '+90 212 000 00 00',
  email: 'info@baykushukuk.com',
  address: 'Bağcılar Mahallesi, Hukuk Sokak No:12/5\nBağcılar / İstanbul',
  hours: 'Pzt–Cum: 09:00–18:00 | Cmt: 10:00–14:00',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48168.09!2d28.8553!3d41.0417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa4b9f1b6d0ef%3A0x4f47e1d8e6c5!2zQmHEn2PElWxhciwgxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1700000000000',
  license: 'Av. Lisans No: xxxxxxx',
  heroText: 'Haklarınızı <span>Güvence Altına</span> Alıyoruz',
  heroDesc: 'İstanbul Bağcılar\'da faaliyet gösteren Baykuş Hukuk Bürosu, her türlü hukuki sorununuzda güvenilir ve profesyonel çözümler sunar.',
  footerDesc: 'İstanbul Bağcılar\'da faaliyet gösteren Baykuş Hukuk Bürosu, müvekkillerine güven ve uzmanlıkla hizmet vermektedir.'
};

// ═══════════════════════════════════════════════
// VERİ ERİŞİM FONKSİYONLARI
// ═══════════════════════════════════════════════

function getArticles() {
  return Store.get('articles', DEFAULT_ARTICLES);
}

function getGundem() {
  return Store.get('gundem', DEFAULT_GUNDEM);
}

function getLinks() {
  return Store.get('links', DEFAULT_LINKS);
}

function getSettings() {
  return Store.get('settings', DEFAULT_SITE_SETTINGS);
}

function saveArticles(data) { Store.set('articles', data); }
function saveGundem(data) { Store.set('gundem', data); }
function saveLinks(data) { Store.set('links', data); }
function saveSettings(data) { Store.set('settings', data); }

function getArticleBySlug(slug) {
  return getArticles().find(a => a.slug === slug);
}

// ═══════════════════════════════════════════════
// YARDIMCI FONKSİYONLAR
// ═══════════════════════════════════════════════

function formatDate() {
  const months = ['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara'];
  const n = new Date();
  return `${n.getDate()} ${months[n.getMonth()]} ${n.getFullYear()} ${String(n.getHours()).padStart(2,'0')}:${String(n.getMinutes()).padStart(2,'0')}`;
}

function formatDateLong() {
  const months = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];
  const n = new Date();
  return `${n.getDate()} ${months[n.getMonth()]} ${n.getFullYear()}`;
}

function slugify(text) {
  const map = { 'ç':'c','ğ':'g','ı':'i','ö':'o','ş':'s','ü':'u','Ç':'c','Ğ':'g','İ':'i','Ö':'o','Ş':'s','Ü':'u' };
  return text.toLowerCase()
    .replace(/[çğışöüÇĞİŞÖÜ]/g, m => map[m] || m)
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function truncate(str, n) {
  return str.length > n ? str.slice(0, n) + '...' : str;
}

function notify(msg, type = 'success') {
  let el = document.getElementById('notify');
  if (!el) {
    el = document.createElement('div');
    el.id = 'notify';
    el.className = 'notify';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.className = 'notify' + (type === 'error' ? ' error' : '');
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3500);
}

// ═══════════════════════════════════════════════
// GÜVENLİK: Admin oturum kontrolü
// ═══════════════════════════════════════════════

const Auth = {
  SESSION_KEY: 'bh_admin_session',
  MAX_ATTEMPTS: 5,
  LOCKOUT_TIME: 15 * 60 * 1000, // 15 dakika

  isLoggedIn() {
    const s = Store.get('admin_session');
    if (!s) return false;
    // Oturum süresi: 8 saat
    if (Date.now() - s.loginTime > 8 * 60 * 60 * 1000) {
      this.logout();
      return false;
    }
    return s.valid === true;
  },

  login(password) {
    // Gerçek projede şifre sunucu tarafında hash'lenerek karşılaştırılır
    const storedHash = Store.get('admin_pass_hash', btoa('Baykus2025!'));
    const attempts = Store.get('login_attempts', { count: 0, lastAttempt: 0 });

    // Kilitleme kontrolü
    if (attempts.count >= this.MAX_ATTEMPTS) {
      const elapsed = Date.now() - attempts.lastAttempt;
      if (elapsed < this.LOCKOUT_TIME) {
        const remaining = Math.ceil((this.LOCKOUT_TIME - elapsed) / 60000);
        return { success: false, locked: true, remaining };
      } else {
        Store.set('login_attempts', { count: 0, lastAttempt: 0 });
      }
    }

    if (btoa(password) === storedHash) {
      Store.set('admin_session', { valid: true, loginTime: Date.now() });
      Store.set('login_attempts', { count: 0, lastAttempt: 0 });
      return { success: true };
    } else {
      const newAttempts = { count: attempts.count + 1, lastAttempt: Date.now() };
      Store.set('login_attempts', newAttempts);
      return { success: false, locked: false, remaining: this.MAX_ATTEMPTS - newAttempts.count };
    }
  },

  logout() {
    Store.remove('admin_session');
    window.location.href = '../admin/giris.html';
  },

  requireAuth() {
    if (!this.isLoggedIn()) {
      window.location.href = '../admin/giris.html';
      return false;
    }
    return true;
  }
};

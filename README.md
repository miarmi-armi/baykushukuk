# 🦉 Baykuş Hukuk — Web Sitesi

Profesyonel, çok sayfalı hukuk bürosu web sitesi.

---

## 📁 Dosya Yapısı

```
baykus-hukuk/
│
├── index.html          → Ana Sayfa
├── makaleler.html      → Makale Listesi
├── makale.html         → Makale Detay (dinamik, ?slug= parametresi ile)
├── gundem.html         → Hukuk Gündemi
├── hizmetler.html      → Hizmetler
├── linkler.html        → Hukuki Linkler
├── iletisim.html       → İletişim & Form
├── 404.html            → Hata Sayfası
│
├── css/
│   ├── style.css       → Ana site stilleri
│   └── admin.css       → Admin panel stilleri
│
├── js/
│   ├── data.js         → Veri deposu, güvenlik, yardımcılar
│   └── main.js         → Site genel JS
│
└── admin/
    ├── giris.html      → Admin Giriş (güvenli)
    └── panel.html      → Admin Kontrol Paneli
```

---

## 🚀 Kurulum

### Yöntem 1 — Direkt Tarayıcıda (Lokal)
1. `baykus-hukuk` klasörünü açın
2. `index.html` dosyasını tarayıcıda açın

### Yöntem 2 — Web Sunucusuna Yükleme (Önerilen)
1. Tüm dosyaları hosting panelinizden (cPanel / FTP) `public_html` klasörüne yükleyin
2. Alan adınızı tarayıcıda açın

> **Not:** Veri localStorage'da saklanır. Gerçek hosting için PHP + MySQL veya Firebase entegrasyonu önerilir.

---

## 🔒 Admin Paneli

**URL:** `siteniz.com/admin/giris.html`

**Varsayılan Şifre:** `Baykus2025!`

> ⚠️ İlk girişte şifre değiştirme ekranı gelecektir. Mutlaka güçlü bir şifre belirleyin!

### Admin Güvenlik Özellikleri
- 5 hatalı denemede 15 dakika kilitleme
- 8 saatlik oturum süresi (sonra otomatik çıkış)
- Şifre hash'lenerek saklanır (btoa — production'da bcrypt kullanın)
- `meta robots: noindex` ile arama motorlarından gizli
- Oturum doğrulama her panel açılışında kontrol edilir

### Admin ile Yapabilecekleriniz
| Özellik | Açıklama |
|---------|----------|
| 📝 Makaleler | Ekle, düzenle, yayınla/gizle, sil |
| 📰 Gündem | Hukuk haberleri yönetimi |
| 🔗 Linkler | Hukuki kaynak linkleri |
| ✉️ Mesajlar | İletişim formu mesajlarını oku, yanıtla |
| ⚙️ Ayarlar | Site başlığı, iletişim bilgileri, harita, hero metni |
| 🔒 Güvenlik | Şifre değiştir, oturum bilgisi, kilit aç |

---

## ✏️ İçerik Yönetimi

### Yeni Makale Ekleme
1. `admin/giris.html` → Giriş yapın
2. Sol menüden **Makaleler** → **+ Yeni Makale Ekle**
3. Başlık, kategori, içerik doldurun → **Kaydet**
4. Makale otomatik olarak `makale.html?slug=...` adresinde yayınlanır

### Site Bilgilerini Güncelleme
1. Admin → **Site Ayarları**
2. Telefon, adres, slogan, hero metni gibi bilgileri güncelleyin
3. **Ayarları Kaydet**'e tıklayın → Anında tüm siteye yansır

---

## 🌐 Gerçek Hosting İçin Tavsiyeler

1. **Şifreyi değiştirin:** Admin paneline ilk girişte sistem zaten zorunlu kılar
2. **HTTPS kullanın:** Hosting panelinizden SSL sertifikası (Let's Encrypt — ücretsiz) etkinleştirin
3. **PHP backend ekleyin:** Veriler şu an localStorage'da duruyor. `mail()` veya SMTP ile gerçek e-posta göndermek için PHP form handler ekleyin
4. **Yedek alın:** Düzenli olarak localStorage verilerini JSON olarak export edin (Admin → Güvenlik)

---

## 📞 Özelleştirme

Tüm renkler `css/style.css` dosyasının başındaki `:root` bloğunda tanımlıdır:

```css
--navy:  #1a2744   /* Ana lacivert */
--gold:  #c9a84c   /* Altın vurgu */
--cream: #f8f5ef   /* Arka plan */
```

---

*© 2025 Baykuş Hukuk — Tüm hakları saklıdır.*

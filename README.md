# Undangan Digital - Firmansyah & Munirah

Situs statis (tanpa build). Deploy: push folder ini ke GitHub, lalu Netlify (publish directory: root).

## Yang perlu diisi
- `js/config.js` : link Google Maps (QR otomatis muncul), FB/IG mempelai, IG & WhatsApp branding, ID musik YouTube. Link yang dikosongkan otomatis disembunyikan.
- `index.html`   : ganti `GANTI-DOMAIN` (2 tempat, di meta og:image & og:url) dengan domain Netlify.
- Link tamu personal: `https://domain-kamu/?to=Nama%20Tamu`

## Struktur
- `css/` style template + `custom.css` (tambahan)
- `js/` `config.js` (data), `main.js` (logika halaman), `music.js` (musik), `qr.js` (generator QR), library
- `lib/lightgallery/` galeri foto
- `images/` foto, ikon, ornamen; `images/gallery/` foto galeri
- `calendar.ics` file kalender (akad & resepsi)

Template dasar: FreeHTML5.co (CC BY 3.0) - pertahankan kredit di footer.
"# wedding-firmansyah" 

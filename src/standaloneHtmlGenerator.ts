export function generateStandaloneHtml(initialBrandName: string = 'ARASSTUDIO', initialPreset: string = 'corporate'): string {
  return `<!DOCTYPE html>
<html lang="ms" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${initialBrandName} — Katalog Digital & Demo Interaktif oleh ARASTECH / ARASSTUDIO</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    .tabular-nums { font-family: 'JetBrains Mono', monospace; font-variant-numeric: tabular-nums; }
    .balance-text { text-wrap: balance; }
  </style>
</head>
<body id="app-body" class="min-h-screen transition-colors duration-200 bg-slate-50 text-slate-900">

  <!-- 1. STICKY NAVBAR (3-Zone Top Bar Contract) -->
  <header id="navbar" class="sticky top-0 z-40 border-b transition-colors duration-200 bg-white/95 border-slate-200 backdrop-blur-md">
    <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
      <a href="#" id="nav-brand" class="text-lg font-bold tracking-tight whitespace-nowrap shrink-0">${initialBrandName}</a>
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#katalog" class="nav-link hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">Katalog Servis</a>
        <a href="#portfolio" class="nav-link hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">Portfolio</a>
        <a href="#harga" class="nav-link hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">Harga</a>
        <a href="#hubungi" class="nav-link hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">Hubungi</a>
      </nav>
      <div class="flex items-center shrink-0">
        <button onclick="openBookingModal('Website Perniagaan / Syarikat (RM1,500 – RM5,000)')" id="nav-cta" class="px-4 py-2 text-xs font-semibold text-white rounded-lg transition-colors whitespace-nowrap shrink-0 bg-blue-900 hover:bg-blue-800 inline-flex items-center gap-1.5">
          <span>Tempah via WhatsApp</span>
        </button>
      </div>
    </div>
  </header>

  <!-- 2. HERO SECTION -->
  <section class="py-16 lg:py-24 px-6 border-b transition-colors duration-200" id="hero-section">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        <!-- Left Column -->
        <div class="lg:col-span-7 flex flex-col justify-between space-y-8">
          <div class="space-y-6">
            <div id="hero-kicker" class="text-xs font-medium tracking-wide text-slate-500">
              Katalog Digital Rasmi · Solusi Web & Produksi Digital
            </div>
            <h1 id="hero-title" class="text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.12] balance-text">
              Infrastruktur Web & Katalog Digital Berprestasi Tinggi untuk Pertumbuhan Bisnes Anda
            </h1>
            <p id="hero-subtitle" class="text-base sm:text-lg leading-relaxed max-w-2xl text-slate-600">
              Kami membantu <span class="brand-inline font-semibold">${initialBrandName}</span> memiliki ekosistem laman web moden, kedai e-dagang berkonversi tinggi, dan sistem tempahan pintar yang sedia menjana jualan.
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-4 pt-2">
            <a href="#katalog" id="hero-primary-cta" class="px-6 py-3.5 text-sm font-semibold text-white rounded-lg transition-colors whitespace-nowrap shrink-0 bg-blue-900 hover:bg-blue-800 inline-flex items-center gap-2">
              <span>Terokai Katalog Servis</span>
              <i data-lucide="arrow-down-right" class="w-4 h-4"></i>
            </a>
            <button onclick="openBookingModal('Konsultasi Katalog Digital')" id="hero-secondary-cta" class="px-6 py-3.5 text-sm font-semibold rounded-lg border transition-colors whitespace-nowrap shrink-0 border-slate-300 text-slate-800 hover:bg-slate-100">
              Simulator Sebut Harga WhatsApp
            </button>
          </div>
        </div>

        <!-- Right Column: Interactive Storefront & Conversion Preview -->
        <div class="lg:col-span-5">
          <div id="dashboard-card" class="h-full rounded-xl border p-6 flex flex-col justify-between transition-colors duration-200 bg-white border-slate-200 shadow-sm">
            <div class="flex items-center justify-between gap-4 pb-5 border-b border-slate-200/80">
              <div>
                <div class="text-xs font-medium text-slate-500">Prestasi Katalog <span class="brand-inline font-semibold">${initialBrandName}</span></div>
                <div class="text-sm font-semibold mt-0.5">Metrik Trafik & Jualan Langsung</div>
              </div>
              <div class="flex items-center gap-1 p-1 rounded-lg bg-slate-100">
                <button onclick="setDashboardPeriod('30d')" id="btn-30d" class="px-3 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 bg-white text-slate-900 shadow-sm">30 Hari</button>
                <button onclick="setDashboardPeriod('12m')" id="btn-12m" class="px-3 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 text-slate-600">12 Bulan</button>
              </div>
            </div>

            <div class="grid grid-cols-3 gap-4 py-6">
              <div>
                <div class="text-xs text-slate-500">Pelawat Katalog</div>
                <div id="metric-traffic" class="text-xl sm:text-2xl font-bold tabular-nums mt-1">48,290</div>
                <div id="metric-traffic-delta" class="text-xs font-medium text-emerald-600 mt-0.5 tabular-nums">+34.2%</div>
              </div>
              <div>
                <div class="text-xs text-slate-500">Tempahan / Leads</div>
                <div id="metric-leads" class="text-xl sm:text-2xl font-bold tabular-nums mt-1">642</div>
                <div id="metric-leads-delta" class="text-xs font-medium text-emerald-600 mt-0.5 tabular-nums">+58.0%</div>
              </div>
              <div>
                <div class="text-xs text-slate-500">Kadar Konversi</div>
                <div id="metric-conv" class="text-xl sm:text-2xl font-bold tabular-nums mt-1">4.85%</div>
                <div id="metric-conv-delta" class="text-xs font-medium text-emerald-600 mt-0.5 tabular-nums">+2.1x ROI</div>
              </div>
            </div>

            <div class="pt-4 border-t border-slate-200/80">
              <div class="flex items-center justify-between text-xs text-slate-500 mb-3">
                <span>Trend Pertumbuhan Pesanan</span>
                <span id="dash-range-caption" class="tabular-nums">Minggu 1 – Minggu 4</span>
              </div>
              <div id="chart-bars" class="h-28 flex items-end gap-2.5 pt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. SEKSYEN KATALOG SERVIS (E-Commerce Style) -->
  <section id="katalog" class="py-20 px-6 border-b transition-colors duration-200">
    <div id="harga" class="max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
        <div>
          <div class="text-xs font-medium text-slate-500 mb-2">Katalog Produk & Pakej Pembangunan Rasmi</div>
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">Katalog Servis Digital <span class="brand-inline">${initialBrandName}</span></h2>
        </div>

        <!-- Bar Tab Kategori Interaktif -->
        <div class="flex flex-wrap items-center gap-1 p-1 rounded-lg bg-slate-200/75 w-fit">
          <button onclick="filterCatalog('all')" data-cat="all" class="cat-tab px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 bg-white text-slate-900 shadow-sm">Semua</button>
          <button onclick="filterCatalog('landing')" data-cat="landing" class="cat-tab px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 text-slate-600">Landing Page / Simple</button>
          <button onclick="filterCatalog('corporate')" data-cat="corporate" class="cat-tab px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 text-slate-600">Website Bisnes</button>
          <button onclick="filterCatalog('ecommerce')" data-cat="ecommerce" class="cat-tab px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 text-slate-600">E-Dagang / Store</button>
          <button onclick="filterCatalog('custom')" data-cat="custom" class="cat-tab px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 text-slate-600">Custom & Sistem</button>
        </div>
      </div>

      <!-- Upfront Payment Terms Banner -->
      <div id="upfront-banner" class="mb-10 p-4 sm:p-5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-blue-50/70 border-blue-200 text-slate-900">
        <div class="flex items-start sm:items-center gap-3">
          <i data-lucide="shield-check" class="w-5 h-5 shrink-0 mt-0.5 sm:mt-0"></i>
          <div class="text-xs sm:text-sm font-semibold">
            Terma Bayaran Penuh (100% Upfront): Percuma Setup Domain/Hosting + Keutamaan Giliran Projek (Fast-Track)
          </div>
        </div>
        <span class="text-xs font-mono font-semibold whitespace-nowrap shrink-0">Harga Rasmi ARASTECH / ARASSTUDIO</span>
      </div>

      <!-- 3-Column E-Commerce Product/Service Grid -->
      <div id="catalog-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch"></div>
    </div>
  </section>

  <!-- 4. PORTFOLIO & KAJIAN KES (Case Studies) -->
  <section id="portfolio" class="py-20 px-6 border-b transition-colors duration-200">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div class="text-xs font-medium text-slate-500 mb-2">Rekod Kejayaan & Bukti Impak</div>
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">Portfolio & Kajian Kes Klien</h2>
        </div>
        <div class="flex flex-wrap items-center gap-1 p-1 rounded-lg bg-slate-200/75 w-fit">
          <button onclick="filterPortfolio('Semua')" data-pfilter="Semua" class="pfilter-btn px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 bg-white text-slate-900 shadow-sm">Semua</button>
          <button onclick="filterPortfolio('Korporat')" data-pfilter="Korporat" class="pfilter-btn px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 text-slate-600">Korporat</button>
          <button onclick="filterPortfolio('Kreatif')" data-pfilter="Kreatif" class="pfilter-btn px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 text-slate-600">Kreatif</button>
          <button onclick="filterPortfolio('E-Dagang')" data-pfilter="E-Dagang" class="pfilter-btn px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 text-slate-600">E-Dagang</button>
        </div>
      </div>
      <div id="portfolio-grid" class="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
    </div>
  </section>

  <!-- 6. FOOTER PROFESIONAL -->
  <footer id="hubungi" class="py-14 px-6 transition-colors duration-200">
    <div class="max-w-7xl mx-auto space-y-10">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div id="footer-brand" class="text-xl font-bold tracking-tight">${initialBrandName}</div>
          <p class="text-xs text-slate-500 mt-1">Katalog Rasmi & Ekosistem Web oleh ARASTECH / ARASSTUDIO</p>
        </div>
        <div class="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-500">
          <a href="#katalog" class="hover:underline">Katalog Servis</a>
          <a href="#portfolio" class="hover:underline">Portfolio</a>
          <a href="#harga" class="hover:underline">Senarai Harga</a>
          <button onclick="openBookingModal('Pertanyaan Umum')" class="hover:underline">Simulator Tempahan WhatsApp</button>
        </div>
      </div>
      <div class="pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
        <div>&copy; ${new Date().getFullYear()} <span class="brand-inline font-semibold">${initialBrandName}</span>. Hak Cipta Terpelihara.</div>
        <div class="font-semibold">Direka &amp; Dibangunkan oleh ARASTECH / ARASSTUDIO</div>
      </div>
    </div>
  </footer>

  <!-- CASE STUDY MODAL -->
  <div id="case-modal" class="fixed inset-0 z-50 hidden items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
    <div class="w-full max-w-2xl rounded-xl border border-slate-200 bg-white text-slate-900 p-6 sm:p-8 shadow-2xl space-y-6">
      <div class="flex items-start justify-between gap-4">
        <div>
          <div id="case-modal-cat" class="text-xs font-medium text-slate-500">Kategori · Tahun</div>
          <h3 id="case-modal-title" class="text-xl sm:text-2xl font-bold mt-1">Tajuk Projek</h3>
        </div>
        <button onclick="closeCaseModal()" class="p-2 rounded-lg text-slate-500 hover:bg-slate-100">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>
      <div class="space-y-4 text-sm leading-relaxed">
        <div class="p-4 rounded-lg bg-slate-50 border border-slate-200">
          <div class="font-semibold text-slate-900 mb-1">1. Cabaran Klien</div>
          <p id="case-modal-challenge" class="text-slate-600"></p>
        </div>
        <div class="p-4 rounded-lg bg-slate-50 border border-slate-200">
          <div class="font-semibold text-slate-900 mb-1">2. Solusi Dibina oleh ARASTECH / ARASSTUDIO</div>
          <p id="case-modal-solution" class="text-slate-600"></p>
        </div>
        <div class="p-4 rounded-lg bg-emerald-50/70 border border-emerald-200">
          <div class="font-semibold text-emerald-950 mb-1">3. Hasil Konversi & Impak Sebenar</div>
          <p id="case-modal-result" class="text-emerald-900 font-medium"></p>
        </div>
      </div>
      <div class="flex items-center justify-end gap-3 pt-2">
        <button onclick="closeCaseModal()" class="px-4 py-2.5 text-xs font-semibold rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100">Tutup</button>
        <button onclick="closeCaseModal(); openBookingModal('Bina Projek Seperti Kajian Kes')" class="px-5 py-2.5 text-xs font-semibold rounded-lg bg-blue-900 text-white hover:bg-blue-800">Tempah Solusi Ini untuk <span class="brand-inline">${initialBrandName}</span></button>
      </div>
    </div>
  </div>

  <!-- 5. SIMULATOR TEMPAHAN WHATSAPP (Modal CTA) -->
  <div id="booking-modal" class="fixed inset-0 z-50 hidden items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
    <div class="w-full max-w-xl rounded-xl border border-slate-200 bg-white text-slate-900 p-6 sm:p-8 shadow-2xl space-y-6">
      <div class="flex items-start justify-between gap-4">
        <div>
          <div class="text-xs font-medium text-slate-500">Simulator Tempahan WhatsApp · ARASTECH / ARASSTUDIO</div>
          <h3 class="text-xl font-bold mt-1">Tempah Pakej Katalog untuk <span class="brand-inline">${initialBrandName}</span></h3>
        </div>
        <button onclick="closeBookingModal()" class="p-2 rounded-lg text-slate-500 hover:bg-slate-100">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <div class="space-y-4">
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1.5">Nama Klien / Wakil Syarikat</label>
          <input id="wa-client-name" type="text" placeholder="Contoh: Encik Faris (Pengarah Urusan)" oninput="updateWhatsAppPreview()" class="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1.5">Pakej / Produk Pilihan</label>
          <select id="wa-package" onchange="updateWhatsAppPreview()" class="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"></select>
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1.5">Nota & Keperluan Projek</label>
          <textarea id="wa-notes" rows="2" placeholder="Contoh: Kami berminat dengan Terma 100% Upfront (Percuma Domain/Hosting + Fast-Track)." oninput="updateWhatsAppPreview()" class="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
        </div>

        <div class="p-4 rounded-lg bg-slate-900 text-slate-100 space-y-2">
          <div class="text-[11px] font-mono text-slate-400">Pratonton Mesej WhatsApp ke Tim ARASTECH / ARASSTUDIO (wa.me/+601131738516):</div>
          <pre id="wa-preview-text" class="text-xs font-mono whitespace-pre-wrap leading-relaxed text-emerald-300"></pre>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
        <button onclick="closeBookingModal()" class="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100">Batal</button>
        <a id="wa-submit-link" href="https://wa.me/+601131738516" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">
          <i data-lucide="send" class="w-4 h-4"></i>
          <span>Hantar ke WhatsApp Sekarang</span>
        </a>
      </div>
    </div>
  </div>

  <!-- A. PANEL KAWALAN DEMO KLIEN (Floating Widget Bottom-Right) -->
  <div class="fixed bottom-5 right-5 z-50 w-80 sm:w-96 rounded-xl border border-slate-700 bg-slate-950 text-white shadow-2xl overflow-hidden">
    <div class="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-2">
      <div class="text-[11px] font-semibold tracking-wide text-amber-400">
        Demo Interaktif oleh ARASTECH / ARASSTUDIO
      </div>
      <button onclick="toggleDemoPanel()" id="panel-toggle-btn" class="px-2.5 py-1 text-[11px] font-medium rounded bg-slate-800 hover:bg-slate-700 text-slate-200 whitespace-nowrap shrink-0">
        Minimize
      </button>
    </div>
    <div id="demo-panel-content" class="p-4 space-y-4">
      <div>
        <label class="block text-xs font-medium text-slate-300 mb-1.5">1. Nama Bisnes Klien (Live Update)</label>
        <div class="flex items-center gap-2">
          <input id="demo-brand-input" type="text" value="${initialBrandName}" placeholder="Taip nama bisnes klien..." oninput="updateBrandName(this.value)" class="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-amber-400" />
          <button onclick="resetBrandName()" class="px-3 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 whitespace-nowrap shrink-0">
            Reset
          </button>
        </div>
      </div>
      <div>
        <label class="block text-xs font-medium text-slate-300 mb-1.5">2. Pratetap Industri (Theme &amp; Content Switcher)</label>
        <div class="grid grid-cols-1 gap-1.5">
          <button onclick="applyPreset('corporate')" id="preset-btn-corporate" class="px-3 py-2 text-left text-xs font-semibold rounded-lg border transition-colors flex items-center justify-between">
            <span>Korporat &amp; Servis</span>
            <span class="text-[10px] opacity-75">Biru Navy · Cerah</span>
          </button>
          <button onclick="applyPreset('creative')" id="preset-btn-creative" class="px-3 py-2 text-left text-xs font-semibold rounded-lg border transition-colors flex items-center justify-between">
            <span>Studio Digital &amp; Kreatif</span>
            <span class="text-[10px] opacity-75">Ungu Neon · Gelap</span>
          </button>
          <button onclick="applyPreset('ecommerce')" id="preset-btn-ecommerce" class="px-3 py-2 text-left text-xs font-semibold rounded-lg border transition-colors flex items-center justify-between">
            <span>Katalog E-Dagang &amp; Retail</span>
            <span class="text-[10px] opacity-75">Jingga/Merah · Store</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <script>
    let currentBrand = "${initialBrandName}";
    let currentPreset = "${initialPreset}";
    let currentPeriod = "30d";
    let currentCatalogCat = "all";
    let currentPortfolioCat = "Semua";
    let isPanelOpen = true;

    // Senarai Katalog Pakej & Produk Rasmi ARASTECH / ARASSTUDIO
    const CATALOG_ITEMS = [
      {
        id: "cat-landing-1",
        categoryKey: "landing",
        categoryLabel: "Landing Page / Simple",
        badge: "Paling Berbaloi",
        name: "Landing Page / Simple (1 Halaman Penuh)",
        price: "RM500 – RM1,500",
        timeline: "Siap dalam 3–5 Hari Bekerja",
        desc: "Sesuai untuk kempen promosi, produk tunggal, atau profil perniagaan asas (1 Halaman).",
        features: [
          "1 Halaman Penuh (Single Page)",
          "Reka Bentuk Moden & Responsif",
          "Butang Tindakan / CTA WhatsApp",
          "Asas SEO & Kelajuan Tinggi",
          "Siap dalam 3-5 Hari Berkerja"
        ],
        icon: "layout"
      },
      {
        id: "cat-corporate-1",
        categoryKey: "corporate",
        categoryLabel: "Website Bisnes",
        badge: "Pilihan Utama PKS",
        name: "Website Perniagaan / Syarikat (3–10 Halaman)",
        price: "RM1,500 – RM5,000",
        timeline: "Siap dalam 7–14 Hari Bekerja",
        desc: "Sesuai untuk PKS, agensi, atau perniagaan yang memerlukan 3 hingga 10 halaman profesional.",
        features: [
          "3 hingga 10 Halaman Profesional",
          "Halaman 'Tentang Kami', 'Perkhidmatan', 'Hubungi'",
          "Sistem Pengurusan Kandungan (CMS)",
          "Integrasi Media Sosial & Google Maps",
          "Sokongan & Latihan Percuma"
        ],
        icon: "building-2"
      },
      {
        id: "cat-ecommerce-1",
        categoryKey: "ecommerce",
        categoryLabel: "E-Dagang / Store",
        badge: "Bisnes Online",
        name: "Website E-Dagang (Online Store Lengkap)",
        price: "RM3,500 – RM10,000+",
        timeline: "Siap dalam 14–21 Hari Bekerja",
        desc: "Sesuai untuk kedai online dengan troli beli-belah & sistem pembayaran automatik.",
        features: [
          "Produk Tanpa Had / Mengikut Kapasiti",
          "Sistem Troli Belanja & Checkout",
          "Integrasi Payment Gateway (Billplz / ToyyibPay / iPay88)",
          "Pengurusan Pesanan & Inventori",
          "Jaminan Keselamatan SSL & Perlindungan Data"
        ],
        icon: "shopping-bag"
      },
      {
        id: "cat-custom-1",
        categoryKey: "custom",
        categoryLabel: "Custom & Sistem",
        badge: "Advanced / Enterprise",
        name: "Website Custom / Sistem Web Lanjutan",
        price: "RM8,000 – RM20,000+",
        timeline: "Mengikut Skop & Spesifikasi",
        desc: "Sesuai untuk sistem tempahan khas, portal keahlian, atau aplikasi web berskala besar.",
        features: [
          "Sistem Tempahan Khas (Booking System)",
          "Portal Keahlian (Membership Portal)",
          "Fungsi & API Khusus Mengikut Keperluan",
          "Pangkalan Data Berprestasi Tinggi",
          "Konsultasi Teknikal & Penyelenggaraan Penuh"
        ],
        icon: "cpu"
      },
      {
        id: "cat-landing-2",
        categoryKey: "landing",
        categoryLabel: "Landing Page / Simple",
        badge: "Kempen Pantas",
        name: "Landing Page Kempen Jualan & Video AI",
        price: "RM500 – RM1,500",
        timeline: "Siap dalam 3–5 Hari Bekerja",
        desc: "Halaman fokus konversi tinggi lengkap dengan integrasi visual promosi dan simulator WhatsApp.",
        features: [
          "Struktur Copywriting Direct-Response",
          "Paparan Visual / Video Produk Teroptimum",
          "Simulator Tempahan Terus ke WhatsApp",
          "Pemasangan Meta Pixel & TikTok Pixel",
          "Kelajuan Muat Pantas di Telefon Pintar"
        ],
        icon: "zap"
      },
      {
        id: "cat-ecommerce-2",
        categoryKey: "ecommerce",
        categoryLabel: "E-Dagang / Store",
        badge: "Katalog Digital",
        name: "Katalog Produk Interaktif & WhatsApp Store",
        price: "RM3,500 – RM10,000+",
        timeline: "Siap dalam 10–18 Hari Bekerja",
        desc: "Katalog produk moden dengan penapis kategori, pengiraan kombo, dan checkout FPX / WhatsApp.",
        features: [
          "Bar Tab Kategori Produk Interaktif",
          "Sistem Troli & Pilihan Varian Produk",
          "Integrasi Billplz / ToyyibPay / iPay88",
          "Laporan Jualan & Pangkalan Data Pelanggan",
          "Reka Bentuk Katalog Minimalis & Profesional"
        ],
        icon: "store"
      }
    ];

    const PRESETS = {
      corporate: {
        kicker: "Korporat & Servis · Katalog Solusi Web Profesional",
        heroTitle: "Infrastruktur Web Korporat & Katalog Servis yang Membina Kepercayaan Klien",
        heroSub: "memperkukuh autoriti jenama melalui laman web syarikat yang kemas, katalog perkhidmatan berstruktur, dan sistem sebut harga pantas."
      },
      creative: {
        kicker: "Studio Digital & Kreatif · Web Interaktif & Produksi Animasi AI",
        heroTitle: "Pengalaman Web Glassmorphism & Katalog Produksi Digital Berimpak Tinggi",
        heroSub: "mentransformasi penampilan digital melalui reka bentuk mod gelap moden, animasi kreatif AI, dan pameran katalog servis interaktif."
      },
      ecommerce: {
        kicker: "Katalog E-Dagang & Retail · Kedai Online Berkonversi Tinggi",
        heroTitle: "Katalog E-Dagang Moden & Sistem Checkout Pantas untuk Gandakan Jualan",
        heroSub: "memudahkan pelanggan memilih produk, menyemak harga secara telus, dan membuat pembayaran atau tempahan WhatsApp dengan serta-merta."
      }
    };

    const DASHBOARD_DATA = {
      "30d": {
        traffic: "48,290", trafficDelta: "+34.2%",
        leads: "642", leadsDelta: "+58.0%",
        conv: "4.85%", convDelta: "+2.1x ROI",
        caption: "Minggu 1 – Minggu 4",
        bars: [45, 60, 54, 76, 70, 88, 96]
      },
      "12m": {
        traffic: "614,800", trafficDelta: "+142.5%",
        leads: "8,940", leadsDelta: "+189.4%",
        conv: "6.12%", convDelta: "+3.8x ROI",
        caption: "Suku 1 – Suku 4 (Tahunan)",
        bars: [38, 52, 65, 74, 82, 90, 100]
      }
    };

    const CASE_STUDIES = [
      {
        id: 1,
        category: "Korporat",
        year: "2026",
        title: "Transformasi Portal & Katalog Servis Kejuruteraan B2B",
        metric: "+165% Pertanyaan Sebut Harga Korporat",
        challenge: "Prospek korporat sukar menyemak senarai perkhidmatan dan spesifikasi teknikal kerana laman web lama tidak mempunyai struktur katalog yang jelas.",
        solution: "ARASTECH / ARASSTUDIO membina portal korporat baharu (RM1,500 – RM5,000) dengan katalog servis berstruktur dan borang sebut harga terus ke WhatsApp.",
        result: "Pertanyaan sebut harga meningkat 165% dalam suku pertama dan masa muat halaman kekal di bawah 0.7 saat."
      },
      {
        id: 2,
        category: "Kreatif",
        year: "2026",
        title: "Laman Web Studio Kreatif & Kempen Visual AI",
        metric: "3.2x Masa Interaksi & +210% Tempahan Pakej",
        challenge: "Studio memerlukan platform bertema gelap (glassmorphism) untuk mempamerkan pakej produksi digital dan video AI secara interaktif.",
        solution: "Kami membangunkan laman web katalog interaktif dengan pratonton showreel pantas serta simulator pemilihan pakej secara langsung.",
        result: "Masa interaksi pelawat meningkat 3.2 kali ganda dan menghasilkan peningkatan 210% dalam tempahan pakej kreatif."
      },
      {
        id: 3,
        category: "E-Dagang",
        year: "2026",
        title: "Kedai Online & Katalog E-Dagang Penjagaan Diri",
        metric: "+88% Konversi Checkout Mudah Alih",
        challenge: "Pelanggan sukar mencari kategori produk pada telefon pintar dan sering meninggalkan troli sebelum pembayaran selesai.",
        solution: "Kami membina Website E-Dagang lengkap dengan tab kategori pantas, integrasi Billplz/ToyyibPay, serta pilihan pesanan WhatsApp satu klik.",
        result: "Kadar konversi pembelian meningkat sebanyak 88% dengan pertumbuhan nilai pesanan purata sebanyak 34%."
      }
    ];

    function updateBrandName(val) {
      currentBrand = val.trim() ? val.trim() : "ARASSTUDIO";
      document.getElementById("nav-brand").textContent = currentBrand;
      document.getElementById("footer-brand").textContent = currentBrand;
      document.querySelectorAll(".brand-inline").forEach(el => { el.textContent = currentBrand; });
      updateWhatsAppPreview();
    }

    function resetBrandName() {
      document.getElementById("demo-brand-input").value = "ARASSTUDIO";
      updateBrandName("ARASSTUDIO");
    }

    function toggleDemoPanel() {
      isPanelOpen = !isPanelOpen;
      const content = document.getElementById("demo-panel-content");
      const btn = document.getElementById("panel-toggle-btn");
      content.style.display = isPanelOpen ? "block" : "none";
      btn.textContent = isPanelOpen ? "Minimize" : "Buka Panel";
    }

    function setDashboardPeriod(period) {
      currentPeriod = period;
      const data = DASHBOARD_DATA[period];
      document.getElementById("metric-traffic").textContent = data.traffic;
      document.getElementById("metric-traffic-delta").textContent = data.trafficDelta;
      document.getElementById("metric-leads").textContent = data.leads;
      document.getElementById("metric-leads-delta").textContent = data.leadsDelta;
      document.getElementById("metric-conv").textContent = data.conv;
      document.getElementById("metric-conv-delta").textContent = data.convDelta;
      document.getElementById("dash-range-caption").textContent = data.caption;

      const b30 = document.getElementById("btn-30d");
      const b12 = document.getElementById("btn-12m");
      if (period === "30d") {
        b30.className = "px-3 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 bg-white text-slate-900 shadow-sm";
        b12.className = "px-3 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 text-slate-500";
      } else {
        b12.className = "px-3 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 bg-white text-slate-900 shadow-sm";
        b30.className = "px-3 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 text-slate-500";
      }
      renderChartBars();
    }

    function renderChartBars() {
      const container = document.getElementById("chart-bars");
      const bars = DASHBOARD_DATA[currentPeriod].bars;
      const barColor = currentPreset === "corporate" ? "bg-blue-900" : currentPreset === "creative" ? "bg-indigo-500" : "bg-orange-600";
      container.innerHTML = bars.map((val, idx) => \`
        <div class="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
          <div class="w-full rounded-t transition-all duration-300 \${barColor}" style="height: \${val}%"></div>
          <span class="text-[10px] tabular-nums text-slate-400">0\${idx + 1}</span>
        </div>
      \`).join("");
    }

    function filterCatalog(catKey) {
      currentCatalogCat = catKey;
      document.querySelectorAll(".cat-tab").forEach(btn => {
        if (btn.getAttribute("data-cat") === catKey) {
          btn.className = "cat-tab px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 bg-white text-slate-900 shadow-sm";
        } else {
          btn.className = "cat-tab px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 text-slate-600";
        }
      });
      renderCatalog();
    }

    function renderCatalog() {
      const isDark = currentPreset === "creative";
      const accentBtn = currentPreset === "corporate" ? "bg-blue-900 hover:bg-blue-800" : currentPreset === "creative" ? "bg-indigo-600 hover:bg-indigo-500" : "bg-orange-600 hover:bg-orange-700";
      const items = currentCatalogCat === "all" ? CATALOG_ITEMS : CATALOG_ITEMS.filter(i => i.categoryKey === currentCatalogCat);
      const grid = document.getElementById("catalog-grid");

      grid.innerHTML = items.map(item => \`
        <div class="group rounded-xl border overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 \${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}">
          <div>
            <!-- Aesthetic Product Illustration Header -->
            <div class="h-44 border-b p-5 flex flex-col justify-between \${isDark ? 'bg-slate-950 border-slate-800' : currentPreset === 'ecommerce' ? 'bg-orange-50/60 border-stone-200' : 'bg-slate-100/80 border-slate-200'}">
              <div class="flex items-center justify-between text-xs">
                <span class="font-mono font-semibold text-amber-500">\${item.badge}</span>
                <span class="opacity-70">\${item.categoryLabel}</span>
              </div>
              <div class="my-auto flex items-center justify-between gap-4 py-2">
                <div class="space-y-1.5 flex-1">
                  <div class="h-2.5 w-20 rounded bg-current opacity-20"></div>
                  <div class="h-3 w-full rounded bg-current opacity-30"></div>
                  <div class="h-3 w-3/4 rounded bg-current opacity-20"></div>
                </div>
                <div class="p-3 rounded-xl border \${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200 shadow-sm'}">
                  <i data-lucide="\${item.icon}" class="w-6 h-6"></i>
                </div>
              </div>
              <div class="text-[11px] font-mono opacity-75">\${item.timeline}</div>
            </div>

            <!-- Card Content -->
            <div class="p-6 space-y-4">
              <div>
                <h3 class="text-lg font-bold tracking-tight">\${item.name}</h3>
                <div class="text-2xl font-bold tabular-nums mt-2">\${item.price}</div>
              </div>
              <p class="text-xs leading-relaxed \${isDark ? 'text-slate-400' : 'text-slate-600'}">\${item.desc}</p>
              <ul class="space-y-2 pt-3 border-t \${isDark ? 'border-slate-800' : 'border-slate-100'}">
                \${item.features.map(f => \`
                  <li class="flex items-start gap-2 text-xs \${isDark ? 'text-slate-300' : 'text-slate-600'}">
                    <i data-lucide="check" class="w-4 h-4 shrink-0 mt-0.5"></i>
                    <span>\${f}</span>
                  </li>
                \`).join("")}
              </ul>
            </div>
          </div>

          <div class="p-6 pt-0">
            <button onclick="openBookingModal('\${item.name} (\${item.price})')" class="w-full py-3 px-4 rounded-lg text-xs font-semibold text-white transition-colors inline-flex items-center justify-center gap-2 \${accentBtn}">
              <i data-lucide="shopping-bag" class="w-4 h-4"></i>
              <span>Pilih Pakej / Beli Sekarang</span>
            </button>
          </div>
        </div>
      \`).join("");

      const selectEl = document.getElementById("wa-package");
      if (selectEl && selectEl.options.length === 0) {
        selectEl.innerHTML = CATALOG_ITEMS.map(item => \`<option value="\${item.name} (\${item.price})">\${item.name} — \${item.price}</option>\`).join("") + '<option value="Konsultasi Katalog Digital">Konsultasi Katalog Digital</option>';
      }
      if (window.lucide) window.lucide.createIcons();
    }

    function applyPreset(presetKey) {
      currentPreset = presetKey;
      const p = PRESETS[presetKey];
      const isDark = presetKey === "creative";
      const body = document.getElementById("app-body");
      const nav = document.getElementById("navbar");
      const dashCard = document.getElementById("dashboard-card");
      const upfront = document.getElementById("upfront-banner");

      const accentBg = presetKey === "corporate" ? "bg-blue-900 hover:bg-blue-800" : presetKey === "creative" ? "bg-indigo-600 hover:bg-indigo-500" : "bg-orange-600 hover:bg-orange-700";

      body.className = isDark
        ? "min-h-screen transition-colors duration-200 bg-slate-950 text-slate-100"
        : presetKey === "ecommerce"
        ? "min-h-screen transition-colors duration-200 bg-stone-50 text-stone-950"
        : "min-h-screen transition-colors duration-200 bg-slate-50 text-slate-900";

      nav.className = isDark
        ? "sticky top-0 z-40 border-b transition-colors duration-200 bg-slate-950/90 border-slate-800 backdrop-blur-md"
        : "sticky top-0 z-40 border-b transition-colors duration-200 bg-white/95 border-slate-200 backdrop-blur-md";

      dashCard.className = isDark
        ? "h-full rounded-xl border p-6 flex flex-col justify-between transition-colors duration-200 bg-slate-900/80 border-slate-800 shadow-sm"
        : "h-full rounded-xl border p-6 flex flex-col justify-between transition-colors duration-200 bg-white border-slate-200 shadow-sm";

      upfront.className = isDark
        ? "mb-10 p-4 sm:p-5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 border-indigo-500/40 text-indigo-200"
        : presetKey === "ecommerce"
        ? "mb-10 p-4 sm:p-5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-orange-50/80 border-orange-200 text-orange-950"
        : "mb-10 p-4 sm:p-5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-blue-50/70 border-blue-200 text-slate-900";

      document.getElementById("nav-cta").className = \`px-4 py-2 text-xs font-semibold text-white rounded-lg transition-colors whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 \${accentBg}\`;
      document.getElementById("hero-primary-cta").className = \`px-6 py-3.5 text-sm font-semibold text-white rounded-lg transition-colors whitespace-nowrap shrink-0 inline-flex items-center gap-2 \${accentBg}\`;
      document.getElementById("hero-secondary-cta").className = isDark
        ? "px-6 py-3.5 text-sm font-semibold rounded-lg border transition-colors whitespace-nowrap shrink-0 border-slate-700 text-slate-200 hover:bg-slate-900"
        : "px-6 py-3.5 text-sm font-semibold rounded-lg border transition-colors whitespace-nowrap shrink-0 border-slate-300 text-slate-800 hover:bg-slate-100";

      document.getElementById("hero-kicker").textContent = p.kicker;
      document.getElementById("hero-title").textContent = p.heroTitle;
      document.getElementById("hero-subtitle").innerHTML = \`Kami membantu <span class="brand-inline font-semibold">\${currentBrand}</span> \${p.heroSub}\`;

      ["corporate", "creative", "ecommerce"].forEach(k => {
        const btn = document.getElementById("preset-btn-" + k);
        if (k === presetKey) {
          btn.className = "px-3 py-2 text-left text-xs font-semibold rounded-lg border transition-colors flex items-center justify-between bg-amber-400 text-slate-950 border-amber-400";
        } else {
          btn.className = "px-3 py-2 text-left text-xs font-semibold rounded-lg border transition-colors flex items-center justify-between bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700";
        }
      });

      renderCatalog();
      renderChartBars();
      renderPortfolio();
      updateWhatsAppPreview();
      if (window.lucide) window.lucide.createIcons();
    }

    function filterPortfolio(cat) {
      currentPortfolioCat = cat;
      document.querySelectorAll(".pfilter-btn").forEach(btn => {
        if (btn.getAttribute("data-pfilter") === cat) {
          btn.className = "pfilter-btn px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 bg-white text-slate-900 shadow-sm";
        } else {
          btn.className = "pfilter-btn px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 text-slate-600";
        }
      });
      renderPortfolio();
    }

    function renderPortfolio() {
      const isDark = currentPreset === "creative";
      const list = currentPortfolioCat === "Semua" ? CASE_STUDIES : CASE_STUDIES.filter(c => c.category === currentPortfolioCat);
      const grid = document.getElementById("portfolio-grid");
      grid.innerHTML = list.map(item => \`
        <div onclick="openCaseModal(\${item.id})" class="cursor-pointer group rounded-xl border p-6 transition-transform duration-200 hover:-translate-y-1 flex flex-col justify-between space-y-6 \${isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200'}">
          <div class="space-y-4">
            <div class="text-xs text-slate-500">\${item.category} · Kajian Kes \${item.year}</div>
            <h3 class="text-lg font-bold tracking-tight group-hover:underline">\${item.title}</h3>
            <p class="text-sm font-mono font-semibold text-emerald-600">\${item.metric}</p>
          </div>
          <div class="pt-4 border-t \${isDark ? 'border-slate-800' : 'border-slate-100'} flex items-center justify-between text-xs font-semibold">
            <span>Lihat Hasil Konversi</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </div>
        </div>
      \`).join("");
      if (window.lucide) window.lucide.createIcons();
    }

    function openCaseModal(id) {
      const item = CASE_STUDIES.find(c => c.id === id);
      if (!item) return;
      document.getElementById("case-modal-cat").textContent = \`\${item.category} · Kajian Kes \${item.year}\`;
      document.getElementById("case-modal-title").textContent = item.title;
      document.getElementById("case-modal-challenge").textContent = item.challenge;
      document.getElementById("case-modal-solution").textContent = item.solution;
      document.getElementById("case-modal-result").textContent = item.result;
      const modal = document.getElementById("case-modal");
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      if (window.lucide) window.lucide.createIcons();
    }

    function closeCaseModal() {
      const modal = document.getElementById("case-modal");
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }

    function openBookingModal(selectedPkg) {
      const selectEl = document.getElementById("wa-package");
      let matched = false;
      for (let i = 0; i < selectEl.options.length; i++) {
        if (selectEl.options[i].value === selectedPkg || selectEl.options[i].value.includes(selectedPkg)) {
          selectEl.selectedIndex = i;
          matched = true;
          break;
        }
      }
      if (!matched && selectedPkg) {
        const opt = document.createElement("option");
        opt.value = selectedPkg;
        opt.textContent = selectedPkg;
        selectEl.appendChild(opt);
        selectEl.value = selectedPkg;
      }
      updateWhatsAppPreview();
      const modal = document.getElementById("booking-modal");
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      if (window.lucide) window.lucide.createIcons();
    }

    function closeBookingModal() {
      const modal = document.getElementById("booking-modal");
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }

    function updateWhatsAppPreview() {
      const clientName = document.getElementById("wa-client-name")?.value.trim() || "Wakil Pengurusan";
      const pkg = document.getElementById("wa-package")?.value || "Pakej Katalog";
      const notes = document.getElementById("wa-notes")?.value.trim() || "Berminat dengan Terma Bayaran Penuh (100% Upfront) untuk Fast-Track.";
      const presetLabel = currentPreset === "corporate" ? "Korporat & Servis" : currentPreset === "creative" ? "Studio Digital & Kreatif" : "Katalog E-Dagang & Retail";

      const msg = \`Salam Tim ARASTECH / ARASSTUDIO,\\n\\nSaya \${clientName} daripada *\${currentBrand}*.\\nKami telah memilih pakej daripada Katalog Digital (\${presetLabel}):\\n\\n• Nama Bisnes: \${currentBrand}\\n• Pakej Pilihan: \${pkg}\\n• Nota Projek: \${notes}\\n\\nMohon kongsikan langkah seterusnya. Terima kasih!\`;
      const previewEl = document.getElementById("wa-preview-text");
      if (previewEl) previewEl.textContent = msg;
      const linkEl = document.getElementById("wa-submit-link");
      if (linkEl) linkEl.href = "https://wa.me/+601131738516?text=" + encodeURIComponent(msg);
    }

    window.addEventListener("DOMContentLoaded", () => {
      applyPreset(currentPreset);
      setDashboardPeriod("30d");
      if (window.lucide) window.lucide.createIcons();
    });
  </script>
</body>
</html>`;
}

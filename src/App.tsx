/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  ChevronDown,
  ChevronUp,
  X,
  MessageCircle,
  Check,
  ShieldCheck,
  ArrowUpRight,
  Layout,
  Building2,
  ShoppingBag,
  Cpu,
  Eye,
} from 'lucide-react';

type PresetType = 'corporate' | 'creative' | 'ecommerce';
type CatalogCategory = 'all' | 'landing' | 'corporate' | 'ecommerce' | 'custom';
type PortfolioCategory = 'all' | 'Korporat' | 'Kreatif' | 'E-Dagang';

interface CatalogProduct {
  id: number;
  category: Exclude<CatalogCategory, 'all'>;
  badge: string;
  title: string;
  price: string;
  timeline: string;
  pages: string;
  desc: string;
  features: string[];
}

interface CaseStudyItem {
  id: number;
  category: Exclude<PortfolioCategory, 'all'>;
  client: string;
  title: string;
  metric: string;
  challenge: string;
  solution: string;
  result: string;
}

const CATALOG_PRODUCTS: CatalogProduct[] = [
  {
    id: 1,
    category: 'landing',
    badge: 'Paling Popular',
    title: 'Landing Page / Simple',
    price: 'RM500 – RM1,500',
    timeline: '3–5 Hari Bekerja',
    pages: '1 Halaman Penuh (Single Page)',
    desc: 'Sesuai untuk kempen promosi, produk tunggal, atau profil perniagaan asas (1 Halaman).',
    features: [
      '1 Halaman Penuh (Single Page)',
      'Reka Bentuk Moden & Responsif',
      'Butang Tindakan / CTA WhatsApp',
      'Asas SEO & Kelajuan Tinggi',
      'Siap dalam 3-5 Hari Berkerja',
    ],
  },
  {
    id: 2,
    category: 'corporate',
    badge: 'Pilihan PKS',
    title: 'Website Perniagaan / Syarikat',
    price: 'RM1,500 – RM5,000',
    timeline: '7–14 Hari Bekerja',
    pages: '3 hingga 10 Halaman Profesional',
    desc: '3 hingga 10 halaman profesional merangkumi "Tentang Kami", "Perkhidmatan", & "Hubungi Kami".',
    features: [
      '3 hingga 10 Halaman Profesional',
      "Halaman 'Tentang Kami', 'Perkhidmatan', 'Hubungi'",
      'Sistem Pengurusan Kandungan (CMS)',
      'Integrasi Media Sosial & Google Maps',
      'Sokongan & Latihan Percuma',
    ],
  },
  {
    id: 3,
    category: 'ecommerce',
    badge: 'Online Store',
    title: 'Website E-Dagang / Store',
    price: 'RM3,500 – RM10,000+',
    timeline: '14–21 Hari Bekerja',
    pages: 'Katalog Produk Tanpa Had',
    desc: 'Kedai online lengkap dengan troli beli-belah & integrasi payment gateway (Billplz / ToyyibPay / iPay88).',
    features: [
      'Produk Tanpa Had / Mengikut Kapasiti',
      'Sistem Troli Belanja & Checkout',
      'Integrasi Payment Gateway (Billplz / ToyyibPay / Ipay88)',
      'Pengurusan Pesanan & Inventori',
      'Jaminan Keselamatan SSL & Perlindungan Data',
    ],
  },
  {
    id: 4,
    category: 'custom',
    badge: 'Advanced System',
    title: 'Website Custom / Sistem Web',
    price: 'RM8,000 – RM20,000+',
    timeline: 'Mengikut Spesifikasi',
    pages: 'Sistem & Pangkalan Data Kustom',
    desc: 'Sistem tempahan khas (booking system), portal keahlian, atau aplikasi web berprestasi tinggi.',
    features: [
      'Sistem Tempahan Khas (Booking System)',
      'Portal Keahlian (Membership Portal)',
      'Fungsi & API Khusus Mengikut Keperluan',
      'Pangkalan Data Berprestasi Tinggi',
      'Konsultasi Teknikal & Penyelenggaraan Penuh',
    ],
  },
];

const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 1,
    category: 'Korporat',
    client: 'Teguh Bina Engineering Sdn Bhd',
    title: 'Portal Korporat & Sistem Sebut Harga B2B',
    metric: '+165% Pertanyaan Sebut Harga',
    challenge:
      'Laman web lama sukar diakses melalui telefon pintar dan tidak mempunyai struktur katalog servis yang meyakinkan prospek korporat.',
    solution:
      'ARASTECH / ARASSTUDIO membangunkan Website Perniagaan / Syarikat (RM1,500 – RM5,000) lengkap dengan CMS dan borang sebut harga terus ke WhatsApp.',
    result:
      'Peningkatan 165% dalam jumlah pertanyaan tender dan sebut harga layak dalam tempoh 90 hari pertama selepas pelancaran.',
  },
  {
    id: 2,
    category: 'Kreatif',
    client: 'Lumina Digital Studio',
    title: 'Landing Page Kempen Kreatif & Produksi Visual AI',
    metric: '3.2x Masa Interaksi Pelawat',
    challenge:
      'Agensi memerlukan halaman kempen bertema gelap yang moden untuk mempamerkan pakej produksi video AI dan menarik prospek baharu.',
    solution:
      'Kami membina Landing Page interaktif dengan galeri showreel pantas serta simulator pemilihan pakej terus ke WhatsApp.',
    result:
      'Purata masa interaksi meningkat 3.2 kali ganda dan menghasilkan lonjakan +210% dalam tempahan pakej produksi.',
  },
  {
    id: 3,
    category: 'E-Dagang',
    client: 'Aura Botanica Malaysia',
    title: 'Website E-Dagang & Checkout FPX Pantas',
    metric: '+88% Kadar Konversi Checkout',
    challenge:
      'Kadar pengabaian troli tinggi kerana pelanggan sukar menapis produk dan tiada integrasi pembayaran FPX automatik.',
    solution:
      'Kami membangunkan Website E-Dagang lengkap dengan katalog kategori, sistem troli belanja, dan integrasi Billplz / ToyyibPay.',
    result:
      'Kadar konversi pembelian melalui telefon pintar meningkat 88% pada bulan pertama pelancaran.',
  },
];

const PRESET_CONFIG: Record<
  PresetType,
  {
    label: string;
    badgeText: string;
    heroTitlePrefix: string;
    heroTitleHighlight: string;
    heroSubtitle: string;
  }
> = {
  corporate: {
    label: 'Korporat',
    badgeText: 'Solusi Web & Produksi Digital Moden',
    heroTitlePrefix: 'Transformasi Bisnes Anda ke Peringkat',
    heroTitleHighlight: 'Seterusnya',
    heroSubtitle:
      'Papar katalog servis profesional kami khusus untuk membantu lonjakan jualan dan penjenamaan bisnes anda secara efektif.',
  },
  creative: {
    label: 'Kreatif',
    badgeText: 'Studio Digital, Animasi AI & Web Interaktif',
    heroTitlePrefix: 'Pengalaman Visual & Web Kreatif Tanpa',
    heroTitleHighlight: 'Batasan',
    heroSubtitle:
      'Gabungan reka bentuk laman web moden, animasi AI memukau, dan sistem katalog digital untuk menonjolkan identiti jenama anda.',
  },
  ecommerce: {
    label: 'E-Dagang',
    badgeText: 'Katalog E-Dagang & Sistem Jualan Pantas',
    heroTitlePrefix: 'Gandakan Jualan Online Anda Secara',
    heroTitleHighlight: 'Automatik',
    heroSubtitle:
      'Miliki kedai online lengkap dengan katalog produk, troli beli-belah, payment gateway FPX, dan simulator tempahan WhatsApp.',
  },
};

export default function App() {
  const [brandName, setBrandName] = useState<string>('ARASSTUDIO');
  const [clientInput, setClientInput] = useState<string>('');
  const [preset, setPreset] = useState<PresetType>('corporate');
  const [catalogFilter, setCatalogFilter] = useState<CatalogCategory>('all');
  const [portfolioFilter, setPortfolioFilter] = useState<PortfolioCategory>('all');

  // Floating Panel & Modals
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(true);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState<boolean>(false);
  const [modalUserName, setModalUserName] = useState<string>('');
  const [modalPackageName, setModalPackageName] = useState<string>(
    'Website Perniagaan / Syarikat (RM1,500 – RM5,000)'
  );
  const [modalNotes, setModalNotes] = useState<string>(
    'Berminat dengan Terma Bayaran Penuh (100% Upfront) untuk Percuma Domain/Hosting & Fast-Track.'
  );
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudyItem | null>(null);

  const isDark = preset === 'creative';
  const currentPresetConfig = PRESET_CONFIG[preset];

  // Dynamic color classes based on preset (Corporate = Blue, Creative = Dark + Purple, E-Commerce = Orange)
  const accent = useMemo(() => {
    if (preset === 'creative') {
      return {
        bg: 'bg-purple-600 hover:bg-purple-500',
        text: 'text-purple-400',
        badge:
          'bg-purple-900/30 text-purple-300 border-purple-800',
        tabActive: 'bg-purple-600 text-white shadow-sm',
        cardBadge: 'bg-purple-600 text-white',
        priceText: 'text-purple-400',
        btnDark: 'bg-purple-600 hover:bg-purple-500 text-white',
        logoBox: 'bg-purple-600 shadow-purple-500/20',
      };
    }
    if (preset === 'ecommerce') {
      return {
        bg: 'bg-orange-600 hover:bg-orange-700',
        text: 'text-orange-600',
        badge:
          'bg-orange-50 text-orange-600 border-orange-200',
        tabActive: 'bg-orange-600 text-white shadow-sm',
        cardBadge: 'bg-orange-600 text-white',
        priceText: 'text-orange-600',
        btnDark: 'bg-gray-900 hover:bg-orange-600 text-white',
        logoBox: 'bg-orange-600 shadow-orange-500/20',
      };
    }
    return {
      bg: 'bg-blue-600 hover:bg-blue-700',
      text: 'text-blue-600',
      badge:
        'bg-blue-50 text-blue-600 border-blue-100',
      tabActive: 'bg-blue-600 text-white shadow-sm',
      cardBadge: 'bg-blue-600 text-white',
      priceText: 'text-blue-600',
      btnDark: 'bg-gray-900 hover:bg-blue-600 text-white',
      logoBox: 'bg-blue-600 shadow-blue-500/20',
    };
  }, [preset]);

  const handleClientInputChange = (val: string) => {
    setClientInput(val);
    setBrandName(val.trim() || 'ARASSTUDIO');
  };

  const resetClientName = () => {
    setClientInput('');
    setBrandName('ARASSTUDIO');
  };

  const openWhatsAppModal = (pkgLabel: string) => {
    setModalPackageName(pkgLabel);
    setIsWhatsAppModalOpen(true);
  };

  const closeWhatsAppModal = () => {
    setIsWhatsAppModalOpen(false);
  };

  const filteredCatalog = useMemo(() => {
    if (catalogFilter === 'all') return CATALOG_PRODUCTS;
    return CATALOG_PRODUCTS.filter((p) => p.category === catalogFilter);
  }, [catalogFilter]);

  const filteredPortfolio = useMemo(() => {
    if (portfolioFilter === 'all') return CASE_STUDIES;
    return CASE_STUDIES.filter((c) => c.category === portfolioFilter);
  }, [portfolioFilter]);

  const whatsappPreviewText = useMemo(() => {
    const sender = modalUserName.trim() || 'Pelanggan';
    return `Salam Tim ARASTECH / ARASSTUDIO,\n\nSaya *${sender}* daripada *${brandName}*.\nSaya berminat dengan pakej:\n• *${modalPackageName}*\n• Pratetap: ${currentPresetConfig.label}\n• Nota: ${modalNotes.trim() || 'Mohon maklumat lanjut.'}\n\nTerima kasih!`;
  }, [modalUserName, brandName, modalPackageName, currentPresetConfig.label, modalNotes]);

  const whatsappHref = useMemo(() => {
    return `https://wa.me/+601131738516?text=${encodeURIComponent(whatsappPreviewText)}`;
  }, [whatsappPreviewText]);

  const renderThumbnailIllustration = (category: CatalogProduct['category']) => {
    if (category === 'landing') {
      return (
        <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950 p-5 flex flex-col justify-between text-white">
          <div className="flex items-center justify-between opacity-60 text-[10px] font-mono">
            <span>single-page.app</span>
            <span>3–5 Hari</span>
          </div>
          <div className="my-auto space-y-2">
            <div className="h-2 w-16 rounded bg-blue-400/50" />
            <div className="h-3.5 w-4/5 rounded bg-white/80" />
            <div className="h-2.5 w-3/5 rounded bg-white/40" />
            <div className="pt-1 flex gap-2">
              <div className="h-5 w-20 rounded bg-blue-500" />
              <div className="h-5 w-14 rounded bg-white/15" />
            </div>
          </div>
          <div className="flex items-center justify-end">
            <Layout className="w-5 h-5 text-blue-400 opacity-80" />
          </div>
        </div>
      );
    }
    if (category === 'corporate') {
      return (
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 p-5 flex flex-col justify-between text-white">
          <div className="flex items-center justify-between opacity-60 text-[10px] font-mono">
            <span>corporate-cms.my</span>
            <span>3–10 Halaman</span>
          </div>
          <div className="my-auto grid grid-cols-3 gap-2 pt-2">
            <div className="col-span-2 space-y-1.5">
              <div className="h-3 w-full rounded bg-white/80" />
              <div className="h-2 w-4/5 rounded bg-white/40" />
              <div className="grid grid-cols-2 gap-1.5 pt-1">
                <div className="h-8 rounded bg-white/10 border border-white/15" />
                <div className="h-8 rounded bg-white/10 border border-white/15" />
              </div>
            </div>
            <div className="h-full rounded bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-blue-300" />
            </div>
          </div>
          <div className="text-[10px] font-mono text-blue-300">CMS + Google Maps</div>
        </div>
      );
    }
    if (category === 'ecommerce') {
      return (
        <div className="w-full h-full bg-gradient-to-br from-stone-900 via-orange-950 to-amber-950 p-5 flex flex-col justify-between text-white">
          <div className="flex items-center justify-between opacity-60 text-[10px] font-mono">
            <span>online-store.my</span>
            <span>FPX Checkout</span>
          </div>
          <div className="my-auto grid grid-cols-3 gap-2">
            <div className="p-2 rounded bg-white/10 border border-white/15 space-y-1">
              <div className="h-6 rounded bg-orange-400/30" />
              <div className="h-1.5 w-full rounded bg-white/60" />
            </div>
            <div className="p-2 rounded bg-white/10 border border-white/15 space-y-1">
              <div className="h-6 rounded bg-amber-400/30" />
              <div className="h-1.5 w-full rounded bg-white/60" />
            </div>
            <div className="p-2 rounded bg-orange-500/30 border border-orange-400/40 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-orange-300" />
            </div>
          </div>
          <div className="text-[10px] font-mono text-orange-300">
            Billplz · ToyyibPay · iPay88
          </div>
        </div>
      );
    }
    return (
      <div className="w-full h-full bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 p-5 flex flex-col justify-between text-white">
        <div className="flex items-center justify-between opacity-60 text-[10px] font-mono">
          <span>custom-system.io</span>
          <span>API &amp; Portal</span>
        </div>
        <div className="my-auto flex items-end gap-2 h-14 pt-2">
          <div className="flex-1 bg-indigo-500/40 rounded-t h-6" />
          <div className="flex-1 bg-indigo-500/60 rounded-t h-9" />
          <div className="flex-1 bg-purple-500/80 rounded-t h-12" />
          <div className="flex-1 bg-emerald-400 rounded-t h-14" />
          <div className="p-2.5 rounded-lg bg-white/10 border border-white/15">
            <Cpu className="w-5 h-5 text-purple-300" />
          </div>
        </div>
        <div className="text-[10px] font-mono text-purple-300">
          Booking System &amp; Membership Portal
        </div>
      </div>
    );
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      {/* Sticky Navbar (Strict 3-Zone Top Bar Contract) */}
      <nav
        className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors ${
          isDark
            ? 'bg-gray-900/85 border-gray-800'
            : 'bg-white/85 border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="flex items-center space-x-3 shrink-0">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md ${accent.logoBox}`}
            >
              {brandName.charAt(0).toUpperCase()}
            </div>
            <span className="font-extrabold text-lg tracking-tight whitespace-nowrap">
              {brandName}
            </span>
          </a>

          {/* Zone 2: Nav Links */}
          <div
            className={`hidden md:flex items-center space-x-8 text-sm font-medium ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            <a
              href="#katalog"
              className="hover:underline underline-offset-4 transition whitespace-nowrap shrink-0"
            >
              Katalog Servis
            </a>
            <a
              href="#portfolio"
              className="hover:underline underline-offset-4 transition whitespace-nowrap shrink-0"
            >
              Portfolio
            </a>
            <a
              href="#harga"
              className="hover:underline underline-offset-4 transition whitespace-nowrap shrink-0"
            >
              Pakej Harga
            </a>
            <a
              href="#hubungi"
              className="hover:underline underline-offset-4 transition whitespace-nowrap shrink-0"
            >
              Hubungi
            </a>
          </div>

          {/* Zone 3: Primary CTA */}
          <div className="shrink-0">
            <button
              type="button"
              onClick={() => openWhatsAppModal('Pertanyaan Am Pelanggan')}
              className={`${accent.bg} text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-lg transition transform active:scale-95 whitespace-nowrap cursor-pointer`}
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-14 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div
              className={`inline-flex items-center space-x-2 text-xs font-bold px-3.5 py-1.5 rounded-lg mb-6 border ${accent.badge}`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentPresetConfig.badgeText}</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
              style={{ textWrap: 'balance' }}
            >
              {currentPresetConfig.heroTitlePrefix}{' '}
              <span className={accent.text}>
                {currentPresetConfig.heroTitleHighlight}
              </span>
            </h1>

            <p
              className={`mt-6 text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Selamat datang ke portal rasmi{' '}
              <span className="font-bold">{brandName}</span>.{' '}
              {currentPresetConfig.heroSubtitle}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#katalog"
                className={`${accent.bg} text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg transition whitespace-nowrap`}
              >
                Teroka Katalog Servis
              </a>
              <a
                href="#portfolio"
                className={`font-semibold px-8 py-3.5 rounded-xl border transition whitespace-nowrap ${
                  isDark
                    ? 'bg-gray-900 text-gray-200 border-gray-800 hover:bg-gray-800'
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                }`}
              >
                Lihat Contoh Projek
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Katalog Servis E-Commerce Style */}
      <section
        id="katalog"
        className={`py-16 border-t transition-colors ${
          isDark
            ? 'bg-gray-900 border-gray-800'
            : 'bg-white border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold">Katalog Pakej &amp; Servis</h2>
            <p
              className={`mt-2 text-sm sm:text-base ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`}
            >
              Pilih solusi digital yang tepat dengan keperluan bajet syarikat{' '}
              <span className="font-semibold">{brandName}</span>.
            </p>

            {/* Tab Kategori Interaktif */}
            <div className="flex justify-center gap-2 mt-6 flex-wrap">
              {(
                [
                  { key: 'all', label: 'Semua' },
                  { key: 'landing', label: 'Landing Page' },
                  { key: 'corporate', label: 'Website Bisnes' },
                  { key: 'ecommerce', label: 'E-Dagang' },
                  { key: 'custom', label: 'Sistem Custom' },
                ] as { key: CatalogCategory; label: string }[]
              ).map((tab) => {
                const active = catalogFilter === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setCatalogFilter(tab.key)}
                    className={`px-4 py-2 rounded-xl text-sm transition cursor-pointer whitespace-nowrap shrink-0 ${
                      active
                        ? `${accent.tabActive} font-semibold`
                        : isDark
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 font-medium'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 font-medium'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid Katalog Produk (4 Kolum) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredCatalog.map((product) => (
              <div
                key={product.id}
                className={`rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between ${
                  isDark
                    ? 'bg-gray-800/90 border-gray-700'
                    : 'bg-white border-gray-100'
                }`}
              >
                <div>
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <div className="w-full h-full group-hover:scale-105 transition duration-500">
                      {renderThumbnailIllustration(product.category)}
                    </div>
                    <span
                      className={`absolute top-3 left-3 text-[10px] px-2.5 py-1 rounded-md font-bold shadow-sm uppercase tracking-wider ${accent.cardBadge}`}
                    >
                      {product.badge}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-lg transition">
                      {product.title}
                    </h3>
                    <p
                      className={`text-xs mt-1.5 leading-relaxed ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      {product.desc}
                    </p>

                    <ul className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700/60 space-y-1.5">
                      {product.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start gap-2 text-xs ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          <Check
                            className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${accent.text}`}
                          />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  className={`p-5 pt-4 flex items-center justify-between border-t mt-2 ${
                    isDark ? 'border-gray-700/60' : 'border-gray-100'
                  }`}
                >
                  <div>
                    <span className="text-[10px] text-gray-400 block font-medium">
                      Anggaran Harga
                    </span>
                    <span
                      className={`text-sm font-extrabold tabular-nums ${accent.priceText}`}
                    >
                      {product.price}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      openWhatsAppModal(`${product.title} (${product.price})`)
                    }
                    className={`${accent.btnDark} px-4 py-2 rounded-xl text-xs font-semibold transition shadow-sm cursor-pointer whitespace-nowrap`}
                  >
                    Pilih Pakej
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio & Kajian Kes (Case Studies) */}
      <section
        id="portfolio"
        className={`py-16 border-t transition-colors ${
          isDark
            ? 'bg-gray-950 border-gray-800'
            : 'bg-gray-50 border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-extrabold">
                Portfolio &amp; Kajian Kes
              </h2>
              <p
                className={`mt-2 text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                Klik pada mana-mana projek untuk melihat cabaran klien, solusi dibina, dan hasil konversi.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {(['all', 'Korporat', 'Kreatif', 'E-Dagang'] as PortfolioCategory[]).map(
                (cat) => {
                  const active = portfolioFilter === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setPortfolioFilter(cat)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer whitespace-nowrap ${
                        active
                          ? accent.tabActive
                          : isDark
                          ? 'bg-gray-900 text-gray-300 border border-gray-800'
                          : 'bg-white text-gray-600 border border-gray-200'
                      }`}
                    >
                      {cat === 'all' ? 'Semua Projek' : cat}
                    </button>
                  );
                }
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveCaseStudy(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveCaseStudy(item);
                  }
                }}
                className={`cursor-pointer rounded-2xl p-6 border transition-all hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between space-y-6 ${
                  isDark
                    ? 'bg-gray-900 border-gray-800'
                    : 'bg-white border-gray-200/80'
                }`}
              >
                <div className="space-y-3">
                  <div className="text-xs text-gray-400 font-medium">
                    {item.category} · {item.client}
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">
                    {item.metric}
                  </div>
                  <p
                    className={`text-xs leading-relaxed line-clamp-2 ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    {item.challenge}
                  </p>
                </div>

                <div
                  className={`pt-4 border-t flex items-center justify-between text-xs font-semibold ${
                    isDark ? 'border-gray-800' : 'border-gray-100'
                  }`}
                >
                  <span className={`inline-flex items-center gap-1.5 ${accent.text}`}>
                    <Eye className="w-3.5 h-3.5" />
                    <span>Lihat Kajian Kes Penuh</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seksyen Pakej Harga & Terma (Perbandingan / Ringkasan Pakej) */}
      <section
        id="harga"
        className={`py-16 border-t transition-colors ${
          isDark
            ? 'bg-gray-900 border-gray-800'
            : 'bg-white border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold">
              Perbandingan &amp; Ringkasan Pakej Harga
            </h2>
            <p
              className={`mt-2 text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`}
            >
              Senarai harga telus mengikut spesifikasi projek untuk{' '}
              <span className="font-semibold">{brandName}</span>.
            </p>
          </div>

          {/* Lencana Eksklusif Terma Bayaran Penuh 100% Upfront */}
          <div
            className={`p-5 rounded-2xl border flex flex-col md:flex-row md:items-center justify-between gap-4 ${
              isDark
                ? 'bg-emerald-950/30 border-emerald-800/60 text-emerald-200'
                : 'bg-emerald-50 border-emerald-200 text-emerald-950'
            }`}
          >
            <div className="flex items-start md:items-center gap-3">
              <ShieldCheck className="w-5 h-5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5 md:mt-0" />
              <div className="text-xs sm:text-sm font-bold">
                Terma Bayaran Penuh (100% Upfront): Percuma Setup Domain/Hosting + Keutamaan
                Giliran Projek (Fast-Track)
              </div>
            </div>
            <button
              type="button"
              onClick={() =>
                openWhatsAppModal(
                  'Tuntut Terma 100% Upfront (Percuma Domain/Hosting + Fast-Track)'
                )
              }
              className="text-xs font-bold underline underline-offset-4 whitespace-nowrap shrink-0 self-start md:self-center cursor-pointer"
            >
              Tuntut Tawaran Ini →
            </button>
          </div>

          {/* Jadual Perbandingan Ringkas & Kemas */}
          <div
            className={`overflow-x-auto rounded-2xl border ${
              isDark ? 'border-gray-800 bg-gray-950' : 'border-gray-200 bg-gray-50/50'
            }`}
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr
                  className={`border-b text-xs uppercase tracking-wider ${
                    isDark
                      ? 'border-gray-800 text-gray-400 bg-gray-900'
                      : 'border-gray-200 text-gray-500 bg-gray-100/80'
                  }`}
                >
                  <th className="py-4 px-5 font-bold">Kategori Pakej</th>
                  <th className="py-4 px-5 font-bold">Skop &amp; Bilangan Halaman</th>
                  <th className="py-4 px-5 font-bold">Tempoh Siap</th>
                  <th className="py-4 px-5 font-bold">Julat Harga Rasmi</th>
                  <th className="py-4 px-5 font-bold text-right">Tindakan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800 text-sm">
                {CATALOG_PRODUCTS.map((pkg) => (
                  <tr
                    key={pkg.id}
                    className={`transition-colors ${
                      isDark ? 'hover:bg-gray-900/60' : 'hover:bg-white'
                    }`}
                  >
                    <td className="py-4 px-5 font-bold whitespace-nowrap">
                      {pkg.title}
                    </td>
                    <td
                      className={`py-4 px-5 text-xs ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {pkg.pages}
                    </td>
                    <td className="py-4 px-5 text-xs font-mono tabular-nums whitespace-nowrap">
                      {pkg.timeline}
                    </td>
                    <td
                      className={`py-4 px-5 font-extrabold tabular-nums whitespace-nowrap ${accent.priceText}`}
                    >
                      {pkg.price}
                    </td>
                    <td className="py-4 px-5 text-right whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() =>
                          openWhatsAppModal(`${pkg.title} (${pkg.price})`)
                        }
                        className={`${accent.bg} text-white text-xs font-semibold px-4 py-2 rounded-xl transition cursor-pointer`}
                      >
                        Tempah Pakej
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer Profesional */}
      <footer
        id="hubungi"
        className={`border-t py-12 transition-colors ${
          isDark
            ? 'bg-gray-950 border-gray-800'
            : 'bg-white border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-extrabold text-xl">{brandName}</span>
          <p
            className={`text-sm mt-2 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            Solusi Rekaan Web, E-Dagang &amp; Kandungan Digital Profesional.
          </p>
          <div
            className={`mt-6 text-xs border-t pt-6 ${
              isDark
                ? 'text-gray-400 border-gray-800'
                : 'text-gray-400 border-gray-100'
            }`}
          >
            &copy; 2026 <span className="font-semibold">{brandName}</span>. Hak
            Cipta Terpelihara. <br />
            <span className={`${accent.text} font-medium mt-1 inline-block`}>
              Direka &amp; Dibangunkan oleh ARASTECH / ARASSTUDIO — Solusi Web &amp; Produksi Digital
            </span>
          </div>
        </div>
      </footer>

      {/* Panel Kawalan Demo Terapung (Klien Presentation Widget) */}
      <div className="fixed bottom-6 right-6 z-50">
        <div
          className={`rounded-2xl shadow-2xl border p-4 w-80 transition-all duration-300 ${
            isDark
              ? 'bg-gray-900 border-gray-700 text-white'
              : 'bg-white border-gray-200 text-gray-900'
          }`}
        >
          <div
            className={`flex items-center justify-between pb-3 border-b ${
              isDark ? 'border-gray-800' : 'border-gray-100'
            }`}
          >
            <span className="font-bold text-xs uppercase tracking-wider">
              Panel Demo Klien
            </span>
            <button
              type="button"
              onClick={() => setIsPanelOpen((prev) => !prev)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer"
              aria-label="Buka atau tutup panel demo"
            >
              {isPanelOpen ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronUp className="w-4 h-4" />
              )}
            </button>
          </div>

          {isPanelOpen && (
            <div className="pt-4 space-y-3">
              <div
                className={`text-[11px] p-2.5 rounded-lg font-medium ${
                  isDark
                    ? 'bg-blue-950/50 text-blue-300 border border-blue-800/50'
                    : 'bg-blue-50 text-blue-700'
                }`}
              >
                Demo Interaktif oleh <strong>ARASTECH / ARASSTUDIO</strong>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1">
                  Nama Bisnes Klien:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={clientInput}
                    onChange={(e) => handleClientInputChange(e.target.value)}
                    placeholder="Contoh: ZARA HOLDINGS"
                    className={`w-full text-xs px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDark
                        ? 'bg-gray-800 border-gray-700 text-white'
                        : 'bg-white border-gray-200 text-gray-900'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={resetClientName}
                    className={`px-3 py-2 text-xs font-semibold rounded-xl cursor-pointer ${
                      isDark
                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                    }`}
                  >
                    Reset
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5">
                  Pratetap Industri:
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {(
                    [
                      { key: 'corporate', label: 'Korporat' },
                      { key: 'creative', label: 'Kreatif' },
                      { key: 'ecommerce', label: 'E-Dagang' },
                    ] as { key: PresetType; label: string }[]
                  ).map((item) => {
                    const active = preset === item.key;
                    return (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => setPreset(item.key)}
                        className={`text-[11px] py-2 px-2 rounded-lg font-semibold transition cursor-pointer ${
                          active
                            ? `${accent.bg} text-white shadow-sm`
                            : isDark
                            ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal Kajian Kes (Case Study Pop-Up) */}
      {activeCaseStudy && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveCaseStudy(null)}
        >
          <div
            className={`rounded-2xl max-w-lg w-full p-6 relative shadow-2xl border space-y-4 ${
              isDark
                ? 'bg-gray-900 border-gray-800 text-white'
                : 'bg-white border-gray-100 text-gray-900'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveCaseStudy(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="text-xs font-semibold text-gray-400">
                {activeCaseStudy.category} · {activeCaseStudy.client}
              </div>
              <h3 className="text-xl font-bold mt-1">{activeCaseStudy.title}</h3>
            </div>

            <div className="space-y-3 text-xs leading-relaxed">
              <div
                className={`p-3.5 rounded-xl border ${
                  isDark
                    ? 'bg-gray-800/70 border-gray-700'
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="font-bold mb-1">1. Cabaran Klien:</div>
                <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                  {activeCaseStudy.challenge}
                </p>
              </div>
              <div
                className={`p-3.5 rounded-xl border ${
                  isDark
                    ? 'bg-gray-800/70 border-gray-700'
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="font-bold mb-1">2. Solusi Dibina:</div>
                <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                  {activeCaseStudy.solution}
                </p>
              </div>
              <div className="p-3.5 rounded-xl border bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300">
                <div className="font-bold mb-1">
                  3. Hasil Konversi ({activeCaseStudy.metric}):
                </div>
                <p>{activeCaseStudy.result}</p>
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setActiveCaseStudy(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 cursor-pointer"
              >
                Tutup
              </button>
              <button
                type="button"
                onClick={() => {
                  const title = activeCaseStudy.title;
                  setActiveCaseStudy(null);
                  openWhatsAppModal(`Projek Seperti: ${title}`);
                }}
                className={`${accent.bg} text-white px-4 py-2.5 rounded-xl text-xs font-semibold cursor-pointer`}
              >
                Tempah Projek Seperti Ini
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal WhatsApp / Tempahan */}
      {isWhatsAppModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeWhatsAppModal}
        >
          <div
            className={`rounded-2xl max-w-md w-full p-6 relative shadow-2xl border ${
              isDark
                ? 'bg-gray-900 border-gray-800 text-white'
                : 'bg-white border-gray-100 text-gray-900'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeWhatsAppModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold mb-2">
              Tempahan / Pertanyaan Pakej
            </h3>
            <p
              className={`text-sm mb-4 ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`}
            >
              Sila semak butiran tempahan anda sebelum dihantar terus ke WhatsApp{' '}
              <strong>ARASTECH / ARASSTUDIO</strong>.
            </p>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold mb-1">
                  Nama Anda / Wakil ({brandName}):
                </label>
                <input
                  type="text"
                  value={modalUserName}
                  onChange={(e) => setModalUserName(e.target.value)}
                  placeholder="Masukkan nama anda"
                  className={`w-full text-sm px-3 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 text-white'
                      : 'bg-white border-gray-200 text-gray-900'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1">
                  Pakej Dipilih:
                </label>
                <select
                  value={modalPackageName}
                  onChange={(e) => setModalPackageName(e.target.value)}
                  className={`w-full text-sm px-3 py-2.5 border rounded-xl font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 text-gray-200'
                      : 'bg-gray-100 border-gray-200 text-gray-800'
                  }`}
                >
                  {CATALOG_PRODUCTS.map((p) => (
                    <option key={p.id} value={`${p.title} (${p.price})`}>
                      {p.title} ({p.price})
                    </option>
                  ))}
                  <option value="Pertanyaan Am Pelanggan">
                    Pertanyaan Am Pelanggan / Custom
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1">
                  Nota Tambahan:
                </label>
                <textarea
                  rows={2}
                  value={modalNotes}
                  onChange={(e) => setModalNotes(e.target.value)}
                  className={`w-full text-xs px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 text-white'
                      : 'bg-white border-gray-200 text-gray-900'
                  }`}
                />
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-xl border border-emerald-100 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300">
                <strong>Terma Bayaran Penuh (100% Upfront):</strong> Nikmati
                percuma setup domain/hosting &amp; keutamaan giliran projek
                (Fast-Track).
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={closeWhatsAppModal}
                className={`w-1/2 py-3 rounded-xl font-semibold text-sm transition cursor-pointer ${
                  isDark
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Batal
              </button>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold text-sm shadow-lg shadow-emerald-600/20 transition flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Hantar WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

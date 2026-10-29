/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import {
  Building2,
  ShieldCheck,
  Sparkles,
  ShoppingBag,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Check,
  X,
  Send,
  RotateCcw,
  Sliders,
  ChevronDown,
  ChevronUp,
  BarChart3,
  TrendingUp,
  Layout,
  Cpu,
  Store,
} from 'lucide-react';

type PresetKey = 'corporate' | 'creative' | 'ecommerce';
type CatalogTabKey = 'all' | 'landing' | 'corporate' | 'ecommerce' | 'custom';
type DashboardPeriod = '30d' | '12m';
type PortfolioCategory = 'Semua' | 'Korporat' | 'Kreatif' | 'E-Dagang';

export interface CatalogProductItem {
  id: string;
  categoryKey: Exclude<CatalogTabKey, 'all'>;
  categoryLabel: string;
  badge: string;
  name: string;
  price: string;
  timeline: string;
  desc: string;
  features: string[];
  iconName: 'Layout' | 'Building2' | 'ShoppingBag' | 'Cpu' | 'Zap' | 'Store';
  featuredForPreset?: PresetKey;
}

// Senarai Katalog Pakej & Harga Rasmi ARASTECH / ARASSTUDIO
export const CATALOG_PRODUCTS: CatalogProductItem[] = [
  {
    id: 'pkg-landing-1',
    categoryKey: 'landing',
    categoryLabel: 'Landing Page / Simple',
    badge: 'Paling Berbaloi',
    name: 'Landing Page / Simple',
    price: 'RM500 – RM1,500',
    timeline: 'Siap dalam 3–5 Hari Bekerja',
    desc: 'Sesuai untuk kempen promosi, produk tunggal, atau profil perniagaan asas (1 Halaman).',
    features: [
      '1 Halaman Penuh (Single Page)',
      'Reka Bentuk Moden & Responsif',
      'Butang Tindakan / CTA WhatsApp',
      'Asas SEO & Kelajuan Tinggi',
      'Siap dalam 3-5 Hari Berkerja',
    ],
    iconName: 'Layout',
  },
  {
    id: 'pkg-corporate-1',
    categoryKey: 'corporate',
    categoryLabel: 'Website Bisnes',
    badge: 'Pilihan Utama PKS',
    name: 'Website Perniagaan / Syarikat (3–10 Halaman)',
    price: 'RM1,500 – RM5,000',
    timeline: 'Siap dalam 7–14 Hari Bekerja',
    desc: 'Sesuai untuk PKS, agensi, atau perniagaan yang memerlukan 3 hingga 10 halaman.',
    features: [
      '3 hingga 10 Halaman Profesional',
      "Halaman 'Tentang Kami', 'Perkhidmatan', 'Hubungi'",
      'Sistem Pengurusan Kandungan (CMS)',
      'Integrasi Media Sosial & Google Maps',
      'Sokongan & Latihan Percuma',
    ],
    iconName: 'Building2',
    featuredForPreset: 'corporate',
  },
  {
    id: 'pkg-ecommerce-1',
    categoryKey: 'ecommerce',
    categoryLabel: 'E-Dagang / Store',
    badge: 'Bisnes Online',
    name: 'Website E-Dagang (Online Store)',
    price: 'RM3,500 – RM10,000+',
    timeline: 'Siap dalam 14–21 Hari Bekerja',
    desc: 'Sesuai untuk kedai online dengan troli beli-belah & sistem pembayaran.',
    features: [
      'Produk Tanpa Had / Mengikut Kapasiti',
      'Sistem Troli Belanja & Checkout',
      'Integrasi Payment Gateway (Billplz / ToyyibPay / Ipay88)',
      'Pengurusan Pesanan & Inventori',
      'Jaminan Keselamatan SSL & Perlindungan Data',
    ],
    iconName: 'ShoppingBag',
    featuredForPreset: 'ecommerce',
  },
  {
    id: 'pkg-custom-1',
    categoryKey: 'custom',
    categoryLabel: 'Custom & Sistem',
    badge: 'Advanced / Enterprise',
    name: 'Website Custom / Sistem Web Lanjutan',
    price: 'RM8,000 – RM20,000+',
    timeline: 'Mengikut Skop & Spesifikasi',
    desc: 'Sesuai untuk sistem tempahan khas, portal keahlian, atau aplikasi web.',
    features: [
      'Sistem Tempahan Khas (Booking System)',
      'Portal Keahlian (Membership Portal)',
      'Fungsi & API Khusus Mengikut Keperluan',
      'Pangkalan Data Berprestasi Tinggi',
      'Konsultasi Teknikal & Penyelenggaraan Penuh',
    ],
    iconName: 'Cpu',
  },
  {
    id: 'pkg-landing-creative',
    categoryKey: 'landing',
    categoryLabel: 'Landing Page / Simple',
    badge: 'Kempen & Visual AI',
    name: 'Landing Page Kempen + Produksi Visual AI',
    price: 'RM500 – RM1,500',
    timeline: 'Siap dalam 3–5 Hari Bekerja',
    desc: 'Halaman promosi berkonversi tinggi dengan integrasi aset visual/video AI dan simulator tempahan WhatsApp.',
    features: [
      '1 Halaman Kempen Direct-Response',
      'Paparan Showreel / Visual Promosi AI',
      'Simulator Tempahan Terus ke WhatsApp',
      'Pemasangan Meta Pixel & TikTok Pixel',
      'Optimasi Kelajuan Mudah Alih (< 0.8s)',
    ],
    iconName: 'Zap',
    featuredForPreset: 'creative',
  },
  {
    id: 'pkg-ecommerce-catalog',
    categoryKey: 'ecommerce',
    categoryLabel: 'E-Dagang / Store',
    badge: 'Katalog Interaktif',
    name: 'Katalog Digital E-Dagang & WhatsApp Commerce',
    price: 'RM3,500 – RM10,000+',
    timeline: 'Siap dalam 10–18 Hari Bekerja',
    desc: 'Sistem katalog produk minimalis dengan tab kategori pantas, pilihan pakej, dan checkout FPX / WhatsApp.',
    features: [
      'Bar Tab Kategori Produk Interaktif',
      'Troli Belanja & Checkout Pantas FPX',
      'Integrasi Billplz / ToyyibPay / Ipay88',
      'Simulator Pesanan Terus ke WhatsApp Jualan',
      'Papan Pemuka Urus Stok & Laporan Jualan',
    ],
    iconName: 'Store',
  },
];

const CATALOG_TABS: { key: CatalogTabKey; label: string }[] = [
  { key: 'all', label: 'Semua' },
  { key: 'landing', label: 'Landing Page / Simple' },
  { key: 'corporate', label: 'Website Bisnes' },
  { key: 'ecommerce', label: 'E-Dagang / Store' },
  { key: 'custom', label: 'Custom & Sistem' },
];

interface PresetConfig {
  id: PresetKey;
  label: string;
  badgeDesc: string;
  kicker: string;
  heroTitle: string;
  heroSub: string;
  primaryCtaText: string;
  defaultPackageLabel: string;
  stats: { value: string; label: string }[];
  dashboard: {
    '30d': {
      traffic: string;
      trafficDelta: string;
      leads: string;
      leadsDelta: string;
      conversion: string;
      conversionDelta: string;
      caption: string;
      bars: { label: string; height: number; val: string }[];
    };
    '12m': {
      traffic: string;
      trafficDelta: string;
      leads: string;
      leadsDelta: string;
      conversion: string;
      conversionDelta: string;
      caption: string;
      bars: { label: string; height: number; val: string }[];
    };
  };
}

interface CaseStudy {
  id: number;
  category: Exclude<PortfolioCategory, 'Semua'>;
  year: string;
  clientSector: string;
  title: string;
  headlineMetric: string;
  secondaryMetric: string;
  challenge: string;
  solution: string;
  result: string;
}

const PRESETS: Record<PresetKey, PresetConfig> = {
  corporate: {
    id: 'corporate',
    label: 'Korporat & Servis',
    badgeDesc: 'Tema Cerah · Biru Navy · Profesional',
    kicker: 'Korporat & Servis · Katalog Solusi Web & Sistem B2B',
    heroTitle:
      'Infrastruktur Web Korporat & Katalog Servis yang Membina Kepercayaan Klien',
    heroSub:
      'memperkukuh reputasi digital melalui portal syarikat yang berautoriti, katalog perkhidmatan yang tersusun, dan sistem sebut harga terus ke WhatsApp.',
    primaryCtaText: 'Terokai Katalog Servis',
    defaultPackageLabel: 'Website Perniagaan / Syarikat (3–10 Halaman) (RM1,500 – RM5,000)',
    stats: [
      { value: '99.98%', label: 'Jaminan Kestabilan Pelayan & SLA' },
      { value: '0.68s', label: 'Purata Masa Muat Halaman Katalog' },
      { value: '+165%', label: 'Peningkatan Pertanyaan Sebut Harga' },
      { value: '100%', label: 'Pemilikan Penuh Kod & Aset Digital' },
    ],
    dashboard: {
      '30d': {
        traffic: '48,290',
        trafficDelta: '+34.2% vs bulan lalu',
        leads: '642',
        leadsDelta: '+58.0% prospek layak',
        conversion: '4.85%',
        conversionDelta: '+2.1x ROI',
        caption: 'Julat Data: 30 Hari Terakhir (Minggu 1 – Minggu 4)',
        bars: [
          { label: 'M1', height: 44, val: '112' },
          { label: 'M2', height: 58, val: '148' },
          { label: 'M3', height: 76, val: '184' },
          { label: 'M4', height: 94, val: '198' },
        ],
      },
      '12m': {
        traffic: '614,800',
        trafficDelta: '+142.5% tahunan',
        leads: '8,940',
        leadsDelta: '+189.4% prospek B2B',
        conversion: '6.12%',
        conversionDelta: '3.4x ROI Tahunan',
        caption: 'Julat Data: 12 Bulan Terakhir (Suku 1 – Suku 4)',
        bars: [
          { label: 'S1', height: 38, val: '1,420' },
          { label: 'S2', height: 56, val: '2,010' },
          { label: 'S3', height: 78, val: '2,580' },
          { label: 'S4', height: 98, val: '2,930' },
        ],
      },
    },
  },
  creative: {
    id: 'creative',
    label: 'Studio Digital & Kreatif',
    badgeDesc: 'Tema Gelap · Ungu Neon · Glassmorphism',
    kicker: 'Studio Digital & Kreatif · Web Interaktif & Animasi AI',
    heroTitle:
      'Pengalaman Web Glassmorphism & Katalog Produksi Digital yang Memukau Audiens',
    heroSub:
      'mentransformasi identiti jenama melalui reka bentuk mod gelap moden, produksi video/animasi AI kreatif, serta pameran katalog interaktif.',
    primaryCtaText: 'Lihat Katalog Kreatif',
    defaultPackageLabel: 'Website Perniagaan / Syarikat (3–10 Halaman) (RM1,500 – RM5,000)',
    stats: [
      { value: '4K 60fps', label: 'Kualiti Visual & Animasi AI' },
      { value: '3.2x', label: 'Peningkatan Masa Interaksi Pelawat' },
      { value: '+210%', label: 'Pertumbuhan Tempahan Pakej Kreatif' },
      { value: '100%', label: 'Hak Milik Komersial Eksklusif' },
    ],
    dashboard: {
      '30d': {
        traffic: '84,600',
        trafficDelta: '+62.4% tontonan katalog',
        leads: '915',
        leadsDelta: '+74.1% pertanyaan klien',
        conversion: '5.60%',
        conversionDelta: '+2.8x ROI',
        caption: 'Julat Data: 30 Hari Kempen Pelancaran Visual',
        bars: [
          { label: 'M1', height: 48, val: '180' },
          { label: 'M2', height: 66, val: '220' },
          { label: 'M3', height: 82, val: '245' },
          { label: 'M4', height: 96, val: '270' },
        ],
      },
      '12m': {
        traffic: '1,120,400',
        trafficDelta: '+215.0% trafik organik',
        leads: '12,480',
        leadsDelta: '+240.8% permintaan projek',
        conversion: '7.45%',
        conversionDelta: '4.8x ROI Kempen',
        caption: 'Julat Data: 12 Bulan Prestasi Ekosistem Kreatif',
        bars: [
          { label: 'S1', height: 42, val: '2,100' },
          { label: 'S2', height: 64, val: '2,890' },
          { label: 'S3', height: 84, val: '3,490' },
          { label: 'S4', height: 100, val: '4,000' },
        ],
      },
    },
  },
  ecommerce: {
    id: 'ecommerce',
    label: 'Katalog E-Dagang & Retail',
    badgeDesc: 'Kontras Tinggi · Jingga/Merah · Store',
    kicker: 'Katalog E-Dagang & Retail · Kedai Online & Checkout Pantas',
    heroTitle:
      'Katalog E-Dagang Moden & Sistem Checkout Pantas untuk Gandakan Jualan Online',
    heroSub:
      'memudahkan pelanggan menapis produk mengikut kategori, menyemak harga secara telus, dan membuat bayaran FPX atau tempahan WhatsApp dengan satu klik.',
    primaryCtaText: 'Buka Katalog E-Dagang',
    defaultPackageLabel: 'Website E-Dagang (Online Store) (RM3,500 – RM10,000+)',
    stats: [
      { value: '+88%', label: 'Lonjakan Konversi Checkout Mudah Alih' },
      { value: '4.2x', label: 'Purata Pulangan Kos Iklan (ROAS)' },
      { value: '-46%', label: 'Pengurangan Kadar Troli Diabaikan' },
      { value: '24/7', label: 'Automasi Troli & Payment Gateway FPX' },
    ],
    dashboard: {
      '30d': {
        traffic: '92,450',
        trafficDelta: '+78.5% pelawat kedai',
        leads: '3,840',
        leadsDelta: '+94.2% pesanan selesai',
        conversion: '6.80%',
        conversionDelta: '4.2x ROAS',
        caption: 'Julat Data: 30 Hari Transaksi Katalog E-Dagang',
        bars: [
          { label: 'M1', height: 52, val: '740' },
          { label: 'M2', height: 68, val: '890' },
          { label: 'M3', height: 85, val: '1,050' },
          { label: 'M4', height: 98, val: '1,160' },
        ],
      },
      '12m': {
        traffic: '1,340,000',
        trafficDelta: '+260.4% trafik kedai',
        leads: '54,200',
        leadsDelta: '+310.0% transaksi berjaya',
        conversion: '8.15%',
        conversionDelta: '5.6x ROAS Tahunan',
        caption: 'Julat Data: 12 Bulan Prestasi Jualan Online Store',
        bars: [
          { label: 'S1', height: 45, val: '9,800' },
          { label: 'S2', height: 65, val: '12,400' },
          { label: 'S3', height: 82, val: '14,900' },
          { label: 'S4', height: 100, val: '17,100' },
        ],
      },
    },
  },
};

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    category: 'Korporat',
    year: '2026',
    clientSector: 'Kejuruteraan & Perkhidmatan B2B',
    title: 'Transformasi Portal Syarikat & Katalog Servis B2B',
    headlineMetric: '+165% Pertanyaan Sebut Harga Layak',
    secondaryMetric: 'Masa muat halaman daripada 4.2s ke 0.65s',
    challenge:
      'Prospek korporat sukar menyemak senarai perkhidmatan dan spesifikasi teknikal kerana laman web lama tidak mempunyai struktur katalog servis yang jelas.',
    solution:
      'ARASTECH / ARASSTUDIO membina Website Perniagaan / Syarikat (3–10 halaman) lengkap dengan CMS, katalog servis mengikut kategori, dan integrasi sebut harga terus ke WhatsApp.',
    result:
      'Dalam tempoh 90 hari selepas pelancaran, jumlah pertanyaan sebut harga B2B meningkat sebanyak 165% dan kadar lantunan menurun kepada 24%.',
  },
  {
    id: 2,
    category: 'Kreatif',
    year: '2026',
    clientSector: 'Studio Senibina & Produksi Visual',
    title: 'Platform Katalog Kreatif Glassmorphism & Kempen Video AI',
    headlineMetric: '3.2x Masa Interaksi & +210% Tempahan Pakej',
    secondaryMetric: 'Skor Prestasi 99/100 pada Mudah Alih & Desktop',
    challenge:
      'Klien memerlukan laman web bertema gelap yang moden untuk mempamerkan pakej produksi digital dan video komersial AI tanpa menjejaskan kelajuan muat.',
    solution:
      'Kami menggabungkan reka bentuk glassmorphism gelap dengan katalog pakej interaktif serta menghasilkan aset visual/video AI sinematik pada bahagian Hero.',
    result:
      'Purata masa pelawat meneliti katalog servis meningkat 3.2 kali ganda dan menghasilkan peningkatan 210% dalam tempahan pakej kreatif.',
  },
  {
    id: 3,
    category: 'E-Dagang',
    year: '2026',
    clientSector: 'Jenama Penjagaan Diri & Retail',
    title: 'Katalog E-Dagang (Online Store) & Checkout FPX Pantas',
    headlineMetric: '+88% Kadar Konversi Checkout & 4.2x ROAS',
    secondaryMetric: 'Nilai pesanan purata (AOV) meningkat +34%',
    challenge:
      'Trafik iklan yang tinggi gagal bertukar menjadi pembelian kerana pelanggan sukar menapis produk mengikut kategori dan proses checkout terlalu panjang.',
    solution:
      'ARASTECH / ARASSTUDIO membangunkan Website E-Dagang lengkap dengan bar tab kategori interaktif, integrasi Payment Gateway (Billplz / ToyyibPay / iPay88), dan simulator pesanan WhatsApp.',
    result:
      'Kadar konversi pengguna telefon pintar melonjak 88% pada minggu pertama kempen, manakala nilai pesanan purata meningkat 34%.',
  },
];

export default function App() {
  const [brandName, setBrandName] = useState<string>('ARASSTUDIO');
  const [brandInput, setBrandInput] = useState<string>('ARASSTUDIO');
  const [preset, setPreset] = useState<PresetKey>('corporate');
  const [catalogTab, setCatalogTab] = useState<CatalogTabKey>('all');
  const [period, setPeriod] = useState<DashboardPeriod>('30d');
  const [portfolioFilter, setPortfolioFilter] = useState<PortfolioCategory>('Semua');

  // Modals & Floating Control Panel state
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [isDemoPanelMinimized, setIsDemoPanelMinimized] = useState<boolean>(false);

  // WhatsApp Booking Simulator Form State
  const [waClientName, setWaClientName] = useState<string>('');
  const [waSelectedPackage, setWaSelectedPackage] = useState<string>(
    'Website Perniagaan / Syarikat (3–10 Halaman) (RM1,500 – RM5,000)'
  );
  const [waNotes, setWaNotes] = useState<string>(
    'Berminat dengan Terma Bayaran Penuh (100% Upfront) untuk nikmati Percuma Setup Domain/Hosting + Keutamaan Fast-Track.'
  );

  const activePreset = PRESETS[preset];
  const activeDash = activePreset.dashboard[period];
  const isDark = preset === 'creative';

  const handleBrandChange = (value: string) => {
    setBrandInput(value);
    const trimmed = value.trim();
    setBrandName(trimmed.length > 0 ? trimmed : 'ARASSTUDIO');
  };

  const handleResetBrand = () => {
    setBrandInput('ARASSTUDIO');
    setBrandName('ARASSTUDIO');
  };

  const handlePresetSwitch = (newPreset: PresetKey) => {
    setPreset(newPreset);
    setWaSelectedPackage(PRESETS[newPreset].defaultPackageLabel);
  };

  const openBookingWithPackage = (packageLabel?: string) => {
    if (packageLabel) {
      setWaSelectedPackage(packageLabel);
    }
    setIsBookingOpen(true);
  };

  const filteredCatalogItems = useMemo(() => {
    if (catalogTab === 'all') return CATALOG_PRODUCTS;
    return CATALOG_PRODUCTS.filter((item) => item.categoryKey === catalogTab);
  }, [catalogTab]);

  const filteredCaseStudies = useMemo(() => {
    if (portfolioFilter === 'Semua') return CASE_STUDIES;
    return CASE_STUDIES.filter((item) => item.category === portfolioFilter);
  }, [portfolioFilter]);

  const whatsappMessage = useMemo(() => {
    const sender = waClientName.trim() || 'Wakil Pengurusan';
    const noteText =
      waNotes.trim() ||
      'Ingin mendapatkan tarikh mula projek terawal (Fast-Track).';

    return `Salam Tim ARASTECH / ARASSTUDIO,

Saya ${sender} daripada *${brandName}*.
Kami telah memilih pakej daripada Katalog Digital (${activePreset.label}) dan ingin menempah:

• Nama Bisnes: ${brandName}
• Pakej / Produk Pilihan: ${waSelectedPackage}
• Nota Projek: ${noteText}

Mohon kongsikan jadual pelaksanaan & langkah seterusnya. Terima kasih!`;
  }, [waClientName, brandName, activePreset.label, waSelectedPackage, waNotes]);

  const whatsappUrl = useMemo(() => {
    return `https://wa.me/+601131738516?text=${encodeURIComponent(whatsappMessage)}`;
  }, [whatsappMessage]);

  // Theme tokens per preset (60-30-10 discipline)
  const theme = useMemo(() => {
    if (preset === 'creative') {
      return {
        canvas: 'bg-[#090A0F] text-slate-100',
        nav: 'bg-[#090A0F]/90 border-slate-800/80 text-slate-100',
        navLink: 'text-slate-300 hover:text-white',
        surface: 'bg-slate-900/80 border-slate-800 backdrop-blur-md',
        surfaceSubtle: 'bg-slate-950/90 border-slate-800',
        mutedText: 'text-slate-400',
        border: 'border-slate-800',
        accentBtn: 'bg-indigo-600 hover:bg-indigo-500 text-white',
        secondaryBtn: 'border-slate-700 text-slate-200 hover:bg-slate-800/80',
        accentText: 'text-indigo-400',
        barFill: 'bg-indigo-500',
        featuredRing: 'border-indigo-500 ring-1 ring-indigo-500 bg-slate-900/95',
        upfrontBanner: 'bg-indigo-950/40 border-indigo-500/40 text-indigo-200',
      };
    }
    if (preset === 'ecommerce') {
      return {
        canvas: 'bg-[#FAF9F6] text-stone-950',
        nav: 'bg-white/95 border-stone-200 text-stone-950',
        navLink: 'text-stone-600 hover:text-stone-950',
        surface: 'bg-white border-stone-200',
        surfaceSubtle: 'bg-orange-50/50 border-stone-200',
        mutedText: 'text-stone-600',
        border: 'border-stone-200',
        accentBtn: 'bg-orange-600 hover:bg-orange-700 text-white',
        secondaryBtn: 'border-stone-300 text-stone-900 hover:bg-stone-100',
        accentText: 'text-orange-600',
        barFill: 'bg-orange-600',
        featuredRing: 'border-orange-600 ring-1 ring-orange-600 bg-white',
        upfrontBanner: 'bg-orange-50/80 border-orange-200 text-orange-950',
      };
    }
    // Default: corporate (Light / White, Navy Blue primary)
    return {
      canvas: 'bg-[#F8FAFC] text-slate-900',
      nav: 'bg-white/95 border-slate-200 text-slate-900',
      navLink: 'text-slate-600 hover:text-slate-950',
      surface: 'bg-white border-slate-200',
      surfaceSubtle: 'bg-slate-100/75 border-slate-200',
      mutedText: 'text-slate-600',
      border: 'border-slate-200',
      accentBtn: 'bg-[#1E3A8A] hover:bg-blue-900 text-white',
      secondaryBtn: 'border-slate-300 text-slate-800 hover:bg-slate-100',
      accentText: 'text-[#1E3A8A]',
      barFill: 'bg-[#1E3A8A]',
      featuredRing: 'border-[#1E3A8A] ring-1 ring-[#1E3A8A] bg-white',
      upfrontBanner: 'bg-blue-50/70 border-blue-200 text-slate-900',
    };
  }, [preset]);

  const renderProductIcon = (iconName: CatalogProductItem['iconName']) => {
    const props = { className: `w-6 h-6 ${theme.accentText}` };
    switch (iconName) {
      case 'Layout':
        return <Layout {...props} />;
      case 'Building2':
        return <Building2 {...props} />;
      case 'ShoppingBag':
        return <ShoppingBag {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      case 'Zap':
        return <Zap {...props} />;
      case 'Store':
        return <Store {...props} />;
      default:
        return <ShoppingBag {...props} />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${theme.canvas}`}>
      {/* B.1 STICKY NAVBAR — Strict 3-Zone Top Bar Contract */}
      <header
        className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors duration-200 ${theme.nav}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight whitespace-nowrap shrink-0 truncate max-w-[220px]"
          >
            {brandName}
          </a>

          {/* Zone 2: 4 clean single-line navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="#katalog"
              className={`${theme.navLink} hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0`}
            >
              Katalog Servis
            </a>
            <a
              href="#portfolio"
              className={`${theme.navLink} hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0`}
            >
              Portfolio
            </a>
            <a
              href="#harga"
              className={`${theme.navLink} hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0`}
            >
              Harga
            </a>
            <a
              href="#hubungi"
              className={`${theme.navLink} hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0`}
            >
              Hubungi
            </a>
          </nav>

          {/* Zone 3: 1 primary WhatsApp CTA button */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={() => openBookingWithPackage(activePreset.defaultPackageLabel)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${theme.accentBtn}`}
            >
              Tempah via WhatsApp
            </button>
          </div>
        </div>
      </header>

      {/* B.2 HERO SECTION */}
      <section className={`py-16 lg:py-24 px-6 border-b ${theme.border}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left Column: Proposition & Quick Action to Catalog */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className={`text-xs font-medium tracking-wide ${theme.mutedText}`}>
                  {activePreset.kicker}
                </div>

                <h1
                  className="text-3xl sm:text-5xl lg:text-[50px] font-bold tracking-tight leading-[1.12]"
                  style={{ textWrap: 'balance' }}
                >
                  {activePreset.heroTitle}
                </h1>

                <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${theme.mutedText}`}>
                  Kami membantu{' '}
                  <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-950'}`}>
                    {brandName}
                  </span>{' '}
                  {activePreset.heroSub}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#katalog"
                  className={`px-6 py-3.5 text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 inline-flex items-center gap-2 ${theme.accentBtn}`}
                >
                  <span>{activePreset.primaryCtaText}</span>
                  <ArrowDownRight className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={() => openBookingWithPackage(activePreset.defaultPackageLabel)}
                  className={`px-6 py-3.5 text-sm font-semibold rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${theme.secondaryBtn}`}
                >
                  Simulator Tempahan WhatsApp
                </button>
              </div>
            </div>

            {/* Right Column: Interactive Storefront & Conversion Dashboard */}
            <div className="lg:col-span-5">
              <div
                className={`h-full rounded-xl border p-6 flex flex-col justify-between transition-colors duration-200 ${theme.surface}`}
              >
                <div
                  className={`flex flex-wrap items-center justify-between gap-4 pb-5 border-b ${theme.border}`}
                >
                  <div>
                    <div className={`text-xs font-medium ${theme.mutedText}`}>
                      Analitik Katalog · <span className="font-semibold">{brandName}</span>
                    </div>
                    <div className="text-sm font-bold mt-0.5 flex items-center gap-1.5">
                      <BarChart3 className={`w-4 h-4 ${theme.accentText}`} />
                      <span>Prestasi Trafik &amp; Konversi Katalog</span>
                    </div>
                  </div>

                  <div
                    className={`flex items-center gap-1 p-1 rounded-lg ${
                      isDark ? 'bg-slate-800' : 'bg-slate-100'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setPeriod('30d')}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        period === '30d'
                          ? isDark
                            ? 'bg-indigo-600 text-white'
                            : 'bg-white text-slate-900 shadow-sm'
                          : isDark
                          ? 'text-slate-400 hover:text-white'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      30 Hari
                    </button>
                    <button
                      type="button"
                      onClick={() => setPeriod('12m')}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        period === '12m'
                          ? isDark
                            ? 'bg-indigo-600 text-white'
                            : 'bg-white text-slate-900 shadow-sm'
                          : isDark
                          ? 'text-slate-400 hover:text-white'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      12 Bulan
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-6">
                  <div>
                    <div className={`text-xs ${theme.mutedText}`}>Pelawat Katalog</div>
                    <div className="text-xl sm:text-2xl font-bold tabular-nums mt-1">
                      {activeDash.traffic}
                    </div>
                    <div className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 mt-1 tabular-nums">
                      {activeDash.trafficDelta}
                    </div>
                  </div>
                  <div>
                    <div className={`text-xs ${theme.mutedText}`}>Tempahan / Leads</div>
                    <div className="text-xl sm:text-2xl font-bold tabular-nums mt-1">
                      {activeDash.leads}
                    </div>
                    <div className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 mt-1 tabular-nums">
                      {activeDash.leadsDelta}
                    </div>
                  </div>
                  <div>
                    <div className={`text-xs ${theme.mutedText}`}>Kadar Konversi</div>
                    <div className="text-xl sm:text-2xl font-bold tabular-nums mt-1">
                      {activeDash.conversion}
                    </div>
                    <div className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 mt-1 tabular-nums">
                      {activeDash.conversionDelta}
                    </div>
                  </div>
                </div>

                <div className={`pt-5 border-t ${theme.border}`}>
                  <div className="flex items-center justify-between text-xs mb-4">
                    <span className={`font-medium ${theme.mutedText}`}>
                      Trend Pesanan Katalog
                    </span>
                    <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Aktif</span>
                    </span>
                  </div>

                  <div className="h-28 flex items-end gap-4 pt-2 px-2">
                    {activeDash.bars.map((bar) => (
                      <div
                        key={bar.label}
                        className="flex-1 flex flex-col items-center justify-end h-full gap-1.5"
                      >
                        <span className="text-[11px] font-mono tabular-nums font-semibold">
                          {bar.val}
                        </span>
                        <div className="w-full bg-slate-200/50 dark:bg-slate-800/60 rounded-t-md h-16 flex items-end overflow-hidden">
                          <div
                            className={`w-full rounded-t-md transition-all duration-300 ${theme.barFill}`}
                            style={{ height: `${bar.height}%` }}
                          />
                        </div>
                        <span className={`text-[11px] font-mono tabular-nums ${theme.mutedText}`}>
                          {bar.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className={`text-[11px] mt-3 text-right ${theme.mutedText}`}>
                    {activeDash.caption}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Column Full-Width KPI Strip */}
          <div
            className={`mt-14 pt-8 border-t ${theme.border} grid grid-cols-2 md:grid-cols-4 gap-8`}
          >
            {activePreset.stats.map((st, idx) => (
              <div key={idx}>
                <div className="text-2xl sm:text-3xl font-bold tabular-nums tracking-tight">
                  {st.value}
                </div>
                <div className={`text-xs mt-1 ${theme.mutedText}`}>{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B.3 SEKSYEN KATALOG SERVIS (E-Commerce Style) */}
      <section id="katalog" className={`py-20 px-6 border-b ${theme.border}`}>
        <div id="harga" className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <div className={`text-xs font-medium mb-2 ${theme.mutedText}`}>
                Katalog Digital E-Dagang · Senarai Pakej &amp; Harga Rasmi ARASTECH / ARASSTUDIO
              </div>
              <h2
                className="text-2xl sm:text-3xl font-bold tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                Katalog Pakej Web &amp; Sistem Digital untuk {brandName}
              </h2>
            </div>

            {/* Bar Tab Kategori Interaktif */}
            <div
              role="tablist"
              aria-label="Kategori Katalog Servis"
              className={`flex flex-wrap items-center gap-1 p-1.5 rounded-xl ${
                isDark ? 'bg-slate-900 border border-slate-800' : 'bg-slate-200/80'
              }`}
            >
              {CATALOG_TABS.map((tab) => {
                const isActive = catalogTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setCatalogTab(tab.key)}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? isDark
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'bg-white text-slate-950 shadow-sm'
                        : isDark
                        ? 'text-slate-400 hover:text-white'
                        : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Exclusive 100% Upfront Payment Terms Banner */}
          <div
            className={`mb-10 p-4 sm:p-5 rounded-xl border flex flex-col md:flex-row md:items-center justify-between gap-4 ${theme.upfrontBanner}`}
          >
            <div className="flex items-start md:items-center gap-3.5">
              <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5 md:mt-0" />
              <div>
                <div className="text-xs sm:text-sm font-bold">
                  Terma Bayaran Penuh (100% Upfront): Percuma Setup Domain/Hosting + Keutamaan
                  Giliran Projek (Fast-Track)
                </div>
                <div className="text-xs opacity-80 mt-0.5">
                  Pilih mana-mana pakej katalog di bawah untuk menjana sebut harga segera ke
                  WhatsApp tim ARASTECH / ARASSTUDIO.
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() =>
                openBookingWithPackage(
                  `${activePreset.defaultPackageLabel} — Terma 100% Upfront Fast-Track`
                )
              }
              className="text-xs font-semibold underline underline-offset-4 whitespace-nowrap shrink-0 self-start md:self-center cursor-pointer"
            >
              Tuntut Fast-Track →
            </button>
          </div>

          {/* 3-Column E-Commerce Product/Service Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
            {filteredCatalogItems.map((product) => {
              const isHighlighted = product.featuredForPreset === preset;
              return (
                <article
                  key={product.id}
                  className={`group rounded-xl border overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 ${
                    isHighlighted ? theme.featuredRing : theme.surface
                  }`}
                >
                  <div>
                    {/* Aesthetic Product Visual Header (Zero-Broken-Image Policy) */}
                    <div
                      className={`h-48 border-b p-5 flex flex-col justify-between relative overflow-hidden ${theme.surfaceSubtle}`}
                    >
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="font-mono font-bold text-amber-500">
                          {product.badge}
                        </span>
                        <span className={`font-medium ${theme.mutedText}`}>
                          {product.categoryLabel}
                        </span>
                      </div>

                      {/* Minimalist E-Commerce Product Wireframe Illustration */}
                      <div className="my-auto flex items-center justify-between gap-4 py-2">
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-current opacity-25" />
                            <span className="w-2 h-2 rounded-full bg-current opacity-25" />
                            <span className="h-2 w-16 rounded bg-current opacity-20" />
                          </div>
                          <div className="h-3 w-full rounded bg-current opacity-25" />
                          <div className="h-3 w-4/5 rounded bg-current opacity-15" />
                          <div className="pt-1 flex items-center gap-2">
                            <div className={`h-5 w-20 rounded ${theme.barFill} opacity-80`} />
                            <div className="h-5 w-12 rounded border border-current opacity-20" />
                          </div>
                        </div>

                        <div
                          className={`p-3.5 rounded-xl border transition-transform duration-200 group-hover:scale-105 ${theme.surface}`}
                        >
                          {renderProductIcon(product.iconName)}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className={theme.mutedText}>{product.timeline}</span>
                        {isHighlighted && (
                          <span className={`font-bold ${theme.accentText}`}>
                            ★ Pilihan Utama
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Product Body */}
                    <div className="p-6 space-y-4">
                      <div>
                        <div className={`text-xs ${theme.mutedText}`}>
                          <span>{product.categoryLabel}</span>
                          <span aria-hidden="true"> · </span>
                          <span>Katalog {brandName}</span>
                        </div>
                        <h3 className="text-lg font-bold tracking-tight mt-1">
                          {product.name}
                        </h3>
                        <div className="text-2xl sm:text-[26px] font-bold tabular-nums mt-2">
                          {product.price}
                        </div>
                      </div>

                      <p className={`text-xs leading-relaxed ${theme.mutedText}`}>
                        {product.desc}
                      </p>

                      <div className={`pt-4 border-t ${theme.border}`}>
                        <div className="text-xs font-semibold mb-2.5">
                          Spesifikasi Pakej Termasuk:
                        </div>
                        <ul className="space-y-2">
                          {product.features.map((feat, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-xs leading-relaxed"
                            >
                              <Check
                                className={`w-4 h-4 shrink-0 mt-0.5 ${theme.accentText}`}
                              />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Contiguous Action Button */}
                  <div className="p-6 pt-0">
                    <button
                      type="button"
                      onClick={() =>
                        openBookingWithPackage(`${product.name} (${product.price})`)
                      }
                      className={`w-full py-3.5 px-4 rounded-lg text-xs font-semibold transition-colors inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap ${theme.accentBtn}`}
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Pilih Pakej / Beli Sekarang</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* B.4 PORTFOLIO & KAJIAN KES (Case Studies) */}
      <section id="portfolio" className={`py-20 px-6 border-b ${theme.border}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className={`text-xs font-medium mb-2 ${theme.mutedText}`}>
                Bukti Keberkesanan &amp; Rekod Projek
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Portfolio &amp; Kajian Kes Klien
              </h2>
            </div>

            <div
              className={`flex flex-wrap items-center gap-1 p-1 rounded-lg ${
                isDark ? 'bg-slate-900 border border-slate-800' : 'bg-slate-200/75'
              }`}
            >
              {(['Semua', 'Korporat', 'Kreatif', 'E-Dagang'] as PortfolioCategory[]).map(
                (cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setPortfolioFilter(cat)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      portfolioFilter === cat
                        ? isDark
                          ? 'bg-indigo-600 text-white'
                          : 'bg-white text-slate-900 shadow-sm'
                        : isDark
                        ? 'text-slate-400 hover:text-white'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredCaseStudies.map((study) => (
              <div
                key={study.id}
                onClick={() => setActiveCaseStudy(study)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveCaseStudy(study);
                  }
                }}
                className={`group cursor-pointer rounded-xl border overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 ${theme.surface}`}
              >
                <div>
                  <div
                    className={`h-44 border-b ${theme.border} p-5 flex flex-col justify-between relative overflow-hidden ${
                      study.category === 'Korporat'
                        ? isDark
                          ? 'bg-slate-900'
                          : 'bg-slate-100'
                        : study.category === 'Kreatif'
                        ? 'bg-slate-950 text-white'
                        : isDark
                        ? 'bg-stone-900'
                        : 'bg-orange-50/60'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono opacity-75">
                      <span>{study.clientSector}</span>
                      <span>{study.year}</span>
                    </div>

                    <div className="my-auto py-2">
                      <div className="grid grid-cols-12 gap-2 items-end">
                        <div className="col-span-7 space-y-1.5">
                          <div className="h-2 w-16 rounded bg-current opacity-20" />
                          <div className="h-3 w-full rounded bg-current opacity-30" />
                          <div className="h-3 w-4/5 rounded bg-current opacity-20" />
                        </div>
                        <div className="col-span-5 flex items-end gap-1 h-12">
                          <div className="flex-1 bg-emerald-500/50 rounded-t h-5" />
                          <div className="flex-1 bg-emerald-500/70 rounded-t h-8" />
                          <div className="flex-1 bg-emerald-500 rounded-t h-12" />
                        </div>
                      </div>
                    </div>

                    <div className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                      {study.headlineMetric}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className={`text-xs ${theme.mutedText}`}>
                      <span>{study.category}</span>
                      <span aria-hidden="true"> · </span>
                      <span>Kajian Kes {study.year}</span>
                    </div>

                    <h3 className="text-lg font-bold tracking-tight group-hover:underline">
                      {study.title}
                    </h3>

                    <p className={`text-xs leading-relaxed line-clamp-2 ${theme.mutedText}`}>
                      {study.challenge}
                    </p>
                  </div>
                </div>

                <div
                  className={`px-6 py-4 border-t ${theme.border} flex items-center justify-between text-xs font-semibold`}
                >
                  <span className={theme.accentText}>Lihat Perincian Hasil Konversi</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B.6 FOOTER PROFESIONAL */}
      <footer id="hubungi" className="py-14 px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="text-xl font-bold tracking-tight">{brandName}</div>
              <p className={`text-xs mt-1 ${theme.mutedText}`}>
                Katalog Digital &amp; Ekosistem Laman Web Rasmi
              </p>
            </div>

            <div className={`flex flex-wrap items-center gap-6 text-xs font-medium ${theme.mutedText}`}>
              <a href="#katalog" className="hover:underline">
                Katalog Servis
              </a>
              <a href="#portfolio" className="hover:underline">
                Portfolio &amp; Kajian Kes
              </a>
              <a href="#harga" className="hover:underline">
                Senarai Harga
              </a>
              <button
                type="button"
                onClick={() => openBookingWithPackage(activePreset.defaultPackageLabel)}
                className="hover:underline cursor-pointer"
              >
                Simulator Tempahan WhatsApp
              </button>
            </div>
          </div>

          <div
            className={`pt-8 border-t ${theme.border} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs ${theme.mutedText}`}
          >
            <div>
              &copy; {new Date().getFullYear()}{' '}
              <span className="font-semibold">{brandName}</span>. Hak Cipta Terpelihara.
            </div>
            <div className="font-semibold">
              Direka &amp; Dibangunkan oleh ARASTECH / ARASSTUDIO
            </div>
          </div>
        </div>
      </footer>

      {/* B.4 POP-UP MODAL KAJIAN KES */}
      {activeCaseStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm"
          onClick={() => setActiveCaseStudy(null)}
        >
          <div
            className="w-full max-w-2xl rounded-xl border border-slate-200 bg-white text-slate-900 p-6 sm:p-8 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-medium text-slate-500">
                  {activeCaseStudy.category} · {activeCaseStudy.clientSector} ·{' '}
                  {activeCaseStudy.year}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mt-1 tracking-tight">
                  {activeCaseStudy.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveCaseStudy(null)}
                className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 cursor-pointer"
                aria-label="Tutup modal kajian kes"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm leading-relaxed">
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <div className="text-xs font-mono font-semibold text-slate-500 mb-1">
                  01. CABARAN KLIEN
                </div>
                <p className="text-slate-700">{activeCaseStudy.challenge}</p>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <div className="text-xs font-mono font-semibold text-slate-500 mb-1">
                  02. SOLUSI DIBINA OLEH ARASTECH / ARASSTUDIO
                </div>
                <p className="text-slate-700">{activeCaseStudy.solution}</p>
              </div>

              <div className="p-4 rounded-lg bg-emerald-50/80 border border-emerald-200">
                <div className="text-xs font-mono font-semibold text-emerald-800 mb-1">
                  03. HASIL KONVERSI &amp; IMPAK PERNIAGAAN
                </div>
                <p className="text-emerald-950 font-medium">{activeCaseStudy.result}</p>
                <div className="mt-2 text-xs font-mono font-semibold text-emerald-700">
                  Metrik Utama: {activeCaseStudy.headlineMetric} ({activeCaseStudy.secondaryMetric})
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setActiveCaseStudy(null)}
                className="px-4 py-2.5 text-xs font-semibold rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                Tutup
              </button>
              <button
                type="button"
                onClick={() => {
                  const title = activeCaseStudy.title;
                  setActiveCaseStudy(null);
                  openBookingWithPackage(`Bina Solusi Seperti "${title}"`);
                }}
                className="px-5 py-2.5 text-xs font-semibold rounded-lg bg-[#1E3A8A] text-white hover:bg-blue-900 cursor-pointer"
              >
                Tempah Solusi Ini untuk {brandName}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* B.5 SIMULATOR TEMPAHAN WHATSAPP (Modal CTA) */}
      {isBookingOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm"
          onClick={() => setIsBookingOpen(false)}
        >
          <div
            className="w-full max-w-xl rounded-xl border border-slate-200 bg-white text-slate-900 p-6 sm:p-8 shadow-2xl space-y-5 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-medium text-slate-500">
                  Simulator Tempahan WhatsApp · ARASTECH / ARASSTUDIO
                </div>
                <h3 className="text-xl font-bold mt-1 tracking-tight">
                  Pengesahan Pakej Katalog untuk{' '}
                  <span className="text-[#1E3A8A]">{brandName}</span>
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsBookingOpen(false)}
                className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 cursor-pointer"
                aria-label="Tutup modal tempahan"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Nama Klien / Wakil Syarikat
                </label>
                <input
                  type="text"
                  value={waClientName}
                  onChange={(e) => setWaClientName(e.target.value)}
                  placeholder="Contoh: Tuan Ahmad Faris (Pengarah Urusan)"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Pakej / Produk Katalog Pilihan
                </label>
                <select
                  value={waSelectedPackage}
                  onChange={(e) => setWaSelectedPackage(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-700"
                >
                  {CATALOG_PRODUCTS.map((item) => (
                    <option key={item.id} value={`${item.name} (${item.price})`}>
                      {item.name} — {item.price} [{item.badge}]
                    </option>
                  ))}
                  <option value="Spesifikasi Kustom / Konsultasi Katalog">
                    Spesifikasi Kustom / Konsultasi Katalog
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Nota Projek &amp; Tarikh Sasaran Pelancaran
                </label>
                <textarea
                  rows={2}
                  value={waNotes}
                  onChange={(e) => setWaNotes(e.target.value)}
                  placeholder="Nyatakan objektif utama atau tarikh sasaran pelancaran..."
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700"
                />
              </div>

              {/* Live WhatsApp Message Preview */}
              <div className="p-4 rounded-lg bg-slate-950 text-slate-100 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Pratonton Mesej Rasmi ke Tim ARASTECH / ARASSTUDIO:</span>
                  <span className="text-emerald-400">wa.me/+601131738516</span>
                </div>
                <pre className="text-xs font-mono whitespace-pre-wrap leading-relaxed text-emerald-300">
                  {whatsappMessage}
                </pre>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsBookingOpen(false)}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                Kembali ke Katalog
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors whitespace-nowrap"
              >
                <Send className="w-4 h-4" />
                <span>Hantar ke WhatsApp Sekarang</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* A. PANEL KAWALAN DEMO KLIEN (Floating Widget at Bottom-Right Corner) */}
      <aside
        aria-label="Panel Kawalan Demo Klien"
        className="fixed bottom-5 right-5 z-40 w-[340px] sm:w-[385px] rounded-xl border border-slate-700/90 bg-slate-950/95 text-slate-100 shadow-2xl backdrop-blur-md overflow-hidden"
      >
        {/* A.1 Official Developer Badge Header */}
        <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <Sliders className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="text-[11px] font-bold tracking-wide text-amber-400 truncate">
              Demo Interaktif oleh ARASTECH / ARASSTUDIO
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsDemoPanelMinimized((prev) => !prev)}
            className="px-2 py-1 text-[11px] font-semibold rounded bg-slate-800 hover:bg-slate-700 text-slate-200 inline-flex items-center gap-1 shrink-0 cursor-pointer"
          >
            {isDemoPanelMinimized ? (
              <>
                <span>Buka</span>
                <ChevronUp className="w-3.5 h-3.5" />
              </>
            ) : (
              <>
                <span>Tutup</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>

        {!isDemoPanelMinimized && (
          <div className="p-4 space-y-4">
            {/* A.2 & A.3 Live Client Business Name Input + Reset */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="client-brand-input"
                  className="text-xs font-semibold text-slate-200"
                >
                  1. Nama Bisnes Klien (Live Update)
                </label>
                <span className="text-[10px] font-mono text-slate-400">
                  Asal: ARASSTUDIO
                </span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="client-brand-input"
                  type="text"
                  value={brandInput}
                  onChange={(e) => handleBrandChange(e.target.value)}
                  placeholder="Taip nama bisnes klien..."
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                />
                <button
                  type="button"
                  onClick={handleResetBrand}
                  title="Reset kepada nama asal ARASSTUDIO"
                  className="px-3 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 inline-flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* A.4 3 Industry Preset Buttons (Theme & Content Switcher) */}
            <div>
              <div className="text-xs font-semibold text-slate-200 mb-1.5">
                2. Pilih Pratetap Industri (Tema &amp; Katalog)
              </div>
              <div className="grid grid-cols-1 gap-2">
                {(Object.keys(PRESETS) as PresetKey[]).map((key, idx) => {
                  const item = PRESETS[key];
                  const active = preset === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => handlePresetSwitch(key)}
                      className={`px-3.5 py-2.5 rounded-lg border text-left transition-all flex items-center justify-between gap-2 cursor-pointer ${
                        active
                          ? 'bg-amber-400 text-slate-950 border-amber-400 font-bold shadow-sm'
                          : 'bg-slate-900/90 text-slate-200 border-slate-800 hover:border-slate-700 font-medium'
                      }`}
                    >
                      <span className="text-xs whitespace-nowrap">
                        Preset {idx + 1}: {item.label}
                      </span>
                      <span
                        className={`text-[10px] truncate ${
                          active ? 'text-slate-900 font-semibold' : 'text-slate-400'
                        }`}
                      >
                        {item.badgeDesc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}

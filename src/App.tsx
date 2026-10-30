/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  ChevronDown,
  X,
  MessageCircle,
  Layout,
  Building2,
  ShoppingBag,
  Cpu,
} from 'lucide-react';

type PresetType = 'corporate' | 'creative' | 'ecommerce';
type CatalogCategory = 'all' | 'landing' | 'corporate' | 'ecommerce' | 'custom';

interface CatalogProduct {
  id: number;
  category: Exclude<CatalogCategory, 'all'>;
  badge: string;
  title: string;
  price: string;
  desc: string;
  image: string;
}

const CATALOG_PRODUCTS: CatalogProduct[] = [
  {
    id: 1,
    category: 'landing',
    badge: 'Paling Popular',
    title: 'Landing Page / Simple',
    price: 'RM500 – RM1,500',
    desc: 'Sesuai untuk kempen promosi, produk tunggal, atau profil perniagaan asas (1 Halaman).',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    category: 'corporate',
    badge: 'Pilihan PKS',
    title: 'Website Perniagaan / Syarikat',
    price: 'RM1,500 – RM5,000',
    desc: '3 hingga 10 halaman profesional merangkumi "Tentang Kami", "Perkhidmatan", & "Hubungi Kami".',
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    category: 'ecommerce',
    badge: 'Online Store',
    title: 'Website E-Dagang / Store',
    price: 'RM3,500 – RM10,000+',
    desc: 'Kedai online lengkap dengan troli beli-belah & integrasi payment gateway (Billplz / ToyyibPay).',
    image:
      'https://images.unsplash.com/photo-1556742049-0a67d553c2a5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    category: 'custom',
    badge: 'Advanced System',
    title: 'Website Custom / Sistem Web',
    price: 'RM8,000 – RM20,000+',
    desc: 'Sistem tempahan khas (booking system), portal keahlian, atau aplikasi web berprestasi tinggi.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
  },
];

export default function App() {
  const [brandName, setBrandName] = useState<string>('ARASSTUDIO');
  const [clientNameInput, setClientNameInput] = useState<string>('');
  const [preset, setPreset] = useState<PresetType>('corporate');
  const [catalogFilter, setCatalogFilter] = useState<CatalogCategory>('all');
  const [isPanelHidden, setIsPanelHidden] = useState<boolean>(false);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  // WhatsApp Modal State
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState<boolean>(false);
  const [modalUserName, setModalUserName] = useState<string>('');
  const [modalPackageName, setModalPackageName] = useState<string>(
    'Pertanyaan Am Pelanggan'
  );

  const isDark = preset === 'creative';

  // Theme tokens per preset
  const accent = useMemo(() => {
    if (preset === 'creative') {
      return {
        primaryBg: 'bg-purple-600 hover:bg-purple-700',
        primaryText: 'text-purple-400',
        heroBadge:
          'bg-purple-900/30 text-purple-300 border-purple-800',
        badgeBg: 'bg-purple-600',
        shadow: 'shadow-purple-600/20',
      };
    }
    if (preset === 'ecommerce') {
      return {
        primaryBg: 'bg-orange-600 hover:bg-orange-700',
        primaryText: 'text-orange-600',
        heroBadge:
          'bg-orange-50 text-orange-600 border-orange-200',
        badgeBg: 'bg-orange-600',
        shadow: 'shadow-orange-600/20',
      };
    }
    return {
      primaryBg: 'bg-blue-600 hover:bg-blue-700',
      primaryText: 'text-blue-600 dark:text-blue-400',
      heroBadge:
        'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-800',
      badgeBg: 'bg-blue-600',
      shadow: 'shadow-blue-600/20',
    };
  }, [preset]);

  const filteredProducts = useMemo(() => {
    if (catalogFilter === 'all') return CATALOG_PRODUCTS;
    return CATALOG_PRODUCTS.filter((p) => p.category === catalogFilter);
  }, [catalogFilter]);

  const handleClientInput = (value: string) => {
    setClientNameInput(value);
    setBrandName(value.trim() || 'ARASSTUDIO');
  };

  const resetClientName = () => {
    setClientNameInput('');
    setBrandName('ARASSTUDIO');
  };

  const openWhatsAppModal = (packageName: string) => {
    setModalPackageName(packageName);
    setIsWhatsAppModalOpen(true);
  };

  const closeWhatsAppModal = () => {
    setIsWhatsAppModalOpen(false);
  };

  const whatsappUrl = useMemo(() => {
    const userName = modalUserName.trim() || 'Klien';
    const message = `Hai ARASTECH / ARASSTUDIO, saya ${userName} (${brandName}). Saya berminat dengan pakej ${modalPackageName} yang dipamerkan di dalam katalog demo. Mohon maklumat lanjut.`;
    return `https://wa.me/+601131738516?text=${encodeURIComponent(message)}`;
  }, [modalUserName, brandName, modalPackageName]);

  const renderFallbackArtwork = (category: CatalogProduct['category']) => {
    const IconComponent =
      category === 'landing'
        ? Layout
        : category === 'corporate'
        ? Building2
        : category === 'ecommerce'
        ? ShoppingBag
        : Cpu;
    return (
      <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950 flex flex-col items-center justify-center p-6 text-white">
        <IconComponent className="w-10 h-10 text-blue-400 mb-2 opacity-90" />
        <div className="h-2 w-24 rounded bg-white/30 mb-1.5" />
        <div className="h-2 w-16 rounded bg-white/15" />
      </div>
    );
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <div
        id="bodyTheme"
        className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300"
      >
        {/* Sticky Navbar */}
        <nav className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
            <a href="#" className="flex items-center space-x-3 shrink-0">
              <div
                className={`w-10 h-10 rounded-xl ${accent.badgeBg} flex items-center justify-center text-white font-bold text-xl shadow-md ${accent.shadow}`}
              >
                {brandName.charAt(0).toUpperCase()}
              </div>
              <span
                id="navBrandName"
                className="font-extrabold text-lg tracking-tight text-gray-900 dark:text-white whitespace-nowrap"
              >
                {brandName}
              </span>
            </a>

            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600 dark:text-gray-300">
              <a
                href="#katalog"
                className="hover:text-blue-600 dark:hover:text-white transition whitespace-nowrap"
              >
                Katalog Servis
              </a>
              <a
                href="#harga"
                className="hover:text-blue-600 dark:hover:text-white transition whitespace-nowrap"
              >
                Pakej Harga
              </a>
              <a
                href="#hubungi"
                className="hover:text-blue-600 dark:hover:text-white transition whitespace-nowrap"
              >
                Hubungi
              </a>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={() => openWhatsAppModal('Pertanyaan Am Pelanggan')}
                className={`${accent.primaryBg} text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-lg ${accent.shadow} transition transform active:scale-95 whitespace-nowrap cursor-pointer`}
              >
                Hubungi Kami
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative pt-12 pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span
                id="heroBadge"
                className={`inline-flex items-center space-x-2 text-xs font-bold px-3.5 py-1.5 rounded-lg mb-6 border ${accent.heroBadge}`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Solusi Web &amp; Produksi Digital Moden</span>
              </span>

              <h1
                id="heroTitle"
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight"
                style={{ textWrap: 'balance' }}
              >
                Transformasi Bisnes Anda ke Peringkat{' '}
                <span className={accent.primaryText}>Seterusnya</span>
              </h1>

              <p
                id="heroSubtitle"
                className="mt-6 text-lg text-gray-600 dark:text-gray-300"
              >
                Papar katalog reka bentuk servis profesional kami khusus untuk
                membantu lonjakan jualan dan penjenamaan bisnes{' '}
                <span className="font-bold text-gray-900 dark:text-white">
                  {brandName}
                </span>{' '}
                secara efektif.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#katalog"
                  className={`${accent.primaryBg} text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg ${accent.shadow} transition whitespace-nowrap`}
                >
                  Teroka Katalog &amp; Contoh Design
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Katalog Servis E-Commerce Style dengan Gambar Design */}
        <section
          id="katalog"
          className="py-16 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-colors"
        >
          <div id="harga" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                Katalog Pakej &amp; Contoh Reka Bentuk
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Lihat contoh visual reka bentuk website yang kami tawarkan untuk
                anda.
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
                      className={`catalog-tab px-4 py-2 rounded-xl text-sm transition cursor-pointer whitespace-nowrap ${
                        active
                          ? `${accent.primaryBg} text-white font-semibold shadow-sm`
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Grid Katalog Produk & Contoh Design */}
            <div
              id="catalogGrid"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-900 aspect-[16/10]">
                      {!failedImages[product.id] ? (
                        <img
                          src={product.image}
                          alt={product.title}
                          referrerPolicy="no-referrer"
                          onError={() =>
                            setFailedImages((prev) => ({
                              ...prev,
                              [product.id]: true,
                            }))
                          }
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                      ) : (
                        renderFallbackArtwork(product.category)
                      )}
                      <span
                        className={`absolute top-3 left-3 ${accent.badgeBg} text-white text-[10px] px-2.5 py-1 rounded-md font-bold shadow-sm uppercase tracking-wider`}
                      >
                        {product.badge}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                        {product.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-xs mt-1.5 leading-relaxed">
                        {product.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-4 flex items-center justify-between border-t border-gray-100 dark:border-gray-700/50 mt-4">
                    <div>
                      <span className="text-[10px] text-gray-400 block font-medium">
                        Anggaran Harga
                      </span>
                      <span
                        className={`text-sm font-extrabold tabular-nums ${accent.primaryText}`}
                      >
                        {product.price}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        openWhatsAppModal(`${product.title} (${product.price})`)
                      }
                      className={`bg-gray-900 dark:bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-blue-600 dark:hover:bg-blue-700 transition shadow-sm cursor-pointer whitespace-nowrap`}
                    >
                      Pilih Pakej
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Profesional */}
        <footer
          id="hubungi"
          className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-12 transition-colors"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span
              id="footerBrandName"
              className="font-extrabold text-xl text-gray-900 dark:text-white"
            >
              {brandName}
            </span>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
              Solusi Rekaan Web, E-Dagang &amp; Kandungan Digital Profesional.
            </p>
            <div className="mt-6 text-xs text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-6">
              &copy; 2026 <span id="copyrightName">{brandName}</span>. Hak Cipta
              Terpelihara. <br />
              <span
                className={`${accent.primaryText} font-medium mt-1 inline-block`}
              >
                Direka &amp; Dibangunkan oleh ARASTECH / ARASSTUDIO
              </span>
            </div>
          </div>
        </footer>

        {/* Panel Kawalan Demo Terapung (Klien Presentation Widget) */}
        <div className="fixed bottom-6 right-6 z-50">
          <div
            id="demoPanel"
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 w-80 transition-all duration-300"
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-xs uppercase tracking-wider text-gray-700 dark:text-gray-200">
                  Panel Demo Klien
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsPanelHidden((prev) => !prev)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer"
                aria-label="Toggle Panel Demo Klien"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isPanelHidden ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {!isPanelHidden && (
              <div id="panelContent" className="pt-4 space-y-3">
                <div className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-[11px] p-2 rounded-lg font-medium">
                  Demo rasmi oleh <strong>ARASTECH / ARASSTUDIO</strong>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">
                    Nama Bisnes Klien:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      id="clientNameInput"
                      value={clientNameInput}
                      onChange={(e) => handleClientInput(e.target.value)}
                      placeholder="Contoh: ZARA HOLDINGS"
                      className="w-full text-xs px-3 py-2 border rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={resetClientName}
                      className="px-3 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-xs font-semibold rounded-xl text-gray-600 dark:text-gray-300 cursor-pointer"
                    >
                      Reset
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">
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
                          className={`text-[10px] py-1.5 px-2 rounded-lg font-semibold transition cursor-pointer ${
                            active
                              ? `${accent.primaryBg} text-white shadow-sm`
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 hover:text-blue-600'
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

        {/* Modal WhatsApp / Tempahan */}
        {isWhatsAppModalOpen && (
          <div
            id="whatsappModal"
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeWhatsAppModal}
          >
            <div
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-md w-full p-6 relative shadow-2xl border border-gray-100 dark:border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeWhatsAppModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Tempahan / Pertanyaan Pakej
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Sila semak butiran tempahan anda sebelum dihantar terus ke
                WhatsApp ARASTECH / ARASSTUDIO.
              </p>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">
                    Nama Anda / Wakil:
                  </label>
                  <input
                    type="text"
                    id="modalUserName"
                    value={modalUserName}
                    onChange={(e) => setModalUserName(e.target.value)}
                    placeholder="Masukkan nama anda"
                    className="w-full text-sm px-3 py-2.5 border rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">
                    Pakej Dipilih:
                  </label>
                  <input
                    type="text"
                    id="modalPackageName"
                    value={modalPackageName}
                    readOnly
                    className="w-full text-sm px-3 py-2.5 bg-gray-100 dark:bg-gray-800 border rounded-xl dark:border-gray-700 dark:text-gray-300 font-semibold"
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
                  className="w-1/2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-3 rounded-xl font-semibold text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer"
                >
                  Batal
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeWhatsAppModal}
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
    </div>
  );
}

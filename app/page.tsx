// @ts-nocheck
"use client";

import { Playfair_Display, Inter } from "next/font/google";
import content from "../data/content.json";

const display = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700", "900"] });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const TERRACOTTA = "#B8462C";
const TERRA_DARK = "#7A2818";
const OCHRE = "#D4A574";
const BONE = "#F4EDD9";
const BONE_2 = "#E8DEC4";
const INK = "#1A1410";

const GALLERY = content.gallery || [content.hero.image];

export default function Page() {
  return (
    <main className={body.className} style={{ background: BONE, color: INK }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes drift { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(12px, -8px); } }
        .fade-up { animation: fadeUp 900ms cubic-bezier(0.22, 1, 0.36, 1) both; }
        .drift { animation: drift 22s ease-in-out infinite alternate; }
      `}</style>

      <nav className="absolute top-0 left-0 right-0 z-30 px-6 py-5 lg:px-10 lg:py-6 flex items-center justify-between">
        <div className={display.className} style={{ fontSize: '24px', color: TERRA_DARK, fontWeight: 700, lineHeight: 1, fontStyle: 'italic' }}>
          Apatzingán
        </div>
        <div className="flex items-center gap-5 text-[13px] font-medium">
          <a href="#menu" className="hidden md:inline text-[13px] tracking-wide" style={{ color: INK + 'B0' }}>Menu</a>
          <a href="#visit" className="hidden md:inline text-[13px] tracking-wide" style={{ color: INK + 'B0' }}>Visit</a>
          <a href={content.hero.ctaLink} className="px-4 py-2 text-[12.5px] font-medium tracking-wide rounded-full" style={{ background: TERRA_DARK, color: BONE }}>
            {content.contact.phone}
          </a>
        </div>
      </nav>

      <section className="relative min-h-[92vh] flex items-center px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: `url("${GALLERY[0]}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0" style={{ background: `linear-gradient(105deg, ${INK}EE 0%, ${INK}B0 50%, ${INK}60 100%)` }}></div>
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-30 drift" style={{ background: `radial-gradient(circle, ${TERRACOTTA}, transparent 70%)` }}></div>

        <div className="relative z-10 max-w-6xl mx-auto w-full pt-24 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-7 fade-up rounded-full" style={{ background: BONE + '15', backdropFilter: 'blur(8px)', border: `1px solid ${BONE}30` }}>
            <span style={{ color: OCHRE, fontSize: '14px' }}>★ ★ ★ ★ ★</span>
            <span className="text-[11.5px] tracking-widest uppercase" style={{ color: BONE + 'DD' }}>{content.rating} · {content.reviewCount.toLocaleString()} reviews</span>
          </div>
          <h1 className={display.className + " fade-up"} style={{ fontSize: 'clamp(56px, 10vw, 144px)', lineHeight: 0.95, color: BONE, fontWeight: 700, letterSpacing: '-0.02em' }}>
            <span style={{ fontStyle: 'italic', color: OCHRE }}>Birria,</span><br/>
            the way Michoacán<br/>
            means it.
          </h1>
          <p className="text-[18px] lg:text-[22px] leading-relaxed mt-8 max-w-xl fade-up" style={{ color: BONE + 'CC', fontWeight: 400 }}>
            {content.hero.subheading}
          </p>
          <div className="flex flex-wrap gap-3 mt-10 fade-up">
            <a href={content.hero.ctaLink} className="px-7 py-3.5 rounded-full font-medium text-[15px] transition-transform hover:scale-105" style={{ background: BONE, color: TERRA_DARK, boxShadow: `0 16px 32px ${INK}40` }}>
              {content.hero.ctaText}
            </a>
            <a href="#menu" className="px-7 py-3.5 rounded-full font-medium text-[15px]" style={{ background: 'transparent', color: BONE, border: `1.5px solid ${BONE}50` }}>
              See the menu
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 lg:px-10 py-24 lg:py-32 max-w-5xl mx-auto">
        <div className="text-center">
          <div className="text-[11.5px] font-medium tracking-[0.3em] uppercase mb-4" style={{ color: TERRACOTTA }}>An Apatzingán recipe</div>
          <h2 className={display.className} style={{ fontSize: 'clamp(38px, 5.5vw, 64px)', lineHeight: 1.1, fontWeight: 700, color: INK, marginBottom: '32px' }}>
            <span style={{ fontStyle: 'italic' }}>{content.about.heading.split('.')[0]}.</span>
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {content.about.paragraphs.map((p, i) => (
              <p key={i} className="text-[17px] lg:text-[19px] leading-relaxed" style={{ color: INK + 'CC' }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-6xl mx-auto">
          {GALLERY.map((p, i) => (
            <div key={i} className="aspect-[4/5] overflow-hidden rounded-md">
              <div className="w-full h-full transition-transform hover:scale-105 duration-700" style={{ backgroundImage: `url("${p}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="px-6 lg:px-10 py-24 lg:py-32" style={{ background: BONE_2 }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[11.5px] font-medium tracking-[0.3em] uppercase mb-4" style={{ color: TERRACOTTA }}>The menu</div>
            <h2 className={display.className} style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1, fontWeight: 700, color: INK }}>
              From the <span style={{ fontStyle: 'italic', color: TERRACOTTA }}>cazos</span>.
            </h2>
          </div>
          <div className="space-y-px" style={{ background: INK + '10' }}>
            {content.services.map((s, i) => (
              <div key={i} className="px-7 py-6 flex flex-col md:flex-row md:items-start gap-3 md:gap-6" style={{ background: BONE }}>
                <div className={display.className + " md:w-12 shrink-0"} style={{ fontSize: '20px', fontStyle: 'italic', color: TERRACOTTA, fontWeight: 600 }}>{i + 1}.</div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-3 mb-1.5">
                    <h3 className={display.className} style={{ fontSize: '22px', fontWeight: 700, color: INK }}>{s.title}</h3>
                    {s.price && <span className={display.className} style={{ fontSize: '20px', fontStyle: 'italic', color: TERRA_DARK, whiteSpace: 'nowrap' }}>{s.price}</span>}
                  </div>
                  <p className="text-[14.5px] leading-relaxed" style={{ color: INK + 'B0' }}>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-24 lg:py-32 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-[11.5px] font-medium tracking-[0.3em] uppercase mb-4" style={{ color: TERRACOTTA }}>The regulars say</div>
          <h2 className={display.className} style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, fontWeight: 700, color: INK }}>
            <span style={{ fontStyle: 'italic' }}>{content.rating}</span> on Google · {content.reviewCount.toLocaleString()} reviews
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.reviews.map((r, i) => (
            <div key={i} className="p-7 rounded-md" style={{ background: BONE_2 }}>
              <div className="text-[18px] tracking-widest mb-4" style={{ color: OCHRE }}>{'★'.repeat(r.rating)}</div>
              <p className={display.className} style={{ fontSize: '17px', lineHeight: 1.55, color: INK, fontStyle: 'italic', marginBottom: '20px' }}>&ldquo;{r.text}&rdquo;</p>
              <div className="text-[12px] tracking-widest uppercase font-semibold" style={{ color: TERRACOTTA }}>— {r.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="visit" className="px-6 lg:px-10 py-24 lg:py-32" style={{ background: INK, color: BONE }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          <div>
            <div className="text-[11.5px] font-medium tracking-[0.3em] uppercase mb-4" style={{ color: OCHRE }}>Visit us</div>
            <h2 className={display.className} style={{ fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.05, fontWeight: 700, marginBottom: '20px' }}>
              Laurel Canyon Boulevard, Pacoima.
            </h2>
            <div className="mb-7 text-[16px]" style={{ color: BONE + 'D0' }}>
              <div className="font-medium mb-2">{content.contact.address}</div>
              <a href={content.hero.ctaLink} className={display.className + " hover:underline"} style={{ fontSize: '28px', color: OCHRE, fontStyle: 'italic', display: 'inline-block', marginTop: '8px' }}>{content.contact.phone}</a>
            </div>
            <div style={{ borderTop: `1px solid ${BONE}25`, paddingTop: '20px' }}>
              <table className="w-full">
                <tbody>
                  {Object.entries(content.contact.hours).map(([day, h]) => (
                    <tr key={day} className="border-b" style={{ borderColor: BONE + '10' }}>
                      <td className={display.className + " py-3 text-[15px]"} style={{ fontWeight: 600 }}>{day}</td>
                      <td className="py-3 text-[14px] text-right tabular-nums" style={{ color: BONE + '90' }}>{String(h)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="aspect-square lg:aspect-auto rounded-md overflow-hidden" style={{ background: INK }}>
            <iframe src={`https://maps.google.com/maps?output=embed&q=${encodeURIComponent(content.contact.mapEmbedQuery)}`} className="w-full h-full block border-0" loading="lazy" title="Location"></iframe>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 pt-24 lg:pt-32 pb-20">
        <div className="max-w-5xl mx-auto p-10 lg:p-16 text-center rounded-md" style={{ background: TERRACOTTA, color: BONE }}>
          <div className="text-[11.5px] font-medium tracking-[0.3em] uppercase mb-4" style={{ color: OCHRE }}>Mañana</div>
          <h2 className={display.className} style={{ fontSize: 'clamp(40px, 6vw, 76px)', lineHeight: 1.05, fontWeight: 700, marginBottom: '28px' }}>
            <span style={{ fontStyle: 'italic' }}>The cazos</span> are already simmering.
          </h2>
          <a href={content.hero.ctaLink} className="inline-block px-9 py-4 rounded-full font-medium text-[15px] transition-transform hover:scale-105" style={{ background: BONE, color: TERRA_DARK }}>
            Call {content.contact.phone}
          </a>
        </div>
      </section>

      <footer className="px-6 lg:px-10 py-10 border-t" style={{ borderColor: INK + '14' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className={display.className} style={{ fontSize: '20px', fontWeight: 700, fontStyle: 'italic', color: TERRA_DARK }}>Birrieria Apatzingán</div>
          <div className="text-[12px]" style={{ color: INK + '70' }}>© {new Date().getFullYear()} · {content.contact.address} · {content.rating}★ {content.reviewCount.toLocaleString()} reviews</div>
        </div>
      </footer>
    </main>
  );
}

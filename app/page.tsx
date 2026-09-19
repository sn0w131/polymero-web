// app/page.tsx
import Link from "next/link";
import TrayModel from "./components/TrayModel";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col w-full bg-background text-foreground">
      
      {/* BETA BANNER */}
      <div className="w-full bg-foreground text-background text-[10px] md:text-xs font-geist-mono uppercase tracking-[0.2em] py-2.5 px-4 text-center z-50">
        [ Founder's Batch — První vývojová Beta série. Design a modularita se mohou v budoucnu vyvíjet. ]
      </div>

      {/* HLAVIČKA / NAVIGACE */}
      <header className="w-full flex items-center justify-between px-6 lg:px-24 py-8 z-40">
        <Link href="/" className="text-2xl md:text-3xl font-headline font-black tracking-widest text-foreground">
          POLYMERO
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-xs font-syne font-bold tracking-widest text-[#666666] uppercase">
          <Link href="/faq" className="hover:text-foreground transition-colors">Jak to funguje</Link>
          <Link href="#ekosystem" className="hover:text-foreground transition-colors">Ekosystém</Link>
          <Link href="#materialy" className="hover:text-foreground transition-colors">Materiály</Link>
          <Link href="/konfigurator" className="hover:text-foreground transition-colors">Sestavit set</Link>
        </nav>
      </header>

      {/* HERO SEKCE S 3D MODELEM */}
      <section className="relative w-full min-h-[calc(100vh-140px)] flex flex-col md:flex-row items-center justify-between px-6 lg:px-24 overflow-hidden pb-12">
        
        {/* Levá část - Typografie a CTA */}
        <div className="z-10 flex flex-col items-start justify-center max-w-2xl w-full">
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-foreground leading-tight tracking-tighter mb-6 uppercase">
            MODULÁRNÍ <br /> EKOSYSTÉM.
          </h1>
          <p className="text-lg md:text-xl text-[#666666] font-geist-sans mb-10 max-w-md leading-relaxed">
            Spojen pevnýmineodymovými magnety. Sterilní dokonalost z Bio materiálu. Vyrobeno v ČR s extrémním důrazem na toleranci.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href="/konfigurator" 
              className="px-8 py-4 bg-foreground text-background font-syne font-bold tracking-widest hover:bg-[#666666] transition-colors text-center text-sm"
            >
              KONFIGUROVAT
            </Link>
            <Link 
              href="/faq" 
              className="px-8 py-4 border border-foreground text-foreground font-syne font-bold tracking-widest hover:bg-foreground hover:text-background transition-colors text-center text-sm"
            >
              JAK TO FUNGUJE?
            </Link>
          </div>
        </div>

        {/* Pravá část - Interaktivní 3D Model */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex items-center justify-center relative z-10">
          <TrayModel />
          
          {/* Badge pro nápovědu UX */}
          <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur text-xs font-geist-mono text-[#666666] px-3 py-1 border border-[#e5e5e5]">
            [ Táhni pro rotaci ]
          </div>
        </div>

        {/* Abstraktní vizuální prvek na pozadí pro hloubku */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-foreground/5 rounded-full blur-3xl -z-0 pointer-events-none"></div>
      </section>

      {/* SEKCE: TRUST BADGES */}
      <section className="w-full border-y border-[#e5e5e5] py-6 bg-background flex justify-center z-10 relative">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 px-6 text-xs md:text-sm font-syne font-bold text-foreground tracking-wider uppercase">
          <span className="flex items-center gap-2">🇨🇿 Vyrobeno v ČR</span>
          <span className="flex items-center gap-2">♻️ 100% Bio materiál</span>
          <span className="flex items-center gap-2">🛡️ Garance vrácení peněz</span>
        </div>
      </section>

      {/* SEKCE: EKOSYSTÉM */}
      <section id="ekosystem" className="w-full py-24 px-6 lg:px-24 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-headline font-bold mb-6 uppercase">Magnetická definice pořádku.</h2>
        <p className="text-lg text-[#666666] max-w-2xl leading-relaxed">
          Každý modul systému POLYMERO ukrývá silné neodymové magnety, které se s uspokojivým "cvaknutím" spojí v jeden pevný celek. Žádné vůle, žádné kompromisy. Rozšiřujte svou sestavu přesně podle toho, jaké nástroje aktuálně potřebujete.
        </p>
      </section>

      {/* SEKCE: MATERIÁLY */}
      <section id="materialy" className="w-full py-24 px-6 lg:px-24 bg-[#111111] text-background flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-headline font-bold mb-6 uppercase text-background">Inženýrství & Příroda.</h2>
        <p className="text-lg text-[#888888] max-w-2xl leading-relaxed">
          Pracujeme výhradně s PLA nejvyšší kvality — prémiovým, biologicky rozložitelným plastem z kukuřičného škrobu. Každý kus je vyráběn s pečlivě kalibrovanou extruzí a texturou inspirovanou práškovaným kovem (PEI) pro maximální odolnost a exkluzivní matný vzhled.
        </p>
      </section>

      {/* FOOTER / KONTAKT */}
      <footer className="w-full border-t border-[#e5e5e5] py-12 px-6 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-headline font-black tracking-widest mb-2">POLYMERO</span>
          <span className="text-xs font-geist-mono text-[#666666]">&copy; {new Date().getFullYear()} Všechna práva vyhrazena.</span>
        </div>
        
        <div className="flex items-center gap-6 text-sm font-syne font-bold uppercase tracking-widest">
          <a href="https://instagram.com/polymero" target="_blank" rel="noopener noreferrer" className="hover:text-[#666666] transition-colors">
            Instagram
          </a>
          <a href="mailto:info@polymero.cz" className="hover:text-[#666666] transition-colors">
            info@polymero.cz
          </a>
        </div>
      </footer>

    </main>
  );
}
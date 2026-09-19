import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-gray-200 selection:text-black pb-0">
      
      {/* 0. NAVIGACE */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-headline text-titanium font-extrabold tracking-widest text-xl">
            POLYMERO
          </Link>
          <div className="hidden md:flex gap-8 text-xs text-titanium-muted font-medium uppercase tracking-widest">
            <Link href="#jak-to-funguje" className="hover:text-black transition-colors">Jak to funguje</Link>
            <Link href="#ekosystem" className="hover:text-black transition-colors">Ekosystém</Link>
            <Link href="#materialy" className="hover:text-black transition-colors">Materiály</Link>
            <Link href="/konfigurator" className="hover:text-black font-bold transition-colors">Sestavit set</Link>
          </div>
        </div>
      </nav>

      {/* 1. HERO SEKCE S ANIMACEMI */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-40 pb-20 text-center">
        <h1 className="animate-fade-in-up font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-600 mb-6">
          Modulární ekosystém.<br />
        </h1>
        
        <p className="animate-fade-in-up delay-100 text-lg md:text-xl text-titanium-muted max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Systém, který se skládá podle vás. Přesný, pevný a postavený na industriální estetice.
        </p>
        
        <div className="animate-fade-in-up delay-200">
          <Link 
            href="/konfigurator" 
            className="px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 shadow-2xl inline-block hover:scale-105"
          >
            Sestavit set
          </Link>
        </div>
        
        {/* Odznaky důvěry (Trust Badges) */}
        <div className="animate-fade-in-up delay-300 mt-12 flex flex-col md:flex-row gap-6 md:gap-10 text-xs text-titanium-muted font-medium tracking-wide">
          <span className="flex items-center justify-center gap-2">
            <span className="text-lg">🇨🇿</span> Vyrobeno v ČR
          </span>
          <span className="flex items-center justify-center gap-2">
            <span className="text-lg">♻️</span> 100% Bio materiál
          </span>
          <span className="flex items-center justify-center gap-2">
            <span className="text-lg">🛡️</span> Garance vrácení peněz
          </span>
        </div>
      </section>

      {/* 2. HLAVNÍ FOTKA (FULL-WIDTH APPLE STYLE) */}
      <section className="w-full mb-32 animate-fade-in-up delay-300">
        <div className="relative w-full h-[50vh] md:h-[75vh] bg-gray-100 flex items-center justify-center border-y border-black/5 overflow-hidden group">
          <p className="text-titanium-muted font-mono tracking-widest uppercase text-sm group-hover:text-black transition-colors text-center px-4">
            [ Zde bude obří detailní fotka sestaveného tácu POLYMERO od kraje ke kraji ]
          </p>
        </div>
      </section>

      {/* 2.5 JAK TO FUNGUJE */}
      <section id="jak-to-funguje" className="px-6 max-w-6xl mx-auto mb-32 scroll-mt-24">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-sm font-semibold text-titanium-muted tracking-widest uppercase mb-2">Proces</h2>
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-titanium">
            Tři kroky k dokonalosti.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-y-1/2 z-0"></div>
          
          <div className="animate-fade-in-up delay-100 bg-gray-50 border border-gray-200 rounded-2xl p-8 relative z-10 text-center hover:border-gray-300 hover:bg-white transition-all shadow-sm">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
            <h3 className="font-headline text-xl font-semibold text-titanium mb-3">Vyberte moduly</h3>
            <p className="text-titanium-muted font-light text-sm leading-relaxed">Zvolte si hlavní tác a přidejte rozšíření přesně podle toho, jak budete potřebovat.</p>
          </div>
          <div className="animate-fade-in-up delay-200 bg-gray-50 border border-gray-200 rounded-2xl p-8 relative z-10 text-center hover:border-gray-300 hover:bg-white transition-all shadow-sm">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
            <h3 className="font-headline text-xl font-semibold text-titanium mb-3">Nakonfigurujte barvy</h3>
            <p className="text-titanium-muted font-light text-sm leading-relaxed">Prémiový karbon, dřevo nebo matná barva? Každý modul může mít jinou úpravu.</p>
          </div>
          <div className="animate-fade-in-up delay-300 bg-gray-50 border border-gray-200 rounded-2xl p-8 relative z-10 text-center hover:border-gray-300 hover:bg-white transition-all shadow-sm">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
            <h3 className="font-headline text-xl font-semibold text-titanium mb-3">Zakázková výroba</h3>
            <p className="text-titanium-muted font-light text-sm leading-relaxed">Váš set zadáme do výroby až po objednávce. Just-in-Time produkce bez plýtvání materiálem.</p>
          </div>
        </div>
      </section>

      {/* 3. SEKCE EKOSYSTÉM */}
      <section id="ekosystem" className="px-6 max-w-6xl mx-auto mb-32 scroll-mt-24">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-titanium mb-4">
            Navrženo pro dokonalou souhru.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:bg-white transition-all shadow-sm">
            <h3 className="font-headline text-xl font-semibold text-titanium mb-3">Magnetická přesnost</h3>
            <p className="text-titanium-muted leading-relaxed font-light">Žádné složité zámky. Skryté neodymové magnety se postarají o neviditelné, extrémně pevné spojení s mikrometrovou přesností.</p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:bg-white transition-all shadow-sm">
            <h3 className="font-headline text-xl font-semibold text-titanium mb-3">Industriální estetika</h3>
            <p className="text-titanium-muted leading-relaxed font-light">Čisté linie bez kompromisů. Naše moduly jsou navrženy tak, aby vypadaly jako prémiový doplněk moderního interiéru.</p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:bg-white transition-all shadow-sm">
            <h3 className="font-headline text-xl font-semibold text-titanium mb-3">Nekonečná modularita</h3>
            <p className="text-titanium-muted leading-relaxed font-light">Dnes základní plocha. Zítra přídavný modul. Systém roste s vámi a přizpůsobuje se vašim aktuálním potřebám.</p>
          </div>
        </div>
      </section>

      {/* 4. MATERIÁLY A TECHNOLOGIE */}
      <section id="materialy" className="px-6 max-w-6xl mx-auto my-32 scroll-mt-24">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-titanium-muted tracking-widest uppercase mb-2">Technologie</h2>
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-titanium mb-4">
            Prémiový biopolymer.<br/>Žádný levný plast.
          </h2>
          <p className="text-titanium-muted max-w-2xl mx-auto font-light mt-6 text-lg">
            Nepoužíváme plasty z ropy. Celý ekosystém stavíme na inženýrsky špičkových blendech PLA materiálu. 
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm">
            <h3 className="font-headline text-2xl font-semibold text-titanium mb-6">Proč jsme zvolili PLA?</h3>
            <ul className="space-y-6 text-titanium-muted font-light">
              <li>
                <strong className="text-titanium block mb-1">Absolutní rozměrová přesnost</strong>
                Na rozdíl od technických plastů se PLA při chladnutí nedeformuje. To nám umožňuje tisknout zámky a otvory pro magnety s tolerancí na desetiny milimetru. Díly tak do sebe zapadnou naprosto bez vůle.
              </li>
              <li>
                <strong className="text-titanium block mb-1">Dokonalá povrchová úprava</strong>
                Zatímco průmyslové materiály vynikají v hrubé síle, PLA poskytuje nejhladší detaily a dovoluje nám pracovat s luxusními příměsemi – od uhlíkových vláken (CF) přes hedvábný lesk až po metalické efekty.
              </li>
            </ul>
          </div>
          
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:bg-white transition-all shadow-sm">
              <h3 className="font-headline text-2xl font-semibold text-titanium mb-3">Udržitelnost. Žádná ropa.</h3>
              <p className="text-titanium-muted font-light leading-relaxed">
                Náš materiál neobsahuje toxické mikroplasty. PLA (Polylactic acid) je pokročilý bioplast vyráběný z obnovitelných zdrojů, jako je kukuřičný škrob. Je to materiál budoucnosti, který je plně biologicky odbouratelný.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:bg-white transition-all shadow-sm">
              <h3 className="font-headline text-2xl font-semibold text-titanium mb-3">Pevnost tam, kde je potřeba</h3>
              <p className="text-titanium-muted font-light leading-relaxed">
                S výplní s vysokou hustotou a robustními stěnami působí tác v ruce masivně a jeho pevnost pro tento účel dalece přesahuje běžné standardy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INSTAGRAM SEKCE */}
      <section className="w-full bg-gray-50 border-t border-gray-200 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-titanium mb-6">
            Přidejte se ke komunitě.
          </h2>
          <p className="text-titanium-muted font-light mb-10 text-lg">
            Sledujte vývoj, nahlédněte do zákulisí 3D tisku a pochlubte se svým sestaveným setem na Instagramu.
          </p>
          <a 
            href="https://www.instagram.com/polymero.co?stkn=ems3NWU4bXZvd3hq" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-gray-200 text-black font-semibold rounded-full hover:border-black transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Sledovat @polymero.co
          </a>
        </div>
      </section>

      {/* 6. PATIČKA */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-titanium-muted text-sm font-light">
            © {new Date().getFullYear()} POLYMERO. Všechna práva vyhrazena.
          </div>
          <div className="flex gap-8">
            <Link href="/faq" className="text-titanium-muted hover:text-black transition-colors text-sm tracking-wide">
              ČASTÉ DOTAZY
            </Link>
            <Link href="/kontakt" className="text-titanium-muted hover:text-black transition-colors text-sm tracking-wide">
              KONTAKT
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
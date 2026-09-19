import Link from "next/link";

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-gray-200 selection:text-black flex flex-col">
      
      {/* NAVIGACE */}
      <nav className="w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-headline text-titanium font-extrabold tracking-widest text-xl">
            POLYMERO
          </Link>
          <div className="hidden md:flex gap-8 text-xs text-titanium-muted font-medium uppercase tracking-widest">
            <Link href="/#jak-to-funguje" className="hover:text-black transition-colors">Jak to funguje</Link>
            <Link href="/#materialy" className="hover:text-black transition-colors">Materiály</Link>
            <Link href="/konfigurator" className="hover:text-black font-bold transition-colors">Sestavit set</Link>
          </div>
        </div>
      </nav>

      {/* OBSAH FAQ */}
      <div className="flex-grow max-w-3xl mx-auto px-6 py-32 w-full">
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-titanium mb-4">
          Časté dotazy
        </h1>
        <p className="text-lg text-titanium-muted font-light mb-16">
          Vše, co potřebujete vědět o ekosystému POLYMERO.
        </p>

        <div className="space-y-8">
          
          <div className="border-b border-gray-200 pb-8">
            <h3 className="font-headline text-xl font-bold text-titanium mb-3">Jak fungují magnetické spoje?</h3>
            <p className="text-titanium-muted font-light leading-relaxed">
              V každé spojovací hraně modulu jsou skryté silné neodymové magnety. Ty zajišťují, že se moduly k sobě samy přitáhnou s mikrometrovou přesností. Systém je navržen tak, aby spojení bylo pevné při běžné manipulaci, ale šlo snadno rozpojit, když si přejete set přeskládat.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-8">
            <h3 className="font-headline text-xl font-bold text-titanium mb-3">Z čeho přesně je POLYMERO vyrobeno?</h3>
            <p className="text-titanium-muted font-light leading-relaxed">
              Nepoužíváme plasty na ropné bázi. Celý systém je precizně tištěn z prémiového PLA (Polylactic acid). Jedná se o inženýrský biopolymer získávaný z obnovitelných zdrojů. Je naprosto zdravotně nezávadný a ekologický.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-8">
            <h3 className="font-headline text-xl font-bold text-titanium mb-3">Jak mám tác čistit? Můžu ho dát do myčky?</h3>
            <p className="text-titanium-muted font-light leading-relaxed">
              <strong>Rozhodně ne.</strong> Biopolymer PLA špatně snáší vysoké teploty (nad 50 °C). V myčce by se tác nenávratně zdeformoval. K čištění doporučujeme použít vlhký hadřík, případně trochu jemného mýdla a vlažnou vodu.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-8">
            <h3 className="font-headline text-xl font-bold text-titanium mb-3">Jak dlouho trvá výroba a doručení?</h3>
            <p className="text-titanium-muted font-light leading-relaxed">
              Každý set je vyráběn na zakázku (Just-in-Time produkce) přesně podle vaší konfigurace. Výroba a kompletace nám obvykle zabere 2 až 4 pracovní dny. Poté objednávku ihned expedujeme přes vámi zvoleného dopravce.
            </p>
          </div>

        </div>
        
        <div className="mt-16 bg-gray-50 p-8 rounded-2xl border border-gray-200 text-center">
          <h3 className="font-headline text-lg font-bold text-titanium mb-2">Nenašli jste svou odpověď?</h3>
          <p className="text-titanium-muted font-light mb-6">Napište nám, rádi vám s čímkoliv poradíme.</p>
          <Link href="/kontakt" className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors">
            Přejít na Kontakt
          </Link>
        </div>
      </div>

      {/* PATIČKA */}
      <footer className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12 flex justify-between items-center">
          <div className="text-titanium-muted text-sm font-light">
            © {new Date().getFullYear()} POLYMERO. Všechna práva vyhrazena.
          </div>
        </div>
      </footer>

    </main>
  );
}
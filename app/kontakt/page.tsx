"use client";
import Link from "next/link";

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-gray-200 selection:text-black flex flex-col">
      
      {/* NAVIGACE */}
      <nav className="w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-headline text-titanium font-extrabold tracking-widest text-xl hover:text-gray-500 transition-colors">
            POLYMERO
          </Link>
          <div className="hidden md:flex gap-8 text-xs text-titanium-muted font-medium uppercase tracking-widest">
            <Link href="/#jak-to-funguje" className="hover:text-black transition-colors">Jak to funguje</Link>
            <Link href="/#ekosystem" className="hover:text-black transition-colors">Ekosystém</Link>
            <Link href="/faq" className="hover:text-black transition-colors">Časté dotazy</Link>
            <Link href="/konfigurator" className="hover:text-black font-bold transition-colors">Sestavit set</Link>
          </div>
        </div>
      </nav>

      {/* OBSAH KONTAKTU */}
      <div className="flex-grow max-w-6xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* LEVÁ STRANA: Info a texty */}
          <div className="flex flex-col justify-center">
            <h1 className="animate-fade-in-up font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-titanium mb-6">
              Napište nám.
            </h1>
            <p className="animate-fade-in-up delay-100 text-lg text-titanium-muted font-light mb-12 leading-relaxed">
              Máte dotaz ke konfiguraci, materiálům nebo uvažujete o velkoobchodní spolupráci? Jsme tu pro vás a odpovídáme obratem.
            </p>

            <div className="animate-fade-in-up delay-200 space-y-8">
              <div className="group">
                <h3 className="font-headline text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">E-mail</h3>
                <a href="mailto:info@polymero.cz" className="text-2xl font-semibold text-black hover:text-gray-500 transition-colors">
                  info@polymero.cz
                </a>
              </div>

              <div className="group">
                <h3 className="font-headline text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Instagram</h3>
                <a 
                  href="https://www.instagram.com/polymero.co?stkn=ems3NWU4bXZvd3hq" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold text-black hover:text-gray-500 transition-colors"
                >
                  @polymero.co
                </a>
              </div>

              <div className="pt-8 border-t border-gray-100 mt-8">
                <h3 className="font-headline text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Výroba & Sídlo</h3>
                <p className="text-titanium-muted font-light leading-relaxed">
                  Vyrobeno na zakázku v České republice.<br/>
                  <span className="text-sm">(Fakturační údaje budou doplněny před spuštěním prodeje)</span>
                </p>
              </div>
            </div>
          </div>

          {/* PRAVÁ STRANA: Formulář */}
          <div className="animate-fade-in-up delay-300">
            <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="font-headline text-2xl font-bold text-titanium mb-6">Poslat zprávu</h3>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Jméno a Příjmení</label>
                  <input 
                    type="text" 
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" 
                    placeholder="Jan Novák" 
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">E-mail</label>
                  <input 
                    type="email" 
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" 
                    placeholder="jan@email.cz" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Vaše zpráva</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all resize-none" 
                    placeholder="Dobrý den, zajímalo by mě..." 
                  ></textarea>
                </div>

                <button 
                  type="button"
                  className="w-full py-4 mt-2 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Odeslat zprávu
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* PATIČKA */}
      <footer className="border-t border-gray-200 mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
          <div className="text-titanium-muted text-sm font-light">
            © {new Date().getFullYear()} POLYMERO. Všechna práva vyhrazena.
          </div>
        </div>
      </footer>

    </main>
  );
}
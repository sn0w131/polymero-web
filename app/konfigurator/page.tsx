"use client";
import Link from "next/link";
import { useState } from "react";

// KOMPLETNÍ DATABÁZE MATERIÁLŮ S CHYTROU CENOTVORBOU
const materialyData: Record<string, { nazev: string; priplatek: number; barvy: { jmeno: string; hex: string }[] }> = {
  matte: { nazev: "PLA Matte", priplatek: 0, barvy: [{ jmeno: "Charcoal Black", hex: "#333333" }, { jmeno: "Ivory White", hex: "#f5f5dc" }, { jmeno: "Marine Blue", hex: "#1d3f5e" }, { jmeno: "Scarlet Red", hex: "#8a1b1b" }, { jmeno: "Ash Grey", hex: "#8c8c8c" }] },
  pure: { nazev: "PLA Basic", priplatek: 0, barvy: [{ jmeno: "Black", hex: "#0a0a0a" }, { jmeno: "White", hex: "#ffffff" }, { jmeno: "Cyan", hex: "#00b7eb" }, { jmeno: "Yellow", hex: "#ffd700" }] },
  marble: { nazev: "PLA Marble", priplatek: 0, barvy: [{ jmeno: "Marble White", hex: "#e8e8e8" }] },
  translucent: { nazev: "PLA Translucent", priplatek: 0, barvy: [{ jmeno: "Clear", hex: "#e0f7fa" }, { jmeno: "Cyan", hex: "#00ffff" }] },
  silk: { nazev: "PLA Silk", priplatek: 100, barvy: [{ jmeno: "Gold", hex: "#d4af37" }, { jmeno: "Silver", hex: "#c0c0c0" }, { jmeno: "Copper", hex: "#b87333" }] },
  galaxy: { nazev: "PLA Galaxy", priplatek: 100, barvy: [{ jmeno: "Meteorite Black", hex: "#1a1a2e" }, { jmeno: "Nebula Purple", hex: "#4a1c40" }] },
  metal: { nazev: "PLA Metal", priplatek: 100, barvy: [{ jmeno: "Iron Gray", hex: "#4f4f4f" }, { jmeno: "Iridium Gold", hex: "#b5a642" }] },
  glow: { nazev: "PLA Glow", priplatek: 100, barvy: [{ jmeno: "Glow Green", hex: "#ccffcc" }, { jmeno: "Glow Pink", hex: "#ffccff" }] },
  sparkle: { nazev: "PLA Sparkle", priplatek: 100, barvy: [{ jmeno: "Sparkle Black", hex: "#1c1c1c" }, { jmeno: "Sparkle Red", hex: "#8b0000" }] },
  cf: { nazev: "PLA-CF (Karbon)", priplatek: 200, barvy: [{ jmeno: "Carbon Black", hex: "#151515" }, { jmeno: "Lava Grey", hex: "#3b3b3b" }, { jmeno: "Burgundy Red", hex: "#4a0404" }] }
};

type KonfiguraceDilu = {
  kategorie: string;
  barvaIndex: number;
};

export default function Configurator() {
  const [upravovanyDil, setUpravovanyDil] = useState<string>("hlavni");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [dily, setDily] = useState<Record<string, KonfiguraceDilu>>({
    hlavni: { kategorie: "matte", barvaIndex: 0 },
    rozsireni1: { kategorie: "matte", barvaIndex: 0 },
  });

  const zakladniCenaTacu = 690;
  const zakladniCenaRozsireni = 200;

  const toggleRozsireni = (id: string) => {
    if (dily[id]) {
      const noveDily = { ...dily };
      delete noveDily[id];
      setDily(noveDily);
      if (upravovanyDil === id) setUpravovanyDil("hlavni");
    } else {
      setDily({ ...dily, [id]: { kategorie: "matte", barvaIndex: 0 } });
      setUpravovanyDil(id);
    }
  };

  const zmenitKategorii = (klic: string) => {
    setDily({
      ...dily,
      [upravovanyDil]: { kategorie: klic, barvaIndex: 0 }
    });
  };

  const zmenitBarvu = (index: number) => {
    setDily({
      ...dily,
      [upravovanyDil]: { ...dily[upravovanyDil], barvaIndex: index }
    });
  };

  let celkovaCena = zakladniCenaTacu;
  let pocetRozsireni = 0;

  Object.entries(dily).forEach(([id, config]) => {
    const priplatekMaterialu = materialyData[config.kategorie].priplatek;
    if (id === "hlavni") {
      celkovaCena += priplatekMaterialu;
    } else {
      pocetRozsireni++;
      celkovaCena += zakladniCenaRozsireni + (priplatekMaterialu / 2);
    }
  });

  const aktivniConfig = dily[upravovanyDil];
  const aktivniKategorie = aktivniConfig.kategorie;
  const aktivniBarva = materialyData[aktivniKategorie].barvy[aktivniConfig.barvaIndex];

  const nazvyDilu: Record<string, string> = {
    hlavni: "Hlavní tác A",
    rozsireni1: "Základní rozšíření",
    rozsireni2: "Přídavné rozšíření 2",
    rozsireni3: "Přídavné rozšíření 3",
  };

  return (
    <main className="min-h-screen bg-background text-foreground pb-20 selection:bg-gray-200 selection:text-black">
      
      {/* HORNÍ NAVIGACE */}
      <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-headline text-titanium font-extrabold tracking-widest text-xl hover:text-gray-500 transition-colors">
            POLYMERO
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/" className="text-xs text-titanium-muted hover:text-black font-medium uppercase tracking-widest transition-colors flex items-center gap-2">
              <span>←</span> Zpět na úvod
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-32 px-6 max-w-7xl mx-auto">
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-titanium mb-12 tracking-tight">Sestavte si svůj set</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEVÁ STRANA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="aspect-video bg-gray-50 rounded-3xl border border-gray-200 flex items-center justify-center shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent opacity-50 z-10"></div>
              
              <div className="flex w-full h-full opacity-60">
                <div 
                  className="h-full transition-colors duration-500" 
                  style={{ 
                    backgroundColor: materialyData[dily["hlavni"].kategorie].barvy[dily["hlavni"].barvaIndex].hex,
                    width: `${100 / (pocetRozsireni + 1)}%` 
                  }}
                ></div>
                {Object.entries(dily).filter(([id]) => id !== "hlavni").map(([id, config]) => (
                  <div 
                    key={id}
                    className="h-full border-l border-white/50 transition-colors duration-500" 
                    style={{ 
                      backgroundColor: materialyData[config.kategorie].barvy[config.barvaIndex].hex,
                      width: `${100 / (pocetRozsireni + 1)}%`
                    }}
                  ></div>
                ))}
              </div>

              {/* Informační štítek na fotce */}
              <div className="absolute bottom-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl border border-gray-200 shadow-lg max-w-md w-full">
                 <p className="text-black font-semibold text-xs tracking-wide mb-1 text-center uppercase">Aktuální konfigurace</p>
                 <div className="space-y-1 text-sm text-center">
                    <p><span className="text-gray-500">Hlavní:</span> {materialyData[dily["hlavni"].kategorie].nazev} ({materialyData[dily["hlavni"].kategorie].barvy[dily["hlavni"].barvaIndex].jmeno})</p>
                    {Object.entries(dily).filter(([id]) => id !== "hlavni").map(([id, config], idx) => (
                      <p key={id}><span className="text-gray-500">Rozšíření {idx+1}:</span> {materialyData[config.kategorie].nazev} ({materialyData[config.kategorie].barvy[config.barvaIndex].jmeno})</p>
                    ))}
                 </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h4 className="font-headline text-titanium font-bold mb-3 text-lg">Ke každému setu v balení:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-titanium-muted">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: materialyData[dily["hlavni"].kategorie].barvy[dily["hlavni"].barvaIndex].hex }}></div> Pěchovadlo (Poker)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: materialyData[dily["hlavni"].kategorie].barvy[dily["hlavni"].barvaIndex].hex }}></div> Klíčenka POLYMERO
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: materialyData[dily["hlavni"].kategorie].barvy[dily["hlavni"].barvaIndex].hex }}></div> Sběrná karta
                </li>
              </ul>
            </div>
          </div>

          {/* PRAVÁ STRANA */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Výběr dílů sestavy */}
            <div>
              <h3 className="font-headline text-xl font-bold text-titanium mb-4">1. Díly ve vašem setu</h3>
              <p className="text-sm text-titanium-muted mb-3 font-light">Základní set obsahuje Hlavní tác a 1 Rozšíření.</p>
              
              <div className="space-y-3">
                <div className="flex gap-2">
                  <button onClick={() => setUpravovanyDil("hlavni")} className={`flex-1 px-3 py-3 rounded-xl text-sm font-semibold transition-colors shadow-sm ${upravovanyDil === "hlavni" ? "bg-black text-white" : "bg-gray-50 text-gray-600 border border-gray-200 hover:border-gray-400"}`}>
                    Hlavní tác
                  </button>
                  <button onClick={() => setUpravovanyDil("rozsireni1")} className={`flex-1 px-3 py-3 rounded-xl text-sm font-semibold transition-colors shadow-sm ${upravovanyDil === "rozsireni1" ? "bg-black text-white" : "bg-gray-50 text-gray-600 border border-gray-200 hover:border-gray-400"}`}>
                    Rozšíření 1
                  </button>
                </div>

                <div className="flex gap-2">
                  <button onClick={() => toggleRozsireni("rozsireni2")} className={`flex-1 px-3 py-2 rounded-xl text-xs font-semibold transition-colors shadow-sm ${dily["rozsireni2"] ? (upravovanyDil === "rozsireni2" ? "bg-gray-200 text-black border border-gray-300" : "bg-gray-50 text-gray-600 border border-gray-200") : "bg-transparent text-gray-400 border border-dashed border-gray-300 hover:border-gray-400"}`}>
                    {dily["rozsireni2"] ? (upravovanyDil === "rozsireni2" ? "Upravit Rozšíření 2" : "✓ Rozšíření 2 (Klikni pro úpravu)") : "+ Přidat Rozšíření 2"}
                  </button>
                  {dily["rozsireni2"] && (
                    <button onClick={() => toggleRozsireni("rozsireni2")} className="px-3 py-2 text-red-500 hover:bg-red-50 rounded-xl text-xs font-bold transition-colors border border-transparent hover:border-red-200">✕</button>
                  )}
                </div>

                <div className="flex gap-2">
                  <button onClick={() => toggleRozsireni("rozsireni3")} className={`flex-1 px-3 py-2 rounded-xl text-xs font-semibold transition-colors shadow-sm ${dily["rozsireni3"] ? (upravovanyDil === "rozsireni3" ? "bg-gray-200 text-black border border-gray-300" : "bg-gray-50 text-gray-600 border border-gray-200") : "bg-transparent text-gray-400 border border-dashed border-gray-300 hover:border-gray-400"}`}>
                    {dily["rozsireni3"] ? (upravovanyDil === "rozsireni3" ? "Upravit Rozšíření 3" : "✓ Rozšíření 3 (Klikni pro úpravu)") : "+ Přidat Rozšíření 3"}
                  </button>
                   {dily["rozsireni3"] && (
                    <button onClick={() => toggleRozsireni("rozsireni3")} className="px-3 py-2 text-red-500 hover:bg-red-50 rounded-xl text-xs font-bold transition-colors border border-transparent hover:border-red-200">✕</button>
                  )}
                </div>

              </div>
            </div>

            {/* KATEGORIE A BARVY */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-end mb-5">
                <h3 className="font-headline text-lg font-bold text-titanium">
                  Barva pro: <span className="text-gray-500 font-medium">{nazvyDilu[upravovanyDil]}</span>
                </h3>
                {materialyData[aktivniKategorie].priplatek > 0 && (
                  <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-1 rounded-md border border-amber-200">
                    + Prémiový materiál
                  </span>
                )}
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mb-6">
                {Object.entries(materialyData).map(([klic, data]) => (
                  <button
                    key={klic}
                    onClick={() => zmenitKategorii(klic)}
                    className={`px-2 py-2 border rounded-lg text-xs font-semibold transition-all ${aktivniKategorie === klic ? "bg-black text-white border-black shadow-md" : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:bg-gray-50"}`}
                  >
                    {data.nazev}
                  </button>
                ))}
              </div>

              <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-inner">
                <p className="text-gray-500 text-sm mb-3">Vyberte odstín: <strong className="text-black">{aktivniBarva.jmeno}</strong></p>
                <div className="flex flex-wrap gap-4">
                  {materialyData[aktivniKategorie].barvy.map((barva, index) => (
                    <button
                      key={index}
                      onClick={() => zmenitBarvu(index)}
                      className={`w-10 h-10 rounded-full transition-all duration-200 ${aktivniBarva.jmeno === barva.jmeno ? "ring-2 ring-black ring-offset-2 ring-offset-white scale-110 shadow-lg" : "border border-gray-300 hover:scale-105 opacity-80 hover:opacity-100"}`}
                      style={{ backgroundColor: barva.hex }}
                      title={barva.jmeno}
                    ></button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sumář a Platba (Sticky na mobilech) */}
            <div className="sticky bottom-0 lg:static left-0 w-full bg-white/95 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-6 lg:p-0 border-t border-gray-200 lg:border-none z-30 mt-8 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] lg:shadow-none">
              <div className="flex justify-between items-center mb-4 lg:mb-6">
                <span className="text-gray-500 text-sm lg:text-lg font-medium">Celková cena setu</span>
                <span className="font-headline text-3xl lg:text-4xl font-extrabold text-black transition-all duration-300">{celkovaCena} Kč</span>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full py-4 lg:py-5 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all duration-300 text-lg shadow-xl hover:shadow-2xl"
              >
                Přejít k platbě
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* MODAL (VYSKAKOVACÍ OKNO OBJEDNÁVKY) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-gray-200 flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
              <div>
                <h2 className="font-headline text-2xl font-bold text-titanium">Dokončení objednávky</h2>
                <p className="text-sm text-gray-500 mt-1">Celková částka: <strong className="text-black">{celkovaCena} Kč</strong></p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6">
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">1. Kontaktní údaje</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Jméno a Příjmení</label>
                    <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" placeholder="Jan Novák" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">E-mailová adresa</label>
                    <input type="email" className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" placeholder="jan.novak@email.cz" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Telefonní číslo</label>
                    <input type="tel" className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" placeholder="+420 777 123 456" />
                  </div>
                </div>
              </div>

              {/* DOPRAVA */}
              <div className="pt-4 border-t border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">2. Způsob dopravy</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors has-[:checked]:border-black has-[:checked]:bg-gray-50">
                    <input type="radio" name="doprava" className="w-5 h-5 accent-black" defaultChecked />
                    <div>
                      <p className="font-semibold text-black text-sm">Zásilkovna (Na výdejní místo)</p>
                      <p className="text-xs text-gray-500">+ 79 Kč</p>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors has-[:checked]:border-black has-[:checked]:bg-gray-50">
                    <input type="radio" name="doprava" className="w-5 h-5 accent-black" />
                    <div>
                      <p className="font-semibold text-black text-sm">PPL Kurýr (Doručení na adresu)</p>
                      <p className="text-xs text-gray-500">+ 99 Kč</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 bg-white mt-auto">
               <button className="w-full py-4 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all duration-300 text-lg shadow-lg">
                Závazně objednat
              </button>
              <p className="text-center text-xs text-gray-400 mt-4">
                Odesláním souhlasíte s obchodními podmínkami a zpracováním osobních údajů.
              </p>
            </div>
            
          </div>
        </div>
      )}

    </main>
  );
}
import Link from "next/link";

export default function FAQPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-8 min-h-screen bg-background">
      <h1 className="text-4xl font-headline font-bold text-foreground mb-8">Jak to funguje?</h1>
      <p className="text-lg text-titanium-muted mb-8 max-w-2xl text-center">
        Systém POLYMERO využívá zapuštěné neodymové magnety pro bezpečné a uspokojivé propojení jednotlivých modulů. Každý díl je navržen s mikrometrickou přesností.
      </p>
      <Link href="/" className="px-8 py-4 border border-foreground text-foreground font-syne font-bold tracking-widest hover:bg-foreground hover:text-background transition-colors text-center text-sm">
        ZPĚT NA HLAVNÍ STRANU
      </Link>
    </main>
  );
}
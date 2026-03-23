import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <HeroSection />
      </main>

      {/* Bottom bar */}
      <footer className="flex items-center justify-between px-10 pb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background">
          <span className="text-sm font-bold">N</span>
        </div>
        <a
          href="https://panda.new"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 rounded-full border border-border bg-background px-4 py-2 shadow-sm transition-colors hover:bg-muted"
        >
          <span className="text-lg">🐼</span>
          <span className="flex flex-col leading-tight">
            <span className="text-[11px] text-muted-foreground">Built with</span>
            <span className="text-sm font-semibold text-foreground">Panda</span>
          </span>
        </a>
      </footer>
    </div>
  );
}

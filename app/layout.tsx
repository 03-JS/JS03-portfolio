import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ColorBends from '@/components/ColorBends';
import Link from "next/link";
import { TooltipProvider } from "@/components/ui/tooltip"

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JS03",
  description: "Website focused on the multi-platform open source software developer called JS03, acting as a sort of portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-mono", jetbrainsMono.variable)}
    >
      <body className="min-h-full flex flex-col items-center bg-black text-white font-sans">
        <div className="fixed inset-0 h-screen w-screen overflow-hidden">
          <ColorBends
            colors={["#C9080E", "#C9080E", "#C9080E"]}
            rotation={90}
            speed={0.2}
            scale={1}
            frequency={1}
            warpStrength={1}
            mouseInfluence={1}
            noise={0.15}
            parallax={0.5}
            iterations={1}
            intensity={1.5}
            bandWidth={3}
            transparent
            autoRotate={0}
          />
          {/* <SideRays
            speed={2.5}
            rayColor1="#7C3AED"
            rayColor2="#C9080E"
            intensity={2}
            spread={2}
            origin="top-left"
            tilt={0}
            saturation={1.5}
            blend={0.75}
            falloff={1.6}
            opacity={1}
          /> */}
        </div>
        <header className="glass-element border-t-0 border-l-0 border-r-0 rounded-none fixed top-0 w-screen h-16 flex justify-end gap-x-10 items-center pointer-events-none z-1">
          <Link href="/" className="nav-text">Home</Link>
          <Link href="/projects" className="nav-text">Projects</Link>
          {/* <Link href="/contact" className="nav-text">Contact</Link> */}
          {/* <Link href="/contact" className="nav-text">About me</Link> */}
          <Link href="https://ko-fi.com/js033" target="_blank" className="flex gap-x-2 justify-center items-center pointer-events-auto bg-[#72a4f2]/50 hover:bg-[#72a4f2]/75 hover:scale-105 transition-all duration-300 rounded-sm p-2 font-bold border border-white/20"><img src="/kofi_symbol.png" alt="ko-fi icon" className="w-6" />Support me on Ko-fi</Link>
        </header>
        <main className="z-0 min-h-screen flex flex-col pointer-events-none">
          <TooltipProvider>{children}</TooltipProvider>
        </main>
      </body>
    </html>
  );
}

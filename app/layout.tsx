import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ColorBends from '@/components/ColorBends';
import Link from "next/link";
import { TooltipProvider } from "@/components/ui/tooltip";

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
      <body className="min-h-full flex flex-col items-center bg-black text-white font-sans overflow-x-hidden" cz-shortcut-listen="true">
        <div className="fixed inset-0 h-screen w-screen overflow-hidden">
          <ColorBends
            colors={["#ec003f", "#ec003f", "#ec003f"]}
            speed={0.2}
            frequency={1}
            noise={0}
            bandWidth={3}
            rotation={90}
            iterations={3}
            intensity={2}
            autoRotate={1}
            className="animate-fade-in animate-duration-750"
          />
        </div>
        <header className="glass-element border-t-0 border-l-0 border-r-0 rounded-none fixed top-0 w-screen h-18 flex justify-between gap-x-10 items-center z-1 font-bold animate-fade-in-down animate-duration-600">
          <a href="/" className="flex gap-x-3 items-center justify-center p-2 rounded-lg red-background-swipe">
            <img src="https://avatars.githubusercontent.com/u/107844615?v=4" className="w-10 h-10 rounded-full" />
            JS03
          </a>
          <div className="flex gap-x-6 items-center justify-center">
            <a href="#projects" className="nav-text red-background-swipe rounded-lg p-2">Projects</a>
            <a href="#videos" className="nav-text red-background-swipe rounded-lg p-2">Videos</a>
            <a href="#contact" className="nav-text red-background-swipe rounded-lg p-2">Contact</a>
          </div>
        </header>
        <main className="z-0 min-h-screen flex flex-col justify-center items-center gap-y-8 mt-5 mb-8 w-screen p-0">
          <TooltipProvider>{children}</TooltipProvider>
        </main>
      </body>
    </html>
  );
}

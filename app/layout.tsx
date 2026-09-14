import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ColorBends from '@/components/ColorBends';
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
  title: "JS03 - Software developer",
  description: "Software developer with a passion for gaming, modding and game development. This is my own personal website!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-mono", jetbrainsMono.variable)}
    >
      <body className="theme-ec-irumi min-h-full flex flex-col items-center bg-black text-white font-sans overflow-x-hidden" cz-shortcut-listen="true">
        <div className="fixed inset-0 h-screen w-screen overflow-hidden">
          <ColorBends
            // colors={["#ec003f", "#ec003f", "#ec003f"]} // Opera theme
            colors={["#7008e7", "#7008e7", "#7008e7"]} // Irumi purple theme
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
        <header className="glass-element border-t-0 border-l-0 border-r-0 rounded-none fixed top-0 w-full h-18 flex justify-between gap-x-4 sm:gap-x-10 items-center z-50 font-bold px-2 sm:px-8">
          <a href="/" className="flex gap-x-3 items-center justify-center p-2 rounded-lg red-background-swipe shrink-0 text-sm sm:text-base">
            <img src="https://avatars.githubusercontent.com/u/107844615?v=4" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" alt="JS03 Avatar" />
            JS03
          </a>
          <div className="flex gap-x-1.5 sm:gap-x-6 items-center justify-center text-xs sm:text-base">
            <a href="#projects" className="nav-text red-background-swipe rounded-lg p-1.5 sm:p-2">Projects</a>
            <a href="#videos" className="nav-text red-background-swipe rounded-lg p-1.5 sm:p-2">Videos</a>
            <a href="#contact" className="nav-text red-background-swipe rounded-lg p-1.5 sm:p-2">Contact</a>
          </div>
        </header>
        <main className="z-0 min-h-screen flex flex-col justify-center items-center gap-y-8 mt-5 mb-8 w-screen 3xl:p-0">
          <TooltipProvider>{children}</TooltipProvider>
        </main>
      </body>
    </html >
  );
}

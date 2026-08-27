import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ColorBends from '@/components/ColorBends';
import DotGrid from '@/components/DotGrid';

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
      <body className="min-h-full flex flex-col bg-black text-white">
        <div className="fixed inset-0 h-screen w-screen overflow-hidden -z-10 blur-2xl">
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
        </div>
        <div className="fixed inset-0 h-screen w-screen overflow-hidden">
          <DotGrid
            dotSize={5}
            gap={15}
            baseColor="#1c1c1c"
            activeColor="#C9080E"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <main className="z-0">
          {children}
        </main>
      </body>
    </html>
  );
}

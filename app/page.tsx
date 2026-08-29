import Image from "next/image";
import AnimatedContent from "@/components/AnimatedContent";
import StrokeText from "@/components/StrokeText";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <AnimatedContent className="flex justify-center items-center w-screen p-0" distance={600} direction="vertical" duration={1.15} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={.1} delay={0}>
        <div className="glass-element pt-12 pb-12 w-fit max-w-3/4 flex flex-row justify-center items-center gap-x-12">
          <img src="https://avatars.githubusercontent.com/u/107844615?v=4" alt="pfp" className="border-2 border-white/20 shadow-accent rounded-full w-86" />
          <div className="flex flex-col justify-center">
            <span className="text-8xl font-bold">Hi! I'm JS03</span>
            <p className="mt-3 text-xl text-white/80 w-full">
              Though most people just call me JS.
            </p>
            <p className="mt-3 text-xl text-white/80 w-full">
              I'm a software developer with a passion for gaming, modding and game development. I have been developing mods and creating other related content for games such as <span className="font-bold">Lethal Company</span> and <span className="font-bold">Minecraft</span> since 2019, some of which has been downloaded by hundreds of thousands of users around the world!
            </p>
            <p className="mt-3 text-xl text-white/80 w-full">
              I have also made a couple of games in my free time using the <span className="font-bold">Godot</span> and <span className="font-bold">Unity</span> game engines, which you can check out in the <Link href="/projects" className="pointer-events-auto text-blue-500 font-bold hover:text-[#C9080E] transition-all duration-300">Projects</Link> page.
            </p>
            <p className="mt-3 text-xl text-white/80 w-full">
              And last but not least, I have a <Link href="https://www.youtube.com/@JS03" target="_blank" className="pointer-events-auto text-blue-500 font-bold hover:text-[#C9080E] transition-all duration-300">YouTube channel</Link> with over 2.7k subscribers in which I occasionally upload content related to things I like, such as Minecraft shader comparisons or showcases or DOOM soundtrack game rips that I make in my free time.
            </p>
          </div>
        </div >
      </AnimatedContent>
    </>
  );
}

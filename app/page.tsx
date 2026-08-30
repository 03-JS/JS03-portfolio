import AnimatedContent from "@/components/AnimatedContent";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Home() {
  return (
    <>
      <AnimatedContent className="flex justify-center mt-26 w-screen p-0" distance={1000} direction="vertical" duration={1.15} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={.1} delay={0}>
        <div className="glass-element pt-12 pb-12 w-fit max-w-3/4 flex flex-row items-start gap-x-12">
          <img src="https://avatars.githubusercontent.com/u/107844615?v=4" alt="pfp" className="border-2 border-white/20 shadow-accent rounded-full w-86" />
          <div className="flex flex-col justify-center">
            <p className="text-8xl font-bold">Hi! I'm JS03</p>
            <p className="mt-3 text-xl text-white/80 w-full">
              Though most people just call me JS.
            </p>
            <p className="mt-3 text-xl text-white/80 w-full">
              I'm a software developer with a passion for gaming, modding and game development. I have been developing mods and creating other related content for games such as <span className="font-bold">Lethal Company</span> and <span className="font-bold">Minecraft</span> since 2019, some of which has been downloaded by hundreds of thousands of users around the world!
            </p>
            <p className="mt-3 text-xl text-white/80 w-full">
              I have also made a couple of games in my free time using the <span className="font-bold">Godot</span> and <span className="font-bold">Unity</span> game engines, which you can check out below or in the <Link href="/projects" className="pointer-events-auto text-blue-500 font-bold hover:text-[#C9080E] transition-all duration-300">Projects</Link> page.
            </p>
            <p className="mt-3 text-xl text-white/80 w-full">
              And last but not least, I have a <Link href="https://www.youtube.com/@JS03" target="_blank" className="pointer-events-auto text-blue-500 font-bold hover:text-[#C9080E] transition-all duration-300">YouTube channel</Link> with over 2.7k subscribers in which I occasionally upload content related to things I like, such as Minecraft shader comparisons or showcases or DOOM soundtrack game rips that I make in my free time.
            </p>
            <div className="flex gap-x-6 mt-10">
              <Tooltip>
                <Link href="https://github.com/03-JS" target="_blank"><TooltipTrigger className="pointer-events-auto cursor-pointer bg-white/10 hover:bg-white/25 border border-white/20 rounded-xl w-fit p-3 transition-all duration-300"><img className="w-9" src="/github-white-icon.webp" alt="github icon" /></TooltipTrigger></Link>
                <TooltipContent className="rounded-lg font-bold text-sm">
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <Link href="https://thunderstore.io/c/lethal-company/p/JS03/?ordering=most-downloaded" target="_blank"><TooltipTrigger className="pointer-events-auto cursor-pointer bg-[#14B3CB]/20 hover:bg-[#14B3CB]/35 border border-white/20 rounded-xl w-fit p-3 transition-all duration-300"><img className="w-9" src="/thunderstore_icon.png" alt="thunderstore icon" /></TooltipTrigger></Link>
                <TooltipContent className="rounded-lg font-bold text-sm">
                  <p>Thunderstore</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <Link href="https://modrinth.com/user/JS03" target="_blank"><TooltipTrigger className="pointer-events-auto cursor-pointer bg-[#1bd96a]/20 hover:bg-[#1bd96a]/35 border border-white/20 rounded-xl w-fit p-3 transition-all duration-300"><img className="w-9" src="/Modrinth_Logo.webp" alt="modrinth icon" /></TooltipTrigger></Link>
                <TooltipContent className="rounded-lg font-bold text-sm">
                  <p>Modrinth</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <Link href="https://www.curseforge.com/members/js03/projects" target="_blank"><TooltipTrigger className="pointer-events-auto cursor-pointer bg-[#FF784D]/20 hover:bg-[#FF784D]/35 border border-white/20 rounded-xl w-fit p-3 transition-all duration-300"><img className="w-9" src="/CurseForge_icon.svg" alt="curse icon" /></TooltipTrigger></Link>
                <TooltipContent className="rounded-lg font-bold text-sm">
                  <p>CurseForge</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <Link href="https://itch.io/profile/js03" target="_blank"><TooltipTrigger className="pointer-events-auto cursor-pointer bg-[#FA5252]/20 hover:bg-[#FA5252]/35 border border-white/20 rounded-xl w-fit p-3 transition-all duration-300"><img className="w-9" src="/itch-io.png" alt="itch.io icon" /></TooltipTrigger></Link>
                <TooltipContent className="rounded-lg font-bold text-sm">
                  <p>itch.io</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <Link href="https://gamejolt.com/@JS03" target="_blank"><TooltipTrigger className="pointer-events-auto cursor-pointer bg-[#2F7F6F]/20 hover:bg-[#2F7F6F]/35 border border-white/20 rounded-xl w-fit p-3 transition-all duration-300"><img className="w-9" src="/gamejolt_icon.png" alt="game jolt icon" /></TooltipTrigger></Link>
                <TooltipContent className="rounded-lg font-bold text-sm">
                  <p>Game Jolt</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <Link href="https://www.youtube.com/@JS03" target="_blank"><TooltipTrigger className="pointer-events-auto cursor-pointer bg-[#ff0000]/20 hover:bg-[#ff0000]/35 border border-white/20 rounded-xl w-fit p-3 transition-all duration-300"><img className="w-9" src="/youtube_icon.png" alt="youtube icon" /></TooltipTrigger></Link>
                <TooltipContent className="rounded-lg font-bold text-sm">
                  <p>YouTube</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <Link href="https://discord.gg/myZrktknah" target="_blank"><TooltipTrigger className="pointer-events-auto cursor-pointer bg-[#5665ED]/20 hover:bg-[#5665ED]/35 border border-white/20 rounded-xl w-fit p-3 transition-all duration-300"><img className="w-9" src="/discord-white-icon.webp" alt="discord icon" /></TooltipTrigger></Link>
                <TooltipContent className="rounded-lg font-bold text-sm">
                  <p>Discord</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div >
      </AnimatedContent>
    </>
  );
}

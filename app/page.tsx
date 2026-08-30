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
      <AnimatedContent className="flex flex-col justify-center items-center gap-y-8 mt-26 w-screen p-0" distance={1000} direction="vertical" duration={1.15} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={.1} delay={0}>
        <div className="glass-element pt-12 pb-12 w-fit max-w-3/4 flex flex-row items-start gap-x-12">
          <img src="https://avatars.githubusercontent.com/u/107844615?v=4" alt="pfp" className="border-2 border-white/20 shadow-accent rounded-full w-86 h-86" />
          <div className="flex flex-col justify-center">
            <p className="text-8xl font-bold">Hi! I'm JS03</p>
            <p className="mt-3 text-xl text-white/80 w-full">
              Though most people just call me JS.
            </p>
            <p className="mt-3 text-xl text-white/80 w-full">
              I'm a software developer with a passion for gaming, modding and game development. I have been creating content related to video games since 2018, some of which has been downloaded and/or viewed by millions of people around the world!
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
        <div className="glass-element w-3/4 max-w-3/4 flex flex-col gap-y-6">
          <p className="font-bold text-4xl mb-4">Projects</p>
          <div className="grid grid-cols-2 gap-6">
            <Link href="/projects/LC-VEGA" className="items-center h-fit flex gap-x-6 pointer-events-auto bg-blue-400/35 hover:bg-blue-400/50 border border-white/20 w-full p-6 rounded-xl transition-all duration-300 cursor-pointer">
              <img src="/VEGA_icon.png" alt="VEGA icon" className="w-32 h-32 rounded-xl border border-white/20" />
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-x-[0.35rem] items-center">
                  <img src="/lethal_icon.jpg" alt="minecraft icon" className="w-6 h-6 border border-white/20 rounded-sm" />
                  <span className="text-white/60 text-sm">Lethal Company mod</span>
                </div>
                <p className="font-bold text-xl">LC-VEGA</p>
                <p className="text-white/80 text-md">A <span className="font-bold">Lethal Company</span> mod that adds VEGA, a sentient AI from DOOM (2016) and DOOM Eternal. The mod uses <span className="font-bold">SpeechRecognitionAPI</span> to implement voice commands with which you can ask VEGA to do almost anything within the game. VEGA is also capable of doing some actions on his own.</p>
              </div>
            </Link>
            <Link href="/projects/SpeechRecognitionAPI" className="items-center h-fit flex gap-x-6 pointer-events-auto bg-pink-400/35 hover:bg-pink-400/50 border border-white/20 w-full p-6 rounded-xl transition-all duration-300 cursor-pointer">
              <img src="/speech_icon.png" alt="srapi icon" className="w-32 h-32 rounded-xl" />
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-x-[0.35rem] items-center">
                  <img src="/lethal_icon.jpg" alt="minecraft icon" className="w-6 h-6 border border-white/20 rounded-sm" />
                  <span className="text-white/60 text-sm">Lethal Company API</span>
                </div>
                <p className="font-bold text-xl">SpeechRecognitionAPI</p>
                <p className="text-white/80 text-md"><span className="font-bold">VOSK</span> based automatic speech recognition API for <span className="font-bold">Lethal Company</span>. Allows for real time transcription and voice commands. Developers can use it to build their own features, such as adding voice commands or real time speech transcription.</p>
              </div>
            </Link>
            <Link href="/projects/EEC" className="items-center h-fit flex gap-x-6 pointer-events-auto bg-purple-500/35 hover:bg-purple-500/50 border border-white/20 w-full p-6 rounded-xl transition-all duration-300 cursor-pointer">
              <img src="/eec_icon.png" alt="EEC icon" className="w-32 h-32 rounded-xl border border-white/20" />
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-x-[0.35rem] items-center">
                  <img src="/minecraft_icon.webp" alt="minecraft icon" className="w-5 h-5 border border-white/20" />
                  <span className="text-white/60 text-sm">Minecraft mod</span>
                </div>
                <p className="font-bold text-xl">Extra Enchantments & Curses</p>
                <p className="text-white/80 text-md">This mod adds 25 new Enchantments and 9 new Curses to Minecraft, all with their own unique quirks, uses and mechanics.</p>
              </div>
            </Link>
            <Link href="/projects/FNaF-Rewired" className="items-center h-fit flex gap-x-6 pointer-events-auto bg-[#ff0000]/35 hover:bg-[#ff0000]/50 border border-white/20 w-full p-6 rounded-xl transition-all duration-300 cursor-pointer">
              <img src="/FNaF Rewired Icon 2.png" alt="FNaF:R icon" className="w-32 h-32 rounded-xl border border-white/20" />
              <div className="flex flex-col gap-y-3">
                <p className="font-bold text-xl">Five Nights at Freddy's Rewired</p>
                <p className="text-white/80 text-md">​Five Nights at Freddy's Rewired​ is a re-imagining of the original Five Nights at Freddy's game that features an actual 3D environment, new mechanics, easter eggs and more.</p>
              </div>
            </Link>
          </div>
          <Link href="/projects" className="flex mt-2 w-fit text-xl font-bold self-center items-center justify-center pointer-events-auto text-blue-500 hover:text-[#C9080E] hover:scale-105 transition-all duration-300">View all projects</Link>
        </div>
        <div className="glass-element w-3/4 max-w-3/4 flex flex-col gap-y-6 mb-8">
          <p className="font-bold text-4xl mb-4">Contact</p>
          <p className="text-white/80 text-xl">You can get in contact with me through my email at <Link href="mailto:pyjoso3vitaslim@gmail.com" className="text-blue-500 font-bold pointer-events-auto hover:text-[#C9080E] transition-all duration-300 hover:scale-105">pyjoso3vitaslim@gmail.com</Link> or through my <Link href="https://discord.com/users/544234654203379727" className="text-blue-500 font-bold pointer-events-auto hover:text-[#C9080E] transition-all duration-300 hover:scale-105">Discord</Link>.</p>
        </div>
      </AnimatedContent>
    </>
  );
}

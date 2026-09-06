import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Home() {
  return (
    <>
      <section id="home" className="flex justify-center items-center w-full">
        <div className="glass-element p-10 w-[80%] flex flex-row items-start justify-center gap-x-8">
          <img src="https://avatars.githubusercontent.com/u/107844615?v=4" className="border-2 border-white/20 shadow-accent rounded-4xl w-82 h-82" />
          <div className="flex flex-col justify-center w-full">
            <p className="text-7xl font-bold">Hi! I'm JS03</p>
            <p className="mt-3 text-xl text-white/80">
              Though most people just call me JS.
            </p>
            <p className="mt-3 text-xl text-white/80">
              I'm a software developer with a passion for gaming, modding and game development. I have been creating content related to video games since 2018, some of which has been downloaded and/or viewed by millions of people around the world!
            </p>
            <p className="mt-3 text-xl text-white/80">
              I have also made a couple of games in my free time using the <span className="font-bold">Godot</span> and <span className="font-bold">Unity</span> game engines, which you can check out below.
            </p>
            <p className="mt-3 text-xl text-white/80">
              And last but not least, I have a <Link href="https://www.youtube.com/@JS03" target="_blank" className="pointer-events-auto text-blue-500 font-bold hover:text-[#C9080E] transition-all duration-300">YouTube channel</Link> with over 2.7k subscribers in which I occasionally upload content related to things I like, such as Minecraft shader comparisons or showcases or DOOM soundtrack game rips that I make in my free time.
            </p>
            <div className="flex gap-x-6 mt-10">
              <Link href="https://ko-fi.com/js033" target="_blank" className="flex gap-x-2 justify-center items-center pointer-events-auto bg-[#72a4f2] shadow-[0px_0px_15px_rgba(114,164,242,1)] hover:shadow-[0px_0px_25px_rgba(114,164,242,1)] hover:scale-105 transition-all duration-300 rounded-sm p-2 font-bold border border-white/20 text-lg"><img src="/kofi_symbol.png" alt="ko-fi icon" className="w-12" />Support me on Ko-fi</Link>
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
      </section>
      <section id="projects" className="flex justify-center items-center w-full">
        <div className="glass-element w-[80%] flex flex-col gap-y-6">
          <p className="font-bold text-4xl mb-4">Projects</p>
          <div className="grid grid-cols-3 gap-6">
            <Link href="" className="items-center flex gap-x-6 pointer-events-auto bg-blue-400/35 hover:bg-blue-400/50 border border-white/20 w-full p-6 rounded-xl transition-all duration-300 cursor-pointer">
              <img src="/VEGA_icon.png" alt="" className="w-32 h-32 rounded-xl border border-white/20" />
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-x-[0.35rem] items-center">
                  <img src="/lethal_icon.jpg" alt="" className="w-6 h-6 border border-white/20 rounded-sm" />
                  <span className="text-white/60 text-xs">Lethal Company mod</span>
                </div>
                <p className="font-bold text-xl">LC-VEGA</p>
                <p className="text-white/80 text-sm">Adds VEGA, a sentient AI from DOOM (2016) and DOOM Eternal, to <span className="font-bold">Lethal Company</span>. The mod uses <span className="font-bold">SpeechRecognitionAPI</span> to implement voice commands with which you can ask VEGA to do almost anything within the game. VEGA is also capable of doing some actions on his own.</p>
              </div>
            </Link>
            <Link href="/projects/SpeechRecognitionAPI" className="items-center flex gap-x-6 pointer-events-auto bg-pink-400/35 hover:bg-pink-400/50 border border-white/20 w-full p-6 rounded-xl transition-all duration-300 cursor-pointer">
              <img src="/speech_icon.png" alt="" className="w-32 h-32 rounded-xl" />
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-x-[0.35rem] items-center">
                  <img src="/lethal_icon.jpg" alt="" className="w-6 h-6 border border-white/20 rounded-sm" />
                  <span className="text-white/60 text-xs">Lethal Company API</span>
                </div>
                <p className="font-bold text-xl">SpeechRecognitionAPI</p>
                <p className="text-white/80 text-sm"><span className="font-bold">VOSK</span> based automatic speech recognition API for <span className="font-bold">Lethal Company</span>. Allows for real time transcription and voice commands. Developers can use it to build their own features, such as adding voice commands or real time speech transcription.</p>
              </div>
            </Link>
            <Link href="/projects/FNaF-Rewired" className="items-center flex gap-x-6 pointer-events-auto bg-[#ff0000]/35 hover:bg-[#ff0000]/50 border border-white/20 w-full p-6 rounded-xl transition-all duration-300 cursor-pointer">
              <img src="/FNaF Rewired Icon 2.png" alt="" className="w-32 h-32 rounded-xl border border-white/20" />
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-x-[0.35rem] items-center">
                  <img src="/godot_icon.webp" alt="" className="w-6 h-6 border border-white/20 rounded-sm" />
                  <span className="text-white/60 text-xs">Godot game</span>
                </div>
                <p className="font-bold text-xl">Five Nights at Freddy's Rewired</p>
                <p className="text-white/80 text-sm">Five Nights at Freddy's Rewired is a re-imagining of the original Five Nights at Freddy's game that features an actual 3D environment, new mechanics, easter eggs and more.</p>
              </div>
            </Link>
            <Link href="/projects/Ultra-Nightmare" className="items-center flex gap-x-6 pointer-events-auto bg-amber-500/35 hover:bg-amber-500/50 border border-white/20 w-full p-6 rounded-xl transition-all duration-300 cursor-pointer">
              <img src="/ultra_icon.png" alt="" className="w-32 h-32 rounded-xl border border-white/20" />
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-x-[0.35rem] items-center">
                  <img src="/lethal_icon.jpg" alt="" className="w-6 h-6 border border-white/20 rounded-sm" />
                  <span className="text-white/60 text-xs">Lethal Company mod</span>
                </div>
                <p className="font-bold text-xl">Ultra-Nightmare</p>
                <p className="text-white/80 text-sm">Dead employees will only come back to life once the quota is met. If your entire crew dies, you'll get fired.</p>
              </div>
            </Link>
            <Link href="/projects/LethalDebt" className="items-center flex gap-x-6 pointer-events-auto bg-green-700/35 hover:bg-green-700/50 border border-white/20 w-full p-6 rounded-xl transition-all duration-300 cursor-pointer">
              <img src="/debt_icon.png" alt="" className="w-32 h-32 rounded-xl border border-white/20" />
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-x-[0.35rem] items-center">
                  <img src="/lethal_icon.jpg" alt="" className="w-6 h-6 border border-white/20 rounded-sm" />
                  <span className="text-white/60 text-xs">Lethal Company mod</span>
                </div>
                <p className="font-bold text-xl">LethalDebt</p>
                <p className="text-white/80 text-sm">Allows you to be financially irresponsible by letting you purchase things you can't afford, no matter how expensive.</p>
              </div>
            </Link>
            <Link href="/projects/KeepEnemyPower" className="items-center flex gap-x-6 pointer-events-auto bg-gray-600/35 hover:bg-gray-600/50 border border-white/20 w-full p-6 rounded-xl transition-all duration-300 cursor-pointer">
              <img src="/keep_icon.png" alt="" className="w-32 h-32 rounded-xl border border-white/20" />
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-x-[0.35rem] items-center">
                  <img src="/lethal_icon.jpg" alt="" className="w-6 h-6 border border-white/20 rounded-sm" />
                  <span className="text-white/60 text-xs">Lethal Company mod</span>
                </div>
                <p className="font-bold text-xl">Keep Enemy Power</p>
                <p className="text-white/80 text-sm">Prevents the current power level of a moon from going down when an enemy dies.</p>
              </div>
            </Link>
            <Link href="/projects/Extra-Enchantments-and-Curses" className="items-center flex gap-x-6 pointer-events-auto bg-purple-500/35 hover:bg-purple-500/50 border border-white/20 w-full p-6 rounded-xl transition-all duration-300 cursor-pointer">
              <img src="/eec_icon.png" alt="" className="w-32 h-32 rounded-xl border border-white/20" />
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-x-[0.35rem] items-center">
                  <img src="/minecraft_icon.webp" alt="" className="w-5 h-5 border border-white/20" />
                  <span className="text-white/60 text-xs">Minecraft mod</span>
                </div>
                <p className="font-bold text-xl">Extra Enchantments & Curses</p>
                <p className="text-white/80 text-sm">This mod adds 25 new Enchantments and 9 new Curses to Minecraft, all with their own unique quirks, uses and mechanics.</p>
              </div>
            </Link>
            <Link href="/projects/Minecraft-Classic-Edition" className="items-center flex gap-x-6 pointer-events-auto bg-white/35 hover:bg-white/50 border border-white/20 w-full p-6 rounded-xl transition-all duration-300 cursor-pointer">
              <img src="/mcce_icon.gif" alt="" className="w-32 h-32 rounded-xl border border-white/20" />
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-x-[0.35rem] items-center">
                  <img src="/minecraft_icon.webp" alt="" className="w-5 h-5 border border-white/20" />
                  <span className="text-white/60 text-xs">Minecraft resource pack</span>
                </div>
                <p className="font-bold text-xl">Minecraft: Classic Edition</p>
                <p className="text-white/80 text-sm">A resource pack that aims to bring back the classic feel of Minecraft.</p>
              </div>
            </Link>
            <Link href="/projects/ranDOOM" className="items-center flex gap-x-6 pointer-events-auto bg-gray-400/35 hover:bg-gray-400/50 border border-white/20 w-full p-6 rounded-xl transition-all duration-300 cursor-pointer">
              <img src="/ranDOOM_icon.png" alt="" className="w-41 h-32 rounded-xl border border-white/20" />
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-x-[0.35rem] items-center">
                  <img src="/unity_icon.png" alt="" className="w-[1.4rem] h-6 border border-white/20 rounded-sm" />
                  <span className="text-white/60 text-xs">Unity game</span>
                </div>
                <p className="font-bold text-xl">ranDOOM</p>
                <p className="text-white/80 text-sm">A blend between classic and modern DOOM with a bit of randomization added to it.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section id="videos" className="flex justify-center items-center w-full"></section>
      <section id="contact" className="flex justify-center items-center w-full">
        <div className="glass-element w-[80%] flex flex-col gap-y-6">
          <p className="font-bold text-4xl mb-4">Contact</p>
          <p className="text-white/80 text-xl">You can get in contact with me through my email at <Link href="mailto:pyjoso3vitaslim@gmail.com" className="text-blue-500 font-bold pointer-events-auto hover:text-[#C9080E] transition-all duration-300 hover:scale-105">pyjoso3vitaslim@gmail.com</Link> or through my <Link href="https://discord.com/users/544234654203379727" target="_blank" className="text-blue-500 font-bold pointer-events-auto hover:text-[#C9080E] transition-all duration-300 hover:scale-105">Discord</Link>.</p>
        </div>
      </section>
    </>
  );
}

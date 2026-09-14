"use client";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

export default function Home() {
  return (
    <>
      <section id="home" className="flex justify-center items-center w-full lg:h-screen scroll-mt-24 mt-20 lg:mt-0 lg:py-0">
        <div className="glass-element bg-black/70 p-0 w-[85%] max-w-6xl overflow-hidden lg:overflow-auto lg:max-w-[85%] h-fit flex flex-col gap-x-8 animate-fade-in-up animate-duration-1000 font-mono">
          <div className="glass-element border-t-0 border-l-0 border-r-0 rounded-br-none rounded-bl-none w-full h-fit flex justify-between p-4 relative top-0">
            <div className="flex gap-x-2 items-center justify-center">
              <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff6b6b]"></span>
              <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffd93d]"></span>
              <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#b7d86a]"></span>
            </div>
            <span className="text-xs lg:text-sm text-white/50">~/.profiles/js03</span>
          </div>
          <div className="flex flex-col w-full p-4 sm:p-6 lg:p-10 items-start gap-x-8 font-bold animate-fade-in animate-duration-600 animate-delay-600 mb-auto text-sm lg:text-base">
            <p className="text-blue-500">~</p>
            <p><span className="text-purple-500">{'>'}</span> fastfetch</p>
          </div>
          <div className="flex flex-col lg:flex-row w-full p-4 sm:p-8 md:p-10 items-center md:items-start gap-4 lg:gap-8 animate-fade-in-up animate-duration-600 animate-delay-800">
            <img src="https://avatars.githubusercontent.com/u/107844615?v=4" className="border-2 border-white/20 rounded-2xl w-44 lg:w-64 transition-all duration-400 hover:ring-2 active:ring-2 hover:ring-(--accent-gradient-to) active:ring-(--accent-gradient-to) hover:shadow-[0px_0px_25px_var(--accent-gradient-to)] active:shadow-[0px_0px_25px_var(--accent-gradient-to)] hover:border-black active:border-black" />
            <div className="flex flex-col justify-center w-full">
              <p className="text-2xl lg:text-5xl font-bold text-center lg:text-left">
                Hi! I'm JS03
              </p>
              <p className="mt-3 text-white/80 text-sm lg:text-base">
                Though most people just call me JS.
              </p>
              <p className="mt-3 text-white/80 text-sm lg:text-base">
                I'm a software developer with a passion for gaming, modding and game development. I have been creating content related to video games since 2018, some of which has been downloaded and/or viewed by millions of people around the world!
              </p>
              <p className="mt-3 text-white/80 text-sm lg:text-base">
                I have also made a couple of games in my free time using the <span className="font-bold">Godot</span> and <span className="font-bold">Unity</span> game engines, which you can check out below.
              </p>
              <p className="mt-3 text-white/80 text-sm lg:text-base">
                And last but not least, I have a <Link href="https://www.youtube.com/@JS03" target="_blank" className=" text-blue-500 font-bold hover:text-(--accent-gradient-to) active:text-(--accent-gradient-to) red-underline">YouTube channel</Link> with over 2.7k subscribers in which I occasionally upload content related to things I like, such as Minecraft shader comparisons or showcases or DOOM soundtrack game rips that I have made in my free time.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-4 mt-5 lg:mt-10 items-center justify-center lg:justify-start">
                <Link href="https://ko-fi.com/js033" target="_blank" className="animate-fade-in-up animate-duration-600 animate-delay-400 flex gap-x-2 justify-center items-center bg-[#72a4f2] shadow-[0px_0px_15px_rgba(114,164,242,1)] hover:shadow-[0px_0px_25px_rgba(114,164,242,1)] active:shadow-[0px_0px_25px_rgba(114,164,242,1)] hover:scale-105 active:scale-105 transition-all duration-400 rounded-sm p-3 font-bold border border-white/20 text-sm sm:text-base"><img src="/kofi_symbol.png" alt="ko-fi icon" className="w-9" />Support me on Ko-fi</Link>
                <Tooltip>
                  <Link href="https://github.com/03-JS" target="_blank"><TooltipTrigger className="animate-fade-in-up animate-duration-600 animate-delay-500 cursor-pointer bg-white/10 hover:bg-white/25 active:bg-white/25 border border-white/20 rounded-xl w-fit p-3 transition-all duration-400"><img className="w-8" src="/github-white-icon.webp" alt="github icon" /></TooltipTrigger></Link>
                  <TooltipContent className="rounded-lg font-bold text-sm">
                    <p className="font-mono">GitHub</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <Link href="https://modrinth.com/user/JS03" target="_blank"><TooltipTrigger className="animate-fade-in-up animate-duration-600 animate-delay-600 cursor-pointer bg-[#1bd96a]/20 hover:bg-[#1bd96a]/35 active:bg-[#1bd96a]/35 border border-white/20 rounded-xl w-fit p-3 transition-all duration-400"><img className="w-8" src="/Modrinth_Logo.webp" alt="modrinth icon" /></TooltipTrigger></Link>
                  <TooltipContent className="rounded-lg font-bold text-sm">
                    <p className="font-mono">Modrinth</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <Link href="https://www.curseforge.com/members/js03/projects" target="_blank"><TooltipTrigger className="animate-fade-in-up animate-duration-600 animate-delay-700  cursor-pointer bg-[#FF784D]/20 hover:bg-[#FF784D]/35 active:bg-[#FF784D]/35 border border-white/20 rounded-xl w-fit p-3 transition-all duration-400"><img className="w-8" src="/CurseForge_icon.svg" alt="curse icon" /></TooltipTrigger></Link>
                  <TooltipContent className="rounded-lg font-bold text-sm">
                    <p className="font-mono">CurseForge</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <Link href="https://thunderstore.io/c/lethal-company/p/JS03/?ordering=most-downloaded" target="_blank"><TooltipTrigger className="animate-fade-in-up animate-duration-600 animate-delay-800 cursor-pointer bg-[#14B3CB]/20 hover:bg-[#14B3CB]/35 active:bg-[#14B3CB]/35 border border-white/20 rounded-xl w-fit p-3 transition-all duration-400"><img className="w-8" src="/thunderstore_icon.png" alt="thunderstore icon" /></TooltipTrigger></Link>
                  <TooltipContent className="rounded-lg font-bold text-sm">
                    <p className="font-mono">Thunderstore</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <Link href="https://itch.io/profile/js03" target="_blank"><TooltipTrigger className="animate-fade-in-up animate-duration-600 animate-delay-900 cursor-pointer bg-[#FA5252]/20 hover:bg-[#FA5252]/35 active:bg-[#FA5252]/35 border border-white/20 rounded-xl w-fit p-3 transition-all duration-400"><img className="w-8" src="/itch-io.png" alt="itch.io icon" /></TooltipTrigger></Link>
                  <TooltipContent className="rounded-lg font-bold text-sm">
                    <p className="font-mono">itch.io</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <Link href="https://gamejolt.com/@JS03" target="_blank"><TooltipTrigger className="animate-fade-in-up animate-duration-600 animate-delay-1000 cursor-pointer bg-[#2F7F6F]/20 hover:bg-[#2F7F6F]/35 active:bg-[#2F7F6F]/35 border border-white/20 rounded-xl w-fit p-3 transition-all duration-400"><img className="w-8" src="/gamejolt_icon.png" alt="game jolt icon" /></TooltipTrigger></Link>
                  <TooltipContent className="rounded-lg font-bold text-sm">
                    <p className="font-mono">Game Jolt</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <Link href="https://www.youtube.com/@JS03" target="_blank"><TooltipTrigger className="animate-fade-in-up animate-duration-600 animate-delay-1100 cursor-pointer bg-[#ff0000]/20 hover:bg-[#ff0000]/35 active:bg-[#ff0000]/35 border border-white/20 rounded-xl w-fit p-3 transition-all duration-400"><img className="w-8" src="/youtube_icon.png" alt="youtube icon" /></TooltipTrigger></Link>
                  <TooltipContent className="rounded-lg font-bold text-sm">
                    <p className="font-mono">YouTube</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <Link href="https://discord.gg/myZrktknah" target="_blank"><TooltipTrigger className="animate-fade-in-up animate-duration-600 animate-delay-1200 cursor-pointer bg-[#5665ED]/20 hover:bg-[#5665ED]/35 active:bg-[#5665ED]/35 border border-white/20 rounded-xl w-fit p-3 transition-all duration-400"><img className="w-8" src="/discord-white-icon.webp" alt="discord icon" /></TooltipTrigger></Link>
                  <TooltipContent className="rounded-lg font-bold text-sm">
                    <p className="font-mono">Discord</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <Link href="https://steamcommunity.com/id/JS_03/" target="_blank"><TooltipTrigger className="animate-fade-in-up animate-duration-600 animate-delay-1300 cursor-pointer bg-sky-500/20 hover:bg-sky-500/35 active:bg-sky-500/35 border border-white/20 rounded-xl w-fit p-3 transition-all duration-400"><img className="w-8" src="/steam-icon.webp" alt="discord icon" /></TooltipTrigger></Link>
                  <TooltipContent className="rounded-lg font-bold text-sm">
                    <p className="font-mono">Steam</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full p-4 sm:p-6 lg:p-10 items-start gap-x-8 font-bold animate-fade-in animate-duration-600 animate-delay-1400 mt-auto text-sm lg:text-base">
            <p className="text-blue-500">~</p>
            <p><span className="text-purple-500">{'>'}</span> <span className="animate-caret-blink">_</span></p>
          </div>
        </div >
      </section>
      <section id="projects" className="flex justify-center items-center w-full scroll-mt-24">
        <motion.div className="glass-element w-[85%] flex flex-col gap-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}>
          <p className="font-bold text-2xl sm:text-3xl lg:text-4xl lg:mb-4">Projects</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10">
            <motion.div className="glass-element flex flex-col lg:flex-row items-center lg:items-stretch gap-6 lg:gap-x-6 border border-white/20 rounded-xl transition-colors duration-400 ring-2 ring-cyan-500 shadow-[0px_0px_20px_rgba(0,184,219,1)] hover:bg-cyan-500/15 active:bg-cyan-500/15"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}>
              <img src="/VEGA_icon.png" className="w-32 h-32 rounded-xl border border-white/20" />
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-x-[0.35rem] items-center">
                  <img src="/lethal_icon.jpg" alt="" className="w-6 h-6 rounded-sm" />
                  <span className="text-white/60 text-xs">Lethal Company mod</span>
                </div>
                <p className="font-bold text-xl">LC-VEGA</p>
                <p className="text-white/80 text-sm">Adds VEGA, a sentient AI from DOOM (2016) and DOOM Eternal, to <span className="font-bold">Lethal Company</span>. The mod uses <span className="font-bold">SpeechRecognitionAPI</span> to implement voice commands with which you can ask VEGA to do almost anything within the game. VEGA is also capable of doing some actions on his own.</p>
                <div className="flex gap-3 mt-auto flex-col lg:flex-row">
                  <Link href="https://thunderstore.io/c/lethal-company/p/JS03/LC_VEGA/" target="_blank" className="flex gap-x-2 justify-center items-center bg-[#14B3CB]/20 hover:bg-[#14B3CB]/35 active:bg-[#14B3CB]/35 transition-all duration-400 rounded-sm p-2 lg:w-fit border border-white/20 text-sm"><img src="/thunderstore_icon.png" className="w-6" />Mod page</Link>
                  <Link href="https://github.com/03-JS/LC-VEGA" target="_blank" className="flex gap-x-2 justify-center items-center bg-white/10 hover:bg-white/25 active:bg-white/25 transition-all duration-400 rounded-sm p-2 lg:w-fit border border-white/20 text-sm"><img src="/github-white-icon.webp" className="w-6" />Source code</Link>
                </div>
              </div>
            </motion.div>
            <motion.div className="glass-element flex flex-col lg:flex-row items-center lg:items-stretch gap-6 lg:gap-x-6 border border-white/20 w-full p-6 rounded-xl transition-colors duration-400 ring-2 ring-pink-600 shadow-[0px_0px_20px_rgba(230,0,118,1)] hover:bg-pink-600/15 active:bg-pink-600/15"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}>
              <img src="/speech_icon.png" alt="" className="w-32 h-32 rounded-xl" />
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-x-[0.35rem] items-center">
                  <img src="/lethal_icon.jpg" alt="" className="w-6 h-6 rounded-sm" />
                  <span className="text-white/60 text-xs">Lethal Company API</span>
                </div>
                <p className="font-bold text-xl">SpeechRecognitionAPI</p>
                <p className="text-white/80 text-sm"><span className="font-bold">VOSK</span> based automatic speech recognition API for <span className="font-bold">Lethal Company</span>. Allows for real time transcription and voice commands. Developers can use it to build their own features, such as adding voice commands or real time speech transcription.</p>
                <div className="flex gap-3 mt-auto flex-col lg:flex-row">
                  <Link href="https://thunderstore.io/c/lethal-company/p/JS03/SpeechRecognitionAPI/" target="_blank" className="flex gap-x-2 justify-center items-center bg-[#14B3CB]/20 hover:bg-[#14B3CB]/35 active:bg-[#14B3CB]/35 transition-all duration-400 rounded-sm p-2 lg:w-fit border border-white/20 text-sm"><img src="/thunderstore_icon.png" className="w-6" />Mod page</Link>
                  <Link href="https://github.com/03-JS/SpeechRecognitionAPI" target="_blank" className="flex gap-x-2 justify-center items-center bg-white/10 hover:bg-white/25 active:bg-white/25 transition-all duration-400 rounded-sm p-2 lg:w-fit border border-white/20 text-sm"><img src="/github-white-icon.webp" className="w-6" />Source code</Link>
                </div>
              </div>
            </motion.div>
            <motion.div className="glass-element flex flex-col lg:flex-row items-center lg:items-stretch gap-6 lg:gap-x-6 border border-white/20 w-full p-6 rounded-xl transition-colors duration-400 ring-2 ring-[#ff0000] shadow-[0px_0px_20px_rgba(255,0,0,1)] hover:bg-[rgba(255,0,0,0.15)] active:bg-[rgba(255,0,0,0.15)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}>
              <img src="/FNaF Rewired Icon.png" alt="" className="w-32 h-32 border border-white/20" />
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-x-[0.35rem] items-center">
                  <img src="/godot_icon.webp" alt="" className="w-6 h-6 rounded-sm" />
                  <span className="text-white/60 text-xs">Godot game</span>
                </div>
                <p className="font-bold text-xl">Five Nights at Freddy's Rewired</p>
                <p className="text-white/80 text-sm">Five Nights at Freddy's Rewired is a re-imagining of the original Five Nights at Freddy's game that features an actual 3D environment, new mechanics, easter eggs and more.</p>
                <p className="text-white/80 text-sm flex gap-x-2 items-center">Available for<img src="windows-white-icon.webp" className="w-4" /><img src="linux_icon_2.webp" className="w-4" /></p>
                <div className="flex gap-3 mt-auto flex-col lg:flex-row">
                  <Link href="https://gamejolt.com/games/FNaF-Rewired/1014231" target="_blank" className="flex gap-x-2 justify-center items-center bg-[#2F7F6F]/20 hover:bg-[#2F7F6F]/35 active:bg-[#2F7F6F]/35 transition-all duration-400 rounded-sm p-2 lg:w-fit border border-white/20 text-sm"><img src="/gamejolt_icon.png" className="w-6" />Game Jolt page</Link>
                  <Link href="https://js03.itch.io/fnaf-rewired" target="_blank" className="flex gap-x-2 justify-center items-center bg-[#FA5252]/20 hover:bg-[#FA5252]/35 active:bg-[#FA5252]/35 transition-all duration-400 rounded-sm p-2 lg:w-fit border border-white/20 text-sm"><img src="/itchio_white_icon.webp" className="w-6" />itch.io page</Link>
                </div>
              </div>
            </motion.div>
            <motion.div className="glass-element flex flex-col lg:flex-row items-center lg:items-stretch gap-6 lg:gap-x-6 border border-white/20 w-full p-6 rounded-xl transition-colors duration-400 ring-2 ring-amber-500 shadow-[0px_0px_20px_rgba(254,154,0,1)] hover:bg-amber-500/15 active:bg-amber-500/15"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}>
              <img src="/ultra_icon.png" alt="" className="w-32 h-32 rounded-xl border border-white/20" />
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-x-[0.35rem] items-center">
                  <img src="/lethal_icon.jpg" alt="" className="w-6 h-6 rounded-sm" />
                  <span className="text-white/60 text-xs">Lethal Company mod</span>
                </div>
                <p className="font-bold text-xl">Ultra-Nightmare</p>
                <p className="text-white/80 text-sm">Dead employees will only come back to life once the quota is met. If your entire crew dies, you'll get fired.</p>
                <div className="flex gap-3 mt-auto flex-col lg:flex-row">
                  <Link href="https://thunderstore.io/c/lethal-company/p/JS03/Ultra_Nightmare/" target="_blank" className="flex gap-x-2 justify-center items-center bg-[#14B3CB]/20 hover:bg-[#14B3CB]/35 active:bg-[#14B3CB]/35 transition-all duration-400 rounded-sm p-2 lg:w-fit border border-white/20 text-sm"><img src="/thunderstore_icon.png" className="w-6" />Mod page</Link>
                  <Link href="https://github.com/03-JS/Ultra-Nightmare" target="_blank" className="flex gap-x-2 justify-center items-center bg-white/10 hover:bg-white/25 active:bg-white/25 transition-all duration-400 rounded-sm p-2 lg:w-fit border border-white/20 text-sm"><img src="/github-white-icon.webp" className="w-6" />Source code</Link>
                </div>
              </div>
            </motion.div>
            <motion.div className="glass-element flex flex-col lg:flex-row items-center lg:items-stretch gap-6 lg:gap-x-6 border border-white/20 w-full p-6 rounded-xl transition-colors duration-400 ring-2 ring-green-500 shadow-[0px_0px_20px_rgba(0,201,80,1)] hover:bg-green-500/15 active:bg-green-500/15"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}>
              <img src="/debt_icon.png" alt="" className="w-32 h-32 rounded-xl" />
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-x-[0.35rem] items-center">
                  <img src="/lethal_icon.jpg" alt="" className="w-6 h-6 rounded-sm" />
                  <span className="text-white/60 text-xs">Lethal Company mod</span>
                </div>
                <p className="font-bold text-xl">LethalDebt</p>
                <p className="text-white/80 text-sm">Allows you to be financially irresponsible by letting you purchase things you can't afford, no matter how expensive.</p>
                <div className="flex gap-3 mt-auto flex-col lg:flex-row">
                  <Link href="https://thunderstore.io/c/lethal-company/p/JS03/LethalDebt/" target="_blank" className="flex gap-x-2 justify-center items-center bg-[#14B3CB]/20 hover:bg-[#14B3CB]/35 active:bg-[#14B3CB]/35 transition-all duration-400 rounded-sm p-2 lg:w-fit border border-white/20 text-sm"><img src="/thunderstore_icon.png" className="w-6" />Mod page</Link>
                  <Link href="https://github.com/03-JS/LethalDebt" target="_blank" className="flex gap-x-2 justify-center items-center bg-white/10 hover:bg-white/25 active:bg-white/25 transition-all duration-400 rounded-sm p-2 lg:w-fit border border-white/20 text-sm"><img src="/github-white-icon.webp" className="w-6" />Source code</Link>
                </div>
              </div>
            </motion.div>
            <motion.div className="glass-element flex flex-col lg:flex-row items-center lg:items-stretch gap-6 lg:gap-x-6 border border-white/20 w-full p-6 rounded-xl transition-colors duration-400 ring-2 ring-neutral-400 shadow-[0px_0px_20px_rgba(161,161,161,1)] hover:bg-neutral-400/15 active:bg-neutral-400/15"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}>
              <img src="/keep_icon.png" alt="" className="w-32 h-32 rounded-xl border border-white/20" />
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-x-[0.35rem] items-center">
                  <img src="/lethal_icon.jpg" alt="" className="w-6 h-6 rounded-sm" />
                  <span className="text-white/60 text-xs">Lethal Company mod</span>
                </div>
                <p className="font-bold text-xl">Keep Enemy Power</p>
                <p className="text-white/80 text-sm">Prevents the current power level of a moon from going down when an enemy dies.</p>
                <div className="flex gap-3 mt-auto flex-col lg:flex-row">
                  <Link href="https://thunderstore.io/c/lethal-company/p/JS03/KeepEnemyPower/" target="_blank" className="flex gap-x-2 justify-center items-center bg-[#14B3CB]/20 hover:bg-[#14B3CB]/35 active:bg-[#14B3CB]/35 transition-all duration-400 rounded-sm p-2 lg:w-fit border border-white/20 text-sm"><img src="/thunderstore_icon.png" className="w-6" />Mod page</Link>
                  <Link href="https://github.com/03-JS/KeepEnemyPower" target="_blank" className="flex gap-x-2 justify-center items-center bg-white/10 hover:bg-white/25 active:bg-white/25 transition-all duration-400 rounded-sm p-2 lg:w-fit border border-white/20 text-sm"><img src="/github-white-icon.webp" className="w-6" />Source code</Link>
                </div>
              </div>
            </motion.div>
            <motion.div className="glass-element flex flex-col lg:flex-row items-center lg:items-stretch gap-6 lg:gap-x-6 border border-white/20 w-full p-6 rounded-xl transition-colors duration-400 ring-2 ring-violet-700 shadow-[0px_0px_20px_rgba(112,8,231,1)] hover:bg-violet-700/15 active:bg-violet-700/15"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}>
              <img src="/eec_icon.png" alt="" className="w-32 h-32 rounded-xl border border-white/20" />
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-x-[0.35rem] items-center">
                  <img src="/minecraft_icon.webp" alt="" className="w-5 h-5" />
                  <span className="text-white/60 text-xs">Minecraft mod</span>
                </div>
                <p className="font-bold text-xl">Extra Enchantments & Curses</p>
                <p className="text-white/80 text-sm">This mod adds 25 new Enchantments and 9 new Curses to Minecraft, all with their own unique quirks, uses and mechanics.</p>
                <div className="flex gap-3 mt-auto flex-col lg:flex-row">
                  <Link href="https://modrinth.com/mod/extra-enchantments-and-curses" target="_blank" className="flex gap-x-2 justify-center items-center bg-[#1bd96a]/20 hover:bg-[#1bd96a]/35 active:bg-[#1bd96a]/35 transition-all duration-400 rounded-sm p-2 lg:w-fit border border-white/20 text-sm"><img src="/Modrinth_Logo.webp" className="w-6" />Page</Link>
                  <Link href="https://www.curseforge.com/minecraft/mc-mods/extra-enchantments-and-curses" target="_blank" className="flex gap-x-2 justify-center items-center bg-[#FF784D]/20 hover:bg-[#FF784D]/35 active:bg-[#FF784D]/35 transition-all duration-400 rounded-sm p-2 lg:w-fit border border-white/20 text-sm"><img src="/CurseForge_icon.svg" className="w-6" />Page</Link>
                  <Link href="https://github.com/03-JS/Extra-Enchantments-and-Curses" target="_blank" className="flex gap-x-2 justify-center items-center bg-white/10 hover:bg-white/25 active:bg-white/25 transition-all duration-400 rounded-sm p-2 lg:w-fit border border-white/20 text-sm"><img src="/github-white-icon.webp" className="w-6" />GitHub</Link>
                </div>
              </div>
            </motion.div>
            <motion.div className="glass-element flex flex-col lg:flex-row items-center lg:items-stretch gap-6 lg:gap-x-6 border-white/20 w-full p-6 rounded-xl transition-colors duration-400 ring-2 ring-emerald-300 shadow-[0px_0px_20px_rgba(94,233,181,1)] hover:bg-emerald-300/15 active:bg-emerald-300/15"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}>
              <img src="/mcce_icon.gif" alt="" className="w-32 h-32 rounded-xl border border-white/20" />
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-x-[0.35rem] items-center">
                  <img src="/minecraft_icon.webp" alt="" className="w-5 h-5" />
                  <span className="text-white/60 text-xs">Minecraft resource pack</span>
                </div>
                <p className="font-bold text-xl">Minecraft: Classic Edition</p>
                <p className="text-white/80 text-sm">A resource pack that aims to bring back the classic feel of Minecraft.</p>
                <div className="flex gap-3 mt-auto flex-col lg:flex-row">
                  <Link href="https://modrinth.com/resourcepack/minecraft-classic-edition" target="_blank" className="flex gap-x-2 justify-center items-center bg-[#1bd96a]/20 hover:bg-[#1bd96a]/35 active:bg-[#1bd96a]/35 transition-all duration-400 rounded-sm p-2 lg:w-fit border border-white/20 text-sm"><img src="/Modrinth_Logo.webp" className="w-6" />Resource pack page</Link>
                </div>
              </div>
            </motion.div>
            <motion.div className="glass-element flex flex-col lg:flex-row items-center lg:items-stretch gap-6 lg:gap-x-6 border border-white/20 w-full p-6 rounded-xl transition-colors duration-400 ring-2 ring-yellow-500 shadow-[0px_0px_20px_rgba(240,177,0,1)] hover:bg-yellow-500/15 active:bg-yellow-500/15"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}>
              <img src="/ranDOOM_icon.png" alt="" className="w-41 h-32 rounded-xl border border-white/20" />
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-x-[0.35rem] items-center">
                  <img src="/unity_icon.png" alt="" className="w-fit h-6 rounded-sm" />
                  <span className="text-white/60 text-xs">Unity game</span>
                </div>
                <p className="font-bold text-xl">ranDOOM</p>
                <p className="text-white/80 text-sm">A blend between classic and modern DOOM with a bit of randomization added to it.</p>
                <div className="flex gap-3 mt-auto flex-col lg:flex-row">
                  <Link href="https://js03.itch.io/randoom" target="_blank" className="flex gap-x-2 justify-center items-center bg-[#FA5252]/20 hover:bg-[#FA5252]/35 active:bg-[#FA5252]/35 transition-all duration-400 rounded-sm p-2 lg:w-fit border border-white/20 text-sm"><img src="/itchio_white_icon.webp" className="w-6" />itch.io page</Link>
                  <Link href="https://github.com/03-JS/ranDOOM" target="_blank" className="flex gap-x-2 justify-center items-center bg-white/10 hover:bg-white/25 active:bg-white/25 transition-all duration-400 rounded-sm p-2 lg:w-fit border border-white/20 text-sm"><img src="/github-white-icon.webp" className="w-6" />Source code</Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <section id="videos" className="flex justify-center items-center w-full scroll-mt-24">
        <motion.div className="glass-element w-[85%] flex flex-col gap-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}>
          <p className="font-bold text-2xl sm:text-3xl lg:text-4xl lg:mb-4 self-start">Recent videos</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.iframe src="https://www.youtube.com/embed/h3sQo29GRd8?si=5WihZEJRXnG5BbxH" allowFullScreen className="aspect-video w-full h-full border border-white/20 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }} />
            <motion.iframe src="https://www.youtube.com/embed/HpEulrKdiJA?si=C9Y2u3yJ1Ptp7b2t" allowFullScreen className="aspect-video w-full h-full border border-white/20 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }} />
            <motion.iframe src="https://www.youtube.com/embed/rEAtcF38e_Q?si=wycVix5K9N_T3X83" allowFullScreen className="aspect-video w-full h-full border border-white/20 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }} />
            <motion.iframe src="https://www.youtube.com/embed/9Wcs_KExrNk?si=cxssuzxxZgyQOIWz" allowFullScreen className="aspect-video w-full h-full border border-white/20 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }} />
            <motion.iframe src="https://www.youtube.com/embed/YcU4UfOu5_o?si=AK79TSPUTX8c_UEF" allowFullScreen className="aspect-video w-full h-full border border-white/20 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }} />
            <motion.iframe src="https://www.youtube.com/embed/FltlvSLJseI?si=P8fBC3uBTjWtqMWC" allowFullScreen className="aspect-video w-full h-full border border-white/20 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }} />
            <motion.iframe src="https://www.youtube.com/embed/NGEQj11Zlj4?si=zmZyzv2_gZIvfTuZ" allowFullScreen className="aspect-video w-full h-full border border-white/20 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }} />
            <motion.iframe src="https://www.youtube.com/embed/mJkJou5jK5o?si=4kmwmm4YM8LcOBMy" allowFullScreen className="aspect-video w-full h-full border border-white/20 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }} />
            {/* <motion.iframe src="https://www.youtube.com/embed/Y_mSrBwiR70?si=UuRZaVc189dBzp2I" allowFullScreen className="aspect-video w-full h-full border border-white/20 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }} />
            <motion.iframe src="https://www.youtube.com/embed/7fMmtOAsUCU?si=_p4br7Susp6xnDVj" allowFullScreen className="aspect-video w-full h-full border border-white/20 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }} />
            <motion.iframe src="https://www.youtube.com/embed/iFBUlN9H11s?si=iA_NJKdM3mIp5BOF" allowFullScreen className="aspect-video w-full h-full border border-white/20 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }} />
            <motion.iframe src="https://www.youtube.com/embed/1aF6kxG1Mgk?si=-KyUQnz_W2m7RYFS" allowFullScreen className="aspect-video w-full h-full border border-white/20 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }} /> */}
          </div>
        </motion.div>
      </section>
      <section id="contact" className="flex justify-center items-center w-full scroll-mt-24">
        <motion.div className="glass-element w-[85%] flex flex-col gap-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}>
          <p className="font-bold text-2xl sm:text-3xl lg:text-4xl lg:mb-4">Contact</p>
          <p className="text-white/80 text-base sm:text-lg lg:text-xl">You can get in contact with me through my email at <Link href="mailto:pyjoso3vitaslim@gmail.com" className="text-blue-500 font-bold hover:text-(--accent-gradient-to) active:text-(--accent-gradient-to) red-underline">pyjoso3vitaslim@gmail.com</Link> or through my <Link href="https://discord.com/users/544234654203379727" target="_blank" className="text-blue-500 font-bold  hover:text-(--accent-gradient-to) active:text-(--accent-gradient-to) red-underline">Discord</Link>.</p>
        </motion.div>
      </section>
    </>
  );
}

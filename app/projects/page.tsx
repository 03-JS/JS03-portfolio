import AnimatedContent from "@/components/AnimatedContent";
import Link from "next/link";

export default function ProjectsPage() {
    return (
        <AnimatedContent className="flex flex-col justify-center items-center gap-y-8 mt-26 w-screen p-0" distance={720} direction="vertical" duration={1.15} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={.1} delay={0}>
            <div className="glass-element w-3/4 max-w-3/4 flex flex-col gap-y-6 mb-8">
                <p className="font-bold text-4xl mb-4">Projects</p>
                <div className="grid grid-cols-2 gap-6">
                    <Link href="/projects/LC-VEGA" className="items-center h-full flex gap-x-6 pointer-events-auto bg-blue-400/35 hover:bg-blue-400/50 border border-white/20 w-full p-6 rounded-xl transition-all duration-300 cursor-pointer">
                        <img src="/VEGA_icon.png" alt="" className="w-32 h-32 rounded-xl border border-white/20" />
                        <div className="flex flex-col gap-y-3">
                            <div className="flex gap-x-[0.35rem] items-center">
                                <img src="/lethal_icon.jpg" alt="" className="w-6 h-6 border border-white/20 rounded-sm" />
                                <span className="text-white/60 text-sm">Lethal Company mod</span>
                            </div>
                            <p className="font-bold text-xl">LC-VEGA</p>
                            <p className="text-white/80 text-md">Adds VEGA, a sentient AI from DOOM (2016) and DOOM Eternal, to <span className="font-bold">Lethal Company</span>. The mod uses <span className="font-bold">SpeechRecognitionAPI</span> to implement voice commands with which you can ask VEGA to do almost anything within the game. VEGA is also capable of doing some actions on his own.</p>
                        </div>
                    </Link>
                    <Link href="/projects/SpeechRecognitionAPI" className="items-center h-full flex gap-x-6 pointer-events-auto bg-pink-400/35 hover:bg-pink-400/50 border border-white/20 w-full p-6 rounded-xl transition-all duration-300 cursor-pointer">
                        <img src="/speech_icon.png" alt="" className="w-32 h-32 rounded-xl" />
                        <div className="flex flex-col gap-y-3">
                            <div className="flex gap-x-[0.35rem] items-center">
                                <img src="/lethal_icon.jpg" alt="" className="w-6 h-6 border border-white/20 rounded-sm" />
                                <span className="text-white/60 text-sm">Lethal Company API</span>
                            </div>
                            <p className="font-bold text-xl">SpeechRecognitionAPI</p>
                            <p className="text-white/80 text-md"><span className="font-bold">VOSK</span> based automatic speech recognition API for <span className="font-bold">Lethal Company</span>. Allows for real time transcription and voice commands. Developers can use it to build their own features, such as adding voice commands or real time speech transcription.</p>
                        </div>
                    </Link>
                    <Link href="/projects/Extra-Enchantments-and-Curses" className="items-center h-full flex gap-x-6 pointer-events-auto bg-purple-500/35 hover:bg-purple-500/50 border border-white/20 w-full p-6 rounded-xl transition-all duration-300 cursor-pointer">
                        <img src="/eec_icon.png" alt="" className="w-32 h-32 rounded-xl border border-white/20" />
                        <div className="flex flex-col gap-y-3">
                            <div className="flex gap-x-[0.35rem] items-center">
                                <img src="/minecraft_icon.webp" alt="" className="w-5 h-5 border border-white/20" />
                                <span className="text-white/60 text-sm">Minecraft mod</span>
                            </div>
                            <p className="font-bold text-xl">Extra Enchantments & Curses</p>
                            <p className="text-white/80 text-md">This mod adds 25 new Enchantments and 9 new Curses to Minecraft, all with their own unique quirks, uses and mechanics.</p>
                        </div>
                    </Link>
                    <Link href="/projects/Minecraft-Classic-Edition" className="items-center h-full flex gap-x-6 pointer-events-auto bg-white/35 hover:bg-white/50 border border-white/20 w-full p-6 rounded-xl transition-all duration-300 cursor-pointer">
                        <img src="/mcce_icon.gif" alt="" className="w-32 h-32 rounded-xl border border-white/20" />
                        <div className="flex flex-col gap-y-3">
                            <div className="flex gap-x-[0.35rem] items-center">
                                <img src="/minecraft_icon.webp" alt="" className="w-5 h-5 border border-white/20" />
                                <span className="text-white/60 text-sm">Minecraft resource pack</span>
                            </div>
                            <p className="font-bold text-xl">Minecraft: Classic Edition</p>
                            <p className="text-white/80 text-md">A resource pack that aims to bring back the classic feel of Minecraft.</p>
                        </div>
                    </Link>
                    <Link href="/projects/LethalDebt" className="items-center h-full flex gap-x-6 pointer-events-auto bg-green-700/35 hover:bg-green-700/50 border border-white/20 w-full p-6 rounded-xl transition-all duration-300 cursor-pointer">
                        <img src="/debt_icon.png" alt="" className="w-32 h-32 rounded-xl border border-white/20" />
                        <div className="flex flex-col gap-y-3">
                            <div className="flex gap-x-[0.35rem] items-center">
                                <img src="/lethal_icon.jpg" alt="" className="w-6 h-6 border border-white/20 rounded-sm" />
                                <span className="text-white/60 text-sm">Lethal Company mod</span>
                            </div>
                            <p className="font-bold text-xl">LethalDebt</p>
                            <p className="text-white/80 text-md">Allows you to be financially irresponsible by letting you purchase things you can't afford, no matter how expensive.</p>
                        </div>
                    </Link>
                    <Link href="/projects/KeepEnemyPower" className="items-center h-full flex gap-x-6 pointer-events-auto bg-gray-600/35 hover:bg-gray-600/50 border border-white/20 w-full p-6 rounded-xl transition-all duration-300 cursor-pointer">
                        <img src="/keep_icon.png" alt="" className="w-32 h-32 rounded-xl border border-white/20" />
                        <div className="flex flex-col gap-y-3">
                            <div className="flex gap-x-[0.35rem] items-center">
                                <img src="/lethal_icon.jpg" alt="" className="w-6 h-6 border border-white/20 rounded-sm" />
                                <span className="text-white/60 text-sm">Lethal Company mod</span>
                            </div>
                            <p className="font-bold text-xl">Keep Enemy Power</p>
                            <p className="text-white/80 text-md">Prevents the current power level of a moon from going down when an enemy dies.</p>
                        </div>
                    </Link>
                    <Link href="/projects/Ultra-Nightmare" className="items-center h-full flex gap-x-6 pointer-events-auto bg-amber-500/35 hover:bg-amber-500/50 border border-white/20 w-full p-6 rounded-xl transition-all duration-300 cursor-pointer">
                        <img src="/ultra_icon.png" alt="" className="w-32 h-32 rounded-xl border border-white/20" />
                        <div className="flex flex-col gap-y-3">
                            <div className="flex gap-x-[0.35rem] items-center">
                                <img src="/lethal_icon.jpg" alt="" className="w-6 h-6 border border-white/20 rounded-sm" />
                                <span className="text-white/60 text-sm">Lethal Company mod</span>
                            </div>
                            <p className="font-bold text-xl">Ultra-Nightmare</p>
                            <p className="text-white/80 text-md">Dead employees will only come back to life once the quota is met. If your entire crew dies, you'll get fired.</p>
                        </div>
                    </Link>
                    <Link href="/projects/FNaF-Rewired" className="items-center h-full flex gap-x-6 pointer-events-auto bg-[#ff0000]/35 hover:bg-[#ff0000]/50 border border-white/20 w-full p-6 rounded-xl transition-all duration-300 cursor-pointer">
                        <img src="/FNaF Rewired Icon 2.png" alt="" className="w-32 h-32 rounded-xl border border-white/20" />
                        <div className="flex flex-col gap-y-3">
                            <div className="flex gap-x-[0.35rem] items-center">
                                <img src="/godot_icon.webp" alt="" className="w-6 h-6 border border-white/20 rounded-sm" />
                                <span className="text-white/60 text-sm">Godot game</span>
                            </div>
                            <p className="font-bold text-xl">Five Nights at Freddy's Rewired</p>
                            <p className="text-white/80 text-md">Five Nights at Freddy's Rewired is a re-imagining of the original Five Nights at Freddy's game that features an actual 3D environment, new mechanics, easter eggs and more.</p>
                        </div>
                    </Link>
                    <Link href="/projects/ranDOOM" className="col-span-2 items-center h-full flex gap-x-6 pointer-events-auto bg-gray-400/35 hover:bg-gray-400/50 border border-white/20 w-full p-6 rounded-xl transition-all duration-300 cursor-pointer">
                        <img src="/ranDOOM_icon.png" alt="" className="w-41 h-32 rounded-xl border border-white/20" />
                        <div className="flex flex-col gap-y-3">
                            <div className="flex gap-x-[0.35rem] items-center">
                                <img src="/unity_icon.png" alt="" className="w-[1.4rem] h-6 border border-white/20 rounded-sm" />
                                <span className="text-white/60 text-sm">Unity game</span>
                            </div>
                            <p className="font-bold text-xl">ranDOOM</p>
                            <p className="text-white/80 text-md">A blend between classic and modern DOOM with a bit of randomization added to it.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </AnimatedContent>
    );
}
import AnimatedContent from "@/components/AnimatedContent";
import FuzzyText from "@/components/FuzzyText";
import Link from "next/link";

export default function RewiredPage() {
    return (
        <AnimatedContent className="flex flex-col justify-center items-center gap-y-8 mt-26 w-screen p-0" distance={720} direction="vertical" duration={1.15} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={.1} delay={0}>
            <div className="glass-element w-3/4 max-w-3/4 flex flex-col gap-y-6 mb-8">
                // TODO tomorrow: Banner up front, icon or title below in the middle, followed by gallery
            </div>
        </AnimatedContent>
    );
}
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";


export default function Hero({ delay } : { delay : number; }) {
    return (
        <section id="hero">
            <div className="mx-auto w-full max-w-2xl space-y-8">
                <div className="gap-2 flex justify-between">
                    <div className="flex-col flex flex-1 space-y-1.5">
                        <BlurFadeText
                            delay={delay}
                            className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                            yOffset={8}
                            text={`Hi, I'm ${DATA.name.split(" ")[0]} 💻`}
                        />
                        <BlurFadeText
                            className="max-w-[600px] md:text-xl"
                            delay={delay}
                            text={DATA.description}
                        />
                    </div>
                    <BlurFade delay={delay}>
                        <Avatar className="size-28 border">
                            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                            <AvatarFallback>{DATA.initials}</AvatarFallback>
                        </Avatar>
                    </BlurFade>
                </div>
            </div>
        </section>
    )
}
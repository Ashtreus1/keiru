import { Badge } from "@/components/ui/badge";
import Image from 'next/image';
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";

export default function Skills({ delay }: { delay: number }) {
    return (
        <section id="skills">
            <div className="flex min-h-0 flex-col gap-y-3">
                <BlurFade delay={delay * 9}>
                    <h2 className="text-xl font-bold"><span className="text-cyan-400">Tech Stack</span> Skills</h2>
                </BlurFade>
                <div className="flex flex-wrap gap-1">
                    {DATA.skills.map((skill, id) => (
                        <BlurFade key={skill.name} delay={delay * 10 + id * 0.05}>
                            <Badge key={skill.name + "  "}>
                                {skill.name}
                                <Image src={skill.icon} width={20} height={20} alt={skill.name} />
                            </Badge>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    )
} 
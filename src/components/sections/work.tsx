import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";

export default function Work({ delay } : { delay: number; }) {
    return (
        <section id="work">
            <div className="flex min-h-0 flex-col gap-y-3">
                <BlurFade delay={delay * 5}>
                    <h2 className="text-xl font-bold">Learning <span className="text-cyan-400">Experience</span></h2>
                </BlurFade>
                <BlurFade delay={delay * 5}>
                    <p className="text-xs w-full">Unfortunately, I am working to find a tech job so I can include professional experience</p>
                </BlurFade>
                {DATA.work.map((work, id) => (
                    <BlurFade
                        key={work.company}
                        delay={delay * 6 + id * 0.05}
                    >
                        <ResumeCard
                            key={work.company}
                            logoUrl={work.logoUrl}
                            altText={work.company}
                            title={work.company}
                            subtitle={work.title}
                            href={work.href}
                            badges={work.badges}
                            period={`${work.start} - ${work.end ?? "Present"}`}
                            description={work.description}
                        />
                    </BlurFade>
                ))}
            </div>
        </section>
    )
}
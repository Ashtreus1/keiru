import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import { HackathonCard } from "@/components/hackathon-card";

export default function Hackathons({ delay }: { delay: number }) {
    return (
        <section id="hackathons">
            <div className="space-y-12 w-full py-12">
                <BlurFade delay={delay * 13}>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                Activities
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                I like building things
                            </h2>
                            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Actively looking for hackathons and related contest that can
                                enhance more my skills and build network with other people.
                                Currently, I've participate for atleast {DATA.hackathons.length} contest
                                so far. And really passionate to cooperate more!
                            </p>
                        </div>
                    </div>
                </BlurFade>
                <BlurFade delay={delay * 14}>
                    <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                        {DATA.hackathons.map((project, id) => (
                            <BlurFade
                                key={project.title + project.dates}
                                delay={delay * 15 + id * 0.05}
                            >
                                <HackathonCard
                                    title={project.title}
                                    description={project.description}
                                    location={project.location}
                                    dates={project.dates}
                                    image={project.image}
                                    links={project.links}
                                />
                            </BlurFade>
                        ))}
                    </ul>
                </BlurFade>
            </div>
        </section>
    )
}
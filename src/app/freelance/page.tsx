import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function FreelancePage(){
    return(
        <main className="flex flex-col min-h-[100dvh] space-y-10">
            <section id="projects">
                <div className="space-y-12 w-full py-12">
                    <BlurFade delay={BLUR_FADE_DELAY * 11}>
                        <div className="flex flex-col justify-center items-center space-y-4 text-center">
                            On Progress                            
                        </div>
                    </BlurFade>
                </div>
            </section>
            <section id="testimonials">
                Testimonials Container
            </section>
            <section id="services">
                Services Container
            </section>
        </main>
    )
}
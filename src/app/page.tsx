import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Work from '@/components/sections/work';
import Education from '@/components/sections/education';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Hackathons from '@/components/sections/hackathons';
import Contact from '@/components/sections/contact';

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <Hero delay={BLUR_FADE_DELAY}/>
      <About delay={BLUR_FADE_DELAY}/>
      <Work delay={BLUR_FADE_DELAY}/>
      <Education delay={BLUR_FADE_DELAY}/>
      <Skills delay={BLUR_FADE_DELAY}/>
      <Projects delay={BLUR_FADE_DELAY}/>
      <Hackathons delay={BLUR_FADE_DELAY}/>
      <Contact delay={BLUR_FADE_DELAY}/>
    </main>
  );
}

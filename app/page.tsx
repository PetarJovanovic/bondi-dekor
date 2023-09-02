import HeroSection from '../components/HeroSection';
import AboutUsSection from '../components/AboutUsSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUsSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}

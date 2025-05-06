import { AboutSection } from './components/Sections/AboutSection/AboutSection';
import { HomePageNav } from './components/HomePageNav/HomePageNav';
import { ShortAbout } from './components/ShortAbout/ShortAbout';
import { SocialLinks } from './components/SocialLinks/SocialLinks';
import './styles/home.scss'
import { ExperiencesSection } from './components/Sections/ExperienceSection/ExperienceSection';
import { ProjectsSection } from './components/Sections/ProjectsSection/ProjectsSection';
import { FooterSection } from './components/Sections/FooterSection/FooterSection';

export default function Home() {
  return (
    <div className='homepage'>
      {/* two sctions, left is name and nav buttons, right is content */}
      <div className="homepage-left">
        <ShortAbout />
        <HomePageNav />
        <SocialLinks />
      </div>

      <div className='homepage-right'>
        <div className="section-header">
          <h2>About</h2>
          <div className="section-line" />
        </div>
        <AboutSection />
        <div className="section-header">
          <h2>Experience</h2>
          <div className="section-line" />
        </div> 
        <ExperiencesSection />
        <div className="section-header">
          <h2>Projects</h2>
          <div className="section-line" />
        </div> 
        <ProjectsSection />
        <FooterSection />
        </div>
      </div>
  );
}

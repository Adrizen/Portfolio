import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import BgAnimationTraveler from '../components/BackgrooundAnimation/BackgroundAnimationTraveler'
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
         { <BgAnimationTraveler/> } 
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
      <ScrollToTop/>
    </Layout>
  );
};

export default Home;

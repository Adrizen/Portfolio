import React from 'react';

import { Section, SectionText, SectionTitle, Emoji } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        👋 Hi! <br />
        I'm Guillermo Andrés Pereyra <br />
        A software developer
      </SectionTitle>
      <SectionText>
        I'm a Computer Science student, looking to get my first work experience in the IT area. <br />
        Scroll down to know more about me. You can also download my CV with the button below.
      </SectionText>
      <a href='files/GuillermoAndresPereyra-CV.pdf' target="_blank">
        <Button>
          Download CV
        </Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
import React from 'react';

import { Section, SectionText, SectionTitle, Emoji } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        👋 Hi! <br />
        Welcome to my portfolio
      </SectionTitle>
      <SectionText>
        Thanks for stepping by, scroll down to know more about me. <br />
        You can also download my CV with the button below.
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
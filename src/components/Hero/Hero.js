import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Welcome to my personal portfolio!
      </SectionTitle>
      <SectionText>
        This is the section text btw.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}> Download CV? </Button>
    </LeftSection>
  </Section>
);

export default Hero;
import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I'm Rogelio Lozano <br/>
        Welcome to my Portfolio!
      </SectionTitle>
      <SectionText>
        Started my journey as a developer during 2022 and have been able to create a varitety of projects.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/LozanoRogelio'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
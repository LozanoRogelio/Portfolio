import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range of technilogies in the deb development world. Continue to learn more everyday. 
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem"/>
          <ListContainer>
            <ListTitle>Front-end</ListTitle>
            <ListParagraph>
              Experience with <br/>
              React.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem"/>
          <ListContainer>
            <ListTitle>Back-end</ListTitle>
            <ListParagraph>
              Experience with <br/>
              Java and Databases
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiZend size="3rem"/>
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with <br/>
              tools like Figma
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
  </Section>
);

export default Technologies;

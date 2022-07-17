import React from 'react';
import { DiPython, DiNodejs, DiReact, DiPostgresql, DiJsBadge, DiJava, DiGit, DiHtml5, DiCss3, DiBootstrap } from 'react-icons/di';
import { SiNetlify } from "react-icons/si";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, ReadMore, TechIcons } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText></SectionText>
    <List>
      <ListItem>
        <TechIcons display="flex" flexDirection="row" >
          <DiHtml5 size="5rem" /> <DiCss3 size="5rem" /> <DiBootstrap size="5rem" /> <DiReact size="5rem" />
        </TechIcons>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <ReadMore>
              Experience with HTML, CSS, Bootstrap and recently with React and Next.js. <br />
              After making some static and dinamic websites with vanilla HTML, CSS and JS. I have been looking to learn a web design framework.
              Recently I have started to work with React and Next.js as my first front-end frameworks. So far I have been making this portfolio as first project, but I am thinking of doing more with the desire to get more practice and ease of use.
            </ReadMore>
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <TechIcons>
          <DiJava size="5rem" /> <DiJsBadge size="5rem" /> <DiNodejs size="5rem" /> <DiPostgresql size="5rem" />   <DiPython size="5rem" />
        </TechIcons>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <ReadMore>
              Basic knowledge of Java, JS, NodeJS, PostreSQL and Python as I keep learning with some own projects. <br />
              At the beginning of my university studies I started using Java, to later use languages like Smalltalk and some Assembler. Then I learned the basics of SQL databases. In a self-taught way I am learning JS, NodeJS and deepening my knowledge in SQL.
            </ReadMore>
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <TechIcons>
          <DiGit size="5rem" /> <SiNetlify size="5rem" />
        </TechIcons>
        <ListContainer>
          <ListTitle>Others</ListTitle>
          <ListParagraph>
            Experience using Git, Netlify and Vercel. <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section >
);

export default Technologies;

import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { DiTerminalBadge } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/' >
        <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <DiTerminalBadge style={{ animation: 'blinker 1s step-start infinite' }} size="7rem" /><Span>Adrizen</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#projects">
          <NavLink style={{ alignItems: 'center' }} >
            Projects
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>
            Technologies
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>
            About me
          </NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href="https://github.com/Adrizen" target="_blank">
        <AiFillGithub size="4rem" />
      </SocialIcons>

      <SocialIcons href="https://www.linkedin.com/in/pereyra-guille-andres/" target="_blank">
        <AiFillLinkedin size="4rem" />
      </SocialIcons>

      <SocialIcons href="mailto:pereyraguillermoandres@gmail.com" >
        <AiFillMail size="4rem" />
      </SocialIcons>
    </Div3>

  </Container >
);

export default Header;

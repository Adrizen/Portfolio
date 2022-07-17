import React from 'react';
import { AiFillGithub, AiFillMail, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  // <LinkTitle>Call</LinkTitle>
  // <LinkItem href="tel:+5492996327079" >299-123456789</LinkItem>

  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:pereyraguillermoandres@gmail.com" >pereyraguillermoandres@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Adrizen" target="_blank">
            <AiFillGithub size="4rem" />
          </SocialIcons>

          <SocialIcons href="https://www.linkedin.com/in/pereyra-guille-andres/" target="_blank">
            <AiFillLinkedin size="4rem" />
          </SocialIcons>

          <SocialIcons href="mailto:pereyraguillermoandres@gmail.com" >
            <AiFillMail size="4rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

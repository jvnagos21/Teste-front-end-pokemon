import React from "react";
import styled from "styled-components";
import { LogoText, PokemonLogo, StyledIcon } from "../Logo/Index";
import { ScheduleButton, InfoDiv, AboutUs } from "../Info/Index";
import Link from "next/link";

const HeaderWrapper = styled.header`
  width: full;
  height: 104px;
  background-color: #fffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Link href="/"></Link>
      <PokemonLogo>
        <StyledIcon
          src="/images/white-pokeball.svg"
          alt="pokeball_icon"
          width={37}
          height={34}
        />
        <LogoText>Centro Pokémon</LogoText>
      </PokemonLogo>
      <InfoDiv>
        <Link href="/about_us">
          <AboutUs>Quem Somos</AboutUs>
        </Link>
        <Link href="/schedule">
          <ScheduleButton>Agendar Consulta</ScheduleButton>
        </Link>
      </InfoDiv>
    </HeaderWrapper>
  );
};

export default Header;

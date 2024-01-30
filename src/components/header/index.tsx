import React from "react";
import styled from "styled-components";
import { LogoText, PokemonLogo, StyledIcon } from "../Logo";
import { ScheduleButton, InfoDiv, AboutUs } from "../Info";

const HeaderWrapper = styled.header`
  height: 104px;
  background-color: #fffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <HeaderWrapper key={mounted ? "client" : "server"}>
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
        <AboutUs>Quem Somos</AboutUs>
        <ScheduleButton>Agendar Consulta</ScheduleButton>
      </InfoDiv>
    </HeaderWrapper>
  );
};

export default Header;

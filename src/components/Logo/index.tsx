import styled from "styled-components";
import Image from "next/image";

const PokemonLogo = styled.div`
  position: absolute;
  width: 259px;
  height: 61px;
  top: 22px;
  left: 83px;
  border-radius: 50px;
  background-color: #e40f0f;
  border: none;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const LogoText = styled.span`
  color: #ffffff;
  margin-left: 10px;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

const StyledIcon = styled(Image)`
  margin-left: 15px;
`;

export { LogoText, PokemonLogo, StyledIcon };

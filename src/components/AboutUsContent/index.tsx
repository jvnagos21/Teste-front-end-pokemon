import styled from "styled-components";
import AboutUsContainer from "../AboutUsContainer";

const AboutUsTitle = styled.h1`
  color: black;
  font-size: 18px;
  color: #000000;
  font-weight: bold;
  text-align: left;
`;

const AboutUsSubTitle = styled.h3`
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
`;

const ColumnText = styled.div`
  column-count: 2;
  column-gap: 20px;
`;

const AboutUsContent = () => {
  return (
    <AboutUsContainer>
      <AboutUsTitle>O Centro Pokémon</AboutUsTitle>
      <ColumnText>
        <AboutUsSubTitle>Como funciona a cura de um pokémon? </AboutUsSubTitle>
      </ColumnText>
    </AboutUsContainer>
  );
};

export default AboutUsContent;

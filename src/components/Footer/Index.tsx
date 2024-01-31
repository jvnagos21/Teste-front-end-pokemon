import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100vw;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #1d1d1d;
`;

const FooterText = styled.h1`
  color: black;
  font-size: 14px;
  color: #ffffff;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Todas as marcas e ilustrações utilizadas são de seus resepctivos donos.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;

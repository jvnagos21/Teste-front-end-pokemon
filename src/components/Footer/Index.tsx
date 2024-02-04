import styled from "styled-components"

export const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 72px;
  background-color: #1d1d1d;

  > p {
    width: 80%;
    text-align: center;
    line-height: 20px;
    font-size: var(--description-size-14);
    font-weight: var(--weight-medium);
    color: #ffffff;
  }
`
const Footer = () => {
  return (
    <FooterStyle>
      <p>
        Todas as marcas e ilustrações utilizadas são de seus respectivos donos.
      </p>
    </FooterStyle>
  )
}

export default Footer

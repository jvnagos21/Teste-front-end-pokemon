import Footer from "../Footer/Index";
import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
`;

import { Header } from "../Header/Index";
const DefaultPage = ({ children, isHome }: any) => {
  return isHome ? (
    <ContainerHome>
      <Header />
      {children}
      <Footer />
    </ContainerHome>
  ) : (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultPage;

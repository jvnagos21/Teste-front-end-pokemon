import Footer from "../Footer/Index"
import styled from "styled-components"
import { Header } from "../Header/Index"
import { IDefault } from "../../Interfaces/Pages"

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
`
const DefaultPage = ({ children, isHome }: IDefault) => {
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
  )
}

export default DefaultPage

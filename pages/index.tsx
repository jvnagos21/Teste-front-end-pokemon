import React from "react"
import ImageHome from "../public/images/pokemon-hero.jpg"
import Image from "next/image"
import styled from "styled-components"
import DefaultPage from "../src/components/DefaultPage/Index"

export const Main = styled.main`
  height: 100%;
  overflow: hidden;
  position: relative;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;

    > h2 {
      text-align: center;
      font-size: var(--second-title-32);
      font-weight: var(--weight-bold);
      width: 80%;
      max-width: 509px;
      color: #ffffff;
    }
  }

  > img {
    width: 100%;
    height: 100%;
    min-height: 720px;
    object-fit: cover;
  }
`

const Home = () => {
  return (
    <>
      <DefaultPage isHome={true}>
        <Main>
          <div>
            <h2>Cuidamos bem do seu pokémon, pra ele cuidar bem de você</h2>
          </div>
          <Image src={ImageHome} alt="Imagem de personagens do anime pokémon" />
        </Main>
      </DefaultPage>
    </>
  )
}

export default Home

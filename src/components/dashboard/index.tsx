import styled from "styled-components";
import Image from "next/image";

const DashboardCoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: linear-gradient(to right, #cccccc 0%, #ffffff 100%);
  width: 1598px;
  height: 544px;
  gap: 69px;
  & > div {
    position: relative;

    & > figure {
      width: 100%;
      height: 100%;
      max-height: 72px;
      min-width: 970px;
      max-width: 1080px;
      mix-blend-mode: darken;

      & > img {
        max-height: 60px;
        margin: auto;
      }
    }

    & > div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      & > h1 {
        color: #666666;
        font-family: "Lexend", sans-serif;
        font-weight: bold;
        font-size: 2rem;

        @media (min-width: 768px) {
          font-size: 4rem;
        }
      }

      & > h2 {
        color: #666666;
        font-family: "Lexend", sans-serif;
        font-weight: medium;
        font-size: 2rem;

        @media (min-width: 768px) {
          font-size: 4rem;
        }
      }
    }
  }
`;

// const StyledImage = styled(Image)`
//   margin: auto;
//   max-height: 60px;
// `;

// & > img {
//     max-height: 60px;
//     margin: auto;
//   }

const Dashboard: React.FC = () => {
  return (
    <DashboardCoverContainer>
      <div>
        <figure>
          <Image
            src="/images/pokemon-hero.jpg"
            alt="pokemon_image"
            width={1440}
            height={720}
          ></Image>
        </figure>
        <div>
          <h1>Motors Shop</h1>
          <h2>A melhor plataforma de anúncios de carros do país</h2>
        </div>
      </div>
    </DashboardCoverContainer>
  );
};

export default Dashboard;

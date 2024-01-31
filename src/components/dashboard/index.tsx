import styled from "styled-components";

const DashboardContainer = styled.div`
  background-image: url("/images/pokemon-hero.jpg");
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const DashboardText = styled.h1`
  color: white;
  font-size: 36px;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardText>
        Cuidamos bem do seu pokémon, para ele cuidar bem de você
      </DashboardText>
    </DashboardContainer>
  );
};

export default Dashboard;

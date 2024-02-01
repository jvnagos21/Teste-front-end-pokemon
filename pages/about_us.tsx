import React from "react";
import { NextPage } from "next";
import Header from "../src/components/Header/Index";
import Footer from "../src/components/Footer/Index";
import AboutUsContent from "../src/components/AboutUsContent";
import {
  Box,
  BoxContainer,
  BoxContentInferior,
  BoxContentSuperiorLeft,
  BoxContentTitle,
} from "../src/components/redBox";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Box>
        <BoxContainer>
          <BoxContentSuperiorLeft>Home Quem somos</BoxContentSuperiorLeft>
          <BoxContentTitle>Quem Somos</BoxContentTitle>
          <BoxContentInferior>
            A maior rede de tratamento pokémon.
          </BoxContentInferior>
        </BoxContainer>
      </Box>
      <AboutUsContent />
      <Footer />
    </div>
  );
};

export default Home;

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
import { PokemonForm } from "../src/components/pokemonForm";

const Schedule: NextPage = () => {
  return (
    <div>
      <Header />
      <Box>
        <BoxContainer>
          <BoxContentSuperiorLeft>Home Quem somos</BoxContentSuperiorLeft>
          <BoxContentTitle>Agendar Consulta</BoxContentTitle>
          <BoxContentInferior>
            Recupere seus pokémons em 5 segundos
          </BoxContentInferior>
        </BoxContainer>
      </Box>
      <PokemonForm regions={regions} dates={dates} />
      <Footer />
    </div>
  );
};

export default Schedule;

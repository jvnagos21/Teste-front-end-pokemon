import styled from "styled-components";
import { ISelectPokemon } from "../../Interfaces/Components";

export const DivLabelSelect = styled.div<ISelectPokemon>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props: ISelectPokemon) =>
    props.$selectPokemon ? "row" : "column"};
  align-items: ${(props: ISelectPokemon) =>
    props.$selectPokemon ? "center" : "none"};
  min-width: 265px;
  max-width: ${(props: ISelectPokemon) =>
    props.$selectPokemon ? "548px" : "265px"};
  gap: ${(props: ISelectPokemon) => (props.$selectPokemon ? "38px" : "8px")};
  position: relative;

  > label {
    font-size: var(--small-size-12);
    font-weight: var(--weight-bold);
    color: #1d1d1d;
  }

  > select {
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 100%;
    min-width: 256px;
    max-width: ${(props: ISelectPokemon) =>
      props.$selectPokemon ? "436px" : "265px"};
    height: 45px;
    font-size: var(--description-size-14);
    font-weight: var(--weight-medium);
    padding-left: 10px;
    border-radius: 8px;
    border: solid 2px #d5d5d5;
    color: #747474;
    background-color: transparent;
    cursor: ${(props: ISelectPokemon) =>
      props.$isDisable ? "no-drop" : "pointer"};
  }

  > div {
    width: 30px;
    height: 30px;
    position: absolute;
    font-size: var(--icon-select-30);
    color: #747474;
    bottom: 7px;
    right: 10px;
    z-index: -1;
  }
`;

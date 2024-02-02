import { boolean } from "yup";
import { IRegion } from "../Pages";

export interface IForm {
  regions: IRegion[];
  dates: string[];
}

export interface IInput {
  valueLabel: string;
  idInPut: string;
  typeInput: string;
  placeholder: string;
}

export interface IButtonAddPokemon {
  $addPokemon?: boolean;
}

export interface IInfoSchedule {
  name: string;
  surname: string;
  region: string;
  city: string;
  pokemons: (string | undefined)[];
  date: string;
  hour: string;
}

export interface ICity {
  name: string;
  url: string;
}

export interface IAreaCity {
  name: string;
  url: string;
}

export interface IPokemon {
  name: string;
  url: string;
}

export interface ISelectPokemon {
  $selectPokemon?: boolean;
  $isDisable?: boolean;
}

export type THour = string[];

export interface ISelect {
  valueLabel: string;
  idSelect: string;
  selectPokemon?: boolean;
  isDisable?: boolean;
  options: string[];
  optionDefault: string;
  callBack?: (region: string, Length: number) => void;
}

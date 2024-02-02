import * as yup from "yup";
import {
  IAreaCity,
  ICity,
  IForm,
  IInfoSchedule,
  IPokemon,
  THour,
} from "../../Interfaces/Components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import Select from "../Select";
import { toast } from "react-toastify";
import axios from "axios";
import { ContainerForm } from "./styles";
import Input from "../Input";
import { Button } from "../Button";

const schema = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  region: yup.string().required(),
  city: yup.string().required(),
  pokemons: yup.array().of(yup.string().optional()).required().min(1),
  date: yup.string().required(),
  hour: yup.string().required(),
});

export const PokemonForm = ({ regions, dates }: IForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (payload: IInfoSchedule) => {
    console.log(payload);
  };

  const [myPokemonsRegionGeneration, setMyPokemonsRegionGeneration] = useState<
    { region: string; generation: number }[]
  >([]);
  const [rateValue, setRateValue] = useState<number>();
  const [selectsPokemon, setSelectsPokemon] = useState<JSX.Element[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const [allPokemons, setAllPokemons] = useState<IPokemon[]>([]);
  const [hours, setHours] = useState<THour>([]);

  const createSelectPokemon = () => {
    if (cities.length > 0) {
      if (selectsPokemon.length < 6 && allPokemons.length > 0) {
        setSelectsPokemon([
          ...selectsPokemon,
          <Select
            {...register(`pokemons.${selectsPokemon.length}`)}
            key={`pokemon-${selectsPokemon.length}`}
            valueLabel={`Pokémon 0${selectsPokemon.length + 1}`}
            idSelect={`pokemon-${selectsPokemon.length}`}
            options={allPokemons.map((element) => element.name)}
            optionDefault="Selecione um pokémon"
            selectPokemon={true}
          />,
        ]);
      } else {
        selectsPokemon.length === 6
          ? toast.error("Limite de Pokémons excedido")
          : toast.error("a cidade não possui pokemons");
      }
    } else {
      toast.error("Selecione primeiro uma cidade");
    }
  };

  const getAllCities = async (region: string) => {
    if (!region) {
      setCities([]);
    }

    if (region) {
      setCities([]);
      try {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/region/${region}/`
        );
        setCities(data.locations);
      } catch (error) {
        console.log("erro ao buscar as cidades", error);
      }
    }
  };

  const getAllPokemons = async (city: string) => {
    if (city) {
      try {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/location/${city}/`
        );
        const pokemonsArray: IPokemon[] = [];
        await Promise.all(
          data.areas.map(async (area: IAreaCity) => {
            !area && setAllPokemons([]);
            const { data } = await axios.get(area.url);
            data.pokemon_encounters.forEach(
              (element: { pokemon: { name: string; url: string } }) => {
                pokemonsArray.push(element.pokemon);
              }
            );
          })
        );
        setAllPokemons([...pokemonsArray]);
      } catch (error) {
        console.log("Erro ao buscar as cidades", error);
      }
    }
  };

  const getDate = async (date: string) => {
    if (!date) {
      setHours([]);
    }
    if (date) {
      try {
        const { data } = await axios.post(
          "http://localhost:3000/api/scheduling/time",
          { date: date }
        );
        setHours(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getRegion = () => {
    const region = watch("region");
    const index = regions.findIndex((element) => element.name === region);

    const pokemonObject = {
      region: region,
      generation: index + 1,
    };
    allPokemons &&
      setMyPokemonsRegionGeneration([
        ...myPokemonsRegionGeneration,
        pokemonObject,
      ]);
  };

  const getGenerationAndRate = () => {
    if (allPokemons.length > 0) {
      const rate = 0.03 * (selectsPokemon.length * 70);
      setRateValue(
        myPokemonsRegionGeneration.reduce(
          (a, b) => Math.max(a, b.generation),
          0
        ) * rate
      );
    }
  };

  useEffect(() => {
    getGenerationAndRate();
  }, [selectsPokemon, allPokemons]);

  return (
    <ContainerForm>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <h3>Preencha o formulário abaixo para agendar sua consulta</h3>
        <section>
          <Input
            {...register("name")}
            valueLabel="Nome"
            idInPut="name"
            typeInput="text"
            placeholder="digite seu nome"
          />
          <Input
            {...register("surname")}
            valueLabel="Sobrenome"
            idInPut="surname"
            typeInput="text"
            placeholder="digite seu sobrenome"
          />
          <Select
            {...register("region")}
            valueLabel="Região"
            callBack={getAllCities}
            idSelect="region"
            options={regions.map((element) => element.name)}
            optionDefault="Selecione uma região"
          />
          <Select
            {...register("city")}
            valueLabel="Ciddade"
            callBack={getAllPokemons}
            idSelect="city"
            options={cities.map((element: { name: string }) => element.name)}
            optionDefault={
              cities.length
                ? "Selecione uma cidade"
                : "Selecione primeiro uma região"
            }
          />
        </section>
        <section>
          <div>
            <h4>Cadastre seu time</h4>
            <p>Atendemos até 06 pokémons por vez</p>
          </div>
          <ul>
            {selectsPokemon?.map((item: JSX.Element, index: number) => {
              return <li key={`list-select-${index}`}>{item}</li>;
            })}
          </ul>
          <Button
            type="button"
            $addPokemon={true}
            onClick={() => {
              getGenerationAndRate(), createSelectPokemon();
            }}
          >
            Adicionar novo pokémon ao time
          </Button>
        </section>
        <section>
          <Select
            {...register("date")}
            callBack={getDate}
            valueLabel="Data para atendimento"
            idSelect="dateSchedule"
            options={dates}
            optionDefault="Selecione uma data"
          />
          <Select
            {...register("hour")}
            valueLabel="Horário de atendimento"
            idSelect="hourSchedule"
            options={hours}
            optionDefault={
              hours.length
                ? "Selecione um horário"
                : "Selecione primeiro uma data"
            }
            isDisable={hours.length ? false : true}
          />
        </section>
        <section>
          <div>
            <div>
              <p>Número de pokémons a serem atendidos:</p>
              <p>
                {selectsPokemon.length === 0
                  ? "0"
                  : `0${selectsPokemon.length}`}
              </p>
            </div>
            <div>
              <p>Atendimento unitário por pokémon</p>
              <p>R$ 70,00</p>
            </div>
            <div>
              <p>Taxa geracional*: </p>
              <p>R$ {rateValue ? rateValue.toFixed(2) : "0,00"}</p>
            </div>
          </div>
          <div>
            <p>
              Valor Total: R${" "}
              {rateValue
                ? (
                    parseFloat(rateValue.toFixed(2)) +
                    selectsPokemon.length * 70
                  ).toFixed(2)
                : "0.00"}
            </p>
          </div>
        </section>
      </form>
    </ContainerForm>
  );
};
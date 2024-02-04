import { useContext } from "react";
import { ScheduleContext } from "../../Context/ScheduleContext";
import { ContainerSuccessOrError } from "./Styles";
import Image from "next/image";
import ImageError from "/public/warning.svg";
import ImageSuccess from "/public/check.svg";
import ActiveLink from "../ActiveLink/Index";

export const SuccessOrError = ({ isError }) => {
  const { descriptionError, descriptionSuccess } = useContext(ScheduleContext);
  return (
    <ContainerSuccessOrError>
      <section>
        <h2>
          {isError ? "Houve um problema no agendamento" : "Consulta agendada"}
        </h2>
        {
          <Image
            src={isError ? ImageError : ImageSuccess}
            alt={
              isError
                ? "Imagem com um simbolo de perigo"
                : "Imagem de confirmação do agendamento"
            }
          />
        }
        <p>{isError ? descriptionError : descriptionSuccess}</p>
        <ActiveLink href="/schedule">Fazer novo agendamento</ActiveLink>
      </section>
    </ContainerSuccessOrError>
  );
};

import axios, { AxiosResponse } from "axios"
import { Form } from "../../src/components/Form"
import { BottomHeader } from "../../src/components/BottomBox"
import { TDate, IRegion, IScheduleProps } from "../../src/Interfaces/Pages"
import DefaultPage from "../../src/components/DefaultPage/Index"
import { SuccessOrError } from "../../src/components/SucessOrFail/Index"
import { ScheduleContext } from "../../src/Context/ScheduleContext"
import { useContext } from "react"
import Main from "./styles"

const SchedulePage = ({ regions, dates }: IScheduleProps) => {
  const { isError } = useContext(ScheduleContext)

  return (
    <>
      <DefaultPage isHome={true}>
        <BottomHeader
          section="Agendar consulta"
          description="Recupere seus pokémons em 5 segundos"
        />
        {isError === true ? <SuccessOrError isError={isError} /> : null}
        {isError === false ? <SuccessOrError isError={isError} /> : null}
        {isError === undefined && (
          <Main>
            <Form regions={regions} dates={dates} />
          </Main>
        )}
      </DefaultPage>
    </>
  )
}

export async function getServerSideProps() {
  try {
    const regionsResponse: AxiosResponse<{ results: IRegion[] }> =
      await axios.get("https://pokeapi.co/api/v2/region/")
    const regions: IRegion[] = regionsResponse.data.results

    const datesResponse: AxiosResponse<TDate> = await axios.get(
      "http://localhost:3000/api/scheduling/date/"
    )
    const dates: TDate = datesResponse.data

    return {
      props: { regions, dates },
    }
  } catch (error) {
    console.error("An error occurred while fetching data.", error)
  }
}

export default SchedulePage

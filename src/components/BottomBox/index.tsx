import { IoChevronForwardOutline } from "react-icons/io5";
import { BottomHeaderStyle } from "./style";
import { IBottomHeader } from "../../Interfaces/Components";
import ActiveLink from "../ActiveLink/Index";

export const BottomHeader = ({ section, description }: IBottomHeader) => {
  return (
    <>
      <BottomHeaderStyle>
        <div>
          <div>
            <ActiveLink href="/">Home</ActiveLink>
            <p>
              <IoChevronForwardOutline />
            </p>
            <p>{section}</p>
          </div>
          <h2>{section}</h2>
          <p>{description}</p>
        </div>
      </BottomHeaderStyle>
    </>
  );
};

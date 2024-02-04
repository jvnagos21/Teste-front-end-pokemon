import { ReactNode } from "react";

export interface IRegion {
  name: string;
  url: string;
}

export interface IScheduleProps {
  regions: IRegion[];
  dates: TDate;
}

export interface IDefault {
  children: ReactNode;
  isHome?: boolean;
}

export type TDate = string[];

import React from "react";
import styled from "styled-components";

const InfoDiv = styled.div`
  position: absolute;
  width: 259px;
  height: 61px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 1000px;
`;

const AboutUs = styled.span`
  color: #000000;
  width: 89px;
  height: 17px;
  weight: 400;
  size: 14px;
`;

const ScheduleButton = styled.button`
  width: 172px;
  height: 42px;
  border-radius: 30px;
  background-color: #e40f0f;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid transparent;
  letter-spacing: 0em;
  cursor: pointer;
`;

export { InfoDiv, AboutUs, ScheduleButton };

import styled from "styled-components";

const Box = styled.div`
  width: full;
  height: 187px;
  background-color: #e40f0f;
  display: flex;
  justify-content: flex-start;
`;

const BoxContentTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;

const BoxContainer = styled.div`
  margin-left: 106px;
`;

const BoxContentSuperiorLeft = styled.h3`
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 30px;
`;

const BoxContentInferior = styled.h3`
  font-size: 14px;
  font-weight: 400;
  color: #eeeeee;
  text-align: left;
`;

export {
  Box,
  BoxContentTitle,
  BoxContentSuperiorLeft,
  BoxContentInferior,
  BoxContainer,
};

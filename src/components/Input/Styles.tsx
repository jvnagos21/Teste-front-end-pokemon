import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 265px;
  gap: 8px;

  label {
    font-size: var(--small-size-12);
    font-weight: var(--weight-bold);
    color: #1d1d1d;
  }

  input {
    height: 39px;
    font-size: var(--description-size-14);
    font-weight: var(--weight-medium);
    padding-left: 15px;
    border-radius: 8px;
    border: solid 2px #d5d5d5;
    color: #747474;
  }
`;

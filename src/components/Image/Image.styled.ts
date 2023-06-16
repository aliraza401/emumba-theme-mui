import styled from "styled-components";

export const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  ${(props) =>
    props.theme.mode === "dark" &&
    `
      filter: invert(1);
    `}
`;

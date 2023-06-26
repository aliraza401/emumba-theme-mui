import styled from "styled-components";
import { NAV_WIDTH } from "../../constants";
import { Box } from "@mui/material";

export const StyledNav = styled.nav<{ isOpened: boolean }>`
  /* width: ${NAV_WIDTH}px; */
  border-radius: 0px 20px 20px 0px;
  background-color: ${({ theme }) => theme.bg.light};
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  /* margin-left: ${({ isOpened }) => (isOpened ? `${NAV_WIDTH}px` : 0)}; */
`;

export const StyledBox = styled(Box)`
  text-align: center;
  cursor: pointer;
  color: ${({ theme }) => theme.text.light};
  /* color: ${({ theme }) =>
    theme.palette.mode === "dark" ? theme.text.light : theme.text.main}; */
`;

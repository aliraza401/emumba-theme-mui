import { AppBar, Toolbar } from "@mui/material";
import styled from "styled-components";
import { NAV_WIDTH } from "../../constants";

const HEADER_MOBILE = 64;
const HEADER_DESKTOP = 92;

export const StyledRoot = styled(AppBar)`
  ${({ theme }) => `
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    box-shadow: none;
    background-color: ${theme.bg.main};
    @media (min-width: ${theme.breakpoints.values.sm}px) {
      width: calc(100% - ${NAV_WIDTH + 1}px);
    }
  `}
`;

export const StyledToolbar = styled(Toolbar)`
  ${({ theme }) => `
    min-height: ${HEADER_MOBILE}px;
    padding-top: 10px;
    // margin-left: ${NAV_WIDTH}px; 
    background-color: ${theme.bg.main} !important;
    @media (min-width: ${theme.breakpoints.values.sm}px) {
      min-height: ${HEADER_DESKTOP}px;
      padding: ${theme.spacing(0, 5)}px;
    }
  `}
`;

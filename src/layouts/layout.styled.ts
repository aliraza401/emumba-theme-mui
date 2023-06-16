import styled from "styled-components";
import { NAV_WIDTH } from "../constants";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;
const BUFFER_TOP = 24;

export const StyledRoot = styled.div`
  display: flex;
  min-height: 100%;
  overflow: hidden;
`;

export const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
  min-height: 100%;
  padding: 2rem;
  padding-top: ${APP_BAR_MOBILE + BUFFER_TOP}px;
  padding-bottom: ${({ theme }) => theme.spacing(10)}px;
  background-color: ${({ theme }) => theme.bg.main};
  /* margin-left: ${NAV_WIDTH}px; */

  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    padding-top: ${APP_BAR_DESKTOP + BUFFER_TOP}px;
    padding-left: ${(props) => props.theme.spacing(2)}px;
    padding-right: ${(props) => props.theme.spacing(2)}px;
  }
`;

import styled from "styled-components";
import { Card, Typography } from "@mui/material";

export const StyledCard = styled(Card)<{ cardColor: string }>`
  width: 100%;
  background: ${(props) => props.cardColor};
  border-radius: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  margin: auto;

  max-width: 100%;
  height: 220px;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    max-width: 448px;
    height: 260px;
  }
`;

export const CardLogo = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 50px;
`;

export const CardCompany = styled(Typography)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const WifiIcon = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const CardDetails = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
`;

export const CardName = styled(Typography)`
  color: white;
`;

export const CardNumber = styled(Typography)``;

export const CardExpiry = styled(Typography)`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

export const CardMasterLogo = styled.img`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 126px;
  height: auto;
`;

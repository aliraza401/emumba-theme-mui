import { Typography } from "@mui/material";
import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  height: 142px;
  display: flex;
  align-items: center;
  padding: 1.875rem;
  background-color: ${({ theme }) => theme.bg.light};
  border-radius: 10px;
  margin-bottom: 40px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ color }) => `${color}80`};

  width: 60px;
  height: 60px;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    width: 90px;
    height: 90px;
  }
`;

export const Icon = styled.img`
  width: 27px;
  height: 27px;
  background-color: ${({ color }) => color};
`;

export const ContentContainer = styled.div`
  flex: 1;
  margin-left: 0.875rem;
`;

export const Name = styled(Typography)`
  line-height: 1;
  margin-bottom: 10px;
`;

export const TagLine = styled(Typography)`
  margin-bottom: 20px;
`;

export const ProgressContainer = styled.div`
  margin-top: 5px;
  border-radius: 0.5rem;
  background-color: ${({ color }) => `${color}80`};
`;

export const ProgressFill = styled.div<{ progress: number }>`
  width: ${({ progress }) => progress}%;
  height: 0.5rem;
  background-color: #3f8ae0;
  border-radius: 3px;
  background-color: ${({ color }) => color};
`;

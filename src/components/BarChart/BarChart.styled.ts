import { styled } from "styled-components";

export const ChartContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bg.light};

  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
    height: 400px;
  }

  ${({ theme }) => theme.breakpoints.up(theme.breakpoints.values.sm)} {
    height: 870px;
  }
`;

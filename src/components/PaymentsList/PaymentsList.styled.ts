import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Avatar, Typography } from "@mui/material";

export const StyledArrowIcon = styled(ArrowForwardIosIcon)`
  cursor: pointer;
`;

export const DataGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 600px;
  margin-top: 2rem;
  border-radius: 0.65rem;

  .MuiDataGrid-root {
    border: none;
  }
  .MuiDataGrid-columnHeaders {
    display: none;
  }
  .MuiTableRow-root {
    background-color: ${({ theme }) => theme.bg.light};
    height: 70px;
    max-height: 70px !important;
    border-radius: 0.65rem;
  }
  .MuiTableCell-root {
    border-bottom: none;
  }
  .MuiTableHead-root {
    display: none;
  }

  .MuiTableBody-root .MuiTableRow-root:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const ColumnContainer = styled.div`
  /* text-align: center; */
`;

export const UserAvatar = styled(Avatar)`
  margin-right: 0.5rem;
  width: 50px;
  height: 50px;
`;

export const Heading = styled(Typography)`
  font-size: 1.375rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.main};
`;

export const SubHeading = styled(Typography)`
  font-size: 0.875rem;
  font-weight: 300;
  color: ${({ theme }) => theme.text.light};
`;

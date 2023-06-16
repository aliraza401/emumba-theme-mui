import React from "react";
import { IUser } from "./PaymentsList.interface";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

import ArrowRight from "./../../assets/images/ArrowRight.svg";

import {
  StyledArrowIcon,
  DataGridContainer,
  ColumnContainer,
  Heading,
  SubHeading,
  UserAvatar,
} from "./PaymentsList.styled";
import Image from "../Image/Image";

interface PaymentsListProps {
  users: IUser[];
}

const columns: GridColDef[] = [
  {
    field: "user",
    headerName: "",
    flex: 2, // 2 fractions of the grid space
    renderCell: (params: GridRenderCellParams) => {
      const user: IUser = params.row as IUser;
      return (
        <>
          <UserAvatar src={user.avatar} />
          <ColumnContainer>
            <Heading>{user.name}</Heading>
            <SubHeading>{user.designation}</SubHeading>
          </ColumnContainer>
        </>
      );
    },
  },
  {
    field: "projects",
    headerName: "",
    flex: 1, // 1 fraction of the grid space
    renderCell: (params) => (
      <ColumnContainer>
        <Heading>{params.value}</Heading>
        <SubHeading>Projects</SubHeading>
      </ColumnContainer>
    ),
  },
  {
    field: "finishedProjects",
    headerName: "",
    flex: 1, // 1 fraction of the grid space
    renderCell: (params) => (
      <ColumnContainer>
        <Heading>{params.value}</Heading>
        <SubHeading>Finished</SubHeading>
      </ColumnContainer>
    ),
  },
  {
    field: "totalProfit",
    headerName: "",
    flex: 1, // 1 fraction of the grid space
    renderCell: (params) => (
      <ColumnContainer>
        <Heading>{params.value}</Heading>
        <SubHeading>Profit</SubHeading>
      </ColumnContainer>
    ),
  },
  {
    field: "followers",
    headerName: "",
    flex: 1, // 1 fraction of the grid space
    renderCell: (params) => (
      <ColumnContainer>
        <Heading>{params.value}</Heading>
        <SubHeading>Followers</SubHeading>
      </ColumnContainer>
    ),
  },
  {
    field: "action",
    headerName: "",
    flex: 1, // 1 fraction of the grid space
    renderCell: () => (
      <div className="text-center" style={{width: "100%"}}>
        <Image src={ArrowRight} />
      </div>
    ),
  },
];

const PaymentsList: React.FC<PaymentsListProps> = ({ users }) => {
  return (
    <DataGridContainer>
      <DataGrid rows={users} columns={columns} hideFooter autoHeight />
    </DataGridContainer>
  );
};

export default PaymentsList;

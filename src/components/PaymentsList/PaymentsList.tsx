import React from "react";
import { IUser } from "./PaymentsList.interface";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

import ArrowRight from "./../../assets/images/ArrowRight.svg";

import {
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

const PaymentsList: React.FC<PaymentsListProps> = ({ users }) => {
  return (
    <DataGridContainer>
      <TableContainer component={DataGridContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="d-flex">
                    <UserAvatar src={user.avatar} />
                    <ColumnContainer>
                      <Heading>{user.name}</Heading>
                      <SubHeading>{user.designation}</SubHeading>
                    </ColumnContainer>
                  </div>
                </TableCell>
                <TableCell>
                  <ColumnContainer>
                    <Heading>{user.projects}</Heading>
                    <SubHeading>Projects</SubHeading>
                  </ColumnContainer>
                </TableCell>
                <TableCell>
                  <ColumnContainer>
                    <Heading>{user.finishedProjects}</Heading>
                    <SubHeading>Finished Projects</SubHeading>
                  </ColumnContainer>
                </TableCell>
                <TableCell>
                  <ColumnContainer>
                    <Heading>{user.totalProfit}</Heading>
                    <SubHeading>Total Profit</SubHeading>
                  </ColumnContainer>
                </TableCell>
                <TableCell>
                  <ColumnContainer>
                    <Heading>{user.followers}</Heading>
                    <SubHeading>Followers</SubHeading>
                  </ColumnContainer>
                </TableCell>
                <TableCell>
                  <div className="text-center" style={{ width: "100%" }}>
                    <Image src={ArrowRight} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DataGridContainer>
  );
};

export default PaymentsList;

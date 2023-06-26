import React from "react";
import { IUser } from "./PaymentsList.interface";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";

import ArrowRight from "./../../assets/images/ArrowRight.svg";

import {
  DataGridContainer,
  ColumnContainer,
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
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="d-flex">
                    <UserAvatar src={user.avatar} />
                    <ColumnContainer>
                      <Typography variant="h2">{user.name}</Typography>
                      <Typography variant="subtitle1">
                        {user.designation}
                      </Typography>
                    </ColumnContainer>
                  </div>
                </TableCell>
                <TableCell>
                  <ColumnContainer>
                    <Typography variant="h2">{user.projects}</Typography>
                    <Typography variant="subtitle1">Projects</Typography>
                  </ColumnContainer>
                </TableCell>
                <TableCell>
                  <ColumnContainer>
                    <Typography variant="h2">
                      {user.finishedProjects}
                    </Typography>
                    <Typography variant="subtitle1">
                      Finished Projects
                    </Typography>
                  </ColumnContainer>
                </TableCell>
                <TableCell>
                  <ColumnContainer>
                    <Typography variant="h2">{user.totalProfit}</Typography>
                    <Typography variant="subtitle1">Total Profit</Typography>
                  </ColumnContainer>
                </TableCell>
                <TableCell>
                  <ColumnContainer>
                    <Typography variant="h2">{user.followers}</Typography>
                    <Typography variant="subtitle1">Followers</Typography>
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

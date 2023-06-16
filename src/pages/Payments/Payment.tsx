import React from "react";
import { PaymentProps } from "./Payment.interface";
import ShoppingCard from "../../components/ShoppingCard/ShoppingCard";
import PaymentsList from "../../components/PaymentsList/PaymentsList";
import { cards, users } from "../../constants";
import { Grid } from "@mui/material";
import { StyledGrid } from "./Payment.styled";

export const Payment: React.FC<PaymentProps> = () => {
  return (
    <div>
      <StyledGrid container spacing={3}>
        {cards.slice(0, 3).map((card) => (
          <Grid item xs={12} sm={6} lg={4}>
            <ShoppingCard
              cardCompany={card.cardCompany}
              name={card.name}
              number={card.number}
              expDate={card.expDate}
              key={card.key}
              cardColor={card.cardColor}
            />
          </Grid>
        ))}
      </StyledGrid>

      <PaymentsList users={users} />
    </div>
  );
};

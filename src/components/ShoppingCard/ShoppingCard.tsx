import React from "react";
import { ShoppingCardProps } from "./ShoppingCard.interface";
import {
  StyledCard,
  CardLogo,
  CardCompany,
  WifiIcon,
  CardDetails,
  CardName,
  CardNumber,
  CardExpiry,
  CardMasterLogo,
} from "./ShoppingCard.styled";
import wifiLogo from "./../../assets/images/wifi_Color.svg";
import mastercardLogo from "./../../assets/images/master_card.svg";

const ShoppingCard: React.FC<ShoppingCardProps> = ({
  cardCompany,
  name,
  number,
  expDate,
  cardColor,
}) => {
  return (
    <StyledCard cardColor={cardColor}>
      <CardCompany>{cardCompany}</CardCompany>
      <WifiIcon src={wifiLogo} alt="Wifi Symbol" />
      <CardDetails>
        <CardName>{name}</CardName>
        <CardNumber>{number}</CardNumber>
      </CardDetails>
      <CardExpiry>{expDate}</CardExpiry>
      <CardMasterLogo src={mastercardLogo} alt="MasterCard Logo" />
    </StyledCard>
  );
};

export default ShoppingCard;

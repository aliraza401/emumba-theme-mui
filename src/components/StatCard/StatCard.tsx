import React from "react";
import StatCardProps from "./StatCard.interface";
import {
  CardContainer,
  IconContainer,
  Icon,
  ContentContainer,
  Name,
  TagLine,
  ProgressContainer,
  ProgressFill,
} from "./StatCard.styled";

const StatCard: React.FC<StatCardProps> = ({
  name,
  tagLine,
  icon,
  progress,
  color,
}) => {
  return (
    <CardContainer>
      <IconContainer color={color}>
        <Icon src={icon} alt={name} />
      </IconContainer>
      <ContentContainer>
        <Name variant="h2">{name}</Name>
        <TagLine variant="subtitle1">{tagLine}</TagLine>
        <ProgressContainer color={color}>
          <ProgressFill progress={progress} color={color} />
        </ProgressContainer>
      </ContentContainer>
    </CardContainer>
  );
};

export default StatCard;

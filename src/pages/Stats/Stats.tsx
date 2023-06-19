import React from "react";
import { StatsProps } from "./Stats.interface";
import { Grid } from "@mui/material";
import { StyledGrid } from "./Stats.styled";
import BarChart from "../../components/BarChart/BarChart";
import { statData } from "../../constants";
import StatCard from "../../components/StatCard/StatCard";

export const Stats: React.FC<StatsProps> = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <StyledGrid item sm={12} lg={8}>
          <BarChart />
        </StyledGrid>
        <StyledGrid item sm={12} lg={4}>
          {statData.map((stat, index) => (
            <StatCard
              key={index}
              name={stat.name}
              tagLine={stat.tagLine}
              icon={stat.icon}
              progress={stat.progress}
              color={stat.color}
            />
          ))}
        </StyledGrid>
      </Grid>
    </div>
  );
};

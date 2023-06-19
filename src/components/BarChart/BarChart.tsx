import { FC } from "react";
import { BarChartProps } from "./BarChart.interface";
import {
  BarChart as BChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { barChartData } from "../../constants";
import { ChartContainer } from "./BarChart.styled";

const BarChart: FC<BarChartProps> = () => {
  return (
    <ChartContainer>
      <ResponsiveContainer>
        <BChart
          data={barChartData.data}
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={35}
          barGap={10}
        >
          <XAxis
            dataKey="name"
            // tick={{ fontSize: 14 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis domain={[0, 500]} axisLine={false} tickLine={false} />
          <Tooltip />
          {/* <Legend
            layout="horizontal"
            verticalAlign="top"
            align="left"
            wrapperStyle={{ paddingLeft: "60px" }}
            iconSize={10}
          /> */}
          <Bar
            dataKey={barChartData.dataKeys.Restless.value}
            stackId="a"
            fill={barChartData.dataKeys.Restless.color}
            radius={[30, 30, 30, 30]}
          />
          <Bar
            dataKey={barChartData.dataKeys.Deep.value}
            stackId="a"
            fill={barChartData.dataKeys.Deep.color}
            radius={[30, 30, 30, 30]}
          />
          <Bar
            dataKey={barChartData.dataKeys.Awake.value}
            stackId="a"
            fill={barChartData.dataKeys.Awake.color}
            radius={[30, 30, 30, 30]}
          />
        </BChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default BarChart;

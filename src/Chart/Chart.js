import React from "react";

import {
  BarChartContainer,
  BarBlock,
  BasisLine,
  DiffDirectionHeightBlock,
  FullHeightBlock
} from "./styles";

/*
  @namespace {Array[{value: number, primaryColor: string, secondaryColor: string}]} data
  @namespace {number} barchartHeight  
  @namespace {number} barWidth  
  @namespace {number} spaceBetweenWidth  
*/
const Chart = ({ data = [], barchartHeight = 200, barWidth = 50, spaceBetweenWidth = 10 }) => {
  const isAllPositive = data.every(item => item.value >= 0);
  const isAllNegative = data.every(item => item.value <= 0);
  const isDiffDirection = !isAllPositive && !isAllNegative;

  let maxValue = 0;
  let isPositiveBarLonger = false;
  let biggestDiffValue = 0;

  data.forEach(item => {
    if (maxValue < Math.abs(item.value)) {
      maxValue = Number(Math.abs(item.value.toFixed(2)));
      isPositiveBarLonger = 0 < item.value;
    }
  });

  if (isDiffDirection) {
    data.forEach(item => {
      if (
        (isPositiveBarLonger ? item.value < 0 : item.value > 0) &&
        biggestDiffValue < Math.abs(item.value)
      ) {
        biggestDiffValue = Number(Math.abs(item.value.toFixed(2)));
      }
    });
  };

  return (
    <BarChartContainer width={(data.length * barWidth) + ((data.length - 1) * spaceBetweenWidth)}>
      {isAllPositive && (
        <div>
          <FullHeightBlock isPositive height={barchartHeight}>
            {data.map((item, index) => {
              return (
                <BarBlock
                  key={index}
                  height={Math.round((item.value / maxValue) * 100)}
                  width={barWidth}
                  spaceBetween={spaceBetweenWidth}
                  primaryColor={item.primaryColor}
                  secondaryColor={item.secondaryColor}
                  isPositive
                />
              );
            })}
          </FullHeightBlock>
          <BasisLine />
        </div>
      )}
      {isAllNegative && (
        <div>
          <BasisLine />
          <FullHeightBlock height={barchartHeight}>
            {data.map((item, index) => {
              return (
                <BarBlock
                key={index}
                  height={Math.abs(Math.round((item.value / maxValue) * 100))}
                  width={barWidth}
                  spaceBetween={spaceBetweenWidth}
                  primaryColor={item.primaryColor}
                  secondaryColor={item.secondaryColor}
                  isPositive={false}
                />
              );
            })}
          </FullHeightBlock>
        </div>
      )}
      {isDiffDirection && (
        <DiffDirectionHeightBlock height={barchartHeight}>
          <FullHeightBlock isPositive isDiffDirection>
            {data.map((item, index) => {
              return (
                <BarBlock
                key={index}
                  height={
                    item.value > 0
                      ? (item.value / (maxValue + biggestDiffValue)) *
                      barchartHeight
                      : 0
                  }
                  width={barWidth}
                  spaceBetween={spaceBetweenWidth}
                  isStrictSize
                  primaryColor={item.value > 0 ? item.primaryColor : "transparent"}
                  secondaryColor={
                    item.value > 0 ? item.secondaryColor : "transparent"
                  }
                  isPositive
                />
              );
            })}
          </FullHeightBlock>
          <BasisLine />
          <FullHeightBlock isDiffDirection>
            {data.map((item, index) => {
              return (
                <BarBlock
                key={index}
                  height={
                    item.value < 0
                      ? Math.abs(
                        (item.value / (maxValue + biggestDiffValue)) *
                        barchartHeight
                      )
                      : 0
                  }
                  width={barWidth}
                  spaceBetween={spaceBetweenWidth}
                  isStrictSize
                  primaryColor={item.value < 0 ? item.primaryColor : "transparent"}
                  secondaryColor={
                    item.value < 0 ? item.secondaryColor : "transparent"
                  }
                  isPositive={false}
                />
              );
            })}
          </FullHeightBlock>
        </DiffDirectionHeightBlock>
      )}
    </BarChartContainer>
  );
};

export default Chart;

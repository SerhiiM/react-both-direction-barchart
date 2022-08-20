import styled from 'styled-components'

export const BarChartContainer = styled.div`
  width: ${({ width }) => `${width}px`};
`;

export const BarBlock = styled.div`
  background: ${({ primaryColor }) => primaryColor};
  border: solid 1px ${({ secondaryColor }) => secondaryColor};
  height: ${({ height, isStrictSize }) =>
    `${height}${isStrictSize ? "px" : "%"}`};
  width: ${({ width }) => `${width}px`};
  margin-right: ${({ spaceBetween }) => `${spaceBetween}px`};
  border-radius: ${({ isPositive }) =>
    isPositive ? "4px 4px 0 0" : "0 0 4px 4px"};
  &:last-child {
    margin-right: 0px;
  }
`;

export const FullHeightBlock = styled.div`
  height: ${({ isDiffDirection, height }) =>
    isDiffDirection ? "max-content" : height + "px"};
  display: flex;
  align-items: ${({ isPositive }) => (isPositive ? "flex-end" : "flex-start")};
`;

export const BasisLine = styled.div`
  background: #607EAA;
  width: 100%;
  height: 1px;
`;

export const DiffDirectionHeightBlock = styled.div`
  height: max-content;
`;

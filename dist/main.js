var $9AoES$react = require("react");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $2714d5d70fce1f6a$export$2e2bcd8739ae039);

const $c13f7b71ebe2660f$export$21b431f49f69b249 = styled.div`
  background: ${({ primaryColor: primaryColor  })=>primaryColor};
  border: solid 1px ${({ secondaryColor: secondaryColor  })=>secondaryColor};
  height: ${({ height: height , isStrictSize: isStrictSize  })=>`${height}${isStrictSize ? "px" : "%"}`};
  width: 24px;
  margin: 0 5px;
  border-radius: ${({ isPositive: isPositive  })=>isPositive ? "4px 4px 0 0" : "0 0 4px 4px"};
  &:first-child {
    margin-left: 0px;
  }
  &:last-child {
    margin-right: 0px;
  }
`;
const $c13f7b71ebe2660f$export$85baac63c0f23731 = styled.div`
  height: ${({ isDiffDirection: isDiffDirection , height: height  })=>isDiffDirection ? "max-content" : height + "px"};
  display: flex;
  align-items: ${({ isPositive: isPositive  })=>isPositive ? "flex-end" : "flex-start"};
`;
const $c13f7b71ebe2660f$export$119cafd3a25d40c5 = styled.div`
  background: #607EAA;
  width: 100%;
  height: 1px;
`;
const $c13f7b71ebe2660f$export$d5f17049d0c70a76 = styled.div`
  height: max-content;
`;


/*
  @namespace {Array[{value: number, primaryColor: string, secondaryColor: string}]} data
  @namespace {number} barchartHeight  
  @namespace {number} barWidth  
  @namespace {number} spaceBetweenWidth  
*/ const $2714d5d70fce1f6a$var$Chart = ({ data: data = [] , barchartHeight: barchartHeight = 200 , barWidth: barWidth = 50 , spaceBetweenWidth: spaceBetweenWidth = 10  })=>{
    const isAllPositive = data.every((item)=>item.value >= 0);
    const isAllNegative = data.every((item)=>item.value <= 0);
    const isDiffDirection = !isAllPositive && !isAllNegative;
    let maxValue = 0;
    let isPositiveBarLonger = false;
    let biggestDiffValue = 0;
    data.forEach((item)=>{
        if (maxValue < Math.abs(item.value)) {
            maxValue = Number(Math.abs(item.value.toFixed(2)));
            isPositiveBarLonger = 0 < item.value;
        }
    });
    if (isDiffDirection) data.forEach((item)=>{
        if ((isPositiveBarLonger ? item.value < 0 : item.value > 0) && biggestDiffValue < Math.abs(item.value)) biggestDiffValue = Number(Math.abs(item.value.toFixed(2)));
    });
    return /*#__PURE__*/ (0, ($parcel$interopDefault($9AoES$react))).createElement("div", null, isAllPositive && /*#__PURE__*/ (0, ($parcel$interopDefault($9AoES$react))).createElement("div", null, /*#__PURE__*/ (0, ($parcel$interopDefault($9AoES$react))).createElement((0, $c13f7b71ebe2660f$export$85baac63c0f23731), {
        isPositive: true,
        height: barchartHeight
    }, data.map((item)=>{
        return /*#__PURE__*/ (0, ($parcel$interopDefault($9AoES$react))).createElement((0, $c13f7b71ebe2660f$export$21b431f49f69b249), {
            key: item.key,
            height: Math.round(item.value / maxValue * 100),
            primaryColor: item.primaryColor,
            secondaryColor: item.secondaryColor,
            isPositive: true
        });
    })), /*#__PURE__*/ (0, ($parcel$interopDefault($9AoES$react))).createElement((0, $c13f7b71ebe2660f$export$119cafd3a25d40c5), null)), isAllNegative && /*#__PURE__*/ (0, ($parcel$interopDefault($9AoES$react))).createElement("div", null, /*#__PURE__*/ (0, ($parcel$interopDefault($9AoES$react))).createElement((0, $c13f7b71ebe2660f$export$119cafd3a25d40c5), null), /*#__PURE__*/ (0, ($parcel$interopDefault($9AoES$react))).createElement((0, $c13f7b71ebe2660f$export$85baac63c0f23731), {
        height: barchartHeight
    }, data.map((item)=>{
        return /*#__PURE__*/ (0, ($parcel$interopDefault($9AoES$react))).createElement((0, $c13f7b71ebe2660f$export$21b431f49f69b249), {
            key: item.key,
            height: Math.abs(Math.round(item.value / maxValue * 100)),
            primaryColor: item.primaryColor,
            secondaryColor: item.secondaryColor,
            isPositive: false
        });
    }))), isDiffDirection && /*#__PURE__*/ (0, ($parcel$interopDefault($9AoES$react))).createElement((0, $c13f7b71ebe2660f$export$d5f17049d0c70a76), {
        height: barchartHeight
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($9AoES$react))).createElement((0, $c13f7b71ebe2660f$export$85baac63c0f23731), {
        isPositive: true,
        isDiffDirection: true
    }, data.map((item)=>{
        return /*#__PURE__*/ (0, ($parcel$interopDefault($9AoES$react))).createElement((0, $c13f7b71ebe2660f$export$21b431f49f69b249), {
            key: item.key,
            height: item.value > 0 ? item.value / (maxValue + biggestDiffValue) * barchartHeight : 0,
            isStrictSize: true,
            primaryColor: item.value > 0 ? item.primaryColor : "transparent",
            secondaryColor: item.value > 0 ? item.secondaryColor : "transparent",
            isPositive: true
        });
    })), /*#__PURE__*/ (0, ($parcel$interopDefault($9AoES$react))).createElement((0, $c13f7b71ebe2660f$export$119cafd3a25d40c5), null), /*#__PURE__*/ (0, ($parcel$interopDefault($9AoES$react))).createElement((0, $c13f7b71ebe2660f$export$85baac63c0f23731), {
        isDiffDirection: true
    }, data.map((item)=>{
        return /*#__PURE__*/ (0, ($parcel$interopDefault($9AoES$react))).createElement((0, $c13f7b71ebe2660f$export$21b431f49f69b249), {
            key: item.key,
            height: item.value < 0 ? Math.abs(item.value / (maxValue + biggestDiffValue) * barchartHeight) : 0,
            isStrictSize: true,
            primaryColor: item.value < 0 ? item.primaryColor : "transparent",
            secondaryColor: item.value < 0 ? item.secondaryColor : "transparent",
            isPositive: false
        });
    }))));
};
var $2714d5d70fce1f6a$export$2e2bcd8739ae039 = $2714d5d70fce1f6a$var$Chart;




//# sourceMappingURL=main.js.map

var $jtJDy$react = require("react");
var $jtJDy$styledcomponents = require("styled-components");

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

$parcel$export(module.exports, "default", () => $e56e36bfcaf45a41$export$2e2bcd8739ae039);
$parcel$export(module.exports, "BothDirectionBarChart", () => $e56e36bfcaf45a41$export$61316c9d31544b7d);


const $7a3ac0abe15ca661$export$6a70c6a55be0a956 = (0, ($parcel$interopDefault($jtJDy$styledcomponents))).div`
  width: ${({ width: width  })=>`${width}px`};
`;
const $7a3ac0abe15ca661$export$21b431f49f69b249 = (0, ($parcel$interopDefault($jtJDy$styledcomponents))).div`
  background: ${({ primaryColor: primaryColor  })=>primaryColor};
  border: solid 1px ${({ secondaryColor: secondaryColor  })=>secondaryColor};
  height: ${({ height: height , isStrictSize: isStrictSize  })=>`${height}${isStrictSize ? "px" : "%"}`};
  width: ${({ width: width  })=>`${width}px`};
  margin-right: ${({ spaceBetween: spaceBetween  })=>`${spaceBetween}px`};
  border-radius: ${({ isPositive: isPositive  })=>isPositive ? "4px 4px 0 0" : "0 0 4px 4px"};
  &:last-child {
    margin-right: 0px;
  }
`;
const $7a3ac0abe15ca661$export$85baac63c0f23731 = (0, ($parcel$interopDefault($jtJDy$styledcomponents))).div`
  height: ${({ isDiffDirection: isDiffDirection , height: height  })=>isDiffDirection ? "max-content" : height + "px"};
  display: flex;
  align-items: ${({ isPositive: isPositive  })=>isPositive ? "flex-end" : "flex-start"};
`;
const $7a3ac0abe15ca661$export$119cafd3a25d40c5 = (0, ($parcel$interopDefault($jtJDy$styledcomponents))).div`
  background: #607EAA;
  width: 100%;
  height: 1px;
`;
const $7a3ac0abe15ca661$export$d5f17049d0c70a76 = (0, ($parcel$interopDefault($jtJDy$styledcomponents))).div`
  height: max-content;
`;


const $e56e36bfcaf45a41$export$61316c9d31544b7d = ({ data: data = [] , barchartHeight: barchartHeight = 200 , barWidth: barWidth = 50 , spaceBetweenWidth: spaceBetweenWidth = 10  })=>{
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
    return /*#__PURE__*/ (0, ($parcel$interopDefault($jtJDy$react))).createElement((0, $7a3ac0abe15ca661$export$6a70c6a55be0a956), {
        width: data.length * barWidth + (data.length - 1) * spaceBetweenWidth
    }, isAllPositive && /*#__PURE__*/ (0, ($parcel$interopDefault($jtJDy$react))).createElement("div", null, /*#__PURE__*/ (0, ($parcel$interopDefault($jtJDy$react))).createElement((0, $7a3ac0abe15ca661$export$85baac63c0f23731), {
        isPositive: true,
        height: barchartHeight
    }, data.map((item, index)=>{
        return /*#__PURE__*/ (0, ($parcel$interopDefault($jtJDy$react))).createElement((0, $7a3ac0abe15ca661$export$21b431f49f69b249), {
            key: index,
            height: Math.round(item.value / maxValue * 100),
            width: barWidth,
            spaceBetween: spaceBetweenWidth,
            primaryColor: item.primaryColor,
            secondaryColor: item.secondaryColor,
            isPositive: true
        });
    })), /*#__PURE__*/ (0, ($parcel$interopDefault($jtJDy$react))).createElement((0, $7a3ac0abe15ca661$export$119cafd3a25d40c5), null)), isAllNegative && /*#__PURE__*/ (0, ($parcel$interopDefault($jtJDy$react))).createElement("div", null, /*#__PURE__*/ (0, ($parcel$interopDefault($jtJDy$react))).createElement((0, $7a3ac0abe15ca661$export$119cafd3a25d40c5), null), /*#__PURE__*/ (0, ($parcel$interopDefault($jtJDy$react))).createElement((0, $7a3ac0abe15ca661$export$85baac63c0f23731), {
        height: barchartHeight
    }, data.map((item, index)=>{
        return /*#__PURE__*/ (0, ($parcel$interopDefault($jtJDy$react))).createElement((0, $7a3ac0abe15ca661$export$21b431f49f69b249), {
            key: index,
            height: Math.abs(Math.round(item.value / maxValue * 100)),
            width: barWidth,
            spaceBetween: spaceBetweenWidth,
            primaryColor: item.primaryColor,
            secondaryColor: item.secondaryColor,
            isPositive: false
        });
    }))), isDiffDirection && /*#__PURE__*/ (0, ($parcel$interopDefault($jtJDy$react))).createElement((0, $7a3ac0abe15ca661$export$d5f17049d0c70a76), {
        height: barchartHeight
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($jtJDy$react))).createElement((0, $7a3ac0abe15ca661$export$85baac63c0f23731), {
        isPositive: true,
        isDiffDirection: true
    }, data.map((item, index)=>{
        return /*#__PURE__*/ (0, ($parcel$interopDefault($jtJDy$react))).createElement((0, $7a3ac0abe15ca661$export$21b431f49f69b249), {
            key: index,
            height: item.value > 0 ? item.value / (maxValue + biggestDiffValue) * barchartHeight : 0,
            width: barWidth,
            spaceBetween: spaceBetweenWidth,
            isStrictSize: true,
            primaryColor: item.value > 0 ? item.primaryColor : "transparent",
            secondaryColor: item.value > 0 ? item.secondaryColor : "transparent",
            isPositive: true
        });
    })), /*#__PURE__*/ (0, ($parcel$interopDefault($jtJDy$react))).createElement((0, $7a3ac0abe15ca661$export$119cafd3a25d40c5), null), /*#__PURE__*/ (0, ($parcel$interopDefault($jtJDy$react))).createElement((0, $7a3ac0abe15ca661$export$85baac63c0f23731), {
        isDiffDirection: true
    }, data.map((item, index)=>{
        return /*#__PURE__*/ (0, ($parcel$interopDefault($jtJDy$react))).createElement((0, $7a3ac0abe15ca661$export$21b431f49f69b249), {
            key: index,
            height: item.value < 0 ? Math.abs(item.value / (maxValue + biggestDiffValue) * barchartHeight) : 0,
            width: barWidth,
            spaceBetween: spaceBetweenWidth,
            isStrictSize: true,
            primaryColor: item.value < 0 ? item.primaryColor : "transparent",
            secondaryColor: item.value < 0 ? item.secondaryColor : "transparent",
            isPositive: false
        });
    }))));
};
var $e56e36bfcaf45a41$export$2e2bcd8739ae039 = $e56e36bfcaf45a41$export$61316c9d31544b7d;




//# sourceMappingURL=main.js.map

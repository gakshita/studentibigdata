// import React from "react";
// import ProgressChart from "react-native-chart-kit";
// import { Dimensions, View, Text } from "react-native";

// const { width } = Dimensions.get("window");
// const data = {
//   labels: ["Swim", "Bike", "Run"], // optional
//   data: [0.4, 0.6, 0.8],
// };

// const chartConfig = {
//   backgroundGradientFrom: "#1E2923",
//   backgroundGradientFromOpacity: 0,
//   backgroundGradientTo: "#08130D",
//   backgroundGradientToOpacity: 0.5,
//   color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
//   strokeWidth: 2, // optional, default 3
//   barPercentage: 0.5,
//   useShadowColorFromDataset: false, // optional
// };
// export default class MyChart extends React.Component {
//   render() {
//     return (
//       <ProgressChart
//         data={data}
//         width={width}
//         height={220}
//         strokeWidth={16}
//         radius={32}
//         chartConfig={chartConfig}
//         hideLegend={false}
//       />
//     );
//   }
// }

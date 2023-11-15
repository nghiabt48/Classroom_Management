import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import SuCoHienCo from "./SuCoHienCo";
import DangTiepNhan from "./DangTiepNhan";

const initialLayout = { width: Dimensions.get("window").width };

const TabViewSuCo = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Nhân sự" },
    { key: "second", title: "Đánh giá" },
  ]);
  const [tabColors, setTabColors] = useState(
    Array(routes.length).fill("black")
  );

  const renderScene = SceneMap({
    first: SuCoHienCo,
    second: DangTiepNhan,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      renderLabel={({ route, focused, color }) => (
        <Text
          style={{
            color: tabColors[routes.findIndex((r) => r.key === route.key)],
            fontSize:14,
            fontWeight:"700"
          }}
        >
          {route.title}
        </Text>
      )}
    />
  );
  const handleIndexChange = (index) => {
    setIndex(index);

    const updatedColors = tabColors.map((color, i) =>
      i === index ? "#4169E1" : "rgba(65, 105, 225, 0.40)"
    );
    setTabColors(updatedColors);
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={handleIndexChange}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
};

export default TabViewSuCo;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#FFF",
  },
  indicator: {
    backgroundColor: "blue",
    width: 93,
    left: 47,
  },
});

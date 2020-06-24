import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Target from "./target";
import TargetFollowup from "./target_followup";

const Tab = createBottomTabNavigator();

export default function TargetTabs(props) {
  const { title } = props;
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 15,
        },
      }}
    >
      <Tab.Screen name={title}>
        {(props) => <Target {...props} title={title} />}
      </Tab.Screen>
      <Tab.Screen name="Followup" component={TargetFollowup} />
    </Tab.Navigator>
  );
}

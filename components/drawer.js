import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";

import { createStackNavigator } from "@react-navigation/stack";
import Home_layout from "./../HOME/home_layout";
import Form_layout from "./../FORM/form_layout";
import Login from "./../LOGIN/login_page";
import AuthLoadingScreen from "./../MAIN/main";
import Campaign_categories from "./CAMPAIGN/campaign_layout";
import Task_layout from "./TASKS/task_layout";
import Report_layout from "./REPORT/report_layout";
import Follow_layout from "./FOLOW UP/followup_layout";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#0dac86",
          height: 180,
          position: "relative",
        }}
      >
        <Image
          source={require("./../images/profile.jpg")}
          style={style.image}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 130,
            left: 70,
          }}
        >
          <Text style={{ color: "white", fontSize: 30 }}> Profile</Text>
        </TouchableOpacity>
      </View>
      <DrawerItemList {...props} />
    </View>
  );
}

export default function My_drawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerContentOptions={{
        activeTintColor: "#0dac86",
      }}
    >
      <Drawer.Screen name="My Home" component={StackNavi} />
      <Drawer.Screen name="Campaign" component={Campaign_categories} />
      <Drawer.Screen name="Follow Up" component={Follow_layout} />
      <Drawer.Screen name="Tasks" component={Task_layout} />
      <Drawer.Screen name="Report" component={Report_layout} />
    </Drawer.Navigator>
  );
}

const StackNavi = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Loading"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home_layout} />
      <Stack.Screen name="Loading" component={AuthLoadingScreen} />
      <Stack.Screen name="form" component={Form_layout} />
      <Stack.Screen name="report" component={Report_layout} />
      <Stack.Screen name="follow_up" component={Follow_layout} />
    </Stack.Navigator>
  );
};

const style = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    margin: 10,
    top: 110,
    borderRadius: 100,
  },
});

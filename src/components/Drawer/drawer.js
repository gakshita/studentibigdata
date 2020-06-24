import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Feather";
import Home from "../Home/home";
import data from "../../Data/data.json";
import Campaigns from "../Campaign/campaigns";
import CampaignDetail from "../Campaign/campaign_data";
import Followups from "../Followup/followups";
import Reports from "../Report/reports";
import Tasks from "../Tasks/tasks";
import CustomDrawerContent from "./custom_drawer";

const masters = data.masters;
const Drawer = createDrawerNavigator();

export default function My_drawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        options={{
          drawerIcon: (config) => (
            <Icon name="home" size={20} color="#56c2e2" />
          ),
        }}
        component={HomeStack}
      />
      <Drawer.Screen
        name="Campaigns"
        options={{
          drawerIcon: (config) => (
            <Icon name="list" size={20} color="#e41010" />
          ),
        }}
        component={Campaigns}
      />

      <Drawer.Screen
        name="Followups"
        options={{
          drawerIcon: (config) => (
            <Icon name="bell" size={20} color="#8cc086" />
          ),
        }}
        component={Followups}
      />
      <Drawer.Screen
        name="Tasks"
        options={{
          drawerIcon: (config) => (
            <Icon name="list" size={20} color="#e39bdb" />
          ),
        }}
        component={Tasks}
      />
      <Drawer.Screen
        name="Reports"
        options={{
          drawerIcon: (config) => (
            <Icon name="users" size={20} color="#ffa338" />
          ),
        }}
        component={Reports}
      />
    </Drawer.Navigator>
  );
}

const HomeStack = (props) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Campaign" component={Campaigns} />
      <Stack.Screen name="Campaign details" component={CampaignDetail} />
      <Stack.Screen name="followups" component={Followups} />
      <Stack.Screen name="Tasks" component={Tasks} />
      <Stack.Screen name="Report" component={Reports} />
    </Stack.Navigator>
  );
};

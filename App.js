// import { enableScreens } from "react-native-screens";
// enableScreens();
import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import Home_layout from "./HOME/home_layout";
import Form_layout from "./FORM/form_layout";
import Login from "./LOGIN/login_page";
import { Provider } from "react-redux";
import store from "./STORE/store";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthLoadingScreen from "./MAIN/main";
import Campaign_categories from "./components/CAMPAIGN/campaign_layout";
import Task_layout from "./components/TASKS/task_layout";
import My_drawer from "./components/drawer";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <My_drawer />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

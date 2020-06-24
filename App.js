// import { enableScreens } from "react-native-screens";
// enableScreens();
import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "./src/store/store";
import { createStackNavigator } from "@react-navigation/stack";
import Authenticate from "./src/components/Login/authenticate.js";
import { AppLoading } from "expo";

import * as Font from "expo-font";
import { Root } from "native-base";

export default class App extends React.Component {
  state = { loading: true };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
    this.setState({ loading: false });
  }
  render() {
    const Stack = createStackNavigator();
    return (
      <Provider store={store}>
        <Root>{this.state.loading ? <AppLoading /> : <Authenticate />}</Root>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

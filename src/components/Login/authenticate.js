import React from "react";

import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import My_drawer from "../Drawer/drawer";
import Login from "./login.js";
import { View } from "react-native";

const Stack = createStackNavigator();
class Authenticate extends React.Component {
  render() {
    return (
      <NavigationContainer>
        {this.props.login_details.login ? (
          <My_drawer />
        ) : (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="login" component={Login} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.login_reducer);
  return {
    login_details: state.login_reducer,
  };
};

export default connect(mapStateToProps)(Authenticate);

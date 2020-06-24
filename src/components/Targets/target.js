import React from "react";
import { View, Text } from "react-native";
import Header from "../Common/header";

export default class Target extends React.Component {
  render() {
    console.log(this.props.title);
    return (
      <View>
        <Header title={this.props.title} />
      </View>
    );
  }
}

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Picker,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import data from "./../../data";

campaign = data.category;
const { width } = Dimensions.get("window");

export default class Campaign_card extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={{
            ...style.container,
            backgroundColor: this.props.BG,
            width: this.props.width,
            height: this.props.height,
          }}
        >
          <Text style={{ color: "white" }}>{this.props.name}</Text>
          {this.props.children}
        </TouchableOpacity>
      </View>
    );
  }
}
// d3e7f5
const style = StyleSheet.create({
  container: {
    margin: 10,
    // alignItems: "center",
    // justifyContent: "center",
    padding: 20,
    elevation: 2,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  header: {
    backgroundColor: "red",
  },
});

Campaign_card.defaultProps = {
  width: width - 20,
  height: 100,
};

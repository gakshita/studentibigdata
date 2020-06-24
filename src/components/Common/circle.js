import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

export default class Circle extends React.Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={{
            ...styles.circle,
            backgroundColor: this.props.bg,

            borderColor: this.props.color,
          }}
        >
          {this.props.icon === "user" ? (
            <Entypo
              name={this.props.icon}
              size={this.props.size}
              color={this.props.color}
            />
          ) : (
            <MaterialCommunityIcons
              name={this.props.icon}
              size={this.props.size}
              color={this.props.color}
            />
          )}
        </TouchableOpacity>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    padding: 15,
    margin: 12,
    borderRadius: 100,
    borderWidth: 1,
  },
});

Circle.defaultProps = {
  name: "name",
  color: "black",
  bg: "red",
  icon: "user",
  size: 22,
};

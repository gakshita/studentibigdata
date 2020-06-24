import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import { Foundation, Ionicons } from "@expo/vector-icons";

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={{ flexDirection: "row" }}>
          {this.props.buttonType === "back" ? (
            <TouchableOpacity
              style={{ flexGrow: 1 }}
              onPress={() => {
                this.props.navigation.pop();
              }}
            >
              <Ionicons name="ios-arrow-back" size={22} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{ flexGrow: 1 }}
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Foundation name="graph-horizontal" size={28} />
            </TouchableOpacity>
          )}
          {this.props.children}
        </View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            marginTop: 20,
            flexGrow: 1,
          }}
        >
          {this.props.title}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: "white",
    paddingTop: 42,
  },
});

Header.defaultProps = {
  title: "title",
  buttonType: "drawer",
};

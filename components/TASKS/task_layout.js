import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Alert,
  Text,
  Picker,
  TouchableOpacity,
} from "react-native";

import Tasks from "./tasks";

export default class Task_layout extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: "#0dac86", flex: 1 }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("./../../images/profile.jpg")}
            style={style.image}
          />
          <Text style={style.text}>Hi Samntha!</Text>
          <TouchableOpacity style={style.button}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>

        <Tasks />
      </View>
    );
  }
}

const style = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    margin: 20,
    borderRadius: 100,
  },
  text: {
    paddingTop: 30,
    fontSize: 20,
    color: "white",
  },
  button: {
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    height: 50,
    backgroundColor: "white",
    opacity: 0.7,
    marginTop: 20,
    left: 100,
  },
  input: {
    width: 130,
    height: 30,
    color: "white",
    margin: 20,
  },
});

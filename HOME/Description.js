import React from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
// import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import LottieView from "lottie-react-native";
import data from "./../data/cards";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

export default function Description(props) {
  console.log(".........../////////..........", props.navigation);
  return (
    <View
      style={{
        backgroundColor: "#0dac86",
        height: 400,
        width: "100%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}
    >
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ top: 35, left: 15 }}
          onPress={() => props.navigation.openDrawer()}
        >
          <FontAwesome name="bars" size={25} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={{ color: "white", fontSize: 15, top: -200, left: 30 }}>
        Some animation will be displayed here soon
      </Text>
      {/* <LottieView
        source={require("./../assets/animation.json")}
        autoPlay
        loop
      /> */}
    </View>
  );
}

const style = StyleSheet.create({
  cardStyless: {
    backgroundColor: "white",
    borderRadius: 6,
    borderColor: "red",
    shadowColor: "red",
    shadowOpacity: 1,
    marginTop: 5,
    borderBottomWidth: 0,
    elevation: 4,
    alignSelf: "center",
    marginBottom: 10,

    width: width * 0.9,
  },
});

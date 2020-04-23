import React, { useRef } from "react";
import {
  View,
  Text,
  Dimensions,
  Animated,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
export default class Categories extends React.Component {
  state = {
    slideAnim: new Animated.Value(width),
  };

  slideIn = () => {
    Animated.spring(this.state.slideAnim, {
      toValue: 5,
    }).start();
  };

  componentDidMount() {
    this.slideIn();
  }
  render() {
    console.log("naviga", this.props.navigate);
    
    return (
      <Animated.View
        onLoad
        style={[
          style.container,
          {
            right: this.state.slideAnim,
          },
        ]}
      >
        <TouchableOpacity
          style={{
            // backgroundColor: "#deecff",
            backgroundColor: this.props.BG,
            width: 70,
            height: 70,
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress = {()=>{this.props.navigation.navigate(this.props.navigate)}}
        >
          <FontAwesome
            name={this.props.icon}
            size={25}
            color={this.props.color}
          />
        </TouchableOpacity>
        <Text style={{ paddingTop: 5 }}>{this.props.names}</Text>
      </Animated.View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 120,
    width: width / 3 + 10,
    margin: 10,
    borderRadius: 10,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

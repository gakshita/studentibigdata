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
import Reports from "./reports";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

export default class Report_layout extends React.Component {
  render() {
    return (
      <View>
        <View
          style={{
            backgroundColor: "#0dac86",
            height: 100,
            borderBottomLeftRadius: 50,
            padding: 20,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            // style={{ top: 35, left: 15 }}
            onPress={() => this.props.navigation.openDrawer()}
          >
            <FontAwesome name="bars" size={25} color="white" />
          </TouchableOpacity>
          <Text style={style.text}>Report</Text>
          {/* <Searchbar
                placeholder="Search"
                onChangeText={this._onChangeSearch}
                value={this.state.searchQuery}
              /> */}
          {/* <Reports /> */}
        </View>
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
    color: "white",
    fontSize: 20,
    paddingLeft: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    backgroundColor: "white",
    elevation: 4,
  },
  input: {
    width: 130,
    height: 30,
    color: "white",
    margin: 20,
  },
});

import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Description from "./Description";
import data from "./../data";
import Categories from "../cards";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const DATA = data.names;

export default class Home_layout extends React.Component {
  render() {
    console.log(".....................", this.props.navigation);
    return (
      <View>
        <Description navigation={this.props.navigation} />

        <View style={{ marginTop: -100 }}>
          <Text
            style={{
              paddingLeft: 35,
              marginBottom: 10,
              fontSize: 25,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Categories
          </Text>
          <View style={style.parent}>
            {DATA.map((val) => {
              return (
                <Categories
                  count={val.count}
                  icon={val.icon}
                  names={val.name}
                  color={val.color}
                  BG={val.bg}
                  navigation={this.props.navigation}
                  navigate={val.navigate}
                />
              );
            })}
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  parent: {
    flexDirection: "row",
    backgroundColor: "transparent",
    flexWrap: "wrap",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

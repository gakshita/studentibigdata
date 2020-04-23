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

const { width } = Dimensions.get("window");

export default class Report_card extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.text}>Name : {this.props.name}</Text>
        <Text style={style.text}>Educationn : {this.props.educationn}</Text>
        <Text style={style.text}>College : {this.props.college}</Text>
        <Text style={style.text}>Contact : {this.props.contact}</Text>
      </View>
    );
  }
}
// d3e7f5
const style = StyleSheet.create({
  container: {
    margin: 10,
    paddingLeft: 20,
    justifyContent: "center",
    elevation: 2,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 150,
  },
  text: { color: "black", fontSize: 18 },
});

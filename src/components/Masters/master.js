import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import Circle from "../Common/circle";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import Header from "../Common/header";
import data from "./../../Data/data.json";

const masters = data.masters;

export default class Masters extends React.Component {
  render() {
    console.log(this.props.navigation.navigate);
    return (
      <View>
        <Header title="Masters" navigation={this.props.navigation} />

        <ScrollView contentContainerStyle={styles.container}>
          {masters.map((master) => (
            <View style={styles.parent}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate(master.label, {
                    title: master.label,
                  })
                }
              >
                <Circle
                  name={master.label}
                  icon={master.icon}
                  color={master.color}
                  bg={master.bg}
                  size={13}
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",

    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 100,
    marginTop: 5,
  },
  parent: {
    backgroundColor: "white",
    margin: 5,
    width: "29%",
    height: 120,
    marginBottom: 8,
    borderRadius: 10,
    elevation: 4,
  },
});

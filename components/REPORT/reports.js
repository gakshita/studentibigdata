import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Alert,
  Text,
  FlatList,
  Picker,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Chip } from "react-native-paper";
import Report_card from "./report_card";
import data from "./../../data.json";

const DATA = data.report;

export default class Reports extends React.Component {
  state = {
    tags: ["example", "example", "example", "example"],
  };
  render() {
    return (
      <View
        style={{
          backgroundColor: "white",
          borderTopLeftRadius: 50,
          padding: 10,
          marginTop: 100,
        }}
      >
        <View
          style={{
            top: -30,
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity style={style.button}>
            <Text style={style.text}>Sort</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.button}>
            <Text style={style.text}>Filter</Text>
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {this.state.tags.map((value) => (
              <Chip
                style={{
                  width: 100,
                  margin: 5,
                }}
                onPress={() => console.log("Pressed")}
              >
                Example
              </Chip>
            ))}
          </View>
          <FlatList
            data={DATA}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Report_card
                name={item.name}
                educationn={item.educationn}
                college={item.college}
                contact={item.contact}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
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
    fontSize: 20,
  },
  button: {
    backgroundColor: "white",
    elevation: 4,
    width: 100,
    height: 40,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
});

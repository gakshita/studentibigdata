import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TextInput,
  Dimensions,
  Picker,
  TouchableOpacity,
} from "react-native";
import Campaign_card from "./campaign_card";

import data from "./../../data";

campaign = data.category;

export default class Campaign_categories extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={style.header}>
          <Text style={style.heading}>Campaigns</Text>
          <TouchableOpacity
            style={{ ...style.container, backgroundColor: this.props.BG }}
            onPress={() => this.props.navigation.navigate("form")}
          >
            <Text>Add campaign</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={campaign}
          renderItem={({ item }) => (
            <Campaign_card name={item.name} color={item.color} BG={item.bg} />
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    margin: 10,
    // display:"none",
    height: 50,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    opacity: 1,
    borderRadius: 20,
  },
  header: {
    // backgroundColor : "w",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 25,
  },
});

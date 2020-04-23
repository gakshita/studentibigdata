import React from "react";
import {
  StyleSheet,
  Image,
  FlatList,
  View,
  Alert,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import data from "./../../data";
import Campaign_card from "./../CAMPAIGN/campaign_card";
import { ProgressBar } from "react-native-paper";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import CalendarStrip from "react-native-calendar-strip";
import moment from "moment";

const { width } = Dimensions.get("window");
campaign = data.tasks;

export default class Tasks extends React.Component {
  render() {
    let datesWhitelist = [
      {
        start: moment(),
        end: moment().add(0, "days"), // total 4 days enabled
      },
    ];

    return (
      <View style={style.container}>
        <CalendarStrip
          style={{ height: 150, paddingTop: 20 }}
          daySelectionAnimation={{
            type: "background",
            duration: 200,
            highlightColor: "#0dac86",
          }}
          calendarAnimation={{ type: "sequence", duration: 30 }}
          calendarHeaderStyle={{ color: "black" }}
          dateNumberStyle={{ color: "white" }}
          dateNameStyle={{ color: "white" }}
          highlightDateNumberStyle={{ color: "white" }}
          highlightDateNameStyle={{ color: "white" }}
          datesWhitelist={datesWhitelist}
        />
        <Text style={style.text}>Todays Tasks</Text>
        <FlatList
          style={{ marginTop: 20, alignSelf: "center" }}
          data={campaign}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row" }}>
              <Text style={{ paddingTop: 40, paddingRight: 20 }}>10:00</Text>
              <EvilIcons
                name="check"
                size={22}
                color="black"
                style={{ marginTop: 40, left: -10 }}
              />
              <Campaign_card
                name={item.name}
                color={item.color}
                BG={item.bg}
                width={width - 150}
                height={80}
                progress={0.6}
              >
                <ProgressBar
                  progress={0.6}
                  color="white"
                  style={{ width: "100%", marginTop: 10 }}
                />
              </Campaign_card>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
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
  container: {
    backgroundColor: "white",
    flex: 1,
    borderTopLeftRadius: 50,
  },
  text: {
    paddingTop: 30,
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
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
});

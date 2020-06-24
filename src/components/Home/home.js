import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import Header from "../Common/header";
import Categories from "./cards";

const { width } = Dimensions.get("window");
const images = [
  require("./../../assets/11.png"),
  require("./../../assets/2.jpg"),
  require("./../../assets/3.jpg"),
  require("./../../assets/5.jpg"),
  require("./../../assets/6.jpg"),
];
const DATA = [
  {
    name: "Campaign",
    count: "odd",
    icon: "group",
    color: "#f06987",
    bg: "#fce5ea",
    navigate: "Campaign",
  },
  {
    name: "Follow Up",
    count: "even",
    icon: "envelope",
    color: "#9380ff",
    bg: "#e5eafe",
    navigate: "followups",
  },
  {
    name: "Report",
    count: "odd",
    icon: "pie-chart",
    color: "#2a9d8e",
    bg: "#d6eef2",
    navigate: "Report",
  },
  {
    name: "Task",
    count: "even",
    icon: "list-alt",
    color: "#e86f52",
    bg: "#fce6e1",
    navigate: "Tasks",
  },
];

export default class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Header title="H O M E " navigation={this.props.navigation} />

        <FlatList
          horizontal={true}
          contentContainerStyle={{
            borderRadius: 10,
            backgroundColor: "#f2f5ff",
            padding: 10,
          }}
          showsHorizontalScrollIndicator={false}
          data={images}
          renderItem={({ item }) => (
            <Image
              source={item}
              style={{
                width: width - 40,
                borderRadius: 10,
                height: 190,
                margin: 5,
                marginBottom: 0,
              }}
            />
          )}
          keyExtractor={(index) => index.toString()}
        />

        <View>
          <View style={styles.parent}>
            {DATA.map((val) => {
              return (
                <Categories
                  key={val.name}
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

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    padding: 10,
    margin: 5,
    borderWidth: 0.8,
    borderColor: "#ececec",
  },
  parent: {
    flexDirection: "row",
    backgroundColor: "transparent",
    flexWrap: "wrap",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -30,
  },
  textStyle: {
    alignSelf: "center",
    color: "#bbb4b4",
  },
});

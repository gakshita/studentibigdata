import React from "react";
import { View, Text, StyleSheet, Dimensions, Alert } from "react-native";
import Header from "../Common/header";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import My_modal from "../Common/modal";

const data = [
  { name: "akshita", status: "active" },
  { name: "aditi", status: "active" },
  { name: "anchita", status: "active" },
  { name: "akshita", status: "active" },
  { name: "akshita", status: "inactive" },
  { name: "akshita", status: "active" },
  { name: "akshita", status: "inactive" },
  { name: "akshita", status: "active" },
  { name: "akshita", status: "active" },
  { name: "akshita", status: "active" },
  { name: "akshita", status: "active" },
  { name: "akshita", status: "inactive" },
];

const { width } = Dimensions.get("window");
export default class ParticularMaster extends React.Component {
  state = {
    modalVisible: false,
  };

  createModal = (bool) => this.setState({ modalVisible: bool });

  createAlert = () =>
    Alert.alert(
      "Confirm",
      "Are you sure you want to delete this item?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );

  render() {
    const { title } = this.props.route.params;
    return (
      <View>
        <Header
          title={title}
          navigation={this.props.navigation}
          buttonType="back"
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#03a9f41c",
              padding: 7,
              borderRadius: 100,
            }}
            onPress={() => this.createModal(true)}
          >
            <MaterialCommunityIcons name="plus" color="#03a9f4" size={28} />
          </TouchableOpacity>
        </Header>

        <FlatList
          contentContainerStyle={{ margin: 10, paddingBottom: 150 }}
          data={data}
          renderItem={({ item }) => (
            <View style={styles.list}>
              <View style={{ marginTop: 7, marginLeft: 2, flexGrow: 1 }}>
                <Text style={{ fontSize: 16 }}>{item.name}</Text>
                <Text
                  style={{
                    color: item.status === "active" ? "#83bc7d" : "#9e9e9ea6",
                  }}
                >
                  {item.status}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: "#f1bb8d1f",
                  padding: 5,
                  borderRadius: 5,
                  margin: 7,
                }}
                onPress={() => this.createAlert()}
              >
                <MaterialCommunityIcons
                  name="delete-empty"
                  color="#ef9d58"
                  size={25}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#f78c871f",
                  padding: 5,
                  borderRadius: 5,

                  margin: 7,
                }}
              >
                <MaterialIcons name="edit" size={25} color="#f78c87" />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />

        {this.state.modalVisible && (
          <My_modal
            modalVisible={this.state.modalVisible}
            setModalVisible={this.createModal}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    padding: 10,

    borderRadius: 10,
    margin: 3,
    backgroundColor: "white",
    elevation: 4,
  },
  circle: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    margin: 8,
    borderRadius: 100,
    borderWidth: 2,
  },
});

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import Header from "../Common/header";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { get_api } from "../../api/api";
import { store } from "../../store/Action/master_action";

const Data = [
  "B.A.",
  "B.Com",
  "Btech",
  "B.A.",
  "B.Com",
  "Btech",
  "B.A.",
  "B.Com",
  "Btech",
];

class Campaigns extends React.Component {
  action = async () => {
    var Campaign = await get_api("masters/Campaigns", "Campaigns");
    console.log("campaigns");
    this.props.store({ master: "Campaigns", data: Campaign });
  };

  componentDidMount() {
    this.action();
  }

  render() {
    console.log();
    return (
      <View style={{ backgroundColor: "white" }}>
        <Header title="Campaigns" navigation={this.props.navigation} />

        {this.props.Campaigns ? (
          <FlatList
            data={this.props.Campaigns}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 300 }}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{
                  ...styles.container,
                  backgroundColor:
                    (index % 3 == 0 && "#d9eaf6") ||
                    (index % 3 == 1 && "#dfdaf7") ||
                    (index % 3 == 2 && "#f7e8d9"),
                }}
                onPress={() =>
                  this.props.navigation.navigate("Campaign details", {
                    campaign_name: item.name,
                  })
                }
              >
                <Text style={{ fontSize: 20 }}>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item._id}
          />
        ) : (
          <ActivityIndicator />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#f1f6ff85",
    elevation: 4,
    borderRadius: 10,
  },
});

const mapStateToProps = (state) => {
  console.log(state.master_reducer);
  return {
    Campaigns: state.master_reducer.Campaigns,
  };
};

const mapDispatchToProps = {
  store: store,
};

export default connect(mapStateToProps, mapDispatchToProps)(Campaigns);

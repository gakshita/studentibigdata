import React from "react";
import Header from "../Common/header";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import CampaignForm from "./campaign_data_form";
import DataLayout from "../Common/data_layout";
import { connect } from "react-redux";
import { get_api } from "../../api/api";
import { store } from "../../store/Action/student_action";

class CampaignDetail extends React.Component {
  state = {
    form: false,
    data: null,
  };

  show_form = (flag) => {
    this.setState({ form: flag });
  };

  action = async () => {
    var url = "";
    var { campaign_name } = this.props.route.params;
    console.log(this.props.user_type, "type");
    {
      this.props.login_details.type === "admin"
        ? (url = `admin/campaign/${campaign_name}`)
        : (url = `user/campaign/${campaign_name}`);
    }
    console.log(url, "url");
    var Student = await get_api(url, this.props.login_details.token);

    this.props.store({ data: Student });
    this.setState({ data: Student });
    console.log(this.props.Student.length, "student");
  };

  componentDidMount() {
    this.action();
  }

  render() {
    return (
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <Header
          title="Campaigns"
          navigation={this.props.navigation}
          buttonType="back"
        >
          {this.state.form ? (
            <TouchableOpacity
              style={{
                padding: 15,
                backgroundColor: "#f67757",
                borderRadius: 100,
                margin: 5,
              }}
              onPress={() => this.setState({ form: false })}
            >
              <Entypo name="cross" size={20} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                padding: 15,
                backgroundColor: "#f67757",
                borderRadius: 100,
                margin: 5,
              }}
              onPress={() => this.setState({ form: true })}
            >
              <MaterialIcons name="add" size={20} color="white" />
            </TouchableOpacity>
          )}
        </Header>

        {this.state.data ? (
          this.state.form ? (
            <CampaignForm
              campaign_name={this.props.route.params.campaign_name}
              show_form={this.show_form}
            />
          ) : this.props.Student.length === 0 ? (
            <Text style={{ alignSelf: "center" }}>Nothing to display</Text>
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={this.state.data}
              contentContainerStyle={{ paddingBottom: 300 }}
              renderItem={({ item }) => <DataLayout data={item} />}
              keyExtractor={(item) => item._id}
            />
          )
        ) : (
          <ActivityIndicator />
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.login_reducer);
  return {
    login_details: state.login_reducer,
    Student: state.student_reducer.Students,
  };
};

const mapDispatchToProps = {
  store: store,
};

export default connect(mapStateToProps, mapDispatchToProps)(CampaignDetail);

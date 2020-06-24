import React from "react";
import {
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Text,
} from "react-native";
import Header from "../Common/header";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import FilterForm from "../Followup/filter_modal";
import { connect } from "react-redux";
import { get_api } from "../../api/api";
import { store_followup } from "../../store/Action/followup_action";
import ReportLayout from "./report_layout";

class Report extends React.Component {
  state = {
    filterForm: false,
    followup: null,
  };

  show_form = (flag) => {
    this.setState({ filterForm: flag });
  };

  filters = (_filter) => {
    console.log(_filter.campaign, "filters", this.state.followup.length);
    var data = this.state.followup.filter(
      (obj) =>
        (_filter.campaign === obj.campaign || _filter.campaign == null) &&
        (_filter.category === obj.category || _filter.category == null) &&
        (_filter.city === obj.city || _filter.city == null) &&
        (_filter.location === obj.location || _filter.location == null) &&
        (_filter.education === obj.education || _filter.education == null) &&
        (_filter.stream === obj.stream || _filter.stream == null) &&
        (_filter.reference === obj.reference || _filter.reference == null) &&
        (_filter.college === obj.college || _filter.college == null) &&
        (_filter.user === obj.user || _filter.user == null)
    );
    this.setState({ followup: data });
  };

  action = async () => {
    var url = "";

    {
      this.props.login_details.type === "admin"
        ? (url = `admin/followup`)
        : (url = `user/followup`);
    }
    console.log(url, "url");
    var Followups = await get_api(url, this.props.login_details.token);
    console.log(Followups.length, "fol");
    this.props.store({ data: Followups });
    this.setState({ followup: Followups });
  };
  componentDidMount() {
    console.log("report mounted");
    this.action();
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Header title="Report" navigation={this.props.navigation}>
          {this.state.filterForm ? (
            <TouchableOpacity
              style={{
                padding: 15,
                backgroundColor: "#f67757",
                borderRadius: 100,
                margin: 5,
              }}
              onPress={() => this.setState({ filterForm: false })}
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
              onPress={() => {
                this.setState({ filterForm: true });
                this.setState({ followup: this.props.Followups });
              }}
            >
              <MaterialCommunityIcons name="filter" size={20} color="white" />
            </TouchableOpacity>
          )}
        </Header>

        {this.state.followup ? (
          this.state.filterForm ? (
            <FilterForm show_form={this.show_form} filter={this.filters} />
          ) : (
            <FlatList
              data={this.state.followup}
              contentContainerStyle={{ paddingBottom: 300 }}
              renderItem={({ item }) => (
                <ReportLayout data={item} append={true} />
              )}
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
    Followups: state.followup_reducer.followups,
  };
};

const mapDispatchToProps = {
  store: store_followup,
};

export default connect(mapStateToProps, mapDispatchToProps)(Report);

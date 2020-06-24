import React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Picker,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { get_api, post_api } from "../../api/api";
import { connect } from "react-redux";
import { store } from "../../store/Action/master_action";

import { store_followup } from "../../store/Action/followup_action";

import { Toast } from "native-base";

class FilterForm extends React.Component {
  state = {};

  action = async (master) => {
    var url = master === "Users" ? "users" : `masters/${master}`;
    var Master_data = await get_api(url);
    this.props.store({ master: master, data: Master_data });
    this.setState({ [master]: this.props.Masters[master] });
  };

  handleDropdown = (value, key) => {
    this.setState({ [key]: value });
    console.log(this.state[key]);
  };

  on_apply_action = async () => {
    console.log("hiii");

    this.props.filter({
      campaign: this.state.campaign,
      category: this.state.category,
      education: this.state.education,
      college: this.state.college,
      stream: this.state.stream,
      reference: this.state.reference,
      city: this.state.city,
      location: this.state.location,
      user: this.state.user,
    });
    this.props.show_form(false);
  };

  componentDidMount() {
    [
      "Categories",
      "Cities",
      "Locations",
      "Educations",
      "Streams",
      "Colleges",
      "References",
      "Campaigns",
      "Users",
    ].map((master) => this.action(master));
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.References &&
        this.state.Colleges &&
        this.state.Streams &&
        this.state.Educations &&
        this.state.Categories &&
        this.state.Cities &&
        this.state.Campaigns &&
        this.state.Users &&
        this.state.Locations ? (
          <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.heading}>Camapaign</Text>
            <DropDown
              value={this.state.campaign}
              valueChange={this.handleDropdown}
              dropdown={this.state.Campaigns}
              label="campaign"
            />
            <Text style={styles.heading}>Category</Text>
            <DropDown
              value={this.state.category}
              valueChange={this.handleDropdown}
              dropdown={this.state.Categories}
              label="category"
            />

            <Text style={styles.heading}>Education</Text>
            <DropDown
              value={this.state.education}
              valueChange={this.handleDropdown}
              dropdown={this.state.Educations}
              label="education"
            />
            <Text style={styles.heading}>College</Text>
            <DropDown
              value={this.state.college}
              valueChange={this.handleDropdown}
              dropdown={this.state.Colleges}
              label="college"
            />
            <Text style={styles.heading}>Stream</Text>
            <DropDown
              value={this.state.stream}
              valueChange={this.handleDropdown}
              dropdown={this.state.Streams}
              label="stream"
            />
            <Text style={styles.heading}>Reference</Text>
            <DropDown
              value={this.state.reference}
              valueChange={this.handleDropdown}
              dropdown={this.state.References}
              label="reference"
            />
            {this.props.login_details.type === "admin" && (
              <View>
                <Text style={styles.heading}>User</Text>
                <DropDown
                  value={this.state.user}
                  valueChange={this.handleDropdown}
                  dropdown={this.state.Users}
                  label="user"
                />
              </View>
            )}
            <Text style={styles.heading}>City</Text>
            <DropDown
              value={this.state.city}
              valueChange={this.handleDropdown}
              dropdown={this.state.Cities}
              label="city"
            />
            <Text style={styles.heading}>Location</Text>
            <DropDown
              value={this.state.location}
              valueChange={this.handleDropdown}
              dropdown={this.state.Locations}
              label="location"
              flag={this.state.city ? true : false}
              city={this.state.city}
            />
          </ScrollView>
        ) : (
          <ActivityIndicator />
        )}
        <TouchableOpacity
          onPress={() => this.on_apply_action()}
          style={{
            position: "absolute",
            bottom: 10,
            backgroundColor: "#f67757",
            borderRadius: 10,
            width: "90%",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            height: 50,
          }}
        >
          <Text style={{ color: "white" }}>Apply</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginBottom: 70,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#c5c7cd",
    marginBottom: 10,
  },
  heading: {
    marginTop: 10,
    marginBottom: 10,
  },
});

function DropDown(props) {
  console.log("hi", props.value, props.flag);
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#c5c7cd",
      }}
    >
      <Picker
        selectedValue={props.value}
        style={styles.input}
        placeholder={props.label}
        enabled={props.label === "location" ? props.flag : true}
        onValueChange={(itemValue) => props.valueChange(itemValue, props.label)}
      >
        <Picker.Item label="" value={null} />
        {props.dropdown.map((item, index) => {
          if (props.label === "location") {
            if (props.city === item.city) {
              return (
                <Picker.Item label={item.name} value={item.name} key={index} />
              );
            }
          } else {
            return (
              <Picker.Item label={item.name} value={item.name} key={index} />
            );
          }
        })}
      </Picker>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    Masters: state.master_reducer,
    login_details: state.login_reducer,
    Followups: state.followup_reducer.followups,
  };
};

const mapDispatchToProps = {
  store: store,
  store_followup: store_followup,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);

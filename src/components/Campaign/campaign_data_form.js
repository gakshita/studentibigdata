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
import { add_student_data } from "../../store/Action/student_action";

import { Toast } from "native-base";

class CampaignForm extends React.Component {
  state = {};

  action = async (master) => {
    var Master_data = await get_api(`masters/${master}`);
    this.props.store({ master: master, data: Master_data });
    this.setState({ [master]: this.props.Masters[master] });
  };

  save_action = async () => {
    console.log("...saving");
    var url = "";
    var { campaign_name } = this.props;

    {
      this.props.login_details.type === "admin"
        ? (url = `admin/campaign/${campaign_name}/add`)
        : (url = `user/campaign/${campaign_name}/add`);
    }
    var Student = await post_api(
      url,
      {
        name: this.state.name,
        contact: this.state.contact,
        email: this.state.email,
        category: this.state.category,
        education: this.state.education,
        college: this.state.college,
        stream: this.state.stream,
        reference: this.state.reference,
        city: this.state.city,
        location: this.state.location,
        notes: this.state.text,
      },
      this.props.login_details.token
    );
    console.log("ssss", Student);

    {
      Student.success &&
        this.props.add({ data: Student.response }) &&
        this.props.show_form(false);
    }
    Toast.show({
      text: Student.success ? "Added Successfully" : Student.message,
      buttonText: "Okay",
      duration: 3000,
      position: "top",
      type: Student.success ? "success" : "warning",
      style: { borderRadius: 10, margin: 10 },
    });
  };

  handleDropdown = (value, key) => {
    this.setState({ [key]: value });
    console.log(this.state[key]);
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
        this.state.Locations ? (
          <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
          >
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={(name) => this.setState({ name })}
              defaultValue={this.state.name}
            />
            <TextInput
              style={styles.input}
              placeholder="Contact"
              keyboardType={"numeric"}
              onChangeText={(contact) => this.setState({ contact })}
              defaultValue={this.state.contact}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={(email) => this.setState({ email })}
              defaultValue={this.state.email}
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

            <TextInput
              style={{ ...styles.input, marginTop: 10 }}
              placeholder="Notes"
              onChangeText={(text) => this.setState({ text })}
              defaultValue={this.state.text}
              numberOfLines={5}
              multiline={true}
            />
          </ScrollView>
        ) : (
          <ActivityIndicator />
        )}
        <TouchableOpacity
          onPress={() => this.save_action()}
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
          <Text style={{ color: "white" }}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginBottom: 60,
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
  console.log(state.master_reducer);
  return {
    Masters: state.master_reducer,
    login_details: state.login_reducer,
  };
};

const mapDispatchToProps = {
  store: store,
  add: add_student_data,
};

export default connect(mapStateToProps, mapDispatchToProps)(CampaignForm);

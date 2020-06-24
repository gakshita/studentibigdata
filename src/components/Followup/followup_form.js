import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  Picker,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { post_api, get_api } from "../../api/api";
import { delete_student_data } from "../../store/Action/student_action";
import { Toast, DatePicker } from "native-base";

import { store } from "../../store/Action/master_action";

class FollowupForm extends React.Component {
  state = {
    status: "",
    start_date: new Date(),
    follow_next_date: new Date(),
    description: "",
  };

  append_action = async () => {
    var followup = this.props.data;
    var Followups = await post_api("followup/followups/add", {
      id: followup._id,
      start_date: this.state.start_date,
      follow_next_date: this.state.follow_next_date,
      status_type: "sattw",
      description: "des",
    });

    console.log("follwo");
    this.props.setModalVisible(false);
  };

  action = async () => {
    var url = "followup/add";

    console.log(this.state.start_date, "...", this.state.follow_next_date);
    var followup = this.props.data;
    followup["followups"] = [
      {
        start_date: this.state.start_date,
        follow_next_date: this.state.follow_next_date,
        status_type: this.state.status,
        description: this.state.description,
      },
    ];

    var remove = await post_api("user/campaign/delete", { id: followup._id });
    this.props.delete({ _id: followup._id });
    delete followup._id;
    var Followup = await post_api(url, followup);
    console.log(Followup, "res774");

    {
      Followup.success && this.props.setModalVisible(false);
    }
    Toast.show({
      text: Followup.success ? "Added Successfully" : Followup.message,
      buttonText: "Okay",
      duration: 3000,
      position: "top",
      type: Followup.success ? "success" : "warning",
      style: { borderRadius: 10, margin: 10 },
    });
  };

  get_status_action = async () => {
    var Status = await get_api(`masters/Status`);
    this.props.store({ master: "Status", data: Status });
    console.log(Status, ".....");
  };

  componentDidMount() {
    this.get_status_action();
  }
  render() {
    return (
      <View style={styles.centeredView}>
        {this.props.Masters.Status ? (
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.props.modalVisible}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Followup</Text>

                <Text>Start Date</Text>
                <View style={styles.container}>
                  <DatePicker
                    defaultDate={this.state.start_date}
                    minimumDate={new Date(2018, 1, 1)}
                    maximumDate={new Date(2018, 12, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="Select date"
                    textStyle={{ color: "green" }}
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    onDateChange={(e) => {
                      this.setState({ start_date: e });
                    }}
                    disabled={false}
                  />
                </View>
                <Text>Followup next Date</Text>
                <View style={styles.container}>
                  <DatePicker
                    defaultDate={this.state.start_date}
                    minimumDate={new Date(2018, 1, 1)}
                    maximumDate={new Date(2018, 12, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="Select date"
                    textStyle={{ color: "green" }}
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    onDateChange={(e) => this.setState({ follow_next_date: e })}
                    disabled={false}
                  />
                </View>
                <Text>Status</Text>
                <View style={styles.container}>
                  <Picker
                    selectedValue={this.state.status}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({ status: itemValue })
                    }
                  >
                    <Picker.Item label="" value={null} />
                    {this.props.Masters.Status.map((item, index) => {
                      return (
                        <Picker.Item
                          label={item.name}
                          value={item.name}
                          key={index}
                        />
                      );
                    })}
                  </Picker>
                </View>

                <TextInput
                  style={{ ...styles.input, marginTop: 10 }}
                  placeholder="Description"
                  onChangeText={(description) => this.setState({ description })}
                  defaultValue={this.state.text}
                  numberOfLines={2}
                  multiline={true}
                />
                <View style={{ flexDirection: "row" }}>
                  <TouchableHighlight
                    style={{ ...styles.openButton }}
                    onPress={() => this.props.setModalVisible(false)}
                  >
                    <Text style={styles.textStyle}>Cancel</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={{ ...styles.openButton, marginLeft: 10 }}
                    onPress={() =>
                      this.props.append ? this.append_action() : this.action()
                    }
                  >
                    <Text style={styles.textStyle}>Add</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </Modal>
        ) : (
          <ActivityIndicator />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#f67757",
    borderRadius: 10,
    padding: 20,
    paddingBottom: 10,
    paddingTop: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#c5c7cd",
    marginBottom: 10,
    width: 150,
  },
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#c5c7cd",
    marginBottom: 10,
    width: 150,
  },
});
const mapStateToProps = (state) => {
  console.log(state.login_reducer);
  return {
    Masters: state.master_reducer,
    login_details: state.login_reducer,
    Followups: state.followup_reducer.followups,
  };
};
const mapDispatchToProps = {
  store: store,
  delete: delete_student_data,
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowupForm);

FollowupForm.defaultProps = {
  append: false,
};

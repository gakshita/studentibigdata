import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  Linking,
  Platform,
  ActivityIndicator,
} from "react-native";
import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { post_api, get_api } from "../../api/api";
import FollowupForm from "../Followup/followup_form";
import { connect } from "react-redux";
import { store } from "../../store/Action/master_action";
import { ActionSheet, Toast } from "native-base";

class DataLayout extends React.Component {
  state = {
    followupForm: false,
  };

  master_action = async (master) => {
    var Master_data = await get_api(`masters/${master}`);
    this.props.store({ master: master, data: Master_data });
    this.setState({ [master]: this.props.Masters[master] });
    console.log(this.state.Mail_templates, "??????????");
  };

  setModalVisible = (flag) => {
    this.setState({ followupForm: flag });
  };

  action = async (template) => {
    var url = "send_mail";
    console.log(url, "url", template, this.props.data.email);
    var mail = await post_api(url, {
      email: this.props.data.email,
      message: template.message,
    });
    console.log(mail, "///////////////");
    Toast.show({
      text: mail.success ? "Sent Successfully" : mail.message,
      buttonText: "Okay",
      duration: 3000,
      position: "top",
      type: mail.success ? "success" : "error",
      style: { borderRadius: 10, margin: 10 },
    });
  };

  sms_action = async (template) => {
    var url = "send_sms";
    console.log(url, "url", template, this.props.data.email);
    var mail = await post_api(url, {
      contact: this.props.data.contact,
      message: template.message,
    });
    console.log(mail, "///////////////");
    Toast.show({
      text: mail.success ? "SMS Sent Successfully" : mail.message,
      buttonText: "Okay",
      duration: 3000,
      position: "top",
      type: mail.success ? "success" : "error",
      style: { borderRadius: 10, margin: 10 },
    });
  };

  whatsapp_action = async (template) => {
    var url = "send_whatsapp";
    console.log(url, "url", template, this.props.data.email);
    var mail = await post_api(url, {
      contact: this.props.data.contact,
      message: template.message,
    });
    console.log(mail, "///////////////");
    Toast.show({
      text: mail.success ? "Message Sent Successfully" : mail.message,
      buttonText: "Okay",
      duration: 3000,
      position: "top",
      type: mail.success ? "success" : "error",
      style: { borderRadius: 10, margin: 10 },
    });
  };

  dialCall = () => {
    console.log("aaaaa");
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = "tel:${this.props.data.contact}";
    } else {
      phoneNumber = "telprompt:${this.props.data.contact}";
    }

    Linking.openURL(phoneNumber);
  };

  componentDidMount() {
    this.master_action("Mail_templates");
  }
  render() {
    return (
      <View style={{ ...styles.container }}>
        <View style={{ flexDirection: "row", marginBottom: 7 }}>
          <Text style={styles.heading}>Name</Text>
          <Text style={styles.detail}>{this.props.data.name}</Text>
        </View>

        <View style={{ flexDirection: "row", marginBottom: 7 }}>
          <Text style={styles.heading}>Category</Text>
          <Text style={styles.detail}>{this.props.data.category}</Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 7 }}>
          <Text style={styles.heading}>User</Text>
          <Text style={styles.detail}>{this.props.data.user}</Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 7 }}>
          <Text style={styles.heading}>College</Text>
          <Text style={styles.detail}>{this.props.data.college}</Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 7 }}>
          <Text style={styles.heading}>email</Text>
          <Text style={styles.detail}>{this.props.data.email}</Text>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignSelf: "center",
          }}
        >
          <TouchableOpacity
            style={{
              padding: 15,
              backgroundColor: "#25d36624",
              borderRadius: 100,
              margin: 5,
            }}
            onPress={() =>
              ActionSheet.show(
                {
                  options: this.state.Mail_templates.map((val) => {
                    return val.name;
                  }),
                  title: "Select a whatsapp template",
                },
                (buttonIndex) => {
                  this.whatsapp_action(this.state.Mail_templates[buttonIndex]);
                }
              )
            }
          >
            <Ionicons name="logo-whatsapp" size={20} color="#25d366" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 15,
              backgroundColor: "#1a73e81f",
              borderRadius: 100,
              margin: 5,
            }}
            onPress={this.dialCall}
            activeOpacity={0.7}
          >
            <MaterialIcons name="phone" size={20} color="#1a73e8" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 15,
              backgroundColor: "#f58c1224",
              borderRadius: 100,
              margin: 5,
            }}
            onPress={() =>
              ActionSheet.show(
                {
                  options: this.state.Mail_templates.map((val) => {
                    return val.name;
                  }),
                  title: "Select a SMS template",
                },
                (buttonIndex) => {
                  this.sms_action(this.state.Mail_templates[buttonIndex]);
                }
              )
            }
          >
            <MaterialIcons name="message" size={20} color="#f58c12" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              ActionSheet.show(
                {
                  options: this.state.Mail_templates.map((val) => {
                    return val.name;
                  }),
                  title: "Select a mailing template",
                },
                (buttonIndex) => {
                  this.action(this.state.Mail_templates[buttonIndex]);
                }
              )
            }
            style={{
              padding: 15,
              backgroundColor: "#d9302524",
              borderRadius: 100,
              margin: 5,
            }}
          >
            <MaterialIcons name="email" size={20} color="#d93025" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 15,
              backgroundColor: "#f9edfe",
              borderRadius: 100,
              margin: 5,
            }}
            onPress={() => this.setState({ followupForm: true })}
          >
            <MaterialIcons name="add" size={20} color="#b72cfd" />
          </TouchableOpacity>
        </View>
        {this.state.followupForm && (
          <FollowupForm
            modalVisible={this.state.followupForm}
            setModalVisible={this.setModalVisible}
            data={this.props.data}
            append={this.props.append}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    // borderWidth: 1,
    backgroundColor: "#f2f5ff",
    borderColor: "#c5c7cd",
    margin: 20,
    padding: 20,
  },
  heading: {
    color: "#c5c7cd",
    fontWeight: "bold",
    fontSize: 18,
    flexGrow: 0.3,
  },
  detail: {
    fontWeight: "bold",
    // marginLeft: 10,
    fontSize: 18,
  },
});

DataLayout.defaultProps = {
  data: [],
  append: false,
};

const mapStateToProps = (state) => {
  console.log(state.master_reducer);
  return {
    Masters: state.master_reducer,
  };
};

const mapDispatchToProps = {
  store: store,
};

export default connect(mapStateToProps, mapDispatchToProps)(DataLayout);

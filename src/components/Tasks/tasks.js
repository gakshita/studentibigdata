import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Header from "../Common/header";
import { connect } from "react-redux";
import { get_api } from "../../api/api";
import { store } from "../../store/Action/task_action";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
class Tasks extends React.Component {
  state = {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  };

  action = async () => {
    var Task = await get_api("user/tasks", this.props.login_details.token);
    // console.log(Task, "task");
    this.props.store({ data: Task.response });
    console.log(this.props.tasks, "checl");
  };
  componentDidMount() {
    this.action();
  }
  render() {
    console.log(this.state.month);
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Header title="Tasks" navigation={this.props.navigation} />
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#e5eafe",
            padding: 5,
          }}
        >
          <Text style={{ fontSize: 30, marginBottom: 10 }}>
            {monthNames[this.state.month]}
          </Text>
          <Text>{this.state.year}</Text>
        </View>
        {this.props.tasks ? (
          <FlatList
            data={this.props.tasks}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100, marginTop: 10 }}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.container} key={item._id}>
                <View
                  key={item._id}
                  style={{
                    marginRight: 20,
                    borderRightWidth: 0.4,
                    paddingRight: 10,
                  }}
                >
                  <Text style={{ color: "#f67757" }}>08</Text>
                  <Text>Tue</Text>
                </View>
                <View style={{ flexGrow: 1 }}>
                  <Text style={{ fontSize: 18 }}>{item.name}</Text>
                  <Text style={{ color: "#bcc1c5" }}>{item.description}</Text>
                </View>

                <TouchableOpacity
                  style={{
                    borderRadius: 10,
                    backgroundColor: "#25d36624",
                    padding: 10,
                  }}
                >
                  <Entypo name="check" size={20} color="#5eba7d" />
                </TouchableOpacity>
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
    backgroundColor: "#fee5ee8f",
    flexDirection: "row",
  },
});

const mapStateToProps = (state) => {
  console.log(state.login_reducer);
  return {
    login_details: state.login_reducer,
    tasks: state.task_reducer.tasks,
  };
};

const mapDispatchToProps = {
  store: store,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);

import axios from "react-native-axios";
import { AsyncStorage } from "react-native";
import { cos } from "react-native-reanimated";

const url = "http://192.168.1.102:3001";

const store_data = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    console.log("added", data.length);
  } catch (error) {
    console.error(error);
  }
};

export const retrieve_data = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    console.log(value, "value");
    return Promise.resolve(JSON.parse(value));
  } catch (error) {
    console.error(error);
  }
};

export function get_api(api, token) {
  // console.log(token);
  if (token) {
    var request = axios.get(`${url}/${api}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
  } else {
    var request = axios.get(`${url}/${api}`);
  }

  return request
    .then((result) => {
      console.log("api called");
      return result.data;
    })
    .catch((error) => {
      console.error(error);
      return Promise.reject(error);
    });
}

export function post_api(api, data, token) {
  if (token) {
    var request = axios.post(`${url}/${api}`, data, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
  } else {
    var request = axios.post(`${url}/${api}`, data);
  }
  console.log("inside api");
  return request
    .then((result) => {
      console.log("api called");
      return result.data;
    })
    .catch((error) => {
      console.error(error);
      return Promise.reject(error);
    });
}

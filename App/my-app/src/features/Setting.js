import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useContext, useState } from "react";
import { Switch } from "@rneui/themed";
import { AppConText } from "./AppConText";
import { auth } from "../../firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
} from "firebase/auth";
const Setting = () => {
  const [value, setValue] = React.useState(false);
  const navigation = useNavigation();
  const {isLogin, setisLogin} = useContext(AppConText);
  const signOutg = async () => {
    try {
      await signOut(auth);
      setisLogin(false);
    } catch (error) {
      console.error("Đăng xuất thất bại:", error);
    }
  };
  return (
    <View style={styles.container1}>
      <TouchableOpacity style={styles.container2}>
        <Image
          source={require("../images/backwhite.png")}
          style={{ width: 20, height: 20 }}
        ></Image>
        <Text style={{ color: "#FFFFFF", paddingLeft: 10 }}>Trở về</Text>
      </TouchableOpacity>

      <View style={styles.container3}>
        <Image
          source={require("../images/avatar.png")}
          style={{ width: 81, height: 81 }}
        ></Image>
        <Text style={styles.name}>Nguyễn Trung Hải</Text>
        <Text style={styles.vitri}>Trưởng phòng IT</Text>
      </View>

      <View style={styles.container4}>
        <View>
          <TouchableOpacity style={styles.container4a}>
            <Image source={require("../images/user.png")} style={styles.pic} />
            <Text style={styles.edtacc}>Chỉnh sửa tài khoản</Text>
            <Image
              source={require("../images/clickright.png")}
              style={{ width: 25, height: 25, marginTop: 15, marginLeft: 40 }}
            ></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.container4a}>
          <Image source={require("../images/ring.png")} style={styles.pic} />
          <Text style={styles.edtacc}>Tắt thông báo</Text>
          <Switch
            color="#2089dc"
            value={value}
            onValueChange={() => setValue(!value)}
            style={{ marginTop: 22, marginLeft: 40 }}
          />
        </View>
        <TouchableOpacity style={styles.container5} onPress={signOutg}>
          <Image source={require("../images/logout.png")} style={styles.pic} />
          <Text style={{ paddingTop: 15, marginLeft: 40 }}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#2D5381",
  },
  container2: {
    marginTop: 26,
    marginLeft: 16,
    flexDirection: "row",
  },
  container3: {
    alignItems: "center",
    marginTop: 37,
  },
  container4: {
    marginTop: 50,
    flex: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: "#FFFFFF",
  },
  container4a: {
    paddingLeft: 26,
    paddingRight: 26,
    justifyContent: "space-between",
    marginLeft: 40,
    marginTop: 30,
    flexDirection: "row",
  },
  container5: {
    paddingLeft: 26,
    paddingRight: 26,
    marginLeft: 40,
    marginTop: 30,
    flexDirection: "row",
  },
  name: {
    color: "#FEFEFE",
    fontSize: 24,
    fontWeight: "600",
  },
  vitri: {
    color: "#FEFEFE",
    fontSize: 18,
    fontWeight: "400",
  },
  pic: {
    width: 48,
    height: 48,
  },

  edtacc: {
    paddingTop: 15,
    paddingLeft: 34,
  },
});

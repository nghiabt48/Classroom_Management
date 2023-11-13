import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AppConText } from "./AppConText";
const Homee = (props) => {
  const navigation = useNavigation();
  const { infoUser, setinfoUser } = useContext(AppConText);
  const goToProblemReportScreen = () => {
    navigation.navigate("Problem_Report");
  };
  const goToSendSupportScreen = () => {
    navigation.navigate("Send_Support");
  };

  const userPicture = infoUser.photoURL
    ? { uri: `${infoUser.photoURL}` }
    : require("../images/avatar.png");

  return (
    <View style={styles.container}>
      <View style={styles.userContent}>
        <Image style={styles.userAvatar} source={userPicture} />
        <Text style={styles.userName}>{infoUser.email}</Text>
        <Image
          style={styles.btnNotification}
          source={require("../images/notifications.png")}
        />
      </View>
      <View style={styles.container2}>
        <Text style={styles.text1}>Dịch vụ trực tuyến</Text>

        <TouchableOpacity
          style={styles.problemReport}
          onPress={goToProblemReportScreen}
        >
          <Image
            style={styles.imgEdit}
            source={require("../images/edit.png")}
          />
          <Text style={styles.text2}>Báo cáo sự cố</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ITSupport}
          onPress={goToSendSupportScreen}
        >
          <Image
            style={styles.imgEdit}
            source={require("../images/global.png")}
          />
          <Text style={styles.text3}>Yêu cầu hỗ trợ CNTT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.managerRoom}>
          <Image
            style={styles.imgEdit}
            source={require("../images/feed.png")}
          />
          <Text style={styles.text4}>Quản lý mượn phòng học, hội trường</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Homee;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 300,
    backgroundColor: "#2D5381",
  },
  container2: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 17,
  },
  userContent: {
    flexDirection: "row",
    marginTop: 75,
    marginStart: 16,
    marginEnd: 30,
    alignItems: "center",
  },
  userAvatar: {
    width: 48,
    height: 48,
    borderRadius: 48,
  },
  userName: {
    color: "#FEFEFE",
    fontSize: 16,
    fontWeight: "600",
    padding: 12,
  },
  btnNotification: {
    position: 'absolute',
    left: '95%', 
  },
  text1: {
    marginTop: 27,
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 18,
    fontWeight: "700",
  },
  imgEdit: {
    marginStart: 27,
  },
  problemReport: {
    flexDirection: "row",
    width: 343,
    height: 86,
    marginTop: 24,
    alignItems: "center",
    backgroundColor: "#F1F4F5",
    borderRadius: 12,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.10)",
    borderWidth: 1,
    elevation: 2,
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  text2: {
    marginStart: 40,
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
  ITSupport: {
    flexDirection: "row",
    width: 343,
    height: 86,
    marginTop: 19,
    alignItems: "center",
    backgroundColor: "#F1F4F5",
    borderRadius: 12,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.10)",
    borderWidth: 1,
    elevation: 2,
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  text3: {
    marginStart: 40,
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
  managerRoom: {
    flexDirection: "row",
    width: 343,
    height: 86,
    marginTop: 19,
    alignItems: "center",
    backgroundColor: "#F1F4F5",
    borderRadius: 12,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.10)",
    borderWidth: 1,
    elevation: 2,
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  text4: {
    marginStart: 40,
    width: 200,
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
});

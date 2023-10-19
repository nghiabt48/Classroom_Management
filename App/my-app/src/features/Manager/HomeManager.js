import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeManager = (props) => {
    const navigation = useNavigation();

    const goToNhanSuScreen = () => {
      navigation.navigate("ListNS");
    };
  return (
    <View style={styles.container}>
      <View style={styles.userContent}>
        <Image
          style={styles.userAvatar}
          source={require("../../images/avatar.png")}
        />
        <Text style={styles.userName}>Nguyễn Trung Hải</Text>
        <Image
          style={styles.btnNotification}
          source={require("../../images/notifications.png")}
        />
      </View>
      <View style={styles.container2}>
        <Text style={styles.text1}>Dịch vụ trực tuyến</Text>

        {/* Nhan Su */}
        <TouchableOpacity style={styles.problemReport} onPress={goToNhanSuScreen}>
          <Image
            style={styles.imgEdit}
            source={require("../../images/nhansu.png")}
          />
          <Text style={styles.text2}>Nhân sự</Text>
        </TouchableOpacity>

        {/* Thong Ke Su Co Trong Ngay */}
        <TouchableOpacity style={styles.managerRoom}>
          <Image
            style={styles.imgEdit}
            source={require("../../images/thongke.png")}
          />
          <Text style={styles.text4}>Thống kê sự cố trong ngày</Text>
        </TouchableOpacity>

        {/* Sự cố chưa hoàn thành */}
        <TouchableOpacity style={styles.managerRoom}>
          <Image
            style={styles.imgEdit}
            source={require("../../images/notdone.png")}
          />
          <Text style={styles.text4}>Sự cố chưa hoàn thành</Text>
        </TouchableOpacity>

        {/* Thành tích cán bộ */}
        <TouchableOpacity style={styles.managerRoom}>
          <Image
            style={styles.imgEdit}
            source={require("../../images/thanhtich.png")}
          />
          <Text style={styles.text4}>Thành tích cán bộ</Text>
        </TouchableOpacity>

        {/* Sự kiện bộ môn */}
        <TouchableOpacity style={styles.managerRoom}>
          <Image
            style={styles.imgEdit}
            source={require("../../images/sukien.png")}
          />
          <Text style={styles.text4}>Sự kiện bộ môn</Text>
        </TouchableOpacity>

        {/* Tính sẵn sàng phòng */}
        <TouchableOpacity style={styles.managerRoom}>
          <Image
            style={styles.imgEdit}
            source={require("../../images/feature.png")}
          />
          <Text style={styles.text4}>Tính sẵn sàng phòng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeManager;

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
    marginStart: 105,
    marginEnd: 30,
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
    height: 66,
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
  managerRoom: {
    flexDirection: "row",
    width: 343,
    height: 66,
    marginTop: 15,
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

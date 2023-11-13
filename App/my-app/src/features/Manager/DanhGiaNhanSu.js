import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const DanhGiaNhanSu = () => {
  const navigation = useNavigation();

  const goToDetailsDanhGia = () => {
    navigation.navigate("DetailsRate");
  };
  // Danh sách dữ liệu mẫu cho Phong ky thuat
  const data = [
    {
      id: "1",
      name: "Nguyễn Trung Hải",
      room: "T3011 - Sự cố mạng",
      time: "11:00   1 /3 /2023",
    },
    {
      id: "2",
      name: "Nguyễn Trung Hải",
      room: "T3011 - Sự cố mạng",
      time: "11:00   1 /3 /2023",
    },
    {
      id: "3",
      name: "Nguyễn Trung Hải",
      room: "T3011 - Sự cố mạng",
      time: "11:00   1 /3 /2023",
    },
  ];
  // Danh sách dữ liệu mẫu cho Phong Hanh Chinh
  const data2 = [
    {
      id: "1",
      name: "Nguyễn Trung Hải",
      room: "T3011 - Sự cố mạng",
      time: "11:00   1 /3 /2023",
    },
    {
      id: "2",
      name: "Nguyễn Trung Hải",
      room: "T3011 - Sự cố mạng",
      time: "11:00   1 /3 /2023",
    },
    {
      id: "3",
      name: "Nguyễn Trung Hải",
      room: "T3011 - Sự cố mạng",
      time: "11:00   1 /3 /2023",
    },
  ];

  // Hàm render cho Phong Ky Thuat
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={goToDetailsDanhGia}>
      <View style={styles.container1}>
        <Text style={styles.row}>
          <Text style={styles.txt}>Người yêu cầu: </Text>
          <Text style={styles.name}>{item.name}</Text>
          {"\n"}
          <Text style={styles.txt}>Phòng: </Text>
          <Text style={styles.room}>{item.room}</Text>
          {"\n"}
          <Text style={styles.txt}>Thời gian: </Text>
          <Text style={styles.time}>{item.time}</Text>
        </Text>
        <View style={styles.container2}>
          <Text style={styles.txt2}>Đánh giá</Text>
          <View style={styles.container3}>
            <Image
              style={styles.btnRate}
              source={require("../../images/star.png")}
            />
            <Image
              style={styles.btnRate2}
              source={require("../../images/star.png")}
            />
            <Image
              style={styles.btnRate3}
              source={require("../../images/star.png")}
            />
            <Image
              style={styles.btnRate4}
              source={require("../../images/star.png")}
            />
            <Image
              style={styles.btnRate5}
              source={require("../../images/unstar.png")}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  // Hàm render cho Phong Hanh Chinh
  const renderItem2 = ({ item }) => (
    <TouchableOpacity onPress={goToDetailsDanhGia}>
      <View style={styles.container1}>
        <Text style={styles.row}>
          <Text style={styles.txt}>Người yêu cầu: </Text>
          <Text style={styles.name}>{item.name}</Text>
          {"\n"}
          <Text style={styles.txt}>Phòng: </Text>
          <Text style={styles.room}>{item.room}</Text>
          {"\n"}
          <Text style={styles.txt}>Thời gian: </Text>
          <Text style={styles.time}>{item.time}</Text>
        </Text>
        <View style={styles.container2}>
          <Text style={styles.txt2}>Đánh giá</Text>
          <View style={styles.container3}>
            <Image
              style={styles.btnRate}
              source={require("../../images/star.png")}
            />
            <Image
              style={styles.btnRate2}
              source={require("../../images/star.png")}
            />
            <Image
              style={styles.btnRate3}
              source={require("../../images/star.png")}
            />
            <Image
              style={styles.btnRate4}
              source={require("../../images/star.png")}
            />
            <Image
              style={styles.btnRate5}
              source={require("../../images/unstar.png")}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <Text style={styles.txt1}>Phòng kỹ thuật</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.txt3}>Xem thêm</Text>

      <Text style={styles.txt4}>Phòng hành chính</Text>
      <FlatList
        data={data2}
        renderItem={renderItem2}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default DanhGiaNhanSu;

const styles = StyleSheet.create({
  container1: {
    flexDirection: "row",
    backgroundColor: "#F1F4F5",
    marginTop: 10,
    marginStart: 16,
    marginEnd: 16,
    borderRadius: 8,
    width: 343,
    height: 80,
  },
  container2: {
    flexDirection: "column",
    marginStart: 18,
    backgroundColor: "#2D5381",
    width: 150,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  container3: {
    flexDirection: "row",
    marginStart: 33,
    marginEnd: 47,
    marginTop: 2,
  },
  txt1: {
    color: "rgba(0, 0, 0, 0.70)",
    fontSize: 14,
    fontWeight: "600",
    marginStart: 27,
    marginTop: 20,
  },
  txt: {
    color: "#000",
    fontSize: 12,
    fontWeight: "400",
  },
  txt2: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    alignSelf: "center",
    marginTop: 21,
  },
  txt3: {
    fontWeight: "400",
    marginStart: 301,
    marginTop: 11,
    marginEnd: 16,
  },
  txt4: {
    color: "rgba(0, 0, 0, 0.50)",
    fontSize: 14,
    fontWeight: "600",
    marginStart: 31,
    marginTop: 6,
  },
  row: {
    flexDirection: "row",
    marginStart: 10,
    marginTop: 10,
  },
  name: {
    color: "#000",
    fontSize: 12,
    fontWeight: "600",
  },
  room: {
    color: "#000",
    fontSize: 12,
    fontWeight: "600",
  },
  time: {
    color: "#000",
    fontSize: 12,
    fontWeight: "300",
  },
  btnRate2: {
    marginStart: 3,
  },
  btnRate3: {
    marginStart: 3,
  },
  btnRate4: {
    marginStart: 3,
  },
  btnRate5: {
    marginStart: 3,
  },
});

import { StyleSheet, Text, View, Image ,TouchableOpacity} from "react-native";
import React from "react";

const ChiTietDanhGia = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userContent}>
        <Image
          style={styles.btnBack}
          source={require("../../images/backwhite.png")}
        />
        <Image
          style={styles.btnNotification}
          source={require("../../images/notifications.png")}
        />
      </View>
      <View style={styles.container2}>
        <Text style={styles.txt1}>Chi tiết đánh giá</Text>
        <Text style={styles.txt2}>4.0</Text>
        <View style={styles.container3}>
          <Image
            style={styles.btnRate}
            source={require("../../images/star24.png")}
          />
          <Image
            style={styles.btnRate2}
            source={require("../../images/star24.png")}
          />
          <Image
            style={styles.btnRate3}
            source={require("../../images/star24.png")}
          />
          <Image
            style={styles.btnRate4}
            source={require("../../images/star24.png")}
          />
          <Image
            style={styles.btnRate5}
            source={require("../../images/unstar24.png")}
          />
        </View>
        <Text style={{ marginStart: 27, marginTop: 44 }}>Người đánh giá:</Text>
        <View style={styles.container4}>
          <Image style={styles.avatar}  source={require("../../images/avatar.png")} />
          <Text style={styles.row}>
            <Text style={styles.name}>Lê Văn Hiếu</Text>
            {"\n"}
            <Text style={styles.phone}>0797151033</Text>
          </Text>
          <TouchableOpacity>
            <Image
              style={styles.btnPhone}
              source={require("../../images/phone.png")}
            />
          </TouchableOpacity>
        </View>
        <Text style={{marginStart:27,marginTop:34,}}>
            <Text>Phòng: </Text>
            <Text style={styles.txtPhong}>T3011 - Sự cố mạng</Text>
        </Text>
        <Text style={{marginStart:27,marginTop:29,}}>
            <Text>Thời gian: </Text>
            <Text style={styles.txtTime}>11:00 1 /3 /2023</Text>
        </Text>
        <Text style={{marginStart:27,marginTop:29,}}>Mô tả đánh giá:</Text>
        <Text style={styles.txt3}>Sự cố này hoàn thành chưa được tốt cần khắc phục</Text>
      </View>
    </View>
  );
};

export default ChiTietDanhGia;

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
    marginTop: 23,
  },
  container3: {
    flexDirection: "row",
    justifyContent: "center",
  },
  container4: {
    flexDirection: "row",
    marginTop: 10,
    marginStart: 27,
    marginEnd: 16,
    borderRadius: 8,
  },
  userContent: {
    flexDirection: "row",
    marginTop: 58,
    marginStart: 16,
    marginEnd: 30,
    justifyContent: "space-between",
  },
  txt1: {
    color: "rgba(0, 0, 0, 0.87)",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 15,
  },
  txt2: {
    textAlign: "center",
    color: "#000",
    fontSize: 16,
    fontWeight: "400",
    marginTop: 12,
  },
  btnRate2: {
    marginStart: 5,
  },
  btnRate3: {
    marginStart: 5,
  },
  btnRate4: {
    marginStart: 5,
  },
  btnRate5: {
    marginStart: 5,
  },
  row: {
    flexDirection: "row",
    marginStart: 47,
  },
  avatar:{
    width:40,
    height:40
  },
  name:{
    color:"#000",
    fontSize:16,
    fontWeight:"500",
  },
  phone:{
    color:"#000",
    fontSize:14,
    fontWeight:"400",
  },
  btnPhone:{
    marginStart:56,
  },
  txtPhong:{
    color:"#000",
    fontSize:14,
    fontWeight:"600",
  },
  txtTime:{
    color:"#000",
    fontSize:14,
    fontWeight:"600",
  },
  txt3:{
    color:"#000",
    fontSize:12,
    fontWeight:"500",
    marginStart:27,
  }
});

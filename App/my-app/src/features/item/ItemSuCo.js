import { StyleSheet, Text, View,TouchableOpacity,Image } from "react-native";
import React, { useContext,useState,useEffect } from "react";
import { AppConText } from "../AppConText";

const ItemSuCo = (props) => {
  const { data, navigation } = props;
  const { infoUser, setinfoUser } = useContext(AppConText);

   const userPicture = infoUser.picture
    ? { uri: `${infoUser.picture}` }
    : require("../../images/avatar.png");
  return (
    <TouchableOpacity style={styles.boxsuco}>
      <View style={{ padding: 17 }}>
        <Text style={styles.titsuco}>Sự cố về {data.loaiSuCo.ten}</Text>
        <Text style={{ marginTop: 13, fontSize: 12 }}>
          Người tiếp nhận: Chưa có
        </Text>
        <View style={styles.time}>
          <Text style={{ fontSize: 12 }}>{data.created_at}  </Text>
          <Text style={{ fontSize: 12 }}>{data.phongHoc}</Text>
        </View>
      </View>
      <Image
        source={userPicture}
        style={{ width: 49, height: 49, marginTop: 26, marginRight: 22,borderRadius:46 }}
      ></Image>
    </TouchableOpacity>
  );
};

export default ItemSuCo;

const styles = StyleSheet.create({
  boxsuco: {
    flexDirection: "row",
    backgroundColor: "#F1F4F5",
    borderRadius: 8,
    marginTop:10,
    justifyContent: "space-between",
    shadowColor: "#323232",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  time: {
    flexDirection: "row",
    paddingBottom: 13,
    marginTop: 1,
    justifyContent: "space-between",
  },
  titsuco: {
    color: "#000000",
    fontWeight: "600",
    fontSize: 14,
    fontStyle: "normal",
  },
});

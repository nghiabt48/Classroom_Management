import {
  Image,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AxiosIntance from "../../AxiosIntance";
import ItemSuCo from "./item/ItemSuCo";
import { AppConText } from "./AppConText";

const LichSuBaoCaoSuCo = (props) => {
  const { navigation } = props;
  const [data, setdata] = useState([]);
  const { infoUser, setinfoUser } = useContext(AppConText);
  useEffect(() => {
    const getMyProblems = async () => {
      const response = await AxiosIntance().get("/giang-vien/me/problems");
      if (response.status == "success") {
        ToastAndroid.show("Lay du lieu thanh cong", ToastAndroid.SHORT);
        setdata(response.su_co);
      } else {
        ToastAndroid.show("Lay du lieu that bai", ToastAndroid.SHORT);
        setdata(null);
      }
    };
    getMyProblems();
    return () => {};
  }, []);

  const userPicture = infoUser.photoURL
  ? { uri: `${infoUser.photoURL}` }
  : require("../images/avatar.png");

  return (
    <SafeAreaView style={styles.container1}>
      <View style={styles.container1a}>
        <Image
          source={userPicture}
          style={{ width: 48, height: 48,borderRadius:47 }}
        />
        <Text style={{ color: "#FEFEFE",marginLeft: 12,marginTop:15, }}>
          {infoUser.email}
        </Text>
        <Image
          source={require("../images/notifications.png")}
          style={{ width: 20, height: 20,marginTop:15, }}
        />
      </View>

      <View style={styles.container2}>
        <Text style={styles.titleHis}>Lịch sử</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ItemSuCo data={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item._id}
        />
      </View>
    </SafeAreaView>
  );
};

export default LichSuBaoCaoSuCo;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#2D5381",
  },
  container1a: {
    marginTop: 43,
    marginLeft: 16,
    marginRight: 30,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  titleHis: {
    fontSize: 24,
    color: "#000000DE",
    fontWeight: "700",
    fontStyle: "normal",
    textAlign: "center",
    marginTop: 18,
  },
  container2: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius:24,
    borderTopRightRadius:24,
  },
  boxsuco: {
    flexDirection: "row",
    backgroundColor: "#F1F4F5",
    borderRadius: 8,
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

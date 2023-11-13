import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import TabViewNhanSu from "./TabViewNhanSu";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
const ListNhanSu = () => {
    const navigation = useNavigation();
    const goBack = () => {
      navigation.goBack();
    };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <TouchableOpacity onPress={goBack}>
          <Image
            style={styles.navigationBack}
            source={require("../../images/back.png")}
          />
        </TouchableOpacity>
        <Text style={styles.text1}>Danh sách nhân sự</Text>
      </View>
      <TabViewNhanSu />
    </SafeAreaView>
  );
};

export default ListNhanSu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container2: {
    flexDirection: "row",
    marginTop: 24,
    
  },
  navigationBack: {
    width: 24,
    height: 24,
    marginStart: 24,
    marginTop: 5,
  },
  text1: {
    marginStart: 70,
    marginTop:3,
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 20,
    fontWeight: "700",
  },
});

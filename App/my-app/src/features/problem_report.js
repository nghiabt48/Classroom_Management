import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
const problem_report = () => {
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
            source={require("../images/back.png")}
          />
        </TouchableOpacity>
        <Text style={styles.text1}>Báo cáo sự cố</Text>
      </View>
    </SafeAreaView>
  );
};

export default problem_report;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 24,
    fontWeight: "700",
  },
});

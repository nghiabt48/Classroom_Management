import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppConText } from "./AppConText";
import Logins from "./Logins";
import Test1 from "./Test1";
import Test2 from "./Test2";
import Homee from "./Homee";
import LichSuBaoCaoSuCo from "./LichSuBaoCaoSuCo";
import ProblemReport from "./ProblemReport";
import SendSupport from "./SendSupport";
import Setting from "./Setting";
import HomeNhanVien from "../features/NhanVien/HomeNhanVien"
import HomeManager from "../features/Manager/HomeManager"
import ListNhanSu from "../features/Manager/ListNhanSu"
import { useNavigation } from "@react-navigation/native";
import ListSuCo from "./NhanVien/ListSuCo";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Users = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Logins} />
    </Stack.Navigator>
  );
};

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="zzzz"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return <Image source={require("../images/home.png")} />;
          } else if (route.name === "LichSuBaoCaoSuCo") {
            return <Image source={require("../images/history.png")} />;
          } else if (route.name === "Call") {
            return <Image source={require("../images/lienhe.png")} />;
          } else if (route.name === "Setting") {
            return <Image source={require("../images/caiidat.png")} />;
          }
        },
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "white",
        tabBarActiveBackgroundColor: "white",
        tabBarInactiveBackgroundColor: "white",
        tabBarLabelStyle: {
          fontWeight: "700",
        },
      })}
    >
      <Stack.Screen
        name="Home"
        component={HomeGiangVien}
        options={{ headerShown: false, title: "Trang chủ" }}
      />
      <Stack.Screen
        name="LichSuBaoCaoSuCo"
        component={LichSuBaoCaoSuCo}
        options={{ headerShown: false, title: "Lịch sử" }}
      />
      <Tab.Screen
        name="Call"
        component={Test1}
        options={{ headerShown: false, title: "Liên hệ" }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{ headerShown: false, title: "Cài đặt" }}
      />
    </Tab.Navigator>
  );
};
const Sub = () => {
  return (
    <Tab.Navigator
      initialRouteName="zzzzsd"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "NhanVien") {
            return <Image source={require("../images/home.png")} />;
          } else if (route.name === "LichSuBaoCaoSuCo") {
            return <Image source={require("../images/history.png")} />;
          } else if (route.name === "Call") {
            return <Image source={require("../images/lienhe.png")} />;
          } else if (route.name === "Setting") {
            return <Image source={require("../images/caiidat.png")} />;
          }
        },
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "white",
        tabBarActiveBackgroundColor: "white",
        tabBarInactiveBackgroundColor: "white",
        tabBarLabelStyle: {
          fontWeight: "700",
        },
      })}
    >
      <Stack.Screen
        name="NhanVien"
        component={HomeNhan}
        options={{ headerShown: false, title: "Trang chủ" }}
      />
      <Stack.Screen
        name="LichSuBaoCaoSuCo"
        component={Test1}
        options={{ headerShown: false, title: "Lịch sử" }}
      />
      <Tab.Screen
        name="Call"
        component={Test1}
        options={{ headerShown: false, title: "Liên hệ" }}
      />
      <Tab.Screen
        name="Setting"
        component={Test2}
        options={{ headerShown: false, title: "Cài đặt" }}
      />
    </Tab.Navigator>
  );
};
const HomeGiangVien = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeGV" component={Homee} />
      <Stack.Screen name="Problem_Report" component={ProblemReport} />
      <Stack.Screen name="Send_Support" component={SendSupport} />
    </Stack.Navigator>
  );
};

const HomeNhan = () => {
  return (
    <Stack.Navigator
      initialRouteName="NhanVien"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeNV" component={HomeNhanVien} />
      <Stack.Screen name="ListSC" component={ListSuCo} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  const { isLogin, userRole } = useContext(AppConText);
  if (!isLogin) {
    return <Users />;
  } else {
    if (userRole === "NhanVien") {
      return <Sub />;
    } else {
      return <Main />;
    }
  }
};

export default AppNavigator;

const styles = StyleSheet.create({
  ImageIcon: {
    width: 25,
    height: 25,
  },
});

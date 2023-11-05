import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SendSupport from "./src/features/SendSupport";
import HomeNhanVien from "./src/features/NhanVien/HomeNhanVien";
import HomeManager from "./src/features/Manager/HomeManager";
import ListNhanSu from "./src/features/Manager/ListNhanSu";
import ChiTietDanhGia from "./src/features/Manager/ChiTietDanhGia";
import ProblemReport from "./src/features/ProblemReport";
import Homee from "./src/features/Homee";
import Logins from "./src/features/Logins";
import { AppConTextProvider } from "./src/features/AppConText";
import LichSuDanhGiaSuCo from "./src/features/LichSuBaoCaoSuCo";
import LichSuBaoCaoSuCo from "./src/features/LichSuBaoCaoSuCo";
import AppNavigator from "./src/features/AppNavigator";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <AppConTextProvider>
      <NavigationContainer>
       <AppNavigator/>
      </NavigationContainer>
    </AppConTextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

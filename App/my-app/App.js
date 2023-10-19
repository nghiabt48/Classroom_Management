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

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Logins} />
        <Stack.Screen name="HomeGV" component={Homee} />
        <Stack.Screen name="Problem_Report" component={ProblemReport} />
        <Stack.Screen name="Send_Support" component={SendSupport} />
        <Stack.Screen name="HomeNV" component={HomeNhanVien} />
        <Stack.Screen name="HomeMN" component={HomeManager} />
        <Stack.Screen name="ListNS" component={ListNhanSu} />
        <Stack.Screen name="DetailsRate" component={ChiTietDanhGia} />
      </Stack.Navigator>
    </NavigationContainer>
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

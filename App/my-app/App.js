import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import login from "./src/features/login";
import home from "./src/features/home";
import problem_report from "./src/features/problem_report";
import SendSupport from "./src/features/SendSupport";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Problem_Report" component={problem_report} />
        <Stack.Screen name="Send_Support" component={SendSupport} />
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

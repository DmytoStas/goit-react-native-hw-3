import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LoginScreen, RegScreen, PostScreen } from "./Screens";

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
      {/* <RegScreen /> */}
      {/* <PostScreen /> */}
      <StatusBar style="auto" />
    </View>
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

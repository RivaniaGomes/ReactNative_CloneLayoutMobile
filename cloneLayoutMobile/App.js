import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Cabecalho from "./src/components/index";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={styles.status} />
      <Cabecalho style={styles.cabecalho}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  status: {
    backgroundColor: "light",
    barStyle: "black-content",
  },
  cabecalho: {
    padding: 10,
  }
});

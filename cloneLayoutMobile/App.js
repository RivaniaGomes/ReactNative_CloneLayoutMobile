import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import Cabecalho from "./src/components/Cabecalho/index";
import Rodape from "./src/components/Rodape/index";
import mock from "./src/mocks/renner";
import Renner from './src/index';

export default function App() {
  const [fonteCarregada] = useFonts({
    MontserratRehular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <View />;
  }

  return (
    <>
      <StatusBar style={styles.status} />
      <Cabecalho style={styles.cabecalho} />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.conteudo}>
            {/* <Categoria style={styles.categoria} />
            <Carrossel style={styles.carrossel} /> */}
            <Renner {...mock} />
          </View>
        </ScrollView>
      </SafeAreaView>
      <Rodape />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // height: "100%",
  },
  status: {
    backgroundColor: "light",
    barStyle: "black-content",
    // height: "2%"
  },
  cabecalho: {
    padding: 10,
    height: "10%",
  },
  conteudo: {
    flex: 1,
    justifyContent: "space-around",
    // height: "80%"
  },
  categoria: {
    height: "15%",
  },
  // carrossel: {
  //   height: "30%"
  // },
  // galeria: {
  //   height: "30%",
  // },
});

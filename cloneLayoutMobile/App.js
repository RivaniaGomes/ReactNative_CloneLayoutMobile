import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";

import Cabecalho from "./src/components/Cabecalho/index";
import Carrossel from "./src/components/Carrossel/index";
import Categoria from "./src/components/Categoria/index";
import Galeria from "./src/components/Galeria";
import Rodape from './src/components/Rodape/index';

export default function App() {
  return (
    <>
      <StatusBar style={styles.status} />
      <Cabecalho style={styles.cabecalho} />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.conteudo}>
            <Categoria style={styles.categoria} />
            <Carrossel style={styles.carrossel} />
            <Galeria style={styles.galeria} />
          </View>
        </ScrollView>
      </SafeAreaView>
      <Rodape/>
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
    height: "10%"
  },
  conteudo: {
    flex: 1,
    justifyContent: "space-around",
    // height: "80%"
  },
  categoria: {
    height: "15%"
  },
  // carrossel: {
  //   height: "30%"
  // },
  // galeria: {
  //   height: "30%",
  // },
});

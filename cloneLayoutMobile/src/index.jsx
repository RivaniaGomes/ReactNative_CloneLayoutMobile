import React from "react";
import { StyleSheet, } from 'react-native';

import Carrossel from "./components/Carrossel/index";
import Categoria from "./components/Categoria/index";
import Galeria from "./components/Galeria";


export default function Renner({ galeria }) {
  return (
    <>
      <Categoria style={ styles.categoria } />
      <Carrossel style={ styles.carrossel } />
      <Galeria { ...galeria } />
    </>
  )
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
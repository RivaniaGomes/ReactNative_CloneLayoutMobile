import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Texto from '../Texto/index';

export default function Botao({ texto, onPress, style }) {
  return <TouchableOpacity style={ [styles.botao, style] } onPress={ onPress }>
    <Texto style={ styles.textoBotao }>{ texto }</Texto>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "black",
    paddingVertical: 10,
  },
  textoBotao: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});
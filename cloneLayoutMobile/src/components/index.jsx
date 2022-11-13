import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Pesquisa from "../../assets/pesquisa.png";
import LogoRed from "../../assets/logo_red3.png";
import Coracao from "../../assets/coracao.png";
import Carrinho from "../../assets/carrinhoVazio.png";

const Cabecalho = () => {
    return (
        <View style={styles.container}>
            <Image source={Pesquisa} style={styles.imgTag} />
            <Image source={LogoRed} style={styles.logo} />
            <Image source={Coracao} style={styles.imgTag} />
            <Image source={Carrinho} style={styles.imgTag} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginTop: "10%",
    },
    logo: {
        alignItems: "center",
        marginTop: 10,
    },
    imgTag: {
       
    }
});

export default Cabecalho;
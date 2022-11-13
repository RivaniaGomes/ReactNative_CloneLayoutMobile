import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Pesquisa from "../../../assets/pesquisa.png";
import LogoRed from "../../../assets/logo_red3.png";
import Coracao from "../../../assets/coracao.png";
import Carrinho from "../../../assets/carrinhoVazio.png";

const Cabecalho = () => {
    return (
        <View style={styles.container}>
            <View style={{width:"26%", height: "7%"}}>
                <Image source={Pesquisa} style={styles.imgTag} />
            </View>
            <View style={{width:"39%", height: "10%"}}>
                <Image source={LogoRed} style={styles.logo} />
            </View>
            <View style={{width:"16%", height: "7%"}}>
                <Image source={Coracao} style={styles.imgTag} />
            </View>
            <View style={{width:"16%", height: "7%"}}>
                <Image source={Carrinho} style={styles.imgTag} />
            </View>
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
        height: "17%",
    },
    logo: {
        marginTop: 15,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "120%",
        position: "absolute",
        
    },
    imgTag: {
        flex: 1,
        width: 40,
        height: 40,
        marginTop: 5,
        marginLeft: 13,
        position: "absolute",
        
    }
});

export default Cabecalho;
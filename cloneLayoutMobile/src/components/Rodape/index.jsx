import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";


import Renner from "../../../assets/logoR.png";
import Blog from "../../../assets/blog.png";
import Categoria from "../../../assets/categoria.jpg";
import Cartao from "../../../assets/cartao.png";
import Menu from "../../../assets/menu.png";

const Rodape = () => {
    return (
        <View style={styles.container}>
            <View style={{ width: "20%", height: "7%" }}>
                <Image source={Renner} style={styles.imgTag} />
                <Text>Inicio</Text>
            </View>
            <View style={{ width: "20%", height: "7%" }}>
                <Image source={Blog} style={styles.imgTag} />
            </View>
            <View style={{ width: "20%", height: "7%" }}>
                <Image source={Categoria} style={styles.imgTag} />
            </View>
            <View style={{ width: "20%", height: "7%" }}>
                <Image source={Cartao} style={styles.imgTag} />
            </View>
            <View style={{ width: "20%", height: "7%" }}>
                <Image source={Menu} style={styles.imgTag} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        //marginTop: "10%",
        position: "relative",
        width: "100%",
        height: 55,
    },
    logo: {
        marginTop: 5,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
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

export default Rodape;
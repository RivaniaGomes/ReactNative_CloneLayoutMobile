import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Imagem1 from "../../../assets/mosaico1.jpg";
import Imagem2 from "../../../assets/mosaico2.jpg";
import Imagem3 from "../../../assets/mosaico3.jpg";
import Imagem4 from "../../../assets/mosaico4.jpg";

const Galeria = () => {
    return (
        <View style={styles.container}>
            <Text> VERÃO SOFISTICADO</Text>
            <View style={styles.area2}>
                <View style={styles.subarea}>
                    <View >
                        <Image style={styles.meio} source={Imagem1}></Image>
                        <Image style={styles.meio} source={Imagem2}></Image>
                    </View>
                </View>
                <View style={styles.subarea}>
                    <View >
                        <Image style={styles.meio} source={Imagem3}></Image>
                        <Image style={styles.meio} source={Imagem4}></Image>
                    </View>
                </View>
            </View>
        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "blue",
        fontSize: 16,
    },
    area2: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#fff",
        height: "60%",
    },
    subarea: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 50,
    },
    meio: {
        flex: 1,
        height: 300,
        width: 200,
        justifyContent: "space-around",
        
        
    },
});
export default Galeria;
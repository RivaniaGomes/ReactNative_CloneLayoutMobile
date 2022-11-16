import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Texto from "../Texto/index"
import Botao from "../Botao/index";


const Galeria = ({ titulo, descricao, imagem1, imagem2, imagem3, imagem4, botao }) => {
    return (
        <View style={ styles.container }>
            <Texto style={ styles.texto1 }>{ titulo }</Texto>
            <Texto style={ styles.texto2 }>{ descricao }</Texto>
            <View style={ styles.area2 }>
                <View style={ styles.subarea }>
                    <View >
                        <TouchableOpacity style={ styles.meio }>
                            <Image style={ styles.meio } source={ imagem1 }></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.meio }>
                            <Image style={ styles.meio } source={ imagem2 }></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={ styles.subarea }>
                    <View >
                        <TouchableOpacity style={ styles.meio }>
                            <Image style={ styles.meio } source={ imagem3 }></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.meio }>
                            <Image style={ styles.meio } source={ imagem4 }></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Botao texto={ botao } style={ styles.botao } onPress={ () => { } } />
        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
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
        marginBottom: 30,
    },
    meio: {
        flex: 1,
        height: 300,
        width: 200,
        justifyContent: "space-around",
    },
    texto1: {
        flex: 1,
        marginLeft: 15,
        fontSize: 21,
        marginTop: 50,
        fontWeight: "bold",
        color: "black",
    },
    texto2: {
        flex: 1,
        marginLeft: 15,
        fontSize: 18,
        marginTop: 20,
        marginBottom: 30,
        color: "grey",

    },
    botao: {
        flex: 1,
        marginBottom: 40,
    }
});
export default Galeria;
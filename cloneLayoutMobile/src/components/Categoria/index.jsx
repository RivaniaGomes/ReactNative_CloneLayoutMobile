import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Categoria = () => {
    return (
        <View style={styles.container}>
            <View style={{ width: "100%", height: "30%" }}>
                <Text>CATEGORIA</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        justifyContent: "center",
    },

});
export default Categoria;
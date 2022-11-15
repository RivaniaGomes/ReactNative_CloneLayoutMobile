import React from "react";
import { View, ScrollView, useWindowDimensions, Image, StyleSheet, Text } from "react-native";
import Rodape from './../Rodape/index';

const data = [
    {
        key: 'one',
        image: require('../../../assets/stories1.png'),
        backgroundColor: '#59b2ab',
    },
    {
        key: 'two',
        image: require('../../../assets/stories2.png'),
        backgroundColor: '#febe29',
    },
    {
        key: 'three',
        image: require('../../../assets/stories3.png'),
        backgroundColor: '#22bcb5',
    }
];

const Categoria = () => {
    const scrollViewRef = React.useRef();
    const { width } = useWindowDimensions();
    const [index, setIndex] = React.useState(0);

    const offsetContent = (offset) => {
        scrollViewRef.current.scrollTo({ x: offset, animated: false });
    };

    const autoScroll = () => {
        const size = data.length - 1;
        setIndex(size === index ? 0 : index + 1);

        const offset = width * index;

        offsetContent(offset);

        console.log(`${size} ${index} ${offset}`);
    };

    React.useEffect(() => {
        const timer = setTimeout(autoScroll, 5000);

        return () => clearTimeout(timer);
    });

    return (
        <View style={styles.categoria}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ height: width / 3 }}
                pagingEnabled
                contentOffset={{ x: 380, y: 0 }}
            >
                {data.map((item) => (
                    <Image key={item.image} style={{ width, height: "100%" }} source={item.image} />
                ))}
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    categoria: {
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        marginTop: 10,
    }
});

export default Categoria;
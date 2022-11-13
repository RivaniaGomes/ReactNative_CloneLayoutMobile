import React from "react";
import { View, Text, ScrollView, useWindowDimensions, Image } from "react-native";

import Carrossel1 from "../../../assets/HOME_CARROSSEL55.jpg";
import Carrossel2 from "../../../assets/HOME_CARROSSEL66.jpg";
import Carrossel3 from "../../../assets/HOME_CARROSSEL33.jpg";
import Carrossel4 from "../../../assets/HOME_CARROSSEL77.jpg";

const data = [
    {
        image: Carrossel1
    },
    {
        image: Carrossel2
    },
    {
        image: Carrossel3
    },
    {
        image: Carrossel4
    }
]
const Carrossel = () => {

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
        const timer = setTimeout(autoScroll, 3000);

        return () => clearTimeout(timer);
    });

    return (
        <View
            style={{
                justifyContent: "center",
                alignItems: "center",
            }}
        >

            <ScrollView
                ref={scrollViewRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ height: width / 1.5 }}
                pagingEnabled
                contentOffset={{ x: 380, y: 0 }}
            >
                {data.map((item) => (
                    <Image key={item.image} style={{ width, height: "100%", flex: 1 }} source={item.image} />
                ))}
            </ScrollView>


            <Text>{data[index].image}</Text>
        </View>
    );
}
export default Carrossel;
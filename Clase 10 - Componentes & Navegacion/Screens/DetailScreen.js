import { StyleSheet, Text, View, Image, Dimensions, Button, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'

const DetailScreen = ({ product =
    {
        id: 8,
        category: 4,
        description: "Product 8",
        price: 80.63,
        image: "https://picsum.photos/200/300",
    },
    navigation
}) => {

    const { height, width } = useWindowDimensions();
    const [orientation, setOrientation] = useState("portrait")

    useEffect(() => {
        setOrientation(height > width ? "portrait" : "landscape")
    }, [height, width])

    // console.log(orientation);

    const handleBack = () => {
        navigation.goBack();
    }


    return (
        <>
            <View style={orientation === "portrait" ? styles.containerVertical : styles.containerHorizontal}>
                <Image
                    source={{ uri: product.image }}
                    style={styles.image}
                    resizeMode="cover"
                />
                <Text>{product.description}</Text>
                <Text>$ {product.price}</Text>
                <Button onPress={handleBack} title ='Go back'/>
            </View>
        </>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    containerVertical: {
        flex: 1,
        flexDirection: 'column',
    },
    containerHorizontal: {
        flex: 1,
        flexDirection: 'row',
    },
    image: {
        width: 0.8 * Dimensions.get('window').width,
        height: 300,
        marginTop: 30,
    }
})
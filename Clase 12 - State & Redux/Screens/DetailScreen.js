import { StyleSheet, Text, View, Image, Dimensions, Button, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { PRODUCTS } from '../Data/products'

const DetailScreen = ({ 
    route,
    navigation
}) => {

    const {productId} = route.params

    console.log(productId);

    // const product = {
    //     id: 1,
    //     category: 1,
    //     description: "Product 1",
    //     price: 29.99,
    //     image: "https://picsum.photos/200/300",
    // }

    const { height, width } = useWindowDimensions();
    const [product, setProduct] = useState(null)
    const [orientation, setOrientation] = useState("portrait")

    useEffect(() => {
        setOrientation(height > width ? "portrait" : "landscape")
    }, [height, width])

    // console.log(orientation);

    const handleBack = () => {
        navigation.goBack();
    }

    useEffect(()=> {
        const productSelected = PRODUCTS.find(product => product.id === productId);
        // console.log(productSelected);
        setProduct(productSelected);
    }, [productId])

    return (
        product && (
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
        )
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
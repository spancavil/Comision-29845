import { StyleSheet, Text, View, Image, Dimensions, Button, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'

const DetailScreen = ({ product, handleProduct }) => {

    const {height, width} = useWindowDimensions();
    const [orientation, setOrientation] = useState("portrait")

    useEffect(()=> {
        setOrientation( height > width ? "portrait" : "landscape")
    }, [height, width])

    console.log(orientation);

    return (
        <>
            <Header title={product.description}/>
            <View style={ orientation === "portrait" ? styles.containerVertical: styles.containerHorizontal}>
                <Image
                    source={{ uri: product.image }}
                    style={styles.image}
                    resizeMode="cover"
                />
                <Text>{product.description}</Text>
                <Text>$ {product.price}</Text>
                <Button onPress={()=> handleProduct(null)}title='Go back'/>
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
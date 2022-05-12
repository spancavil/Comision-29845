import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

const DetailScreen = ({ product }) => {
    return (

        <View style={styles.container}>
            <Image
                source={{ uri: product.image }}
                style={styles.image}
                resizeMode="cover"
            />
            <Text>{product.description}</Text>
            <Text>$ {product.price}</Text>
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        width: 0.8 * Dimensions.get('window').width,
        height: 300,
    }
})
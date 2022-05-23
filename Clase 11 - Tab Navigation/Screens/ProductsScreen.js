import { Button, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react';
import Searcher from '../Components/Searcher';
import { Entypo } from '@expo/vector-icons';
import { PRODUCTS } from '../Data/products';
import Header from '../Components/Header';
import { colors } from '../Styles/colors';
import List from '../Components/List';

const ProductsScreen = ({ category = { id: 1, category: "Ropa" }, navigation, route }) => {

    const [input, setInput] = useState("");
    const [initialProducts, setInitialProducts] = useState([])
    const [productsFiltered, setProductsFiltered] = useState([])

    const {categoryId} = route.params

    const handleErase = () => {
        setInput("")
    }

    //Buscar productos según el input.
    useEffect(() => {
        if (initialProducts.length !== 0) {
            if (input === "") setProductsFiltered(initialProducts)
            else {
                const productosFiltrados = initialProducts.filter(product => product.description.toLowerCase().includes(input.toLowerCase()))
                setProductsFiltered(productosFiltrados)
            }
        }
    }, [input, initialProducts])

    //Realiza el filtro inicial de productos por categoría
    useEffect(() => {
        const productosIniciales = PRODUCTS.filter(product => product.category === categoryId)
        setInitialProducts(productosIniciales);
    }, [categoryId])

    // console.log(initialProducts);
    // console.log(productsFiltered);

    const handleDetailProduct = (product) => {
        console.log(product);
        navigation.navigate("Detail",{
            productId: product.id,
            productTitle: product.description
        })
    }

    const handleBack = () => {
        navigation.goBack();
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keyboardAvoid}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Searcher additionalStyles={{
                        backgroundColor: colors.lightBlue
                    }}>
                        <TextInput
                            value={input}
                            onChangeText={setInput}
                            keyboardType="default"
                            style={styles.input}
                            placeholder="Ingrese producto a buscar"
                        />
                        <TouchableOpacity onPress={handleErase}>
                            <Entypo name="erase" size={30} color="black" />
                        </TouchableOpacity>
                    </Searcher>
                    <View style={styles.listContainer}>
                        <List data={productsFiltered} itemType={"Producto"} onPress={handleDetailProduct} />
                        <Button title="Go back" onPress={handleBack} />
                    </View>
                </View>
            </TouchableWithoutFeedback>

        </KeyboardAvoidingView>
    )
}

export default ProductsScreen

const styles = StyleSheet.create({
    keyboardAvoid: {
        flex: 1,
    },
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
    },
    input: {
        width: '80%',
        padding: 10,
        margin: 10,
        backgroundColor: 'black',
        borderRadius: 10,
        color: 'white',
        height: 50,
    },
    listContainer: {
        flex: 1,
    }
})
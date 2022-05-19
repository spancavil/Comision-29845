import { Button, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Searcher from '../Components/Searcher'
import { colors } from '../Styles/colors'
import List from '../Components/List'
import { CATEGORIES } from '../Data/categories';
import { Entypo } from '@expo/vector-icons';

const CategoriesScreen = ({navigation}) => {

    const [input, setInput] = useState("")
    const [categoriesFilter, setCategoriesFilter] = useState(CATEGORIES)

    useEffect(()=> {
        if (input === "") setCategoriesFilter(CATEGORIES)
        else {
            console.log("Se ejecuta el efecto");
            const categoriasFiltradas = CATEGORIES.filter(category => category.category.toLowerCase().includes(input.toLowerCase()))
            setCategoriesFilter(categoriasFiltradas)
        }
    }, [input])

    const handleErase = () => {
        setInput("");
    }

    const handleSelectedCategory = (category) => {
        // console.log(category);
        // handleCategory(category)
        // console.log(category);
        navigation.push("Products", {
            categoryId: category.id,
            categoryTitle: category.category,
        })

    }

    return (
        <>
            <View style={styles.container}>
                <Searcher additionalStyles={{
                    backgroundColor: colors.lightBlue
                }}>
                    <TextInput
                        value={input}
                        onChangeText={setInput}
                        keyboardType="default"
                        style={styles.input}
                    />
                    <TouchableOpacity onPress={handleErase}>
                        <Entypo name="erase" size={30} color="black" />
                    </TouchableOpacity>
                </Searcher>
                <View style={styles.listContainer}>
                    <List data={categoriesFilter} onPress={handleSelectedCategory}/>
                </View>
            </View>
        </>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
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
    listContainer:{
        flex: 1,
    }
})
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../Styles/Colors'

const ButtonCustom = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Add todo</Text>
        </TouchableOpacity>
    )
}

export default ButtonCustom

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.darkBrown,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        borderWidth: 2,
    },
    text: {
        fontSize: 18,
        color: colors.gray,
    }
})
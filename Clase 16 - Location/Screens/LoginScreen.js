import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Styles/colors'

const LoginScreen = () => {

    const [registroVista, setRegistroVista] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{registroVista ? "Registro": "Login"}</Text>
            </View>
            <Text>LoginScreen</Text>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.beige
    },
    content: {
        padding: 20,
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    title: {
        fontFamily: 'LatoRegular',
        fontSize: 20,
    },

})
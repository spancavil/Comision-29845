import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../Styles/colors'

const Input = ({label, password = false, onChange, value, error = null, onBlur}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        secureTextEntry={password}
        value={value}
        onBlur={onBlur}
      />
        {error ? <Text style={styles.error}>{error}</Text>: null}
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    container: {
        padding: 6,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    input: {
        color: colors.beige,
        backgroundColor: colors.darkBlue,
        borderBottomWidth: 2,
        borderBottomColor: colors.beige,
        padding: 6,
        width: '100%',
        fontFamily: 'LatoRegular',
        fontSize: 18,
    },
    text: {
        fontFamily: 'LatoRegular',
        fontSize: 18,
        marginBottom: 6,
        color: 'white',
    },
    error: {
      fontFamily: 'LatoRegular',
      fontSize: 14,
      marginBottom: 4,
      color: colors.lightBlue,
      paddingTop: 8,
    }
})
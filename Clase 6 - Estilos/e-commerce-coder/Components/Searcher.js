import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Styles/colors'

const Searcher = ({ children }) => {
    return (
        <View style={styles.searcherContainer}>
            {children}
        </View>
    )
}

export default Searcher

const styles = StyleSheet.create({
    searcherContainer: {
        flexDirection: 'row',
        backgroundColor: colors.lightBlue,
        width: '90%',
        height: 120,
        marginVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        borderRadius: 12,
    }
})
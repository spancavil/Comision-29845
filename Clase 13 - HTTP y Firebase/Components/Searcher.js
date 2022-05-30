import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Styles/colors'

const Searcher = ({children, additionalStyles}) => {
    return (
        <View style={{...styles.searcherContainer, ...additionalStyles}}>
            {children}
        </View>
    )
}

export default Searcher

const styles = {
    searcherContainer: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
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
}
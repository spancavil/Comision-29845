import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '../Styles/colors'
import { size } from '../lib/DImensions'

const Searcher = ({children, additionalStyles}) => {

    

    return (
        <View style={{...styles.searcherContainer, additionalStyles}}>
            {children}
        </View>
    )
}

export default Searcher

const styles = StyleSheet.create({
    searcherContainer: {
        flexDirection: 'row',
        width: size.orientation() === "horizontal" ? 300 : '90%',
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
})
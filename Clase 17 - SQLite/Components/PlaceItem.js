import { StyleSheet, Text, Touchable, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../Styles/colors';
import { Entypo } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { removeLocation, removeLocationDb } from '../features/locations';


const PlaceItem = ({ onSelect, title, image, address, id }) => {

    const dispatch = useDispatch()

    const onRemove = (id) => {
        console.log(id);
        dispatch(removeLocationDb({ id }))
        dispatch(removeLocation({ id }))
    }

    return (
        <TouchableOpacity
            onPress={onSelect}
            style={styles.placeItem}
        >
            <Image
                style={styles.image}
                source={{ uri: image }}
            />
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.address}>{address}</Text>
            </View>
            <TouchableOpacity onPress={() => onRemove(id)}>
                <Entypo name="trash" size={24} color="black" />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default PlaceItem

const styles = StyleSheet.create({
    placeItem: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: colors.beige
    },
    info: {
        marginLeft: 25,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        color: colors.darkBlue,
        fontSize: 18,
        marginBottom: 6,
    },
    address: {
        color: '#777',
        fontSize: 16,
    }
})
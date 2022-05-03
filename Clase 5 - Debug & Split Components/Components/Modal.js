import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Styles/Colors';

const CustomModal = ({
    modalVisible,
    setModalVisible,
    handleEdit, 
    todoSelected, 
    handleDelete,
}) => {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.modalContainer}>
                <View style={styles.content}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text>
                            X
                        </Text>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleEdit}
                        value={todoSelected.todo}
                    />
                    <TouchableOpacity onPress={handleDelete}>
                        <Text>Eliminar todo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default CustomModal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        height: 200,
        width: 300,
        backgroundColor: colors.gray
    },
    input: {
        borderRadius: 8,
        borderWidth: 2,
        width: 200,
        marginRight: 10,
        paddingHorizontal: 8,
        fontSize: 18,
        height: 35,
        backgroundColor: colors.gray
    },
})
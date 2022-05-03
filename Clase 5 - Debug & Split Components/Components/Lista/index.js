import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodoItem from './TodoItem'
import { colors } from '../../Styles/Colors'

/**
 * Componente lista para renderizar todos
 * @param handleModal Manejar la visibilidad del modal
 * @param todoList Listado de todos
 */

const Lista = ({handleModal, todoList}) => {

    const renderTodo = ({ item }) => <TodoItem onPress={handleModal} todo={item}></TodoItem>
    
    return (
        <View style={styles.itemList}>
            {/* <Item item = {{id: 1, todo: "Estudiar React Native"}}></Item>
                <Item item = {{id: 2, todo: "Cerrar el mic"}}></Item>
                <Item item = {{id: 3, todo: "Usar Youtube"}}></Item>
                <Item item = {{id: 4, todo: "Usar Figma"}}></Item>
                <Item item = {{id: 5, todo: "Ver tutorial del hindú"}}></Item> */}
            {todoList.length !== 0 && (
                <FlatList
                    data={todoList}
                    keyExtractor={todo => todo.id}
                    renderItem={renderTodo}
                />
            )}

            {todoList.length === 0 && <Text>No hay todos cargados</Text>}

        </View>
    )
}

export default Lista

const styles = StyleSheet.create({
    itemList: {
        backgroundColor: colors.brown,
        width: '95%',
        padding: 20,
        flex: 0.8,
    },
})
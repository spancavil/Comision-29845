import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../Styles/Colors'

const TodoItem = ({todo, onPress}) => {
  return (
    <View style = {styles.itemContainer}>
      <TouchableOpacity onPress={()=>onPress(todo)}>
        <Text style = {styles.text}>{todo.todo}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TodoItem

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: colors.darkBrown,
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    text:{
        color: colors.white,
        fontSize: 18,
    }
})
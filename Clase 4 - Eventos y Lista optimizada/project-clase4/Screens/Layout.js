import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native'
import Item from '../Components/Item';
import { useState } from 'react';
import { colors } from '../Styles/Colors';
import ButtonCustom from '../Components/Button';
const Layout = () => {

    const [input, setInput] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleAdd = () => {
        if (input !== ""){
            setTodoList([...todoList, {id: Date.now(), todo: input}]);
            setInput("");
        }
    }

    console.log(todoList);

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TextInput
                style = {styles.input}
                placeholder = "Add todo"
                onChangeText={setInput}
                value={input}
                />
                <ButtonCustom onPress={handleAdd}/>
            </View>
            <View style={styles.itemList}>
                {/* <Item item = {{id: 1, todo: "Estudiar React Native"}}></Item>
                <Item item = {{id: 2, todo: "Cerrar el mic"}}></Item>
                <Item item = {{id: 3, todo: "Usar Youtube"}}></Item>
                <Item item = {{id: 4, todo: "Usar Figma"}}></Item>
                <Item item = {{id: 5, todo: "Ver tutorial del hindú"}}></Item> */}
                {todoList.length !== 0 ? 
                todoList.map(item => <Item item ={item} key = {item.id}/>)
                :
                <Text>No hay todos cargados</Text>
            }
            </View>
        </View>
    )
}

export default Layout;

const styles = StyleSheet.create({
    container: {
        padding: 25,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    topContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
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
    itemList: {
        backgroundColor: colors.brown,
        width: '95%',
        padding: 20,
    }
})
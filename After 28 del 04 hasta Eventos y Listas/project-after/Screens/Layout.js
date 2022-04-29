import { Text, TextInput, View, StyleSheet, TouchableOpacity, FlatList, Modal } from 'react-native'
import TodoItem from '../Components/TodoItem';
import { useState } from 'react';
import { colors } from '../Styles/Colors';
import ButtonCustom from '../Components/Button';
const Layout = () => {

    const [input, setInput] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);


    const [todoSelected, setTodoSelected] = useState({});

    const handleAdd = () => {
        if (input !== "") {
            setTodoList([...todoList, { id: Date.now(), todo: input }]);
            setInput("");
        }
    }

    console.log(todoList);

    const handleModal = (todoSelected) => {
        setModalVisible(true);
        setTodoSelected(todoSelected);
    }

    const handleDelete = () => {
        const todosFiltrados = todoList.filter(item => item.id !== todoSelected.id);
        setTodoList(todosFiltrados);
        setModalVisible(false);
    }

    const handleEdit = (text) => {
        const todoToEdit = todoList.find(todo => todo.id === todoSelected.id);
        // const todoListFiltered = todoList.filter(todo => todo.id !== todoSelected.id)
        todoToEdit.todo = text
        setTodoList([...todoList])
    }

    const renderTodo = ({ item }) => <TodoItem onPress={handleModal} todo={item}></TodoItem>

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Add todo"
                    onChangeText={setInput}
                    value={input}
                />
                <ButtonCustom onPress={handleAdd} />
            </View>
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
        height: '100%',
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        flex: 0.2,
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
        flex: 0.8,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        height: 200,
        width: 300,
        backgroundColor: colors.gray
    }
})
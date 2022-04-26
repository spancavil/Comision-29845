import { Button, Text, TextInput, View, StyleSheet } from 'react-native'
import Item from '../Components/Item';
import { colors } from '../Styles/Colors';
const Layout = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TextInput
                style = {styles.input}
                />
                <Button title='Add todo'/>
            </View>
            <View style={styles.itemList}>
                <Item item = {{id: 1, todo: "Estudiar React Native"}}></Item>
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
    },
    itemList: {
        backgroundColor: colors.brown,
        width: '95%',
        padding: 20,
    }
})
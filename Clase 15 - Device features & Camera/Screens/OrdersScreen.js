import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import OrderItem from '../Components/OrderItem'
import { ORDERS } from '../Data/order'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../features/orders'

const renderItem = ({ item }) => (
    <OrderItem
        item={item}
    />
)


const OrdersScreen = () => {

    const {orders} = useSelector(state => state.orders.value)

    console.log(orders);

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getOrders({id: 2, elemento: "Vino elemento"}))
    },[])

    return (
        <View style={styles.container}>
            <FlatList
                data={ORDERS}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

export default OrdersScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import PlaceItem from '../Components/PlaceItem'
import { useDispatch, useSelector } from 'react-redux'
import { getLocations, removeLocationDb } from '../features/locations'

const renderItem = ({ item }) => {

  return (
    <PlaceItem
      onSelect={() => { }}
      title={item.title}
      image={item.picture}
      address={item.address}
      id={item.id}
    />
  )
}

const LocationsScreen = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLocations())
  }, [])

  const { locations } = useSelector(state => state.locations.value)

  console.log(locations);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={locations}
        renderItem={renderItem}
        keyExtractor={location => location.id}
      />
    </View>
  )
}

export default LocationsScreen

const styles = StyleSheet.create({})
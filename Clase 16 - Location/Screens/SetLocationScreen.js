import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import { API_KEY } from '../Constants/googleAPI';

const SetLocationScreen = ({navigation}) => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const initialRegion = {
        latitude: 37,
        longitude: -122,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04
    }

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
        })()

    }, [])

    const handleLocation = evento => {
        setLocation({
            lat: evento.nativeEvent.coordinate.latitude,
            lng: evento.nativeEvent.coordinate.longitude,
        })
    }

    const handleConfirm = () => {
        //Reverse geocode
        (async ()=> {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${API_KEY}`)
            const reverseGeocode = await response.json()
            console.log(reverseGeocode);
            const address = reverseGeocode.results[0].formatted_address;
            navigation.navigate('Save-location', {address})
        })()
    }

    console.log(errorMsg);
    console.log(location);

    return (
        // <View>
        <>
            {errorMsg ?
                <Text>{errorMsg}</Text>
                :
                <>
                    <MapView onPress={handleLocation} initialRegion={initialRegion} style={{flex: 1}}> 
                        {location?.lat ?
                        <Marker 
                            title="Ubicación seleccionada"
                            coordinate={{
                                latitude: location.lat,
                                longitude: location.lng,
                            }}
                        
                        />
                        :
                        null
                        
                    
                        }

                    </MapView>
                    <Button title="Confirmar ubicación" onPress={handleConfirm}></Button>
                </>
            }
            {/* </View> */}
        </>
    )
}

export default SetLocationScreen

const styles = StyleSheet.create({})
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../Styles/colors';
import * as ImagePicker from 'expo-image-picker';
import renamePathAndMove from '../Utils/renamePath';
import { useDispatch } from 'react-redux';
import { addLocation, addLocationDb } from '../features/locations';


const SaveLocationScreen = ({navigation, route}) => {
  const [title, setTitle] = React.useState("")
  const [picture, setPicture] = React.useState("")

  const params = route.params;

  console.log(params?.address);

  const dispatch = useDispatch();

  const handlePickLibrary = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setPicture(result.uri);
    }
  }

  const getPermission = async () => {
    const { status } = await ImagePicker.getCameraPermissionsAsync()

    console.log(status);
    if (status !== 'granted') {
      return false
    }
    return true
  }

  const handleTakePicture = async () => {
    const isVerified = getPermission()
    if (!isVerified) {
      return
    }

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    })

    console.log(image);
    setPicture(image.uri);
  }

  const handleConfirm = async () => {
    // const path = await renamePathAndMove(picture);
    // console.log(path);
    let id = Date.now()
    dispatch(addLocation({title, picture, id, address:params?.address}))
    dispatch(addLocationDb({title, picture, id, address:params?.address}))
    setTitle("");
    setPicture("");
  }

  const handleSetLocation = () => {
    navigation.navigate("Set-location");
  }
 
  const handleLocation = () => {
    navigation.navigate("Get-location")
  }

  return (
    <View style={styles.container}>
      <Text>Nueva dirección</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Título"
      />
      {picture ?
        <Image
        source={{ uri: picture }}
        style={styles.image}
        />
        : null
      }
      <Button title='Tomar una foto' onPress={handleTakePicture} />
      <Button title="Seleccionar de la galería" onPress={handlePickLibrary} />
      <Button title="Obtener ubicación" onPress={handleLocation} />
      <Button title="Definir una ubicación" onPress={handleSetLocation} />
      <Button title="Confirmar" onPress={handleConfirm}></Button>
    </View>
  )
}

export default SaveLocationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.beige
  },
  image: {
    width: '90%',
    height: 200,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: colors.lightBlue,
  }
})
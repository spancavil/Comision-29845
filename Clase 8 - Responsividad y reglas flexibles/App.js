import { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import CategoriesScreen from './Screens/CategoriesScreen';
import ProductsScreen from './Screens/ProductsScreen';
import {useFonts} from 'expo-font';

export default function App() {

  const [categorySelected, setCategorySelected] = useState(null)

  const handleCategory = (category) => {
    // console.log(category);
    setCategorySelected(category)
  }

  console.log(categorySelected);

  const [loaded] = useFonts({
    Koulen: require('./assets/Fonts/Koulen/Koulen-Regular.ttf'),
    LatoRegular: require('./assets/Fonts/Lato/Lato-Regular.ttf')
  });
  
  if (!loaded) {
    return <ActivityIndicator/>;
  }

  console.log(loaded);

  return (
    <View style={style.container}>
      { categorySelected ?
        <ProductsScreen category={categorySelected} handleCategory={handleCategory}/>
        :
        <CategoriesScreen handleCategory = {handleCategory}/>
      }
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  }
})

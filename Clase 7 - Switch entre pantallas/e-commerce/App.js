import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './Screens/CategoriesScreen';
import ProductsScreen from './Screens/ProductsScreen';

export default function App() {

  const [categorySelected, setCategorySelected] = useState(null)

  const handleCategory = (category) => {
    // console.log(category);
    setCategorySelected(category)
  }

  console.log(categorySelected);

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

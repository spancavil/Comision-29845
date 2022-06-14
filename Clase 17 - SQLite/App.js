import { ActivityIndicator} from 'react-native';
// import CategoriesScreen from './Screens/CategoriesScreen';
// import ProductsScreen from './Screens/ProductsScreen';
import {useFonts} from 'expo-font';
// import DetailScreen from './Screens/DetailScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainNavigator from './Navigation';
import store from './Store';
import { Provider } from 'react-redux'

import { init } from './db';

init()
.then(()=> {console.log('Db initialized');})
.catch((err)=> {
  console.log('Error loading db');
  console.log(err.message);
})

export default function App() {

/*   const [categorySelected, setCategorySelected] = useState(null);
  const [productSelected, setProductSelected] = useState(null);

  const handleCategory = (category) => {
    // console.log(category);
    setCategorySelected(category)
  }

  const handleProduct = (product) => {
    // console.log(category);
    setProductSelected(product)
  } */

  // console.log(categorySelected);
  // console.log(productSelected);

  const [loaded] = useFonts({
    Koulen: require('./assets/Fonts/Koulen/Koulen-Regular.ttf'),
    LatoRegular: require('./assets/Fonts/Lato/Lato-Regular.ttf')
  });
  
  if (!loaded) {
    return <ActivityIndicator/>;
  }

  // console.log(loaded);

  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
    // </SafeAreaView>
  );
}

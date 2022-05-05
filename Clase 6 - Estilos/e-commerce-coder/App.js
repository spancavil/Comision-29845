import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './Screens/CategoriesScreen';

export default function App() {
  return (
    <View style={style.container}>
      <CategoriesScreen/>
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

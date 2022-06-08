import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../Styles/colors'
import { Dimensions, useWindowDimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CategoryItem = ({category}) => {

  const {width, height} = useWindowDimensions();

  // console.log(windowWidth, windowHeight);
  // console.log(width, height)

  return (
    <View style={{...styles.container, 
      maxWidth: 0.43 * width,
      maxHeight: 0.43 * width,
      margin: width < 330 ? 10: 15,
    }}>
      <Text style={styles.text}>{category.category}</Text>
    </View>
  )
}

export default CategoryItem

const styles = {
  container: {
    width: 150,
    height: 150,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 15,
    backgroundColor: colors.regularBlue,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontFamily: 'LatoRegular'
  }
}
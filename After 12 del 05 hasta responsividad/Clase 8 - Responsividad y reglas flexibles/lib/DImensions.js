import {Dimensions} from 'react-native';

export const size = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width, 
    orientation(){ return (this.height > this.width ? "vertical": "horizontal") }, 
}
import React, { useState } from 'react'
import { Dimensions } from 'react-native';

const useDimensions = () => {

    const [dimensiones, setDimensiones] = useState({height: 0, width: 0, orientation: ''})

    useEffect(() => {
        Dimensions.addEventListener('change', () => {
            const height = Dimensions.get('window').height;
            const width = Dimensions.get('window').width;
            setDimensiones({
                width: width,
                height: height,
                orientation: width > height ? "landscape": "portrait"
            })
        })
    }, [])
    return {dimensiones}
}

export default useDimensions
import React from 'react'
import { View, Text } from 'react-native'

import styles from './style'

export default (props) => {
    return(
        <View style={styles.Display}>
            <Text style={styles.DisplayText} numberOfLines={1}>{props.conta}</Text>
        </View>
    )
}
import React from 'react'
import { TouchableHighlight, Text, View } from 'react-native'

import styles from './style'

export default (props) => {
    const stylesButton = [styles.Button]
    if(props.zero) stylesButton.push(styles.zero)
    if(props.operationButton) stylesButton.push(styles.operadoresButtons)
    if(props.triple) stylesButton.push(styles.triple)
    return (
        <View>
            <TouchableHighlight onPress={() =>props.onClick(props.name)}>
                <Text style={stylesButton}>{props.name}</Text>
            </TouchableHighlight>

        </View>
    )
}
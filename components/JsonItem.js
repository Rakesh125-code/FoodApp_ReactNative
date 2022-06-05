import React from 'react';
import {Text,View} from 'react-native';
function JsonItem(props) {
    return (
        <View>
            <Text>
            {props.item},
            </Text>
         </View> 
        
    );
}

export default JsonItem;
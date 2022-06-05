import React from 'react';
import { View ,StyleSheet,Text,Button} from 'react-native';
import { Feather,MaterialIcons,MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';

function FoodItems(props) {
    return (
        <View style={styles.container}>

            <View style={styles.leftSide}>
                <View style={styles.direction}>
                    <MaterialCommunityIcons
                    style={[styles.gridbutton,styles.color ,{marginRight:6}]}name="dots-grid"/>
                    <Text style={styles.textStyle}>{props.name}</Text>
                </View>
            
                <View style={styles.direction}>
                    <Text style={styles.color}>Price: </Text> 
                    <FontAwesome name="rupee"/>
                    <Text style={[styles.textStyle,{fontWeight:"500"}]}>{props.price}</Text>
                </View>
            
            </View>

            <View style={styles.rightSide}>
              <Feather onPress={()=>props.onEdit(props.index)} style={styles.editbutton} name="edit-2"/>

              <MaterialIcons onPress={()=>props.onDelete(props.index)} style={styles.button} name="delete-outline"/>
            </View>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
            backgroundColor:"#f2f5f2",
            height:70,
            width:"98%",
            borderRadius:7,
            borderColor:"#e1e3e1",
            borderWidth:1,
            margin:5,
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            
    },
    leftSide:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingLeft:15,
        width:"70%"
    },
    rightSide:{
        flexDirection:"row",
        margin:5,
        alignItems:"center",
        justifyContent:"center"
      
    },
    button:{
        height:20,
        width:20,
        fontSize:21,
        marginRight:10,
        marginLeft:10
       
    },
    editbutton:{
        height:20,
        width:20,
        fontSize:18,
        marginRight:10,
        marginLeft:10
       
    },
    gridbutton:{
        height:20,
        width:20,
        fontSize:20,
       
    },
    textStyle:{
        padding:5,
        fontWeight:"700"
    },
    color:{
        color:"#adadad"
    },
    direction:{
       flexDirection:"row",
       alignItems:"center"
    }

})
export default FoodItems;
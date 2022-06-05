import React,{useState} from 'react';
import {View,Text,StyleSheet,StatusBar} from 'react-native';
import { useRoute } from '@react-navigation/native';
import JsonItem from '../../components/JsonItem';
function FoodListScreen() {
    const route = useRoute();
    return (
       <View style={styles.container} >
           {/* heading */}
           <Text style={styles.headingText}>Final Food List</Text>  

           {/* traversing items */}
           <View>
              <Text>[</Text>
              {route.params.items.length>0&&route.params.items.map((item,i)=>{
                  return <JsonItem key={i} item={JSON.stringify(item)} />
              })}
               <Text>]</Text>
            </View>
    
       </View>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"flex-start",
        paddingTop:StatusBar.currentHeight,
        paddingLeft:10
        
         
    },
    headingText:{
       fontSize:20,
       marginVertical:15,
       marginLeft:"auto",
       marginRight:"auto",
       fontWeight:"700"
    }
    
})
export default FoodListScreen;
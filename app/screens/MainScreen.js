import React,{useState} from 'react';
import { StyleSheet, Text, View,StatusBar,TouchableOpacity,TextInput,Keyboard,ScrollView} from 'react-native';
import FoodItems from '../../components/FoodItems';

function MainScreen({navigation}) {
    //add item 
    const [foodName, onChangeFoodName] = useState("");
    const [foodPrice, onChangeFoodPrice] = useState("");
    const [items,setItems] =useState([]);

    const handleAddItems=()=>{
        Keyboard.dismiss() // dismiss the keyboard automatiically
        if(foodName.length>0&&foodPrice.length>0){
                let obj={
                    name:foodName,
                    price:foodPrice
                }
                setItems([...items,obj]);
                onChangeFoodName("");
                onChangeFoodPrice("");
        }
    }

    //edit item
    const[update,setUpdate]=useState(0);
    const[itemIndex,setItemIndex]=useState(null);

    const handleEdit=(index)=>{
        setItemIndex(index);
        handleToggle();
        setUpdate(1);
        items.map((item,i)=>{
            if(index===i){
                onChangeFoodName(item.name)
                onChangeFoodPrice(item.price)
            }
        })
    }

    //update
    const handleUpdate=()=>{
        let itemCopy=[...items];
        itemCopy.map((item,i)=>{
            if(itemIndex===i){
                item.name=foodName;
                item.price=foodPrice;
            }
        })
        setItems(itemCopy);
        onChangeFoodName("");
        onChangeFoodPrice("");
    }

    //delete item
    const handleDelete=(index)=>{
        let itemCopy=[...items];
        itemCopy.splice(index,1);
        setItems(itemCopy);
    }
    
    // toggle buuton and form
   
    const [finalFoodBtnText, onChangeFinalFoodText] = useState(true);
    const [toggleForm, onChangeToggle] = useState(false);
    const handleToggle=()=>{
        setUpdate(0); // setting update to 0
        onChangeFoodName("");
        onChangeFoodPrice("");
        if(toggleForm) {
            onChangeToggle(false);
            onChangeFinalFoodText(true);
        }
        else {
            onChangeToggle(true);
            onChangeFinalFoodText(false);
        
        }
    }

    return (          
        <View style={styles.container}> 
        {/* heading */}
          <Text style={styles.headingText}>Food List</Text>
          <View style={styles.scrollView}>
          <ScrollView >

           {/* iterate items */}
           {
               items.map((item,i)=>{
                   return <FoodItems onEdit={handleEdit} onDelete={handleDelete} key={i} name={item.name} price={item.price} index={i}/>
               })
           }

            {/* add food item */}
           <TouchableOpacity onPress={handleToggle} style={styles.addFoodItem}>
               <Text  style={styles.addFoodItemText}>+  Add Food Item</Text>
           </TouchableOpacity>

          </ScrollView>
          </View>
            {/* final food list btn*/}
           {finalFoodBtnText? <TouchableOpacity 
           onPress={()=> navigation.navigate('Food List',{items})}
           style={styles.finalFoodBtn} 
             >
               <Text style={styles.footerText}>Final Food List</Text>
            </TouchableOpacity> : null}

           

            {/* add food item bottom btn */}
            {!finalFoodBtnText? <TouchableOpacity style={styles.finalFoodBtn} 
             onPress={update===0?handleAddItems:handleUpdate}>
               <Text style={styles.footerText}>Add Food Item</Text>
            </TouchableOpacity> : null}

           {/* adding item form */}
           {toggleForm?<View style={styles.form}>
               <View style={styles.topForm}>
               <Text style={[styles.addFoodItemText,{fontSize:16}]}>Add Food</Text>
               <Text style={[styles.addFoodItemText,{fontSize:16}]} onPress={handleToggle}>x</Text>
               </View>

               <Text style={styles.formText}>Food Name</Text>
               <TextInput
                style={styles.inputBox} 
                value={foodName}
               onChangeText={onChangeFoodName}/>

               <Text style={styles.formText}>Food Price</Text>
               <TextInput 
               value={foodPrice}
               onChangeText={onChangeFoodPrice} 
               style={styles.inputBox} 
               keyboardType="numeric"/>
           </View>:null}
        </View>
        
    );
}

const styles=StyleSheet.create({
    addFoodItemText:{
        color:"black",
        fontSize:15,
        fontWeight:"700"
    }
    ,
    addFoodItem:{
        backgroundColor:"#d6fad4",
        width:"100%",
        height:60,
        borderRadius:7,
        borderColor:"#94fa91",
        borderWidth:1,
        padding:10,
       justifyContent:"center",
       paddingLeft:20
    },
    container:{
          paddingTop:StatusBar.currentHeight,
          alignItems:"center",
          margin:10,
          flex:1, 
          
    },
    finalFoodBtn:{
        backgroundColor:"#2fa12b",
        width:"100%",
        height:60,
        borderRadius:7,
        padding:10,
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        bottom:10

    },
    footerText:{
        color:"white",
        fontSize:15
    },
    form:{
        backgroundColor:"white",
        height:220,
        width:"100%",
        position:"absolute",
        bottom:80,
        paddingTop:15,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        padding:10

    },
    headingText:{
        fontSize:20,
        marginBottom:10,
        fontWeight:"700"
        
    },
    inputBox:{
        width:"100%",
        height:50,
        borderRadius:7,
        borderWidth:1,
        padding:10,
        borderColor:"#e1e3e1",
    },
    topForm:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:5
    },
    scrollView:{
            width:"100%",
            height:"83%"
    },
    formText:{
        marginVertical:5,
        fontSize:13
    }
    
})
export default MainScreen;
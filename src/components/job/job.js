import React from "react";
import { View,Text, SafeAreaView,FlatList,TouchableOpacity, TextInput,Button} from "react-native";
import style from "./style";



const Job =(props) => {
    
    return (       
        <View style={style.just}>
            
           
            <View style={style.container}>
               
                <Text style={style.text} >{props.text}   </Text>
                <TouchableOpacity  onPress={props.remove}   >
                    <Text style={style.touch} > X</Text>
                </TouchableOpacity>
                
            
            </View>
            
            
            
            
        </View>
        

    );

}

export default Job;
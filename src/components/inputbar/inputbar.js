import React from "react";
import { TextInput,Button, View, Text,TouchableOpacity } from "react-native";
import style from "./style"
const InputBar = (props) => {
    

    
    return (
        <View style={style.container}>
            <TextInput placeholder="Add" placeholderTextColor={"black"} value={props.val} style={style.input} onChangeText={props.search} ></TextInput>
            <TouchableOpacity style={style.buttoncol} onPress={props.press}>
                
                <Text style={style.text} >Save</Text>
            </TouchableOpacity>
            
            
        </View>

    );
}

export default InputBar;
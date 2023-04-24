import React from "react"
import { SafeAreaView,View,Text } from "react-native"
import style from "./style"


const Jobnumber =(props) => {
    return (
    <View style={style.container}>
      <Text style={style.text}>TO DO LIST</Text>
      <Text style={style.number} >{props.number}</Text>
      </View>
    );
}

export default Jobnumber;
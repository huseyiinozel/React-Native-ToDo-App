import React,{useState} from "react";
import { SafeAreaView,View,Text, StyleSheet,ScrollView, Button,FlatList,TouchableOpacity } from "react-native";
import Jonbnumber from "./components/jobnumber"
import Job from "./components/job"
import Inputbar from "./components/inputbar"
function App (){
  const [text,settext] =useState("");
  const [list,setlist] =useState([]);
  const [jobnumber,setjobnumber] =useState(0);
  const keyitem = (item)=>item.id;
  const deger = 
      {
        id:Math.floor(Math.random() * 1000),
        title:text,
        }

  


  const trytext = text => {
    
    settext(text);
  }

 
  function AddJob (){
    setlist([...list,deger])
    settext("");
    setjobnumber(jobnumber+1);
    
    
  };
 


  const DeleteJob = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setlist(newList);
    setjobnumber(jobnumber-1)
  };    
  
   

  
  


  return (
    
      <SafeAreaView style={styles.container}>
        
        <Jonbnumber number={jobnumber} ></Jonbnumber>
        <FlatList 
        data={list}
        keyExtractor={keyitem}
        renderItem={({item, index}) => (
          <Job   text={item.title} remove={() => DeleteJob(index)}></Job>
        )}
      >
      

      </FlatList>

      <Inputbar val={text} search={trytext} press={AddJob}  ></Inputbar>
         
          
          
         
        </SafeAreaView>
       
      
  );
}

const styles = StyleSheet.create ({
  container:{
    flex:1,
    backgroundColor:"lavender",
  },
  try:{
    backgroundColor:"red",
  }

})


export default App;
import React,{useState} from 'react';
import { StyleSheet,Text,TextInput,Button,View} from 'react-native';

export default function AddTodo({submitHandler}){
    const [text, setText]=useState('');
    const changeHandler=(val)=>{
        setText(val);
    }
    return(
    <View>
        <TextInput
        styles={styles.input}
            placeholder='new todo....'
            onChangeText={changeHandler}
        />
        <Button onPress={()=>submitHandler(text)} title='ajout todo' color='coral'/>
    </View>
    )
}
const styles = StyleSheet.create({
input: {
    marginBottom:10,
    marginHorizontal:8,
    marginVertical:6,
    borderBottomWidth:1,
    borderColor:"#ddd"
}
});

import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const[todos,setTodos]= useState([
    {text:'mon frere est devs',key:'1'},
    {text:'je suis  dev hybride',key:'2'},
    {text:'oumar est mecanicien',key:'3'}
  ]);

  // bouton permettant de supprimer ou filtrer
  const pressHandler=(key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key !=key);
    })
  }
  const submitHandler=(text)=>{
    setTodos((prevTodos)=>{
    return [
      {text:text, key:Math.random().toString()},
      ...prevTodos
    ];
  })
  }
  return (
    <View style={styles.container}>
    {/* debut header */}
    <Header/>
    <View style={styles.content}>
    {/* to form */}
    <AddTodo submitHandler={submitHandler}/>
      <View style={styles.list}>
      <FlatList 
      data={todos}
      renderItem={({item})=>(
      <TodoItem  item={item} pressHandler={pressHandler}/>
      )}
      />
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    padding:40,
  },
  list:{
  marginTop: 0,
  }
});

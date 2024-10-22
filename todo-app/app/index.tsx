import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'

const index = () => {
  let [input, setinput] = useState('')
  let [todo, settodo] = useState<string[]>([])

  const addTodo = () => {
    console.log('todo add ho raha ha');
    todo.push(input)
    settodo([...todo])
    console.log(todo);
    setinput('')
  }
  return (
    <SafeAreaView style={{
      alignItems: 'center',
      marginTop: 10,
    }}>
      <Text style={{
        fontSize: 30,
        fontWeight: 'bold'
      }}>My Todo App</Text>
       <TextInput
        style={styles.input}
        onChangeText={setinput}
        value={input}
        placeholder='Enter your todo'
      />
      <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text style={{
          color: 'white',
        }}>Press Here</Text>
      </TouchableOpacity>
      {todo.length > 0 ? <View>{todo.map((item,index) => (
        <Text key={index} style={{
          backgroundColor: 'orange',
          padding: 20,
          color: 'white',
          width: 300,
          marginTop: 10
        }}>{item}</Text>
      ))}</View> : <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
      }}>Todo Not Found...</Text>}
    </SafeAreaView>
  )
}

export default index



const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 300,
    marginHorizontal: 40,
    marginVertical: 20,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width:300,
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 10,
    marginTop: 2,
    borderRadius: 30
  },
  todos : {
    width: '100%',
    padding: 5,
    backgroundColor: 'ligheblue'
  }
})



























// import { useState } from "react";
// import { FlatListComponent, StyleSheet, Text, TouchableHighlight, View } from "react-native";
// import { FlatList, TextInput } from "react-native-gesture-handler";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function Index() {
//   const [input, setInput] = useState('')
//   const [todo, settodo] = useState<string[]>([])
//   // console.log(input);

//   const addTodo = () => {
//     console.log('add todo ');
//     // console.log(input);
//     todo.push(input)
//     settodo([...todo])
//     // console.log(todo);
//     setInput('')
//   }

//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         backgroundColor: '#3B1E54',
//         alignItems: "center",
//       }}
//     >
//       <Text style={{
//         fontSize: 40,
//         fontWeight: '500',
//         color: '#9B7EBD'
//       }}>My Todo App</Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={setInput}
//         value={input}
//         placeholder="enter your todo"
//       />
//       <TouchableHighlight onPress={addTodo}>
//         <View style={styles.button}>
//           <Text>Touch Here</Text>
//         </View>
//       </TouchableHighlight>
//       {/* {todo.length > 0 ? <View>
//         {todo.map((item,index) => (
//           <FlatList
//           data={todo}
//           renderItem={({item}) => (
//             <Text>{item}</Text>
//           )}
//           keyExtractor={item => item}
//         />
//         ))}
//       </View> : <Text>Todo Not Found...</Text>} */}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   input: {
//     height: 46,
//     width: 300,
//     margin: 12,
//     borderColor: '#9B7EBD',
//     borderWidth: 1,
//     padding: 10,
//     color: '#D4BEE4',
//     borderRadius: 50,
//   },
//   title: {
//     fontSize: 32,
//     color: 'white',
//     textAlign: 'center'
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 10,
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#9B7EBD',
//     padding: 10,
//     borderRadius: 50
//   },
//   countContainer: {
//     alignItems: 'center',
//     padding: 10,
//   },
//   countText: {
//     color: '#FF00FF',
//   },
// })


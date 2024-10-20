import { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [input, setInput] = useState('')
  const [todo, settodo] = useState<string[]>([])
  // console.log(input);

  const addTodo = () => {
    console.log('add todo ');
    // console.log(input);
    todo.push(input)
    settodo([...todo])
    console.log(todo);
    setInput('')
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#111111',
        // justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{
        fontSize: 40,
        fontWeight: '500',
        color: 'crimson'
      }}>My Todo App</Text>
      <TextInput
        style={styles.input}
        onChangeText={setInput}
        value={input}
        placeholder="enter your todo"
      />
      <TouchableHighlight onPress={addTodo}>
        <View style={styles.button}>
          <Text>Touch Here</Text>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 46,
    width: 300,
    margin: 12,
    borderColor: 'crimson',
    borderWidth: 1,
    padding: 10,
    color: 'white'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },
})
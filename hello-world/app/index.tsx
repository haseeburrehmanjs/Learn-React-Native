import { View, Text } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent : 'center',
      alignItems: 'center',
      backgroundColor: '#111111',
    }}>
      <Text style={{
        color: 'crimson',
        fontSize: 50
      }}>Hello World</Text>
      <Text style={{
        color:'white',
        fontSize: 20
      }}>Here is My First Hello World</Text>
    </View>
  )
}

export default index
import { View, Text } from 'react-native'
import React from 'react'

const Contact = () => {
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
      }}>Contact</Text>
    </View>
  )
}

export default Contact
import { View, Text } from 'react-native'
import React from 'react'

const About = () => {
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
      }}>About</Text>
    </View>
  )
}

export default About
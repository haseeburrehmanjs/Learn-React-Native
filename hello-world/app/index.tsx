import { View, Text } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent : 'center',
      alignItems: 'center'
    }}>
      <Text style={{
        fontSize: 50
      }}>First Hello World</Text>
    </View>
  )
}

export default index
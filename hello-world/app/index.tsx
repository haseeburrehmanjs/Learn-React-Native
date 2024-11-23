import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#111111',
    }}>
      <Text style={{
        color: 'crimson',
        fontSize: 50
      }}>Hello World</Text>
      <Text style={{
        color: 'white',
        fontSize: 20
      }}>Here is My First Hello World</Text>

        <Link style={{
          color: 'white'
        }} href={'/'}>Home</Link>
        <Link style={{
          color: 'white'
        }} href={'about'}>About</Link>
        <Link style={{
          color: 'white'
        }} href={'contact'}>Contact</Link>
        <Link style={{
          color: 'white'
        }} href={'contact'}>Services</Link>
        <Link style={{
          color: 'white'
        }} href={'contact'}>About Us</Link>
    </View>
  )
}

export default index
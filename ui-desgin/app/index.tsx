import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View className='p-4'>
      <Text className='text-6xl font-bold'>Explore now</Text>
      <Text className='text-3xl font-bold mt-3'>Join SO today.</Text>
      <View className='gap-5'>
        <TouchableOpacity className='border border-gray-400 w-[100%] h-[50px] rounded-full mt-[50px] p-1 flex justify-center items-center'>
          <View className='flex-row gap-2'>
            <Image className='w-[20px] h-[20px]' source={require('../assets/images/google.png')} alt='google' />
            <Text>Sign up with Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className='border border-gray-400 w-[100%] h-[50px] rounded-full p-1 flex justify-center items-center'>
          <View className='flex-row gap-2'>
            <Image className='w-[20px] h-[20px]' source={require('../assets/images/apple.png')} alt='google' />
            <Text>Sign up with Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className='border bg-blue-600 border-gray-400 w-[100%] h-[50px] rounded-full p-1 flex justify-center items-center'>
          <View className='flex-row gap-2'>
            <Text className='text-white text-2xl'>Create account</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className='flex-col gap-5'>
        <Text className='mt-10 text-[18px]'>Already have an account?</Text>
        <TouchableOpacity className='border border-gray-400 w-[100%] h-[50px] rounded-full p-1 flex justify-center items-center'>
          <View className='flex-row gap-2'>
            <Text className='text-blue-500 text-2xl'>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text className='text-center mt-[120px]'>
          By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
        </Text>
      </View>
    </View>
  )
}

export default index

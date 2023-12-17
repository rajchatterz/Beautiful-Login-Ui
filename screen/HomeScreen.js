import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
const HomeScreen = () => {
  const route = useRoute()
  const {userEmail,userPassword} = route.params 
  return (
    <View>
      <Text>user Email: {userEmail }</Text>
      <Text>user Email: {userPassword }</Text>
    </View>
  )
}

export default HomeScreen
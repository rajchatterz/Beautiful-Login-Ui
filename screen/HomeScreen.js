import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
const HomeScreen = () => {
  const route = useRoute()
  const {userEmail,userPassword} = route.params 
  return (
    <View style={styles.container}>
      <Text style={styles.textView}> {userEmail }</Text>
      <Text style={styles.textView}> {userPassword }</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    marginTop: 100,
    backgroundColor: '#06551d',
    height: 100,
    justifyContent:'center'
  },
  textView: {
    color: 'white',
    fontWeight: '900',
    fontSize:20,
  }
})
export default HomeScreen
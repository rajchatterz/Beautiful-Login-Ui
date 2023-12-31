import {View, Text, Button, TextInput, StyleSheet, Image, SafeAreaView, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleNavigation = () => {
    navigation.navigate('HomeScreen',{userEmail:email,userPassword:password})
  }
  const clearHandler = () => {
    setEmail('')
    setPassword('')
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image resizeMode='contain' style={styles.imageView} source={require('../assets/leaff.png')} />
        <View style={styles.inputView}>
              <TextInput style={styles.textView} placeholder="Username,email address or mobile number"
                  value={email}
                  onChangeText={(text)=>setEmail(text)}
              />
              <TextInput style={styles.textView} placeholder="Password"
                  value={password}
                  secureTextEntry={true}
                  onChangeText={(text)=>setPassword(text)}
        />
        
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleNavigation} style={styles.buttonView}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={clearHandler} style={styles.buttonView}>
                <Text style={styles.buttonText}>Clear</Text>
            </TouchableOpacity>
          </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageView: {
    width: 120,
    height: 140,
  },
  textView: {
    borderWidth: 0.6,
    borderColor: '#234803',
    width: 300,
    height: 50,
    borderRadius: 10,
  },
    mainContainer: {
    alignItems: 'center',
        width: '100%',
        gap: 10,
      // marginBottom: 50,
        marginTop:100
        
        
    },
    inputView: {
        gap:20
    },
    titleView: {
        fontFamily: 'Cochin',
        fontSize: 20,
        marginVertical: 40,
        fontWeight:'900'
    },
    buttonContainer: {
        flexDirection: 'row',
        gap:50,
    },
    buttonView: {
        backgroundColor: '#396d0c',
        width: 120,
        borderRadius: 15,
        marginTop:30
    },
    buttonText: {
        color: 'white',
        fontSize:16,
        fontWeight: 'bold',
        padding: 10,
        textAlign:'center',
    },
});
export default Login;

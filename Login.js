import {View, Text, Button, TextInput, StyleSheet, Image, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [emial, setEmail] = useState('');
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image style={styles.imageView} source={require('./assets/leaff.png')} />
      <Text style={styles.titleView}>Welcome To LeafLover</Text>
        <View style={styles.inputView}>
            <TextInput style={styles.textView} placeholder="Username,email address or mobile number" />
            <TextInput style={styles.textView} placeholder="Password" />
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
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    },
    inputView: {
        gap:20
    },
    titleView: {
        fontFamily: 'Cochin',
        fontSize: 20,
        marginVertical: 40,
        fontWeight:'900'
    }
});
export default Login;

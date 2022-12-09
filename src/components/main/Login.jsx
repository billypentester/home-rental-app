import React from 'react'
import { View, Text,ImageBackground, Image, StyleSheet,Alert,TextInput, TouchableOpacity, ToastAndroid} from 'react-native'
import { NativeBaseProvider, Center, Box, Button, Input, ScrollView} from 'native-base'
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { initializeApp } from '@firebase/app'
import { firebaseConfig } from '../../Firebase/config'


function Login({navigation}) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showpass,setShowpass] = React.useState(true)

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const IsLoginIn = () => {

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User logged in");
        navigation.navigate('BottomNavigation', {screen: 'Home'})
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        Alert.alert("Login error","invalid Email or Password              (Please Recheck)",[{
          text:'Ok'},
          {text: 'cancel'}
        ] , {cancelable: true})
      }
    );
    

  }

  return (
    <NativeBaseProvider>
      
      <ImageBackground
        source={require("home-rental-app/assets/bg.png")} resizeMode="stretch"
        style={{flex: 1,justifyContent: "center"}}>
          <ScrollView>
          <Image
            source={require("home-rental-app/assets/logo.png")}
            style= {{width:200, height:300,right:-85}}
            ></Image>
            
      <Center flex={1}>
      <Text style={{ fontWeight: "700", fontSize: 35, color: "#fff",bottom: 10, right:10 }}>Login</Text>

      <View style={{ width: "70%", marginTop: 50,marginBottom:20 }}>
        <Text style={{color: "#fff"}}>Email</Text>
        <View style={styles.textInputContainer}>
          <AntDesign name="mail" size={24} color="#bfbfbf" />
          <TextInput style={styles.textInput} placeholder="e.g john@gmail.com" placeholderTextColor={"grey"} textContentType="emailAddress" maxLength={50} keyboardType={"email-address"}></TextInput>
        </View>
      </View>


      <View style={{ width: "70%", marginTop: 20 }}>
        <Text style={{color: "#fff"}}>Password</Text>
        <View style={styles.textInputContainer}>
          <AntDesign name="lock" size={24} color="#bfbfbf" />
          <TextInput style={styles.textInput} placeholder="Enter Password" placeholderTextColor={"grey"} textContentType="password" secureTextEntry={showpass} maxLength={15}></TextInput>
          <TouchableOpacity onPress={()=>setShowpass(!showpass)}>
            <Text style={{fontSize:12, color:"#ffff",right:10}}>Show</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={{
          marginTop: 30,
          width: "60%",
          height: 40,
        }}
        onPress={IsLoginIn}
      >
        <LinearGradient
          style={{ width: "100%", height: "100%", borderRadius: 20, alignItems: "center", justifyContent: "center" }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#63d1dc", "#BA94D1", "#59C1BD"]}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>LOGIN</Text>
        </LinearGradient>
      </TouchableOpacity>

      <Text style={{ marginTop: 20, color: "#777" }}>continue with</Text>

      <TouchableOpacity
        style={{
          marginTop: 30,
          width: "20%",
          height: 50,
          alignContent:"space-between",right: -30,bottom:13
        }}>
         <Image
            source={require("home-rental-app/assets/fb.png")}
            style={{ marginHorizontal: 5 ,height:70,width:100}}
            ></Image>
        </TouchableOpacity>

        <TouchableOpacity
        style={{
          marginTop: 30,
          width: "10%",
          height: 60,
          alignContent:"space-between",right:75,bottom:100
        }}>
         <Image
            source={require("home-rental-app/assets/google.png")}
            style={{ marginHorizontal: 5 ,height:70,width:100}}
            ></Image>
        </TouchableOpacity>

        <Text style={{ bottom:35,right:40, color: "#777777" }}>Do not have Account?</Text>

      <TouchableOpacity style={{
        marginTop: 30,
          width: "30%",
          height: 60,
          alignContent:"space-between",right:-95,bottom:85}}
        onPress={()=>
        {navigation.navigate('Register')}
      }      >
        <Text style={{color:"#ffff",}}>REGISTER</Text>
      </TouchableOpacity>
        
      
      </Center>
      </ScrollView>
      </ImageBackground>
      
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  textInput: { marginLeft: 10, height: 40, width: "90%",color:"#fff" },
  textInputContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ffff",
    
  },

});

export default Login
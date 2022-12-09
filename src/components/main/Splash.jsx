import React, { useEffect } from 'react'
import { View, ImageBackground, Dimensions, TextInput} from 'react-native'
import { NativeBaseProvider, Center, Box, Image, VStack, Text, Button} from 'native-base'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

function Splash({navigation}) {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Welcome')
        },3000)

    },[])

  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require("home-rental-app/assets/s.gif")} resizeMode="stretch"
        style={{flex: 1,justifyContent: "center"}}>
            <Image
            source={require("home-rental-app/assets/logo1.png")}
            style= {{width:350, height:500,right:-18}}
            ></Image>
      </ImageBackground>
    </NativeBaseProvider>
  )
}

export default Splash
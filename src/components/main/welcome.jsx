import React from 'react'
import { StyleSheet,View, ImageBackground, Dimensions, TextInput,TouchableOpacity} from 'react-native'
import { NativeBaseProvider, Center, Box, Image, VStack, Text, Button} from 'native-base'
import styles from './../../styles/index'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

function Welcome({navigation}) {

  return (

<NativeBaseProvider>
<ImageBackground source={require("home-rental-app/assets/wel.gif")} resizeMode="stretch" style={styles.background}>
    <View style={styles.wrapper}>
      <Center flex={1} justifyContent="center" alignItems="center">
        <Image source={require("home-rental-app/assets/logo1.png")} alt="logo" width={'100%'} height={'70%'} />
      </Center>
      <Center flex={0.7}>
        <Text fontSize="4xl" color={'white'} marginY={'2'} fontWeight={"800"} fontFamily={"heading"}>WELCOME</Text>
      </Center>
      <Center flex={1} paddingX={6}>
      <TouchableOpacity style={[styless.SaveBtn,{backgroundColor:"#e8bc44",shadowColor:"yellow",marginTop:40}]}
        onPress={()=>
        {navigation.navigate('Login')}
      }      >
        <Text style={styless.SaveText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styless.SaveBtn,{backgroundColor:"white",shadowColor:"white",marginTop:20}]}
        onPress={()=>
        {navigation.navigate('Register')}
      }      >
      <Text style={styless.SaveText}>REGISTER</Text>
      </TouchableOpacity>
      </Center>
    </View>
</ImageBackground>
</NativeBaseProvider>
  )
}
const styless = StyleSheet.create({
  SaveBtn: {
    width: "60%",
    borderRadius: 35,
    height: 55,
    justifyContent: "center",
    shadowOpacity:0.30,
    elevation:10,
    shadowRadius:15,
    shadowOffset : { width: 0, height: 6},
    borderWidth:0,
    margin: 10
    
  },
  SaveText:{
    fontWeight:'bold',
    color:'black',
    fontSize:20,
    alignSelf:'center',
    
  },
});

export default Welcome
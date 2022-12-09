import React from 'react'
import { StyleSheet,View, ImageBackground, Dimensions, TextInput,TouchableOpacity} from 'react-native'
import { NativeBaseProvider, Center, Box, Image, VStack, Text, Button} from 'native-base'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

function Welcome({navigation}) {

  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require("home-rental-app/assets/wel.png")} resizeMode="stretch"
        style={{flex: 1,justifyContent: "center"}}>
          <Image
            source={require("home-rental-app/assets/logo.png")}
            style= {{width:250, height:400,right:-65,top:230}}
            ></Image>
            
        <View style={{ flex:1, width:screenWidth, alignContent: "center" }}>
        <TouchableOpacity style={[styles.SaveBtn,{backgroundColor:"#e8bc44",shadowColor:"yellow",top:230,right:-68}]}
        onPress={()=>
        {navigation.navigate('Login')}
      }      >
        <Text style={styles.SaveText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.SaveBtn,{backgroundColor:"grey",shadowColor:"grey",top:230,right:-68}]}
        onPress={()=>
        {navigation.navigate('Register')}
      }      >
      <Text style={styles.SaveText}>REGISTER</Text>
      </TouchableOpacity>
          </View>
      </ImageBackground>
    </NativeBaseProvider>
  )
}
const styles = StyleSheet.create({
  SaveBtn: {
    width: "60%",
    borderRadius: 35,
    height: 55,
    //alignItems: "center",
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
    color:'white',
    fontSize:20,
    alignSelf:'center',
    
  },
});

export default Welcome
import React from 'react'
import { StyleSheet,View, ImageBackground, Dimensions, TextInput,TouchableOpacity} from 'react-native'
import { NativeBaseProvider, Center, Box, Image, VStack, Text, Button} from 'native-base'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

function Welcome({navigation}) {

  return (
    <NativeBaseProvider>

      <View flex={1} width={"100%"} height={"100%"}>

      <ImageBackground
        source={require("home-rental-app/assets/wel.png")} resizeMode="stretch"
        style={{flex: 1,justifyContent: "center"}}>
        
        
        <View style={{ flex:0.7, width:"100%", alignItems: "center" }}>
          <Image
            source={require("home-rental-app/assets/logo.png")}
            style= {{width:250, height:400,top:230}}
            ></Image>
        </View>
            
      <View style={{ flex:0.3, width:"100%", alignItems: "center"}}>
      <TouchableOpacity style={[styles.SaveBtn,{backgroundColor:"#e8bc44",shadowColor:"yellow",marginTop:40}]}
        onPress={()=>
        {navigation.navigate('Login')}
      }      >
        <Text style={styles.SaveText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.SaveBtn,{backgroundColor:"grey",shadowColor:"grey",marginTop:20}]}
        onPress={()=>
        {navigation.navigate('Register')}
      }      >
      <Text style={styles.SaveText}>REGISTER</Text>
      </TouchableOpacity>
          </View>
      </ImageBackground>

      </View>
    </NativeBaseProvider>
  )
}
const styles = StyleSheet.create({
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
    color:'white',
    fontSize:20,
    alignSelf:'center',
    
  },
});

export default Welcome
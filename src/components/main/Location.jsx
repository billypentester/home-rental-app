import React, { useState } from 'react'
import { View, ImageBackground,TouchableOpacity } from 'react-native'
import { NativeBaseProvider, Box, Input, Center, Image, Button, Text, Icon, Link,Alert,Pressable,Modal,FormControl} from 'native-base'
import styles from './../../styles/index'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";


function Location({navigation}) {

    const [location,setLocation] = useState("");

  return (
    <NativeBaseProvider>
      <View width={"100%"} height={"100%"}>
      <ImageBackground source={require("home-rental-app/assets/bg.png")} resizeMode="stretch" style={styles.background}>
      <Center flex={0.2}>
        
        <Text fontSize="xl" color={'white'} marginTop={"8"} fontWeight={"400"} fontFamily={"body"}>Enter Your Current City</Text>
      </Center>
      <Center flex={0.6}  >
            <GooglePlacesAutocomplete
              placeholder="Enter City"
              fetchDetails={true}
              onPress={(data, details = null) => {
                const latC = details.geometry.location.lat.toString();
                const lngC = details.geometry.location.lng.toString();
                setLocation(data.description.toString());
                
              }}
              styles={{
                textInputContainer: {
                  width: "90%",
                  marginTop:9
                  
                },
                textInput: {
                  height: 50,
                  borderColor: "#1E29",
                  borderWidth: 2,
                  color: "black",
                  borderRadius: 10,
                  marginBottom: 10,
                },
                predefinedPlacesDescription: {
                  color: "#1faadb",
                },
              }}
              query={{
                key: "AIzaSyDbfbWiIvjK79U_aI8urPCbcxcMWEVirW4",
                language: "en",
                components: "country:pk",
                type: "(cities)",
              }}
            />
          </Center>
          <Button size={'lg'} marginY={5}  backgroundColor={'#344D67'}_text={{color: "white",fontWeight:"600" }} width={'70%'}>Done</Button>
      </ImageBackground>

      </View>
    </NativeBaseProvider>
      
  )
}


export default Location
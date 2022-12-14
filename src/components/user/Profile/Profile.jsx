import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { NativeBaseProvider, Center, Box,Avatar,Icon,AntDesign,Button,Switch} from 'native-base'
import { MaterialIcons } from "@expo/vector-icons";
import styles from './../../../styles/index'


function Profile() {

  const [name,setName] = useState("Hassan Abdullah")
  const [email,setEmail] = useState("HassanAbdullah@gmail.com")
  const [status,setStatus] = useState(true)

  return (
    <NativeBaseProvider>
    <View style={styles.wrapper}>
      <Center flex={1.5} flexDirection={"row"} >
      <TouchableOpacity>
      <Icon as={<MaterialIcons name="share" />} size={6} marginX="7" color="#1C315E" />
      </TouchableOpacity>
      <Avatar bg={"grey"} marginX={18} source={require("home-rental-app/assets/person.png")} size="xl">
        <Avatar.Badge bg={status? "red.500" :"green.500"} size={5}/>
      </Avatar>
      <Button onPress={() => console.log("hello world")} backgroundColor={"#1E293B"} size={"sm"}>Edit Profile</Button>
      </Center>
      <Center flex={0.5} >
      <Text style={{fontWeight:"700",fontSize:17,color:"#000"}}> {name} </Text>
      <Text style={{marginTop:6, fontWeight:"400",fontSize:14,color:"#000",fontStyle:"italic"}}> {email} </Text>
      </Center>

      <Center flex={0.3} flexDirection={"row"} backgroundColor={"#1E293B"} marginTop={3} marginX="10" borderRadius={15}>
      <Text style={{fontWeight:"500",fontSize:12,color:"#fff",fontStyle:"normal",marginLeft:10}}> STATUS OFFLINE </Text>
      <Switch defaultIsChecked colorScheme="secondary" onValueChange={()=>setStatus(!status)} />
      </Center>

      <Center flex={0.25} flexDirection={"row"} backgroundColor={"gray.200"} marginTop={8} marginX="4" borderRadius={3} >
      <Text style={{fontWeight:"500",fontSize:13,color:"#1E293B",fontStyle:"normal",marginEnd:270}}> Content </Text>
      </Center>

      <Center flex={0.3} flexDirection={"row"} backgroundColor={"white"} marginTop={2}>
      <Icon as={<MaterialIcons name="home" />} size={5} color="#1E293B" />
      <Text style={{fontWeight:"500",fontSize:14,color:"#000",fontStyle:"normal"}}>   My Places</Text>
      <TouchableOpacity>
      <Icon as={<MaterialIcons name="arrow-forward-ios" />} size={4} marginLeft={230} color="#1E293B" />
      </TouchableOpacity>
      </Center>

      <Center flex={0.3} flexDirection={"row"} backgroundColor={"white"} marginTop={1}>
      <Icon as={<MaterialIcons name="favorite" />} size={5} color="#1E293B" />
      <Text style={{fontWeight:"500",fontSize:14,color:"#000",fontStyle:"normal"}}>   Favourites</Text>
      <TouchableOpacity>
      <Icon as={<MaterialIcons name="arrow-forward-ios" />} size={4} marginLeft={230} color="#1E293B" />
      </TouchableOpacity>
      </Center>

      <Center flex={0.3} flexDirection={"row"} backgroundColor={"white"} marginTop={1}>
      <Icon as={<MaterialIcons name="bookmarks" />} size={5} color="#1E293B" />
      <Text style={{fontWeight:"500",fontSize:14,color:"#000",fontStyle:"normal"}}>   Bookings</Text>
      <TouchableOpacity>
      <Icon as={<MaterialIcons name="arrow-forward-ios" />} size={4} marginLeft={237} color="#1E293B" />
      </TouchableOpacity>
      </Center>

      <Center flex={0.25} flexDirection={"row"} backgroundColor={"gray.200"} marginTop={8} marginX="4" borderRadius={3} >
      <Text style={{fontWeight:"500",fontSize:13,color:"#1E293B",fontStyle:"normal",marginEnd:270}}> Preferences </Text>
      </Center>

      <Center flex={0.3} flexDirection={"row"} backgroundColor={"white"} marginTop={2}>
      <Icon as={<MaterialIcons name="location-on"/>} size={5} color="#1E293B" />
      <Text style={{fontWeight:"500",fontSize:14,color:"#000",fontStyle:"normal"}}>   Location</Text>
      <TouchableOpacity>
      <Icon as={<MaterialIcons name="arrow-forward-ios" />} size={4} marginLeft={239} color="#1E293B" />
      </TouchableOpacity>
      </Center>


      <Center flex={0.3} flexDirection={"row"} backgroundColor={"white"} marginTop={1}>
      <Icon as={<MaterialIcons name="payment" />} size={5} color="#1E293B" />
      <Text style={{fontWeight:"500",fontSize:14,color:"#000",fontStyle:"normal"}}>   Payment</Text>
      <TouchableOpacity>
      <Icon as={<MaterialIcons name="arrow-forward-ios" />} size={4} marginLeft={237} color="#1E293B" />
      </TouchableOpacity>
      </Center>

      <Center flex={1.5} >
      <Button size={'lg'} marginY={5}  backgroundColor={'#1E293B'}_text={{color: "white",fontWeight:"600" }} width={'80%'}>Log Out</Button>
      </Center>

      <Center flex={1}></Center>
      </View>
    </NativeBaseProvider>
  )
}

export default Profile
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import { NativeBaseProvider, Center, Box,Avatar,Icon,AntDesign,Button,Switch,Modal,VStack,FormControl,Input} from 'native-base'
import { MaterialIcons } from "@expo/vector-icons";
import styles from './../../../styles/index'
import * as Sharing from 'expo-sharing';



function Profile({navigation}) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [name,setName] = useState("Hassan Abdullah")
  const [email,setEmail] = useState("HassanAbdullah@gmail.com")
  const [status,setStatus] = useState(true)
  const [Notifications,setNotifications] = useState(true)

  return (
    <NativeBaseProvider>
    <View style={styles.wrapper}>
      <Center flex={0.9} backgroundColor={"#1E293B"}>
      <TouchableOpacity onPress={()=>Sharing.shareAsync("file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540hassan_abdullah%252Fhome-rental-app/ImagePicker/074d3dc9-c282-4376-836e-103ac74abe27.jpeg",{})}>
      <Icon as={<MaterialIcons name="share" />} size={6} position={"absolute"} right={130} color="#fff" />
      </TouchableOpacity>
      <Button onPress={() => console.log("hello world")} backgroundColor={"#BAD7E5"} size={"sm"} position={"absolute"} right={25} >
      <Text style={{ fontWeight:"500",fontSize:12,color:"#000"}}> Edit Profile </Text>
      </Button>
      </Center>
      <Center flex={0.5} flexDirection={"row"} >
      <Avatar bg={"white"} marginX={18} source={require("home-rental-app/assets/person.png")} size="xl" position={"absolute"} bottom={1} padding={1}  >
        <Avatar.Badge bg={status? "green.500" : "red.500"} size={5}/>
      </Avatar>
      </Center>
      <Center flex={0.5} >
      <Text style={{fontWeight:"700",fontSize:17,color:"#000"}}> {name} </Text>
      <Text style={{marginTop:6, fontWeight:"400",fontSize:14,color:"#000",fontStyle:"italic"}}> {email} </Text>
      </Center>

      <Center flex={0.3} flexDirection={"row"} backgroundColor={"#1E293B"} marginTop={3} marginX="10" borderRadius={15}>
      <Text style={{fontWeight:"500",fontSize:12,color:"#fff",fontStyle:"normal",marginLeft:10}}> STATUS {status? "ONLINE" : "OFFLINE" } </Text>
      <Switch defaultIsChecked colorScheme="green" onValueChange={()=>setStatus(!status)} />
      </Center>

      <Center flex={0.3} flexDirection={"row"} backgroundColor={"#1E293B"} marginTop={3} marginX="10" borderRadius={15}>
      <Text style={{fontWeight:"500",fontSize:12,color:"#fff",fontStyle:"normal",marginLeft:0}}> NOTIFICATIONS {Notifications? "ON" : "OFF" } </Text>
      <Pressable onPress={() => setNotifications(!Notifications)} >
            <Icon as={<MaterialIcons name={Notifications ? "notifications-on" : "notifications-off"} />} size={5} mr="2" color="muted.300" marginLeft={"3"} />
            </Pressable>
      </Center>

      <Center flex={0.25} flexDirection={"row"} backgroundColor={"gray.200"} marginTop={8} marginX="4" borderRadius={3} >
      <Text style={{fontWeight:"500",fontSize:13,color:"#1E293B",fontStyle:"normal",marginEnd:270}}> Content </Text>
      </Center>

      <Center flex={0.3} flexDirection={"row"} backgroundColor={"white"} marginTop={2}>
      <Icon as={<MaterialIcons name="home" />} size={5} color="#1E293B" />
      <Text style={{fontWeight:"500",fontSize:14,color:"#000",fontStyle:"normal"}}>   My Places</Text>
      <TouchableOpacity onPress={()=>{navigation.navigate('MyPlaces')}}>
      <Icon as={<MaterialIcons name="arrow-forward-ios" />} size={4} marginLeft={230} color="#1E293B" />
      </TouchableOpacity>
      </Center>

      <Center flex={0.3} flexDirection={"row"} backgroundColor={"white"} marginTop={1}>
      <Icon as={<MaterialIcons name="favorite" />} size={5} color="#1E293B" />
      <Text style={{fontWeight:"500",fontSize:14,color:"#000",fontStyle:"normal"}}>   Favourites</Text>
      <TouchableOpacity onPress={()=>{navigation.navigate('Favourites')}}>
      <Icon as={<MaterialIcons name="arrow-forward-ios" />} size={4} marginLeft={230} color="#1E293B"  />
      </TouchableOpacity>
      </Center>

      <Center flex={0.3} flexDirection={"row"} backgroundColor={"white"} marginTop={1}>
      <Icon as={<MaterialIcons name="bookmarks" />} size={5} color="#1E293B" />
      <Text style={{fontWeight:"500",fontSize:14,color:"#000",fontStyle:"normal"}}>   Bookings</Text>
      <TouchableOpacity onPress={()=>{navigation.navigate('Bookings')}}>
      <Icon as={<MaterialIcons name="arrow-forward-ios" />} size={4} marginLeft={237} color="#1E293B" />
      </TouchableOpacity>
      </Center>

      <Center flex={0.25} flexDirection={"row"} backgroundColor={"gray.200"} marginTop={8} marginX="4" borderRadius={3} >
      <Text style={{fontWeight:"500",fontSize:13,color:"#1E293B",fontStyle:"normal",marginEnd:270}}> Preferences </Text>
      </Center>

      <Center flex={0.3} flexDirection={"row"} backgroundColor={"white"} marginTop={2}>
      <Icon as={<MaterialIcons name="location-on"/>} size={5} color="#1E293B" />
      <Text style={{fontWeight:"500",fontSize:14,color:"#000",fontStyle:"normal"}}>   Location</Text>
      <TouchableOpacity onPress={()=>{navigation.navigate('Location')}}>
      <Icon as={<MaterialIcons name="arrow-forward-ios" />} size={4} marginLeft={239} color="#1E293B"  />
      </TouchableOpacity>
      </Center>


      <Center flex={0.3} flexDirection={"row"} backgroundColor={"white"} marginTop={1}>
      <Icon as={<MaterialIcons name="payment" />} size={5} color="#1E293B" />
      <Text style={{fontWeight:"500",fontSize:14,color:"#000",fontStyle:"normal"}}>   Payment</Text>
      <TouchableOpacity>
      <Icon as={<MaterialIcons name="arrow-forward-ios" />} size={4} marginLeft={237} color="#1E293B" />
      </TouchableOpacity>
      </Center>

      <Center flex={0.5} flexDirection={"row"} marginTop={1}>
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} avoidKeyboard justifyContent="center" bottom="4" size="lg">
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Are You Sure?</Modal.Header>
          <Modal.Body>
            Enter your password to verify youself
            <FormControl mt="3">
              <FormControl.Label>Password</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button flex="1" onPress={() => {
            setModalVisible(false);
          }}>
              Proceed
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <VStack space={8} alignItems="center">
        <Button w="250" backgroundColor={"lightgrey"} onPress={() => {
        setModalVisible(!modalVisible);
      }}>
          <Text style={{color:"red"}}>Delete Account</Text>
        </Button>
        </VStack>
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
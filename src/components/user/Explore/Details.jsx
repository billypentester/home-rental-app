import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Pressable ,FlatList,Linking} from 'react-native'
import { NativeBaseProvider, Center, Box,Avatar,Icon,AntDesign,Button,Switch,Modal,VStack,FormControl,Input, ScrollView,Heading} from 'native-base'
import { MaterialIcons,EvilIcons, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import styles from './../../../styles/index'
import * as Sharing from 'expo-sharing';
import { ImageSlider } from "react-native-image-slider-banner";



function Details({route}) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [name,setName] = useState("Hassan Abdullah")
  const [email,setEmail] = useState("HassanAbdullah@gmail.com")
  const [status,setStatus] = useState(true)
  const [Notifications,setNotifications] = useState(true)
  const phone = route.params.phone

  

  return (
    <NativeBaseProvider>
    <View style={styles.wrapper}>
        <ScrollView>
      <Center flex={0.15} backgroundColor={"#1E293B"} width={"100%"} height={100}>
        </Center>
        <Center backgroundColor={"silver"}  marginTop={-20} borderRadius={60} padding={1} borderColor={"#1E293B"} marginLeft={10} width={"78%"} height={310}>
            <ImageSlider 
                    data={route.params.images}

                caroselImageStyle={{borderRadius:60, width:300}}
                caroselImageContainerStyle={{width:390}}
                 timer={6000}
                autoPlay={true}
                closeIconColor="#fff"
            />
            </Center>
            <Center flex={0.3} margin={2} backgroundColor={"gray.200"} rounded={"15"} shadow={"2"}>
            <Box maxW="300" w="100%" margin={6}>
              
              
                <Center flexDirection={"row"}>
                <Text style={{ marginTop: 5, fontSize:16, position:"absolute",right:180, fontWeight: "800" }}>
                  {route.params.title}
                </Text>
                <Text style={{ fontSize: 12, marginTop: 3 ,position:"absolute",left:225, fontWeight:"800"}}>
                  Rs. {route.params.price}/month
                </Text>
  
                </Center>
                <View style={{flexDirection:"row"}}>
                <Icon
                    position={"absolute"}
                    top={5}
                    left={-25}
                    as={EvilIcons}
                    size="7"
                    name="location"
                    _dark={{
                      color: "black",
                    }}
                    color="black"
                    
                  />
                <Text style={{ fontSize: 12, fontWeight: "600", marginTop: 25}}>
                {route.params.location}
                </Text>

                <Text style={{ fontSize: 12, fontWeight: "600", marginTop: 25, position:"absolute", right:-25, color:"green"}}>
                  Available from: {route.params.Available}
                </Text>
                </View>

              
            </Box>

            </Center>

            <Center flex={0.3} margin={2} backgroundColor={"gray.200"} rounded={"15"} shadow={"2"}>
            <Box maxW="300" w="100%" margin={6}>
              <Heading size={"md"}>Description</Heading>
              <Text>{route.params.description}</Text>

              
            </Box>

            </Center>

            <Center flex={0.3} margin={2} backgroundColor={"gray.200"} rounded={"15"} shadow={"2"}>
            <Box maxW="300" w="100%" margin={6}>
              <Heading size={"md"}>Facilities</Heading>

              <FlatList
              horizontal
        showsVerticalScrollIndicator={false}
        
        keyExtractor={(myArray,item)=>item.toString()}
        data={route.params.facilities}
          renderItem={({ item }) => (
            <Center backgroundColor={"#1E293B"} borderRadius={20} margin={1}>
            <Icon
                    as={Ionicons}
                    backgroundColor={"#1E293B"}
                    borderRadius={10}
                    margin={1}
                    size="10"
                    name={item.facilty}
                    _dark={{
                      color: "white",
                    }}
                    color="white"
                    
                  />
                  </Center>            
          )}
        />
            </Box>

            </Center>

            <Center flex={0.3} margin={2} backgroundColor={"gray.200"} rounded={"15"} shadow={"2"}>
            <Box maxW="300" w="100%" margin={6}>
              <Heading size={"md"}>Rooms</Heading>
              <Center flexDirection={"row"}>
              <Center flexDirection={"row"}>

              <Icon
                    as={Ionicons}
                    backgroundColor={"#1E293B"}
                    borderRadius={5}
                    margin={3}
                    size="10"
                    name="bed"
                    _dark={{
                      color: "white",
                    }}
                    color="white"
                    
                  />

                <Text style={{ marginTop: 5, fontSize:15, fontWeight: "500" }}>
                   X {route.params.bedrooms}
                </Text>
  
                </Center>

                <Center flexDirection={"row"}>

              <Icon
                    as={FontAwesome5}
                    backgroundColor={"#1E293B"}
                    marginLeft={8}
                    borderRadius={5}
                    margin={1}
                    size="10"
                    name="bath"
                    _dark={{
                      color: "white",
                    }}
                    color="white"
                    
                  />

                <Text style={{ marginTop: 5, fontSize:15, fontWeight: "500"  }}>
                  {""} X {route.params.bathroom}
                </Text>
  
                </Center>
                </Center>

            </Box>

            </Center>

            <Center flex={0.3} margin={2} backgroundColor={"gray.200"} rounded={"15"} shadow={"2"}>
            <Box maxW="300" w="100%" margin={6}>
              <Heading size={"md"}>Address</Heading>
              <Text>{route.params.Address}</Text>
              
            </Box>

            </Center>

            <Center flex={0.3} margin={2} backgroundColor={"gray.200"} rounded={"15"} shadow={"2"}>
            <Box maxW="300" w="100%" margin={6}>
              <Heading size={"md"}>Hosted by</Heading>
              
              <Center flexDirection={"row"}>
              <Avatar bg={"white"} marginX={18} source={require("home-rental-app/assets/person.png")} size="20" marginTop={5} marginLeft={-120}>
              </Avatar>

              <Text style={{ marginTop: 25, fontSize:15, fontWeight: "300"  }}>
              {route.params.hostName}
                </Text>

                <TouchableOpacity onPress={()=>Linking.openURL('tel:${'+phone+'}')}>
                <Icon as={<Ionicons name="call" />} size={6} position={"absolute"} left={35}  color="#000" />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>Linking.openURL('tel:${+1234567890}')}>
                <Icon as={<MaterialIcons name="message" />} size={6} position={"absolute"} left={85}  color="#000" />
                </TouchableOpacity>
              </Center>

            </Box>

            </Center>

            <Center>
            <Button
              size={"lg"}
              marginY={5}
              backgroundColor={"#1E293B"}
              _text={{ color: "white", fontWeight: "600" }}
              width={"80%"}
              
            >
              Rent Out
            </Button>
            </Center>
            
        </ScrollView>
      </View>
    </NativeBaseProvider>
  )
}

export default Details
import React, { useEffect, useState } from "react";
import { View, Text, LogBox } from "react-native";
import {
  Image,
  NativeBaseProvider,
  Center,
  Box,
  Icon,
  Button,
  VStack,
  Input,
  HStack,
  Heading,
  IconButton,
  Toast,
  ScrollView,
  Select,CheckIcon,
  TextArea
} from "native-base";
import { Feather, Entypo, Fontisto} from "@expo/vector-icons";
import styles from "../../../styles/index";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {Calendar} from 'react-native-calendars';
import * as ImagePicker from 'expo-image-picker'

function AddProperty() {
  const [Ptype, setPtype] = React.useState("");
  const [Rent, setRent] = useState(0);
  const [Area, setArea] = useState(0);
  const [Date,setDate] = useState("YYYY-MM-DD")
  
  const [title, settitle] = useState("");
  const [Description, setDes] = useState("");
  const [Phone, setPhone] = useState("");
  const [City, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [bed, setBed] = useState(0);
  const [bath, setBath] = useState(0);

  const [image1, setImage1] = useState("https://image.shutterstock.com/image-vector/house-icon-isolated-on-white-260nw-1010419771.jpg");
  const [image2, setImage2] = useState("https://image.shutterstock.com/image-vector/house-icon-isolated-on-white-260nw-1010419771.jpg");
  const [image3, setImage3] = useState("https://image.shutterstock.com/image-vector/house-icon-isolated-on-white-260nw-1010419771.jpg");
  const [count,setCount] = useState(0)

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.canceled) {
      if(count==0){
      setImage1(result.assets[0].uri);
      setCount(count+1)
      }else if(count==1){
        setImage2(result.assets[0].uri);
        setCount(count+1)
      }else if(count==2){
        setImage3(result.assets[0].uri);
        setCount(0)
      }
      console.log(Ptype,Rent,Area,title,Description,address,Phone)
        
    }
  };

  

  const facilities = [];
  const [list, setList] = React.useState(facilities);
  const [inputValue, setInputValue] = React.useState("");

  const addItem = (title) => {
    if (title === "") {
      Toast.show({
        title: "Please Enter Text",
        status: "warning",
      });
      return;
    }

    setList((prevList) => {
      return [
        ...prevList,
        {
          title: title,
          isCompleted: false,
        },
      ];
    });
  };
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    
  });
  const handleDelete = (index) => {
    setList((prevList) => {
      const temp = prevList.filter((_, itemI) => itemI !== index);
      return temp;
    });
  };

  return (
    <NativeBaseProvider>
      <View style={[styles.wrapper]} >
        <ScrollView keyboardShouldPersistTaps="handled">
          <Center flex={0.2} backgroundColor={"#1E293B"} >
            <GooglePlacesAutocomplete
              placeholder="Enter City"
              fetchDetails={true}
              onPress={(data, details = null) => {
                const latC = details.geometry.location.lat.toString();
                const lngC = details.geometry.location.lng.toString();
                setCity(data.description.toString());
                
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

          <Center flex={0.3} margin={5} backgroundColor={"#1E293B"} rounded={"20"} shadow={"9"}>
            <Box alignItems="center" margin={8}>
              <VStack space={2}>
                <HStack alignItems="baseline">
                  <Heading color={"white"} fontSize="lg">Property Type</Heading>
                </HStack>

                <Select shadow={"9"} selectedValue={Ptype} minWidth="250" bg={"white"} color={"black"} accessibilityLabel="Choose Type" placeholder="Choose Type" _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />
                }} mt={1} onValueChange={itemValue => setPtype(itemValue)}>
                    <Select.Item label="Apartment" value="Apartment" />
                    <Select.Item label="House" value="House" />
                    <Select.Item label="Villa" value="Villa" />
                    <Select.Item label="Flat" value="Flat" />
                    <Select.Item label="Hostel" value="Hostel" />
                  </Select>
                
              </VStack>
            </Box>
            
            </Center>
            
            <Center flex={0.3} margin={5} backgroundColor={"#1E293B"} rounded={"20"} shadow={"9"}>
            <Box alignItems="center" margin={8}>
              <VStack space={2}>
                <HStack alignItems="baseline">
                  <Heading color={"white"} fontSize="lg">Rent Per Month In Rs</Heading>
                </HStack>

                <Input variant="outline" placeholder="Rs" minWidth={280} value={Rent} onChangeText={setRent} backgroundColor={"white"} shadow={"9"} keyboardType={"decimal-pad"} maxLength={7}/>
                
              </VStack>
            </Box>
            </Center>

            <Center flex={0.3} margin={5} backgroundColor={"#1E293B"} rounded={"20"} shadow={"9"}>
            <Box alignItems="center" margin={8}>
              <VStack space={2}>
                <HStack alignItems="baseline">
                  <Heading color={"white"} fontSize="lg">Built-up Radius in Sqft</Heading>
                </HStack>

                <Input variant="outline" placeholder="Sqft" minWidth={280} backgroundColor={"white"} value={Area} onChangeText={setArea} shadow={"9"} keyboardType={"decimal-pad"} maxLength={7}/>
                
              </VStack>
            </Box>
            </Center>

            <Center flex={0.3} margin={5} backgroundColor={"#1E293B"} rounded={"20"} shadow={"9"}>
            <Box alignItems="center" margin={8}>
              <VStack space={2}>
                <HStack alignItems="baseline">
                  <Heading color={"white"} fontSize="lg">Add Title</Heading>
                </HStack>

                <Input variant="outline" placeholder="e.g Luxury Apartment" minWidth={300} value={title} onChangeText={settitle} backgroundColor={"white"} shadow={"9"} keyboardType={"twitter"}/>
                
              </VStack>
            </Box>
            </Center>

            <Center flex={0.3} margin={5} backgroundColor={"#1E293B"} rounded={"20"} shadow={"9"}>
            <Box alignItems="center" margin={8}>
              <VStack space={2}>
                <HStack alignItems="baseline">
                  <Heading color={"white"} fontSize="lg">Description</Heading>
                </HStack>

                <TextArea h={40}  placeholder="Description about Property" value={Description} onChangeText={setDes} backgroundColor={"white"} w="75%" maxW="300"  />
                
              </VStack>
            </Box>
            </Center>

            <Center flex={1} margin={5} backgroundColor={"#1E293B"} rounded={"20"} height={"200"} shadow={"9"}>
              
            <Box maxW="300" w="300">
            
              <Heading color={"white"} mb="2" size="md">
                Facilities
              </Heading>
              <VStack space={4}>
                <HStack space={2}>
                  <Select selectedValue={inputValue}  minWidth="200" bg={"white"} color={"black"} accessibilityLabel="Choose Facility" placeholder="Choose Facility" _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />
                }} mt={1} onValueChange={itemValue => setInputValue(itemValue)}>
                    <Select.Item label="Wifi" value="Wifi" />
                    <Select.Item label="Security Cameras" value="Security Cameras" />
                    <Select.Item label="Water" value="Water" />
                    <Select.Item label="Electricity" value="Electricity" />
                    <Select.Item label="Gas" value="Gas" />
                  </Select>
                  <IconButton
                    borderRadius="sm"
                    variant="solid"
                    icon={
                      <Icon
                        as={Feather}
                        name="plus"
                        size="sm"
                        color="warmGray.50"
                      />
                    }
                    onPress={() => {
                      addItem(inputValue);
                      setInputValue("");
                    }}
                  />
                </HStack>
                <HStack space={3}>
                
                  {list.map((item, itemI) => (
                    <HStack
                      space={3}
                      alignItems={"center"}
                      key={item.title + itemI.toString()}
                    >
                      <Center
                        flexDirection={"row"}
                        backgroundColor={"white"}
                        rounded={"md"}
                        shadow={6}
                      >
                        <Text style={{ color: "black", right: -5 }}>
                          {item.title}
                        </Text>
                        <IconButton
                          size="sm"
                          colorScheme="trueGray"
                          icon={
                            <Icon
                              as={Entypo}
                              name="cross"
                              size="lg"
                              color="trueGray.400"
                            />
                          }
                          onPress={() => handleDelete(itemI)}
                        />
                      </Center>
                    </HStack>
                  ))}
        
                </HStack>
                
              </VStack>
              
            </Box>
            
            </Center>

            <Center flex={0.3} margin={5} backgroundColor={"#1E293B"} rounded={"20"} shadow={"9"}> 
            <Box maxW="300" w="100%" margin={6}>
              <Heading color={"white"} mb="2" size="md">
                Rooms
              </Heading>
              <Box flexDirection={"row"}>
                <Text style={{ fontSize: 15, top: 8,color:"white", marginRight: 100 }}>
                  Bedrooms
                </Text>

                <IconButton
                  isDisabled={bed == 0 ? true : false}
                  onPress={() => setBed(bed - 1)}
                  icon={<Icon as={Entypo} name="squared-minus" />}
                  borderRadius="full"
                  _icon={{
                    color: "white",
                    size: "md",
                  }}
                  _hover={{
                    bg: "coolGray.800:alpha.20",
                  }}
                />
                <Text style={{ fontSize: 15,color:"white", top: 8 }}>{bed}</Text>
                <IconButton
                  icon={<Icon as={Entypo} name="squared-plus" />}
                  onPress={() => setBed(bed + 1)}
                  borderRadius="full"
                  _icon={{
                    color: "white",
                    size: "md",
                  }}
                  _hover={{
                    bg: "coolGray.800:alpha.20",
                  }}
                />
              </Box>

              <Box flexDirection={"row"}>
                <Text style={{ fontSize: 15, color:"white",top: 8, marginRight: 95 }}>
                  Bathrooms
                </Text>

                <IconButton
                  isDisabled={bath == 0 ? true : false}
                  onPress={() => setBath(bath - 1)}
                  icon={<Icon as={Entypo} name="squared-minus" />}
                  borderRadius="full"
                  _icon={{
                    color: "white",
                    size: "md",
                  }}
                  _hover={{
                    bg: "coolGray.800:alpha.20",
                  }}
                />
                <Text style={{ fontSize: 15,color:"white", top: 8 }}>{bath}</Text>
                <IconButton
                  icon={<Icon as={Entypo} name="squared-plus" />}
                  onPress={() => setBath(bath + 1)}
                  borderRadius="full"
                  _icon={{
                    color: "white",
                    size: "md",
                  }}
                  _hover={{
                    bg: "coolGray.800:alpha.20",
                  }}
                />
              </Box>
            </Box>

            </Center>

            <Center flex={0.3} margin={5} backgroundColor={"#1E293B"} rounded={"20"} shadow={"9"}>
            <Box alignItems="center" margin={8}>
              <VStack space={2}>
                <HStack alignItems="baseline">
                  <Heading color={"white"} fontSize="lg">Address</Heading>
                </HStack>

                <TextArea h={100}  placeholder="Property Address" value={address} onChangeText={setAddress} backgroundColor={"white"} w="75%" maxW="300" />
                
              </VStack>
            </Box>
            </Center>

            <Center flex={0.3} margin={5} backgroundColor={"#1E293B"} rounded={"20"} shadow={"9"}>
            <Box alignItems="center" margin={8}>
              <VStack space={2}>
                <HStack alignItems="baseline">
                  <Heading color={"white"} fontSize="lg">Available from</Heading>
                </HStack>

                <Center flex={0.1}  width={300} height={50} flexDirection={"row"} backgroundColor={"white"} marginTop={3} marginX="1" borderRadius={10} >
                <Text style={{fontWeight:"400",fontSize:13,color:"#1E293B",fontStyle:"normal",marginEnd:200}}> {Date} </Text>
                </Center>
              </VStack>
              <Calendar style={{borderRadius:8}} onDayPress={day => {setDate(day.dateString)}} />
              
            </Box>
            </Center>

            <Center flex={0.3} margin={5} backgroundColor={"#1E293B"} rounded={"20"} shadow={"9"}>
            <Box alignItems="center" margin={8}>
              <VStack space={2}>
                <HStack alignItems="baseline">
                  <Heading color={"white"} fontSize="lg">Contact Number</Heading>
                </HStack>

                <Input variant="outline" placeholder="03*********" minWidth={280} value={Phone} onChangeText={setPhone} backgroundColor={"white"} shadow={"9"} keyboardType={"decimal-pad"} maxLength={11}/>
                
              </VStack>
            </Box>
            </Center>

            <Center flex={0.3} margin={5} backgroundColor={"#1E293B"} rounded={"20"} shadow={"9"}>
            <Box alignItems="center" margin={8}>
              <VStack space={2}>
                <HStack alignItems="baseline">
                  <Heading color={"white"} fontSize="lg">Add Image</Heading>
                </HStack>

            <Button onPress={pickImage} leftIcon={<Icon as={Fontisto} name="import" size="sm" color={"black"} />} backgroundColor={"white"}>
            <Text style={{ fontWeight:"600",fontSize:12,color:"#000"}}>IMPORT</Text>
            </Button>

            <Center flexDirection={"row"}>

              <Image margin={3} borderRadius={5}  source={{
                uri: image1
              }} alt="Alternate Text" size="20" />
              <Image  margin={3} borderRadius={5} source={{
                uri: image2
              }} alt="Alternate Text" size="20" />
              <Image margin={3} borderRadius={5} source={{
                uri:image3
              }} alt="Alternate Text" size="20" />

            </Center>
                
              </VStack>
            </Box>
            </Center>


          
            <Center>
            <Button
              size={"lg"}
              marginY={5}
              backgroundColor={"#1E293B"}
              _text={{ color: "white", fontWeight: "600" }}
              width={"80%"}
              onPress={()=>console.log(maxsq,minsq,maxAm,minAm,address)}
            >
              Add Property
            </Button>
            </Center>
     
          
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
}

export default AddProperty;

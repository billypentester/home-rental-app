import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Pressable, LogBox } from "react-native";
import {
  NativeBaseProvider,
  Center,
  Box,
  Avatar,
  Icon,
  AntDesign,
  Button,
  Switch,
  Modal,
  VStack,
  FormControl,
  Input,
  Stack,
  HStack,
  Heading,
  Checkbox,
  useToast,
  IconButton,
  Toast,
  ScrollView,
  Select,CheckIcon
} from "native-base";
import { MaterialIcons, Feather, Entypo } from "@expo/vector-icons";
import styles from "./../../../styles/index";
import Slider from "@react-native-community/slider";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

function Filter() {
  const [groupValue, setGroupValue] = React.useState([]);
  const [minAm, setMinAm] = useState(0);
  const [maxAm, setMaxAm] = useState(0);

  const [minsq, setMinsq] = useState(0);
  const [maxsq, setMaxsq] = useState(0);
  const [address, setAddress] = useState("");
  const [bed, setBed] = useState(0);
  const [bath, setBath] = useState(0);

  

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
      <View style={styles.wrapper}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <Center flex={0.2} backgroundColor={"#1E293B"} >
            <GooglePlacesAutocomplete
              placeholder="Enter City"
              fetchDetails={true}
              onPress={(data, details = null) => {
                const latC = details.geometry.location.lat.toString();
                const lngC = details.geometry.location.lng.toString();
                setAddress(data.description.toString());
                
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

          <Center flex={0.3} margin={2} backgroundColor={"white"} rounded={"50"} shadow={"9"}>
            <Box alignItems="center" margin={8}>
              <VStack space={2}>
                <HStack alignItems="baseline">
                  <Heading fontSize="lg">Property Type</Heading>
                </HStack>
                <VStack>
                  <Box>
                    <Text>Selected: ({groupValue.length})</Text>
                  </Box>
                </VStack>
                <Checkbox.Group
                  colorScheme="green"
                  defaultValue={groupValue}
                  accessibilityLabel="pick an item"
                  onChange={(values) => {
                    setGroupValue(values || []);
                  }}
                >
                  <Checkbox value="Apartment" my="1">
                    Apartment
                  </Checkbox>
                  <Checkbox value="House" my="1">
                    House
                  </Checkbox>
                  <Checkbox value="Villa" my="1">
                    Villa
                  </Checkbox>
                  <Checkbox value="Flat" my="1">
                    Flat
                  </Checkbox>
                  <Checkbox value="Hostel" my="1">
                    Hostel
                  </Checkbox>
                </Checkbox.Group>
              </VStack>
            </Box>
            </Center>

            <Center flex={1} margin={2} backgroundColor={"white"} rounded={"50"} height={"200"} shadow={"9"}>
              
            <Box maxW="300" w="300">
            
              <Heading mb="2" size="md">
                Facilities
              </Heading>
              <VStack space={4}>
                <HStack space={2}>
                  <Select selectedValue={inputValue} minWidth="200" accessibilityLabel="Choose Facility" placeholder="Choose Facility" _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />
                }} mt={1} onValueChange={itemValue => setInputValue(itemValue)}>
                    <Select.Item label="Wifi" value="wifi" />
                    <Select.Item label="Security Cameras" value="videocam" />
                    <Select.Item label="Water" value="water" />
                    <Select.Item label="Electricity" value="flash-sharp" />
                    <Select.Item label="Gas" value="flame" />
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
                        backgroundColor={"#1E293B"}
                        rounded={"md"}
                        shadow={6}
                      >
                        <Text style={{ color: "white", right: -5 }}>
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

            <Center flex={0.3} margin={2} backgroundColor={"white"} rounded={"50"} shadow={"9"}>

            <Box maxW="300" w="100%" margin={8}>
              <Heading mb="2" size="md">
                Budget
              </Heading>

              <View style={{flexDirection:"row"}}>
              <Text
                style={{
                  fontSize: 15,
                  fontStyle: "italic",
                  fontWeight: "700",
                  color: "#1E293B",
                  top:10
                }}
              >
                
                Maximum Amount: Rs{" "}
              </Text>

              <Input width={20} height={10} defaultValue={maxAm.toString()} value={maxAm} onChangeText={setMaxAm} keyboardType={"decimal-pad"} maxLength={6}/>
              </View>

              <Slider
                style={{ height: 25 }}
                minimumValue={0}
                maximumValue={100000}
                thumbTintColor="tomato"
                value={0.5}
                onValueChange={(value) => setMaxAm(Math.floor(value))}
              />

              <View style={{flexDirection:"row"}}>
              <Text
                style={{
                  fontSize: 15,
                  fontStyle: "italic",
                  fontWeight: "700",
                  color: "#1E293B",
                  top:10
                }}
              >
                
                Minimum Amount: Rs{" "}
              </Text>

              <Input width={20} height={10} defaultValue={minAm.toString()} value={minAm} onChangeText={setMinAm} keyboardType={"decimal-pad"} maxLength={6}/>
              </View>

              <Slider
                style={{ height: 25 }}
                minimumValue={0}
                maximumValue={maxAm}
                thumbTintColor="tomato"
                value={0.5}
                onValueChange={(value) => setMinAm(Math.floor(value))}
              />
            </Box>

            </Center>

            <Center flex={0.3} margin={2} backgroundColor={"white"} rounded={"50"} shadow={"9"}>
            <Box maxW="300" w="100%" margin={6}>
              <Heading mb="2" size="md">
                Built-up Area
              </Heading>

              <View style={{flexDirection:"row"}}>
              <Text
                style={{
                  fontSize: 15,
                  fontStyle: "italic",
                  fontWeight: "700",
                  color: "#1E293B",
                  top:10
                }}
              >
                
                Maximum Area: Sqft{" "}
              </Text>

              <Input height={10} width={20} defaultValue={maxsq.toString()} value={maxsq} onChangeText={setMaxsq} keyboardType={"decimal-pad"} maxLength={5}/>
              </View>

              <Slider
                style={{ height: 25 }}
                minimumValue={0}
                maximumValue={50000}
                thumbTintColor="#1E293B"
                value={0.5}
                onValueChange={(value) => setMaxsq(Math.floor(value))}
              />

            <View style={{flexDirection:"row"}}>
              <Text
                style={{
                  fontSize: 15,
                  fontStyle: "italic",
                  fontWeight: "700",
                  color: "#1E293B",
                  top:10
                }}
              >
                
                Minimum Area: Sqft{" "}
              </Text>

              <Input height={10} width={20} defaultValue={minsq.toString()} value={minsq} onChangeText={setMinsq} keyboardType={"decimal-pad"} maxLength={5}/>
              </View>

              <Slider
                style={{ height: 25 }}
                minimumValue={0}
                maximumValue={maxsq}
                thumbTintColor="#1E293B"
                value={0.5}
                onValueChange={(value) => setMinsq(Math.floor(value))}
              />
            </Box>

            </Center>

            <Center flex={0.3} margin={2} backgroundColor={"white"} rounded={"50"} shadow={"9"}>
            <Box maxW="300" w="100%" margin={6}>
              <Heading mb="2" size="md">
                Rooms
              </Heading>
              <Box flexDirection={"row"}>
                <Text style={{ fontSize: 15, top: 8, marginRight: 100 }}>
                  Bedrooms
                </Text>

                <IconButton
                  isDisabled={bed == 0 ? true : false}
                  onPress={() => setBed(bed - 1)}
                  icon={<Icon as={Entypo} name="squared-minus" />}
                  borderRadius="full"
                  _icon={{
                    color: "black",
                    size: "md",
                  }}
                  _hover={{
                    bg: "coolGray.800:alpha.20",
                  }}
                />
                <Text style={{ fontSize: 15, top: 8 }}>{bed}</Text>
                <IconButton
                  icon={<Icon as={Entypo} name="squared-plus" />}
                  onPress={() => setBed(bed + 1)}
                  borderRadius="full"
                  _icon={{
                    color: "black",
                    size: "md",
                  }}
                  _hover={{
                    bg: "coolGray.800:alpha.20",
                  }}
                />
              </Box>

              <Box flexDirection={"row"}>
                <Text style={{ fontSize: 15, top: 8, marginRight: 95 }}>
                  Bathrooms
                </Text>

                <IconButton
                  isDisabled={bath == 0 ? true : false}
                  onPress={() => setBath(bath - 1)}
                  icon={<Icon as={Entypo} name="squared-minus" />}
                  borderRadius="full"
                  _icon={{
                    color: "black",
                    size: "md",
                  }}
                  _hover={{
                    bg: "coolGray.800:alpha.20",
                  }}
                />
                <Text style={{ fontSize: 15, top: 8 }}>{bath}</Text>
                <IconButton
                  icon={<Icon as={Entypo} name="squared-plus" />}
                  onPress={() => setBath(bath + 1)}
                  borderRadius="full"
                  _icon={{
                    color: "black",
                    size: "md",
                  }}
                  _hover={{
                    bg: "coolGray.800:alpha.20",
                  }}
                />
              </Box>
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
              View Properties
            </Button>
            </Center>
            
          
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
}

export default Filter;

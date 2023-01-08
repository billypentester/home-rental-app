import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, Animated, Pressable } from "react-native";
import {
  NativeBaseProvider,
  Center,
  Box,
  ScrollView,
  IconButton,
  Icon,
  useDisclose,
  Stagger,
  HStack,
  useColorModeValue,
  Heading
} from "native-base";
import {
  MaterialIcons,
  Feather,
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { TabView, SceneMap } from "react-native-tab-view";
import Properties from "./Properties";
import data from './../../../data/homes'

const FirstRoute = () => (
  <Center flex={1} my="4">
  </Center>
);

const initialLayout = {
  width: Dimensions.get("window").width,
};
const renderScene = SceneMap({
  first: FirstRoute,
  second: FirstRoute,
  third: FirstRoute,
});

function Explore({navigation}) {
  const [address, setAddress] = useState("");



  function TabViewCustom() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      {
        key: "first",
        title: "All",
      },
      {
        key: "second",
        title: "Recommended",
      },
      {
        key: "third",
        title: "Popular",
      },
    ]);

   

    const renderTabBar = (props) => {
      const inputRange = props.navigationState.routes.map((x, i) => i);
      return (
        <Box flexDirection="row">
          {props.navigationState.routes.map((route, i) => {
            const opacity = props.position.interpolate({
              inputRange,
              outputRange: inputRange.map((inputIndex) =>
                inputIndex === i ? 1 : 0.5
              ),
            });
            const color =
              index === i
                ? useColorModeValue("#000", "#e5e5e5")
                : useColorModeValue("#1f2937", "#a1a1aa");
            const borderColor =
              index === i
                ? "cyan.800"
                : useColorModeValue("coolGray.200", "gray.400");
            return (
              <Box
                borderBottomWidth="3"
                borderColor={borderColor}
                flex={1}
                alignItems="center"
                p="3"
                cursor="pointer"
              >
                <Pressable
                  onPress={() => {
                    
                    if(route.key=="first"){
                      console.log("Zero");
                    }
                    else if(route.key=='second'){
                      console.log("One");
                    }
                    else if(route.key == 'third'){
                      console.log("Two");
                    }
                    setIndex(i);
                  }}
                  hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                >
                  <Animated.Text
                    style={{
                      fontSize: 13,
                      fontWeight: "300",
                      color,
                    }}
                  >
                    {route.title}
                  </Animated.Text>
                </Pressable>
              </Box>
            );
          })}
        </Box>
      );
    };

    return (
      <TabView
        navigationState={{
          index,
          routes,
        }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    );
  }

  const Menu = () => {
    const { isOpen, onToggle } = useDisclose();
    return (
      <Box>
        <Box alignItems="center" position={"absolute"} top={-330} left={324}>
          <Stagger
            visible={isOpen}
            initial={{
              opacity: 0,
              scale: 0,
              translateY: 34,
            }}
            animate={{
              translateY: 0,
              scale: 1,
              opacity: 1,
              transition: {
                type: "spring",
                mass: 0.8,
                stagger: {
                  offset: 30,
                  reverse: true,
                },
              },
            }}
            exit={{
              translateY: 34,
              scale: 0.5,
              opacity: 0,
              transition: {
                duration: 100,
                stagger: {
                  offset: 30,
                  reverse: true,
                },
              },
            }}
          >
            <IconButton
              mb="4"
              variant="solid"
              bg="indigo.500"
              colorScheme="indigo"
              borderRadius="full"
              shadow={"9"}
              onPress={()=>{navigation.navigate('Location')}}
              icon={
                <Icon
                  as={MaterialIcons}
                  size="6"
                  name="location-pin"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="warmGray.50"
                />
              }
            />

            <IconButton
              mb="4"
              variant="solid"
              bg="teal.400"
              colorScheme="teal"
              borderRadius="full"
              onPress={()=>{navigation.navigate('Filter')}}
              shadow={"9"}
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  _dark={{
                    color: "warmGray.50",
                  }}
                  size="6"
                  name="filter"
                  color="warmGray.50"
                />
              }
            />
            <IconButton
              mb="4"
              variant="solid"
              bg="red.500"
              colorScheme="red"
              borderRadius="full"
              onPress={()=>{navigation.navigate('AddProperty')}}
              shadow={"9"}
              icon={
                <Icon
                  as={MaterialIcons}
                  size="6"
                  name="add"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="warmGray.50"
                />
              }
            />
          </Stagger>
        </Box>
        <HStack
          justifyContent="center"
          top={-150}
          left={320}
          position={"absolute"}
        >
          <IconButton
            variant="solid"
            borderRadius="full"
            borderWidth={2}
            
            size="lg"
            onPress={onToggle}
            bg="#1E293B"
            borderColor={"white"}
            shadow={"9"}
            icon={
              <Icon
                as={MaterialCommunityIcons}
                size="6"
                name="dots-horizontal"
                color="white"
                _dark={{
                  color: "warmGray.50",
                }}
              />
            }
          />
        </HStack>
      </Box>
    );
  };

  return (
    <NativeBaseProvider>
      <View style={{flex:1}}>
        
          <Center flex={0.} backgroundColor={"#1E293B"} flexDirection={"row"} width={"100%"}>
            <GooglePlacesAutocomplete
              placeholder="Search"
              fetchDetails={true}

              onPress={(data, details = null) => {
                const latC = details.geometry.location.lat.toString();
                const lngC = details.geometry.location.lng.toString();
                setAddress(data.description.toString());
              }}
              styles={{
                textInputContainer: {
                  width: "90%",
                  marginTop: 9,
                  marginLeft: 10,
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
            <IconButton
              icon={<Icon as={Entypo} name="magnifying-glass" />}
              // onPress={() => }
              borderRadius="full"
              position={"absolute"}
              right={25}
              _icon={{
                color: "#1E293B",
                size: "35",
              }}
              _hover={{
                bg: "coolGray.800:alpha.20",
              }}
            />
          </Center>
          <ScrollView keyboardShouldPersistTaps="handled">
          <TabViewCustom />
          
          <Center flex={0.3} margin={3} backgroundColor={"gray.200"} shadow={"9"} rounded={"10"}>
          <Heading mb="2" size="md" alignSelf={"flex-start"} margin={"3"}>
                Houses
              </Heading>
          <Properties FlatListData={data}/>
          </Center>

          <Center flex={0.3} margin={3} backgroundColor={"gray.200"} shadow={"9"} rounded={"10"}>
          <Heading mb="2" size="md" alignSelf={"flex-start"} margin={"3"}>
                Flats
              </Heading>
          <Properties FlatListData={data}/>
          </Center>

          <Center flex={0.3} margin={3} backgroundColor={"gray.200"} shadow={"9"} rounded={"10"}>
          <Heading mb="2" size="md" alignSelf={"flex-start"} margin={"3"}>
                Apartments
              </Heading>
          <Properties FlatListData={data}/>
          </Center>

          <Center flex={0.3} margin={3} backgroundColor={"gray.200"} shadow={"9"} rounded={"10"}>
          <Heading mb="2" size="md" alignSelf={"flex-start"} margin={"3"}>
                Villas
              </Heading>
          <Properties FlatListData={data} />

          <Center flex={0.3} >
          <Heading mb="2" size="md" fontWeight={"100"} fontSize={20} margin={"3"}>
                @copyrights
              </Heading>
          
          </Center>
          </Center>

        </ScrollView>
        <Menu />

      </View>
    </NativeBaseProvider>
  );
}

export default Explore;
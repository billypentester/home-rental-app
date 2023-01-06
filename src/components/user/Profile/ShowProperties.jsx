import {
    Text,
    View,
    FlatList,
    Touchable,
    TouchableOpacity,
    Image,
    Alert,
  } from "react-native";
  
  
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
    EvilIcons,
    AntDesign,
  } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";
  
  import styles from "./../../../styles/index";
  import { useState } from "react";
  
  function ShowProperties({Data, LikeCheck}) {
  
    const [like,setLike] = useState(LikeCheck) 
    const navigation = useNavigation()
  
    const data = Data
  
    return (
      <NativeBaseProvider>
        <View style={styles.wrapper}>
  
        <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#dce2e9",
          paddingBottom:80
        }}
        
        keyExtractor={(myArray,item)=>item.toString()}
        data={data}
          renderItem={({ item }) => (
  
            <TouchableOpacity
              style={{
                padding:20,
                backgroundColor:"#181D31",
                borderRadius:20,
                margin:10,
                width:170,
                height:240
              }}

              onPress={()=>{navigation.navigate("Details",item)}}
            >
      
               
              
              <Image style={{ width:130 , height: 120 , borderRadius:15}} source={require("home-rental-app/assets/image.jpg")}></Image>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ marginTop: 10, fontWeight: "300" , color:"white"}}>
                  {item.title}
                </Text>
                <Center flexDirection={"row"}>
                <Text style={{ color: "#fff", fontSize: 10, marginTop: 10 , fontWeight:"800"}}>
                  Rs. {item.price} /month
                </Text>
                <IconButton
                mb="4"
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                variant="unstyled"
                colorScheme={"white"}
                position={"absolute"}
                left={87}
                top={-3}
                onPress={()=>{setLike(!like)}}
                icon={
                  <Icon
                  as={AntDesign}
                  size="5"
                  name={like? "heart":"hearto"}
                  color={like? "red.500":"white"}
          
                />
                }
              />
  
                </Center>
                <View style={{flexDirection:"row"}}>
                <Icon
                    position={"absolute"}
                    top={2}
                    left={-16}
                    as={EvilIcons}
                    size="4"
                    name="location"
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="warmGray.50"
                    
                  />
                <Text style={{ fontSize: 9, fontWeight: "600", marginTop: 10, color: "white" }}>
                  {item.location}
                </Text>
                </View>
              </View>
            </TouchableOpacity>
            
          )}
        />
  
        </View>
      </NativeBaseProvider>
    )
  }
  
  export default ShowProperties
import { useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";


import {
  NativeBaseProvider,
  IconButton,
  Icon,
  Center,
} from "native-base";

import {
  EvilIcons,
  AntDesign
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";





export default function Properties({FlatListData}) {
  const data = FlatListData
  const navigation = useNavigation()

  const [like,setLike] = useState(false) 

  return (
    <NativeBaseProvider>
    <View>
      <FlatList
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(myArray,item)=>item.toString()}
      data={data}
        renderItem={({ item }) => (

          <TouchableOpacity
            style={{
              padding:20,
              backgroundColor:"#181D31",
              borderRadius:20,
              margin:10,
              width:180,
              height:230,
            }}
            onPress={()=>{navigation.navigate("Details",item)}}
          >
    
            
            <Image style={{ width: "100%", height: 110, borderRadius:20}} source={require("./../../../images/background.jpg")}></Image>
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
      
    
  );
}
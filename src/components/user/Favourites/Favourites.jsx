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
import ShowProperties from "../Profile/ShowProperties";

import styles from "./../../../styles/index";
import { useState } from "react";
import data from "../Explore/dummyData";


function Favourites() {

  const [like,setLike] = useState(true) 

  

  return (
    <NativeBaseProvider>
      <View style={styles.wrapper}>

      <ShowProperties Data={data} LikeCheck={true}/>

      </View>
    </NativeBaseProvider>
  )
}

export default Favourites
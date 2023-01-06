import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
  } from "react-native";
  
  
  import {
    NativeBaseProvider,
    Center,
    IconButton,
    Heading,

    Icon  } from "native-base";
    import { useNavigation } from "@react-navigation/native";
  
  import {
    EvilIcons,
    AntDesign,
  } from "@expo/vector-icons";
  
  import styles from "./../../../styles/index";
  import ShowProperties from "./ShowProperties";
  import data from "../Explore/dummyData";
  
  function MyPlaces() {
  
  
   
  
    return (
      <NativeBaseProvider>
        <View style={styles.wrapper}>

        <Heading mb="2" size="md" alignSelf={"flex-start"} margin={"3"}>
                Properties You Uploaded For Rent
              </Heading>
  
        <ShowProperties Data={data} LikeCheck={false}/>
  
        </View>
      </NativeBaseProvider>
    )
  }
  
  export default MyPlaces
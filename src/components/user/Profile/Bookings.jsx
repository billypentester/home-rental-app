import {
    View,
    
  } from "react-native";
  
  
  import {
    NativeBaseProvider,

    Heading  } from "native-base";
    import { useNavigation } from "@react-navigation/native";
import data from "../Explore/dummyData";
  
  import styles from "./../../../styles/index";
  import ShowProperties from "./ShowProperties";
  
  function Bookings() {
  
  
    
  
    return (
      <NativeBaseProvider>
        <View style={styles.wrapper}>

        <Heading mb="2" size="md" alignSelf={"flex-start"} margin={"3"}>
                Your Bookings
              </Heading>
  
        <ShowProperties Data={data} LikeCheck={false}/>
  
        </View>
      </NativeBaseProvider>
    )
  }
  
  export default Bookings
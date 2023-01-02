import React, { useEffect, useState } from "react";
import { View, Text,LogBox} from 'react-native'
import styles from "./../../../styles/index";
import { NativeBaseProvider, Center, Box, ScrollView,IconButton,Icon} from 'native-base'
import { MaterialIcons, Feather, Entypo, Ionicons } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

function Explore() {

  const [address, setAddress] = useState("");

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    
  });

  return (
    <NativeBaseProvider>
      <View style={styles.wrapper}>
      <ScrollView keyboardShouldPersistTaps="handled">
      <Center flex={0.2} backgroundColor={"#1E293B"} flexDirection={"row"}>
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
                  width: "95%",
                  marginTop:9,marginLeft:10
                  
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
                  
                  icon={<Icon as={Ionicons} name="md-search-circle" />}
                  // onPress={() => }
                  borderRadius="full"
                  _icon={{
                    color: "white",
                    size: "50",
                  }}
                  _hover={{
                    bg: "coolGray.800:alpha.20",
                  }}
                />
          </Center>
      </ScrollView>
        </View>
    </NativeBaseProvider>
  )
}

export default Explore
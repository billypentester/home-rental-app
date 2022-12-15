import React, { useState } from 'react'
import { View, ImageBackground,TouchableOpacity,Pressable,Text } from 'react-native'

import styles from './../../../styles/index'
import { NativeBaseProvider, Center, Box,Avatar,Icon,Button,Switch,Input, Row} from 'native-base'
import { MaterialIcons,Ionicons,Fontisto,AntDesign } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker'


function Edit({navigation}) {

  const [email, setEmail] = React.useState('Hassan@gmail.com');
  const [password, setPassword] = React.useState('12345678');
  const [showpass,setShowpass] = React.useState(true)
  const [name,setname] = React.useState('Hassan Abdullah')
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(image);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  return (
    <NativeBaseProvider>
          <View style={styles.wrapper}>
            <Center flex={0.7} backgroundColor={"#1E293B"}></Center>
            <Center flex={2} flexDirection={"row"} justifyContent="center" alignItems="center">
            
            <Button onPress={pickImage} leftIcon={<Icon as={Fontisto} name="import" size="sm" />} backgroundColor={"#1E293B"}>
            <Text style={{ fontWeight:"600",fontSize:12,color:"#fff"}}>IMPORT</Text>
            </Button>
            
            <Avatar bg={"blue.200"} marginX={18} source={{ uri: image }} size="2xl" padding={1}>
            </Avatar>

            <Button endIcon={<Icon as={AntDesign} name="camera" size="sm"  />} backgroundColor={"#1E293B"}>
            <Text style={{ fontWeight:"600",fontSize:12,color:"#fff"}}>CAMERA</Text>
            </Button>

            </Center>
            <Box flex={4} margin={6}>
            <Input InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={6} marginX="2" color="gray.800" />} focusOutlineColor={'yellow.500'} marginY={'5'} size="lg" color={'black'} placeholder="User Name" variant={"rounded"} keyboardType={"default"} maxLength={25} value={name} onChangeText={setname}/>
              <Input InputLeftElement={<Icon as={<MaterialIcons name="mail" />} size={6} marginX="2" color="gray.800" />} focusOutlineColor={'yellow.500'} marginY={'5'} size="lg" color={'black'} placeholder="Email" variant={"rounded"} keyboardType={"email-address"} value={email} onChangeText={setEmail}/>
              <Input type={showpass ? "password" : "text"} InputLeftElement={<Icon as={<MaterialIcons name="lock" />} size={6} marginX="2" color="gray.800" />} InputRightElement={<Pressable onPress={() => setShowpass(!showpass)}>
            <Icon as={<MaterialIcons name={showpass ? "visibility-off" : "visibility"} />} size={5} mr="2" color="muted.400" />
            </Pressable>} focusOutlineColor={'yellow.500'} marginY={'5'} size="lg" color={'black'} placeholder="Password" variant={'rounded'} keyboardType={"password"}  value={password} onChangeText={setPassword} />
              
              <Button size={'lg'} marginY={5}  backgroundColor={'#1E293B'}_text={{color: "white",fontWeight:"600" }} width={'100%'}>Save Changes</Button>
            </Box>
            <Center flex={0.7} backgroundColor={"#1E293B"}></Center>
          </View>
    </NativeBaseProvider>
  )
}

export default Edit
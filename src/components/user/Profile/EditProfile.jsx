import React, { useState, useCallback } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';

import { NativeBaseProvider, Center, Box,Avatar,Icon,Button,Input, Text} from 'native-base'
import { MaterialIcons,Ionicons,Fontisto,AntDesign } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker'

import AsyncStorage from '@react-native-async-storage/async-storage';
import {updateProfile} from 'firebase/auth'
import { auth } from '../../../Firebase/autentication';
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const EditProfile = () => {

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('12345678');
  const [showpass,setShowpass] = React.useState(true)
  const [image, setImage] = useState('');

  const readData = async () => {
    try {
      setName(auth.currentUser.displayName);
      setEmail(auth.currentUser.email);
      setImage(auth.currentUser.photoURL);
    } 
    catch (e) {
      alert('Failed to fetch the input from storage');
    }
  };

  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }

  };

  const saveFirebase = async () => {
    try {
      const docRef = doc(database, "users", auth.currentUser.uid);
      await setDoc(docRef, {
        displayName: name,
        email: email,
        photoURL: image,
        uid: auth.currentUser.uid
      });
    }
    catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  const update = async () => {
    const storage = getStorage();
    const storageRef = ref(storage, 'images/' + auth.currentUser.uid);
    const response = await fetch(image);
    const blob = await response.blob();
    const uploadTask = uploadBytesResumable(storageRef, blob);
    uploadTask.on('state_changed', (snapshot) => {
      console.log('snapshot progess ' + (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    }, (error) => {
      console.log(error);
    }, () => {
      getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
        setImage(downloadURL);
        await updateProfile(auth.currentUser, {
          displayName: name,
          email: email,
          photoURL: downloadURL
        })
        .then(() => {
          saveFirebase();
        })
        .then(() => {
          alert('Profile updated successfully!')
        })
        .catch((error) => {
          alert(error.message)
        });
        console.log('File available at: ', downloadURL);
      });
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      readData();
    }, [])
  );

  return (
    <NativeBaseProvider>

      <Box flex={1}>

        <Center flex={1/3} flexDirection={"column"} justifyContent="center" alignItems="center">
        
          <Avatar bg={'gray.100'} marginX={18} source={{ uri: image}} size="2xl" padding={0.5} borderWidth={'2'} borderColor={'blue.400'}></Avatar>
          
          <Box flexDirection={'row'} my={4}>
            <Button mx={2} onPress={pickImage} leftIcon={<Icon as={Fontisto} name="import" size="sm"  marginX="1" /> } backgroundColor={"#1E293B"}>
              <Text style={{ fontWeight:"600",fontSize:12,color:"#fff"}}>IMPORT</Text>
            </Button>
            <Button mx={2} endIcon={<Icon as={AntDesign} name="camera" size="sm" marginX="1" />} backgroundColor={"#1E293B"}>
              <Text style={{ fontWeight:"600",fontSize:12,color:"#fff"}}>CAMERA</Text>
            </Button>
          </Box>

        </Center>

        <Box flex={2/3} marginX={5}>

          <Input InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={6} marginX="2" color="gray.800" />} focusOutlineColor={'gray.500'} marginY={'4'} size="lg" color={'black'} placeholder="User Name" variant={"rounded"} keyboardType={"default"} maxLength={25} value={name} onChangeText={setName}/>
          <Input editable={false} selectTextOnFocus={false} InputLeftElement={<Icon as={<MaterialIcons name="mail" />} size={6} marginX="2" color="gray.800" />} focusOutlineColor={'gray.500'} marginY={'4'} size="lg" color={'black'} placeholder="Email" variant={"rounded"} keyboardType={"email-address"} value={email} onChangeText={setEmail}/>
          <Input type={showpass ? "password" : "text"} InputLeftElement={<Icon as={<MaterialIcons name="lock" />} size={6} marginX="2" color="gray.800" />} InputRightElement={<Pressable onPress={() => setShowpass(!showpass)}>
          <Icon as={<MaterialIcons name={showpass ? "visibility-off" : "visibility"} />} size={5} mr="3" color="muted.400" />
          </Pressable>} focusOutlineColor={'yellow.500'} marginY={'5'} size="lg" color={'black'} placeholder="Password" variant={'rounded'} keyboardType={"password"} value={password} onChangeText={setPassword} />
            
          <Button rounded={'full'} size={'lg'} marginY={5} backgroundColor={'#1E293B'}_text={{color: "white",fontWeight:"600" }} width={'100%'} onPress={update}>Save Changes</Button>
        
        </Box>

      </Box>
    </NativeBaseProvider>
  )
}


export default EditProfile

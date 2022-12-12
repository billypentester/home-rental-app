import React from 'react'
import { View, ImageBackground, Dimensions, TextInput} from 'react-native'
import { NativeBaseProvider, Center, Image, Text, Button} from 'native-base'
import styles from './../../styles/index'
import pic from './../../images/background.jpg'

function Welcome({navigation}) {

  return (
    <NativeBaseProvider>
      <ImageBackground source={pic} resizeMode="stretch" style={styles.background}>
          <View style={styles.wrapper}>
            <Center flex={2} justifyContent="center" alignItems="center">
              <Image source={{uri: "https://i.pinimg.com/originals/5e/10/d7/5e10d70b73f61c76194ef63da8f5c22a.png"}} alt="logo" width={'70%'} height={'70%'} />
            </Center>
            <Center flex={1}>
              <Text fontSize="4xl" color={'gray.300'} marginY={'2'}>Hey! Welcome</Text>
              <Text fontSize="xl" color={'gray.300'}>Rent out of 1500 places, Visit new beautiful places.</Text>
            </Center>
            <Center flex={1} paddingX={6}>
              <Button size={'lg'} marginY={1} backgroundColor={'yellow.500'} width={'100%'} onPress={() => navigation.navigate('Login')}>Login</Button>
              <Button size={'lg'} marginY={1} backgroundColor={'gray.700'} width={'100%'} onPress={() => navigation.navigate('Register')}>Create Account</Button>
            </Center>
          </View>
      </ImageBackground>
    </NativeBaseProvider>
  )
}

export default Welcome
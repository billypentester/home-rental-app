import React from 'react'
import { View, Text} from 'react-native'
import { NativeBaseProvider, Center, Box, Button} from 'native-base'

function Login({navigation}) {

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Button onPress={() => navigation.navigate('BottomNavigation', { screen: 'Home' })}>Open Portal</Button>
      </Center>
    </NativeBaseProvider>
  )
}

export default Login
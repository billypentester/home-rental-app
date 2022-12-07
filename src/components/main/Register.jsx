import React from 'react'
import { View, Text} from 'react-native'
import { NativeBaseProvider, Center, Box} from 'native-base'

function Register() {

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box>Register Screen</Box>
      </Center>
    </NativeBaseProvider>
  )
}

export default Register
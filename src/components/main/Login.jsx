import React from 'react'
import { View, Text} from 'react-native'
import { NativeBaseProvider, Center, Box} from 'native-base'

function Login() {

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box>Login Screen</Box>
      </Center>
    </NativeBaseProvider>
  )
}

export default Login
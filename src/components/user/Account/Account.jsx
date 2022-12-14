import React from 'react'
import { View, Text } from 'react-native'
import { NativeBaseProvider, Center, Box} from 'native-base'

function Account() {

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box>Account</Box>
      </Center>
    </NativeBaseProvider>
  )
}

export default Account
import React from 'react'
import { View, Text } from 'react-native'
import { NativeBaseProvider, Center, Box} from 'native-base'

function Setting() {

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box>Setting Screen</Box>
      </Center>
    </NativeBaseProvider>
  )
}

export default Setting
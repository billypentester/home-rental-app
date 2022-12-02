import React from 'react'
import { View, Text} from 'react-native'
import { NativeBaseProvider, Center, Box} from 'native-base'

function Find() {

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box>Find Screen</Box>
      </Center>
    </NativeBaseProvider>
  )
}

export default Find
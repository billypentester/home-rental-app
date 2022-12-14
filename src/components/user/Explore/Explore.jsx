import React from 'react'
import { View, Text} from 'react-native'
import { NativeBaseProvider, Center, Box} from 'native-base'

function Explore() {

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box>Explore</Box>
      </Center>
    </NativeBaseProvider>
  )
}

export default Explore
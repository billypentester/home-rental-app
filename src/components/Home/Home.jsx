import React from 'react'
import { View, Text} from 'react-native'
import { NativeBaseProvider, Center, Box} from 'native-base'

function Home() {

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box>Home Screen</Box>
      </Center>
    </NativeBaseProvider>
  )
}

export default Home
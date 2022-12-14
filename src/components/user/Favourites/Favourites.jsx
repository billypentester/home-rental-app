import React from 'react'
import { View, Text} from 'react-native'
import { NativeBaseProvider, Center, Box} from 'native-base'

function Favourites() {

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box>Favourites</Box>
      </Center>
    </NativeBaseProvider>
  )
}

export default Favourites
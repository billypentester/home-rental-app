import React from 'react'
import { View, Text} from 'react-native'
import { NativeBaseProvider, Center, Box} from 'native-base'

function Chat() {

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box>Chat Screen</Box>
      </Center>
    </NativeBaseProvider>
  )
}

export default Chat
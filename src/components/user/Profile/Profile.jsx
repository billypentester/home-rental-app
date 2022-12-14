import React from 'react'
import { View, Text } from 'react-native'
import { NativeBaseProvider, Center, Box} from 'native-base'

function Profile() {

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box>Profile</Box>
      </Center>
    </NativeBaseProvider>
  )
}

export default Profile
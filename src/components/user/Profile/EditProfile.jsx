import { StyleSheet, Text } from 'react-native'
import { NativeBaseProvider, Center, Avatar } from 'native-base'
import React from 'react'

const EditProfile = () => {
  return (
    <NativeBaseProvider>
      <Box m={2}>
        <Center>
          <Avatar bg="green.500" source={{ uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}}/>
        </Center>
      </Box>
    </NativeBaseProvider>
  )
}

export default EditProfile

const styles = StyleSheet.create({})
import { StyleSheet, Text } from 'react-native'
import { NativeBaseProvider, Center } from 'native-base'
import React from 'react'

const EditProfile = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Text>Edit Profile</Text>
      </Center>
    </NativeBaseProvider>
  )
}

export default EditProfile

const styles = StyleSheet.create({})
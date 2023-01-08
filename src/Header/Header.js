import React from 'react'
import { View, Text, StatusBar } from 'react-native'

function Header({title}) {
  return (
    <View>
        <StatusBar backgroundColor="#1E293B" barStyle="light-content" />
        <Text style={{  padding: 15, backgroundColor: '#1E293B', flexDirection: 'row', fontSize: 20, color:'white', textAlign:'center' }}>{title}</Text>
    </View>
  )
}

export default Header
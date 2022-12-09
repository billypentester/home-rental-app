import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Header({title}) {
  return (
    <View>
        <Text style={{  padding: 15, backgroundColor: '#1E293B', flexDirection: 'row', fontSize: 20, color:'white' }}>{title}</Text>
    </View>
  )
}

export default Header
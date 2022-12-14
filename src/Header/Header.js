import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Header({title}) {
  return (
    <View>
        <Text style={{  padding: 20, backgroundColor: '#1E293B', flexDirection: 'row', fontSize: 20, color:'white', textAlign:"center", fontWeight:"700",fontStyle:"normal",textShadowColor:"#fff",textShadowRadius:20}}>{title}</Text>
    </View>
  )
}

export default Header
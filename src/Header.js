import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView, StatusBar,  } from 'react-native-safe-area-context'
import color from './Colors'

const Header = () => {
  return (
          <View>
               <Text style={styles.text}>NewsJeans</Text>
          </View>
  )
}

export default Header

const styles = StyleSheet.create({
     container:{
          alignItems:'center',
          flexDirection: 'row',
          justifyContent:'space-between',
          padding: 10,
          borderBottomWidth:1,
          borderBottomColor: color.black,
     }
})
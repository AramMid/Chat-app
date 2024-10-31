import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/color'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { iconSizes } from '../constants/dimensions'
import AntDesign from "react-native-vector-icons/AntDesign"

const Header = () => {
  return (
    <View className="flex-row justify-between py-sm px-lg">
    <TouchableOpacity>
      <FontAwesome5 name={"grip-lines"} color ={colors.iconPrimary} size={iconSizes.md}/>
    </TouchableOpacity>
    <TouchableOpacity>
      <AntDesign name={"search1"} color ={colors.iconPrimary} size={iconSizes.md}/>
    </TouchableOpacity>
  </View>
  )
}

export default Header

const styles = StyleSheet.create({})
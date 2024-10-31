import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const imgUrl = "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/936/325x325/royalty-1619082030-xBgqGZWLw9.jpg"
const SongCard = () => {
  return (
    <TouchableOpacity 
    className="  w-[250px] h-[330px] "
    activeOpacity={0.6}
    >
      <Image 
        source={{uri: imgUrl}}
        className="w-[250px] h-[250px] rounded-lg "
        resizeMode='contain'
      />
      <Text 
      className="font-gilroy-medium text-textPrimary text-custom-16 text-center my-xm">
        Royalty
        </Text>
      <Text className="font-gilroy-light text-textSecondary text-center">Maestro Chives, Egzod, Neoni</Text>
    </TouchableOpacity>
  )
}

export default SongCard

const styles = StyleSheet.create({})
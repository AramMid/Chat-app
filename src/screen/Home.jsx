import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import SongCategory from '../components/SongCategory'
import FloatingPlayer from '../components/FloatingPlayer'

const Home = () => {
  return (
    <SafeAreaView className="bg-background flex-1">
      <Header />
      <FlatList 
        data={[1,2,3,4,5]}
        renderItem={SongCategory}
        contentContainerStyle={{
          paddingBottom:300,
        }}
      />
      <FloatingPlayer imgUrl={'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/717/325x325/1720543849_CgQryprAmK_grow-apart-_shrunk.jpg'}/>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})
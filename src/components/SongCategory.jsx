import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SongCard from './SongCard'

const SongCategory = () => {
  return (
    <View className="flex-1">
        <Text className="text-textPrimary text-custom-24 font-gilroy-bold py-lg px-lg">Recommended for you</Text>
        <FlatList 
            data={[1,2,3,4,5]}
            renderItem={SongCard}
            horizontal={true}
            ItemSeparatorComponent={
                <View className="mx-sm" /> 
            }
            contentContainerStyle={{
                paddingHorizontal: 24
            }}
        
        />
    </View>
  )
}

export default SongCategory

const styles = StyleSheet.create({})
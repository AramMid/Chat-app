import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../constants/color';
import {iconSizes} from '../constants/dimensions';
import {getColor} from 'react-native-image-dominant-color';
import Slider from '@react-native-community/slider';
import MovingText from './MovingText';

const FloatingPlayer = ({imgUrl}) => {
  const prevImgUrl = useRef(imgUrl);
  const colorCache = useRef({});
  const [bgColor, setBgColor] = useState('#091227');

  useEffect(() => {
    const fetchColors = async () => {
      if (imgUrl === prevImgUrl.current && colorCache.current[imgUrl]) {
        console.log('Using cached color:', colorCache.current[imgUrl]);
        setBgColor(colorCache.current[imgUrl]);
        return;
      }

      try {
        const result = await getColor(imgUrl);
        console.log('Color result:', result); 
        if (result.dominantColor) {
          colorCache.current[imgUrl] = result.dominantColor;
          setBgColor(result.dominantColor); 
        } else {
          console.log('Color is near white');
        }
      } catch (error) {
        console.error('Error fetching dominant color:', error);
        setBgColor('#fff'); 
      }
    };

    fetchColors();
    prevImgUrl.current = imgUrl;
  }, [imgUrl]);

  return (
    <View
      className="w-[396px] h-[70px] py-sm px-sm rounded-xl m-auto"
      style={{backgroundColor: bgColor, opacity: 0.7}}>
      <View className="flex-row flex-wrap">
        <Image
          source={{uri: imgUrl}}
          className="w-[50px] h-[50px] rounded-lg pl-sm"
          style={{elevation: 100}}
          resizeMode="contain"
        />
        <View className="w-[210px] overflow-hidden ml-sm justify-center flex-1 mr-lg">
          <MovingText
            text={'Royalty'}
            animationThreshold={15}
            style={styles.text}
          />
          <Text className="font-gilroy-light text-textPrimary">
            Maestro Chives, Egzod, Neoni
          </Text>
        </View>
        <View className="flex-row w-[95px] justify-between items-center">
          <Feather
            name="skip-back"
            color={colors.iconPrimary}
            size={iconSizes.sm}
          />
          <FontAwesome5
            name="grip-lines-vertical"
            color={colors.iconPrimary}
            size={iconSizes.sm}
          />
          <Feather
            name="skip-forward"
            color={colors.iconPrimary}
            size={iconSizes.sm}
          />
        </View>
        <View style={{marginLeft: -12}}>
          <Slider
            style={{width: 395, transform: [{scaleY: 2.0}], height: 16}}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            thumbTintColor="#00000000"
          />
        </View>
      </View>
    </View>
  );
};

export default FloatingPlayer;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Gilroy-Medium',
    color: 'white',
    fontSize: 16,
  },
});

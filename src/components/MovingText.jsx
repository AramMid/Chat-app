import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming } from 'react-native-reanimated'

const MovingText = ({text, animationThreshold, style}) => {

    const translateX = useSharedValue(0);
    const shouldAnimate = text.length >= animationThreshold;
    const textWidth = text.length * 3;

    useEffect(() => {
        if (!shouldAnimate) return;
        translateX.value = withDelay(1000, withRepeat(
            withTiming(
                -textWidth, {
                    duration: 5000,
                    easing: Easing.linear,
                }
            ),
            -1, // infinite times
            true // should reverse or not 
        ));
    }, [translateX, text, animationThreshold, textWidth]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{translateX: translateX.value}],

        }
    });
  return (
    <Animated.Text numberOfLines={1} style={[animatedStyle,style, shouldAnimate && {
        width: 9999,
        paddingLeft: 5
    }]} 
    >
        {text}
    </Animated.Text>
  )
}

export default MovingText

const styles = StyleSheet.create({})
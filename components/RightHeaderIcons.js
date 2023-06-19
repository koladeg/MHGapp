import { View, Text, Pressable, StyleSheet} from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import { colors } from '../constants/Colors'

export default function RightHeaderIcons() {
  return (
    <View style={styles.container}>
      <Pressable style={({pressed}) => pressed && styles.pressed}>
        <Icon name="alert-circle-outline" type="ionicon" color={colors.sui} />
      </Pressable>
      <Pressable style={[({pressed}) => pressed && styles.pressed, {marginLeft: 15}]}>
        <Icon name="list-circle-outline" type="ionicon" color={colors.primary} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        // alignItems: 'space-between',
        // justifyContent: 'space-between',
        // marginRight: 10,
        // paddingRight: 25,
      },
      pressed: {
        opacity: 0.7
      }
})
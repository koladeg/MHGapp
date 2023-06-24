import { View, Text, Pressable, StyleSheet} from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import { colors } from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'

export default function LeftHeaderIcons() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable style={({pressed}) => pressed && styles.pressed}
      >
        <Icon name="menu" type="ionicon" color={colors.secondary} />
      </Pressable>
      <Pressable style={[({pressed}) => pressed && styles.pressed, {marginLeft: 10}]}
        onPress={() => navigation.navigate('Home')}
      >
        <Icon name="home-outline" type="ionicon" color={colors.primary} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
      },
      pressed: {
        opacity: 0.7
      }
})
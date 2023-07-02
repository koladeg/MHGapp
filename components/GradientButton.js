import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { colors } from '../constants/Colors'

export default function GradientButton(props) {
  return (
    <LinearGradient
        // Button Linear Gradient
        start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}
        colors={[colors.secondary, colors.primary]}
        style={props.style}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </LinearGradient>
  )
}


const styles = StyleSheet.create({
    buttonText:{
        fontSize: 17,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
   })
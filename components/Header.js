import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Header as HeaderRNE, Icon } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Header() {
  return (
    <SafeAreaProvider style={styles.headerContainer}>
      <HeaderRNE
        leftComponent={{
          icon: 'menu',
          color: '#fff',
        }}
        rightComponent={
            <View style={styles.headerRight}>
              <TouchableOpacity>
                <Icon name="description" color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginLeft: 10 }}
              >
                <Icon type="antdesign" name="rocket1" color="white" />
              </TouchableOpacity>
            </View>
        }
        centerComponent={{ text: 'Header', style: styles.heading }}
      />
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#397af8',
      marginBottom: 20,
      marginLeft:-30,
      width: '100%',
      padding: 15,
    },
    heading: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
    },
    headerRight: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 5,
    },
    subheaderText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    });
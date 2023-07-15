import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { SelectButton } from '../components/SelectButton'
import { colors } from '../constants/Colors';
import { MODULE } from '../constants/Enums';
import ScreenIdentifier from '../components/ScreenIdentifier';
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height

export default function DisordersScreen(props) {
  const category = props.route.params.category
  const color = props.route.params.color

  function pressHandler(module){
    props.navigation.navigate(category, { module: module})
  }

  return (
    <View style={styles.container}>
      <ScreenIdentifier text={category} color={colors.tertiary}/>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingTop: 90 }} keyboardShouldPersistTaps='never' >
          <View style={styles.bottomButton}>
              <SelectButton style={[styles.button, {backgroundColor: colors.dep}]} onPress={() => pressHandler(MODULE.DEP)}  title={MODULE.DEP.name} />
          </View>
          <View style={styles.bottomButton}>
              <SelectButton style={[styles.button, {backgroundColor: colors.psy}]} onPress={() => pressHandler(MODULE.PSY)} title={MODULE.PSY.name} />
          </View>
          <View style={styles.bottomButton}>
              <SelectButton style={[styles.button, {backgroundColor: colors.epi}]} onPress={() => pressHandler(MODULE.EPI)} title={MODULE.EPI.name} />
          </View>
          <View style={styles.bottomButton}>
              <SelectButton style={[styles.button, {backgroundColor: colors.dem}]} onPress={() => pressHandler(MODULE.DEM)} title={MODULE.DEM.name} />
          </View>
          <View style={styles.bottomButton}>
              <SelectButton style={[styles.button, {backgroundColor: colors.sub}]} onPress={() => pressHandler(MODULE.SUB)} title={MODULE.SUB.name} />
          </View>
          <View style={styles.bottomButton}>
              <SelectButton style={[styles.button, {backgroundColor: colors.sui}]} onPress={() => pressHandler(MODULE.SUI)} title={MODULE.SUI.name} />
          </View>
          <View style={styles.bottomButton}>
              <SelectButton style={[styles.button, {backgroundColor: colors.other}]} onPress={() => pressHandler(MODULE.OTHER)} title={MODULE.OTHER.name} />
          </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    height: height
  },
  scrollContainer:{
    marginBottom: 20,
    paddingVertical: 70,
  },
  button:{
    // backgroundColor:'#2c2766',
    padding:20,
    alignItems:"center",
    width:width - 40,
    borderRadius:5,
  },
  text:{
      fontSize: 17,
      color: 'white'
  },
  bottomButton:{
    marginBottom:10
  }
 })
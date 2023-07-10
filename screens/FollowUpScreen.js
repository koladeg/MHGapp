import { View, Text } from 'react-native'
import React from 'react'
import FollowUpDEP from '../components/FollowUp/FollowUpDEP'
import { MODULE } from '../constants/Enums'
import FollowUpPSY from '../components/FollowUp/followUpPSY'

export default function FollowUpScreen(props) {
  const module = props.route.params.module
  return (
    <View>
      {/* {module === MODULE.DEP.name && <FollowUpDEP />}
      {module === MODULE.PSY.name && <FollowUpPSY />} */}
      <FollowUpPSY />
    </View>
  )
}
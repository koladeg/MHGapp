import { View, Text } from 'react-native'
import React from 'react'
import { MODULE } from '../constants/Enums'
import { FollowUpPSY, FollowUpDEP, FollowUpEPI, FollowUpDEM, FollowUpSUB, FollowUpSUI, FollowUpOTH } from '../components/FollowUp'
import ScreenIdentifier from '../components/ScreenIdentifier'

export default function FollowUpScreen(props) {
  const module = props.route.params.module

  function getFollowUpScreen(module){
    if (module.name === MODULE.DEP.name) {
        return <FollowUpDEP />;
    }
    if (module.name === MODULE.PSY.name) {
        return <FollowUpPSY />;
    }
    if (module.name === MODULE.EPI.name) {
      return <FollowUpEPI />;
    }
    if (module.name === MODULE.DEM.name) {
      return <FollowUpDEM />;
    }
    if (module.name === MODULE.SUB.name) {
        return <FollowUpSUB />;
    }
    if (module.name === MODULE.SUI.name) {
      return <FollowUpSUI />;
    }
    return <FollowUpOTH />;
  }

  return (
    <View>
      <ScreenIdentifier text={module.name} subtext={'FOLLOW-UP'} color={module.color} />
      {getFollowUpScreen(module)}
    </View>
  )
}
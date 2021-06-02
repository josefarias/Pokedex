import { TeamList } from 'components/myTeam/teamList/TeamList'
import React from 'react'
import { SafeAreaView } from 'react-native'

export const MyTeam: React.FC = () => {
  return (
    <SafeAreaView>
      <TeamList />
    </SafeAreaView>
  )
}

import { View} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Header from './Header'
import Section from './Section'



const HomeScreen = ({ Navigation = useNavigation() }) => {
  return (
      
    <View>
    <Header/>
    <Section/>
    
    </View>

  )
}


export default HomeScreen
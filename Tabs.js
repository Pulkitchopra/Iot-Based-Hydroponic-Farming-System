import { View, Text,Image,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Tabs = ({ Navigation = useNavigation() }) => {
  return (
    <View style ={styles.container} >
   
  
   <View style={styles.leftcontainer}>

    <TouchableOpacity onPress={() => Navigation.navigate('HomeScreen')}>
    <Image
    style={styles.icon} 
     source={require('../Headerfils/left.png')}
     >
     </Image>
    </TouchableOpacity>
   </View>


   <View style ={styles.iconsContainer}>

    <Text style={styles.headerText}>Data</Text>
    
      </View>
  
      
    </View>
  )
}
const styles = StyleSheet.create({
    
    container:{
        backgroundColor:'#22c177',
        justifyContent:"space-between",
        alignItems:'center',
        flexDirection:'row',
          height:100,
          width:'100%'
    },
  
    headerText:{
        color:"#fff",
       marginTop:30,
       fontSize: 20,
       fontWeight:'900',
       
   },
  iconsContainer:{
      justifyContent:'center',
      alignItems:'center',
      paddingRight:160

  },
  
  icon:{
      marginTop:25,
      marginHorizontal:16,
  },

  leftcontainer:{
    justifyContent:"space-between",
    alignItems:'center',
    marginTop:5,
  }
  
    
    });

export default Tabs
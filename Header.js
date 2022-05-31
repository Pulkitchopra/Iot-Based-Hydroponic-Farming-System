import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import firebase from '../Firebaseapp/firebase'

const handleSignOut =async ()=>{
    try {
        await firebase.auth().signOut()
        console.log('signed out')
        
    } catch (error) {
        console.log(error)
    }
}

const Header = () => {
  return (
    <View style ={styles.container} >
   
    <TouchableOpacity > 
    <Text style ={styles.headerText}>Hydroponika</Text>
    </TouchableOpacity>
   
   <View style ={styles.iconsContainer}>

    <TouchableOpacity onPress={handleSignOut}>
    <Image
    style={styles.icon} 
     source={require('../Headerfils/iconslogout.png')}
     >
     </Image>
    </TouchableOpacity>
          
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
     marginHorizontal:20,
     marginTop:25,
     fontSize: 20,
     fontWeight:'900',
    //  fontFamily:'monospace'
     
 },
iconsContainer:{
    flexDirection:"row",
},

icon:{
    marginTop:25,
}
  
  
  });
export default Header
import { View, Text, StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'


const AddSystem = () => {
  return (
      <View style={styles.container}>

    <View style ={styles.input}>
      <TextInput
                                placeholder='Enter Token'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                autoFocus={true}
                                


                            />
     
    </View>
    <View style ={styles.input}>
      <TextInput
                                placeholder='Email Address '
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                autoFocus={true}
                                


                            />
     
    </View>

    <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.button}>
            <Text style={{
              color: '#fff', fontWeight: '800',
              fontSize: 16
            }}>
                Add a new System
            </Text>
        </TouchableOpacity>
    </View>
      </View>
  )
}

const styles = StyleSheet.create({

    container:{

        justifyContent:'center',
        alignItems:'center',
        marginTop:220
    },


input:{

    borderRadius: 10,
        borderWidth: 1,
        marginBottom: 15,
        padding: 12,
        width:290,


},

button: {
    backgroundColor: '#22C177',
    alignItems: "center",
    justifyContent: "center",
    minHeight: 43,
    borderRadius: 4,
    width: 150,
    marginBottom: 25,
    marginTop: 20
  },
})

export default AddSystem
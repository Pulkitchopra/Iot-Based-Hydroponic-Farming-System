import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Values from './Values'
import AddSystem from './AddSystem'



const Section = ({ Navigation = useNavigation() }) => {

  return (

    <View style={styles.container}>

      <View style={styles.poster}>

        <Image
          source={require('../components/icons96.png')}>
        </Image>

        <View style={styles.imageText}>
          <Text style={styles.title}>Monitor Your System </Text>
          <Text style={styles.innerText}>Follow the best practices of Farming</Text>
        </View>
        <TouchableOpacity onPress={() => Navigation.navigate('Values')} style={styles.button}>

          <Text style={{
            color: '#fff', fontWeight: '800',
            fontSize: 16
          }}> Check Data</Text>

        </TouchableOpacity>

      </View>

      <View style={styles.midcontainer}>

        <View style={[styles.poster, styles.bg]}>

          <Image
            source={require('../components/iconsadd96.png')}>
          </Image>

          <View style={styles.imageText}>
            <Text style={styles.title}>Add a new system</Text>
            <Text style={styles.innerText}>Follow the best practices of Farming </Text>
          </View>
          <TouchableOpacity onPress={() => Navigation.navigate('AddSystem')}  style={styles.button}>

            <Text style={{
              color: '#fff', fontWeight: '800',
              fontSize: 16
            }}> Add new System</Text>

          </TouchableOpacity>

        </View>

      </View>

      <View style={styles.bottomtabscontainer}>
        <View style={styles.bottomImageContainer}>


          <Text style={styles.BottomText}> Copyright @2022</Text>
        </View>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 55,
  },

  poster: {
    borderWidth: 1,
    alignItems: 'center',
    width: 330,
    borderColor: "#fff",
    backgroundColor: '#fff',
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

  imageText: {
    alignItems: "center",
    justifyContent: "center",

  },

  title: {
    fontWeight: '800',
    fontSize: 18,

  },
  innerText: {
    color: 'grey'

  },
  bg: {
    backgroundColor: '#fff',
    marginTop: 20,
  },

  textsize: {
    fontSize: 14,
  },


  midcontainer: {

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10

  },
  bottomtabscontainer: {
    backgroundColor: '#22c177',
    alignItems: 'center',
    height: 50,
    width: 370,
    marginTop: 45
  },

  BottomText: {
    color: '#fff',
    justifyContent: "center",
    alignItems: 'center',
    padding: 2
  },
  bottomImageContainer: {
    flexDirection: 'row',
    marginTop: 10
  }
})
export default Section
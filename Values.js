import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import Tabs from './Tabs'
import { useNavigation } from '@react-navigation/native'
import firebase from '../Firebaseapp/firebase'
import { db } from '../Firebaseapp/firebase'
import { collection, doc, getDocs, getDoc } from 'firebase/firestore'




const Values = ({ Navigation = useNavigation() }) => {


  const [userDoc, setUserDoc] = useState(null)


  const Read = () => {
    const myDoc = doc(db, "Hydroponika", "SensorValues")

    try {
      getDoc(myDoc)
        .then((snapshot) => {

          if (snapshot.exists) {
            setUserDoc(snapshot.data())
          }
          else {
            alert("no doc found")
          }
        })
    } catch (error) {
      alert(error.message)

    }


  }


  return (
    <View >

      <Tabs />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={Read}>
          <Text style={{
            color: '#fff', fontWeight: '800',
            fontSize: 16
          }}>Get Data</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>

        <View style={[styles.poster, styles.bg]}>


          <Image style={styles.icon}
            source={require('../Headerfils/ph.png')}
          ></Image>


          <View>
            <TouchableOpacity onPress={Read}>

              {
                userDoc != null &&

                <Text style={styles.sensortext}>PH:{userDoc.PH}</Text>

              }

            </TouchableOpacity>
          </View>

        </View>

      </View>
      <View style={styles.middContainer}>

        <View style={[styles.poster]}>
          <Image style={styles.icon}
            source={require('../Headerfils/drop.png')}
          ></Image>

          <View>

            {
              userDoc != null &&

              <Text style={styles.sensortext}>TDS:{userDoc.TDS}</Text>

            }
          </View>

        </View>

      </View>



      <View style={styles.endContainer}>

        <View style={[styles.poster]}>

          <Image style={styles.icon}
            source={require('../Headerfils/hot.png')}
          ></Image>

          <View>

            {
              userDoc != null &&

              <Text style={styles.sensortext}>TEMP:{userDoc.TEMPERATURE}</Text>

            }
          </View>

        </View>



      </View>
      <View style={styles.bottomtabscontainer}>
        <Text style={styles.BottomText}>Connect With Us</Text>

        <View style={styles.bottomImageContainer}>


          <Image style={styles.BottomImage}
            source={require('../Headerfils/instaw24.png')}
          ></Image>

          <Image style={styles.BottomImage}
            source={require('../Headerfils/iconslinkedin24.png')}
          ></Image>


        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {

    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 60,
    backgroundColor: '#fff'
  },

  poster: {

    width: 375,
    height: 100,
    flexDirection: 'row',

  },
  middContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#22c177',
    
  },

  endContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',

  },



  icon: {

    marginLeft: 10,
    marginTop: 10,

  },

  bottomtabscontainer: {
    backgroundColor: '#22c177',
    alignItems: 'center',
    height: 70,
    width: '100%',
    marginTop: 130
  },

  BottomText: {
    color: '#fff',
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 10,

  },
  bottomImageContainer: {
    flexDirection: 'row',
    marginTop: 5,

  },
  sensortext: {
    marginTop: 40,
    marginLeft: 75,
    fontWeight: '600',
    fontSize: 16

  },
  button: {
    backgroundColor: '#22C177',
    alignItems: "center",
    justifyContent: "center",
    minHeight: 43,
    borderRadius: 4,
    width: 100,

  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,

  }


})

export default Values
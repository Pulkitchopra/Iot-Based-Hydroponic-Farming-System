import React from 'react'
import { ImageBackground, StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const WelcomeScreen = ({ Navigation = useNavigation() }) => {
  return (

    <ImageBackground style={styles.background}
      source={require('./abc/Hydroponikaa.png')}
    >
      <View style={styles.signupContainer}>
        <TouchableOpacity onPress={() => Navigation.navigate('Login')} style={styles.button}>
          <Text style={{
            color: '#fff', fontWeight: '800',
            fontSize: 16
          }}> Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>

  )
}

const styles = StyleSheet.create({

  background: {
    flex: 1,
  },
  signupContainer: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: "center",
    marginTop: 590,

  },
  button: {
    backgroundColor: '#22c177',
    alignItems: "center",
    justifyContent: "center",
    minHeight: 43,
    borderRadius: 10,
    width: 140,
  }

});

export default WelcomeScreen
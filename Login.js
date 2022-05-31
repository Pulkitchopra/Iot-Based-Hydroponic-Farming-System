import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import LoginForm from '../components/LoginForm';

const Login = ({ Navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../src/images/Hydroponika.png")} />

      </View>
      <LoginForm Navigation={Navigation} />

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 18,

  },
  logoContainer: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  }


});


export default Login
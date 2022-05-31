import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import SignUpForm from '../components/SignUpForm';

const SignupScreen = ({ Navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.imaget}
          source={require("../src/images/Hydroponika.png")} />

      </View>

      <SignUpForm Navigation={Navigation} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingHorizontal: 18,

  },
  logoContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },

});

export default SignupScreen
import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import firebase from './Firebaseapp/firebase'
import { SignedInStack, SignedOutStack } from './Navigation'

const AuthNavigator = () => {
  const [currentUser, setcurrentUser] = useState(null)

  const userHandler = user => 
    user ?setcurrentUser(user) : setcurrentUser(null)
 
  useEffect (
    ()=> firebase.auth().onAuthStateChanged(user=>userHandler(user))
  )
  return <>{currentUser?<SignedInStack/>:<SignedOutStack/>}</>
}

export default AuthNavigator
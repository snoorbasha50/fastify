import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Log = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Login Form</Text>
      <Text style={styles.desc}> You can reach me anytime </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your name</Text>
        <TextInput style={styles.inputStyle} autoCorrect={false}/>

        <Text style={styles.labels}>Enter Your password</Text>
        <TextInput style={styles.inputStyle} autoCorrect={false} />
      </View>
    </View>
  )
}

export default Log

const styles=StyleSheet.create({
  mainContainer:{
    height:"100%",
    paddingTop:30,
    paddingHorizontal:30,
    
  },
  mainHeader:{
    fontSize:25,
    fontWeight:"bold",
    margin:5
  },
  inputContainer:{

  },
  labels:{
      lineHeight:25,
      fontSize:15,
      marginTop:10,
      marginBottom:5,
      color:"#7d7d7d",
  },
  inputStyle:{
    borderColor:"black",
    borderRadius:1,
    paddingHorizontal:15,
    paddingVertical:6,
    fontSize:18,
    borderColor:"black",
    borderWidth:1,
    

  }

})

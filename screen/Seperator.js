import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../constant/Colors'
const Seperator = () => {
    return (
      <View style={styles.Seperator} />
    )
  }

export default Seperator;

const styles = StyleSheet.create({


  Seperator:{
    height: 1,
    backgroundColor: Colors.gray
  }

})
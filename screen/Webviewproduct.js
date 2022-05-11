import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'
import Colors from '../constant/Colors'
const Webviewproduct = ({ route }) => {
  const { item } = route.params
  let rating = (item.rating == null ? <Text>Rating Not Available</Text> : <Text>{item.rating}</Text>)
  console.log("itemweb", item);
  return (
    <View style={styles.WebView}>
      <WebView
        source={{
          uri: item.product_link,}} />
        <Text style={styles.text}>Description : </Text>
        <Text>{item.description}</Text>
        <Text style={styles.text}>Rating : {rating}</Text>
        <Text style={styles.text}>Product Type : {item.product_type}</Text>
    </View>
  )
}

export default Webviewproduct;

const styles = StyleSheet.create({

  WebView:{ flex: 1, 
    backgroundColor: Colors.plainwhite,
    padding:5
  },

 text:{
fontWeight:"bold"
}



})
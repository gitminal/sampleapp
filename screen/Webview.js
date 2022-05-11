import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'
import Colors from '../constant/Colors'
const Webview = ({ route }) => {

    const { item } = route.params
    let rating = (item.rating == null ? <Text>No Rating Available</Text> : <Text>{item.rating}</Text>)

    console.log("itemweb", item);
    return (
        <View style={styles.WebView}>
            <WebView
                source={{
                    uri: item.website_link }} />
                
                <Text style={styles.text}>Description : </Text>
        <Text>{item.description}</Text>
        <Text style={styles.text}>Rating : {rating}</Text>
        <Text style={styles.text}>Product Type : {item.product_type}</Text>

        </View>
    )
}

export default Webview;

const styles = StyleSheet.create({

    WebView:{ flex: 1, 
        backgroundColor: Colors.plainwhite,
        padding:5
      },
  
   text:{
       marginTop:3,
  fontWeight:"bold",
  }
  
  
  
  })
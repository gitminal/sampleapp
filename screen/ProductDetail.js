import { View, Text, StyleSheet, Image, ScrollView ,Linking} from 'react-native'
import React from 'react'
import Colors from '../constant/Colors';
import string from '../constant/string';
const ProductDetail = ({ route }) => {
    const { item } = route.params
    // console.log("itemproduct", item);
    let rating = (item.rating == null ? <Text>{string.norating}</Text> : <Text>{item.rating}</Text>)
    const obj = item.product_colors

    return (
        <ScrollView style={styles.container}>
            <Image style={styles.img} source={{ uri: item.image_link }}></Image>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.textprice}>{string.Price} = {string.Rs} {item.price}</Text>
            <View style={styles.linkview}>
                <Text onPress={() =>Linking.openURL(item.product_link)
                } style={styles.textlink} >{string.Productlink}</Text>
                <Text onPress={() =>Linking.openURL(item.website_link)
                } style={styles.textlink} >{string.websitelink}</Text>
            </View>
            <Text style={styles.text}>{string.Description}</Text>
            <Text style={styles.text}>{item.description}</Text>
            <Text style={styles.text}>{string.Rating}: {rating}</Text>
            <Text style={styles.text}>{string.ProductType} : {item.product_type}</Text>
            {obj == 0 ? <Text style={styles.textcolr}>{string.Colorunavailable}</Text> : <ScrollView style={styles.wrapper} horizontal={true}>
                {obj.map(({ colour_name, hex_value }) => {
                    return (
                        <View key={hex_value} style={styles.slide1} testID="color" >
                            <View style={{ ...styles.slide1, backgroundColor: hex_value }}></View>
                            {colour_name == null ? <Text style={styles.colortext}>{string.nocolorname}</Text> :
                                <Text style={styles.colortext}>{colour_name}</Text>}
                        </View>
                    )
                })}
            </ScrollView>
            }
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        height: 200
    },
    slide1: {
        margin: 2,
        width: 90,
        height: 90,
        marginTop:5
    },
    container: {
        backgroundColor: Colors.white,
        flex: 1,
        paddingHorizontal: 10,
    },
    img:
    {
        width: 150,
        height: 150,
        alignSelf: "center",
        justifyContent: "center",
    },
    text: {
        marginTop:10,
        margin: 2,
        fontSize: 15,
        alignSelf: "flex-start",
    },
    colortext: {
        margin: 2,
        fontSize: 14,
        alignSelf: "flex-start",
        width: 90
    },
    text1: {
        marginLeft: 12,
        margin: 10,
        fontSize: 14,
        alignSelf: "center",

    },
    textprice: {
        margin:2,
        alignSelf: "flex-start",
        fontSize: 16,
    },
    textlink: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.link,
        textDecorationLine: 'underline',
        textDecorationStyle: "solid", 
        textDecorationColor:Colors.bluelink
       },

    linkview: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10,
    },
    textcolr: {
        alignSelf: "flex-start",
        fontSize: 16,
        marginTop: 5,
        margin:2
    }
})
export default ProductDetail;
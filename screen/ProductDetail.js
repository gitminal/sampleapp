import { View, Text, StyleSheet, Image,ScrollView } from 'react-native'
import React from 'react'
import Colors from '../constant/Colors';
import constantElement from '../constant/constantElement';
const ProductDetail = ({ route, navigation }) => {
    console.log("props...", navigation);
    const { item } = route.params
    const obj = item.product_colors
    console.log("itemproduct", item);

    return (

        <View style={styles.container} >
            <Image style={styles.img} source={{ uri: item.image_link }}></Image>
            <Text style={styles.text}>{item.name}</Text>

            <Text style={styles.textprice}>Price = {constantElement.Rs} {item.price}</Text>
            <View style={styles.linkview}>
                <Text onPress={() => navigation.navigate("Webviewproduct",
                    {
                        item: item,
                    })
                } style={styles.textprice} >Product link</Text>
                <Text onPress={() => navigation.navigate("Webview",
                    {
                        item: item,
                    })
                }  style={styles.textprice} >website link</Text>

            </View>
           { obj==0?<Text style={styles.textcolr}>Color  Unavailable</Text>:   <ScrollView  style={styles.wrapper} horizontal={true}>
                {obj?.map(({ colour_name, hex_value}) => {
                    console.log("color", colour_name);
                    console.log("hex_value", hex_value);
                    return (
                        <View key={hex_value} style={styles.slide1} >
                            <View  style={{...styles.slide1,backgroundColor: hex_value}}></View>
                         {colour_name==null?<Text style={{ ...styles.text, width: 90}}>Color Name Not Available</Text>:
                            <Text style={{ ...styles.text, width: 90}}>{colour_name}</Text>}
                        </View>
                    )
                })}
            </ScrollView>
}
        </View>

    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        marginTop:40
    },
    slide1: {
        margin: 5, width: 90, height: 90,
    },
    container: {
        backgroundColor: Colors.white,
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: Colors.white
    },
    img:
    {
        width: 200,
        height: 200,
        alignSelf: "center",
        justifyContent: "center",
    },
    text: {
        margin: 6,
        fontSize: 16,
        alignSelf: "flex-start",
    },
    text1: {
        marginLeft: 12,
        margin: 10,
        fontSize: 14,
        alignSelf: "center",
    },
    textprice: {
        marginLeft: 8,
        alignSelf: "flex-start",
        fontSize: 16,
        fontWeight: 'bold',
    },
    linkview: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 40,
        },
        textcolr:{
            alignSelf:"flex-start",
            fontSize:16,
            marginTop:20,
            marginLeft:10
        }
})
export default ProductDetail;
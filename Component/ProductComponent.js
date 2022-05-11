import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../constant/Colors';
import constantElement from '../constant/constantElement';

const ProductComponent = ({ item, onPress }) => {

  console.log("propss...", item);
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <View style={styles.item}>
          <Image source={{ uri: item.image_link }} style={styles.imgcontainer} />
          <View style={styles.box}>
            <Text style={styles.labelproduct}>
              {item.name}
            </Text>
            <Text style={styles.label}>Price : {constantElement.Rs} {item.price}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )

}


const styles = StyleSheet.create({

  item: {
    marginVertical: 4,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  imgcontainer: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    borderWidth: 2,
    borderColor: Colors.gray,

  },
  box: {
    width: "70%",

  },
  label: {
    fontSize: 16,
    alignSelf: "flex-start",
    paddingLeft: 15,
    fontWeight: "900",
    marginTop: 10,

  },
  labelproduct: {
    fontSize: 15,
    paddingLeft: 15,
    fontWeight: "bold"

  },

})
export default ProductComponent;

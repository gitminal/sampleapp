import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Colors from '../constant/Colors'
import { GET_APISHOW, getproduct } from '../redux/action';
import ProductComponent from '../Component/ProductComponent';
import Seperator from './Seperator';
export default function Dashboard({ navigation }) {
  const { product, error, loading } = useSelector(state => state.productReducer);
  console.log("product.....", product);
  const dispatch = useDispatch();
  const fetchResult = () => dispatch(getproduct());
  useEffect(() => {
    dispatch({
      type: GET_APISHOW,
    })
    fetchResult();
  }, []);
 

  const renderItem = ({ item }) => {
    function pressHandler() {
      navigation.navigate("ProductDetail",
        {
          item: item,
        })
    }

    console.log("item", item);
    return (
      <ProductComponent item={item} onPress={pressHandler} />
    )
  }
  return (
    <View style={styles.container}>
      {loading ?
        <ActivityIndicator style={styles.activity} />
        : error ? <Text> {error}</Text> :
          <FlatList
            data={product}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            ItemSeparatorComponent={Seperator}
          />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: Colors.white
  },
  activity: {
    size: "large",
    color: Colors.gray,
    justifyContent: "center",
    flex:1
  },
 
  label: {
    fontSize: 14,
    paddingLeft: 10,
    alignSelf: "flex-start",
    paddingLeft: 15,
    fontWeight: "bold",
    marginTop: 10,

  },
  labelproduct: {
    fontSize: 15,
    paddingLeft: 15,
    fontWeight: "bold"

  },
 
})
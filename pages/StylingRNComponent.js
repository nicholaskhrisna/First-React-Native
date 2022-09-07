import React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import macbook from '../pics/macbook.jpeg'

const StylingRNComponent = () => {
    return (
      <View>
        {/* <Text style={styles.text}>Styling Component</Text>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'blue',
            borderWidth: 5,
            borderColor: 'pink',
            marginTop: 30,
            marginLeft: 30,
          }}
        /> */}
  
        {/* Card untuk macbook */}
        <View
          style={{
            padding: 12,
            backgroundColor: '#f2f2f2',
            width: 212,
          }}>
          <Image
            source={macbook}
            style={{
              width: 188,
              height: 107,
              borderRadius: 8,
            }}></Image>
  
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              marginTop: 16,
            }}>
            New Macbook Pro 2019
          </Text>
  
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: '#f2994a',
              marginTop: 14,
            }}>
            Rp. 25.000.000,-
          </Text>
  
          <Text
            style={{
              fontSize: 12,
              fontWeight: '300',
              marginTop: 12,
            }}>
            Jakarta Barat
          </Text>
  
          <View
            style={{
              backgroundColor: '#6fcf97',
              borderRadius: 25,
              // paddingVertical: 6, --> bisa pakai ini utk Top dan Bottom
              paddingTop: 6,
              paddingBottom: 6,
              marginTop: 20,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontWeight: '600',
                textAlign: 'center',
              }}>
              BELI
            </Text>
          </View>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    text: {
      color: '#10ac84',
      fontSize: 25,
      fontWeight: 'bold',
      marginTop: 40,
      marginLeft: 30,
    },
  });

  export default StylingRNComponent;
import React from 'react';
import {StyleSheet, View, Text, Image, Touchable, TouchableOpacity} from 'react-native';
import macbook from '../../pics/macbook.jpeg';

const Product = (props) => {
  return (
    <View style={styles.bgProduk}>
      <Image source={macbook} style={styles.gambarProduk}></Image>

      <Text style={styles.namaProduk}>New Macbook Pro 2019</Text>

      <Text style={styles.hargaProduk}>Rp. 25.000.000,-</Text>

      <Text style={styles.kotaProduk}>Jakarta Barat</Text>

      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>BELI</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  bgProduk: {
    padding: 12,
    backgroundColor: '#f2f2f2',
    width: 212,
  },
  gambarProduk: {
    width: 188,
    height: 107,
    borderRadius: 8,
  },
  namaProduk: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
  },
  hargaProduk: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#f2994a',
    marginTop: 14,
  },
  kotaProduk: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 12,
  },
  button: {
    backgroundColor: '#6fcf97',
    borderRadius: 25,
    // paddingVertical: 6, --> bisa pakai ini utk Top dan Bottom
    paddingTop: 6,
    paddingBottom: 6,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});

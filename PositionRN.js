import {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import cart from './cart.png';

class PositionRN extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.cartWrapper}>
          <Image source={cart} style={styles.iconCart} />
          <Text style={styles.notif}>10</Text>
        </View>
        <Text style={styles.text}>Keranjang Belanja Anda</Text>
      </View>
    );
  }
}

export default PositionRN;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    alignItems: 'center',
    flexDirection: 'column',
  },

  iconCart: {
    width: 65,
    height: 65,
  },

  cartWrapper: {
    width: 93,
    height: 93,
    borderWidth: 1,
    borderRadius: 93 / 2,
    borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },

  text: {
    fontSize: 12,
    color: '#777777',
    fontWeight: '700',
    marginTop: 8,
  },

  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6FCF97',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height:24,
    position: 'absolute',
    top: 0,
    right: 0
  }
});

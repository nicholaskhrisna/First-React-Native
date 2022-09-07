import {Component} from 'react';
import {Text, View, Image} from 'react-native';
import cb from '../pics/coolzebra.png'

class FlexBox extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'gray',
            alignItems: 'center',
            // flex-start atau blank = rata atas
            // center = rata tengah
            // flex-end = rata bawah
            justifyContent: 'space-between',
          }}>
          <View style={{width: 50, height: 50, backgroundColor: 'orange'}} />
          <View style={{width: 50, height: 100, backgroundColor: 'black'}} />
          <View style={{width: 50, height: 150, backgroundColor: 'red'}} />
          <View style={{width: 50, height: 200, backgroundColor: 'blue'}} />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
          <Image
            source={cb}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginRight: 14
            }}
          />
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Z-bra Cross</Text>
            <Text>69420 Subscriber</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default FlexBox;

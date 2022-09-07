import {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const PropsDinamis = () => {
  return (
    <View style={{
        alignItems: 'center'
    }}>
      <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 25}}>
        Props Dinamis : Contoh Rentetan Story IG
      </Text>
      <ScrollView horizontal>
      <View style={{flexDirection: 'row'}}>
      <Story gambar="https://placeimg.com/100/100/people/sepia" judul="Music Video" />
      <Story gambar="https://placeimg.com/100/100/tech/sepia" judul="Stories" />
      <Story gambar="https://placeimg.com/100/100/arch/grayscale" judul="Travelling" />
      <Story gambar="https://placeimg.com/100/100/animals/sepia" judul="Sportd" />
      <Story gambar="https://placeimg.com/100/100/nature/sepia" judul="Instruments" />

      <Story gambar="https://placeimg.com/100/100/people/sepia" judul="Music Video" />
      <Story gambar="https://placeimg.com/100/100/tech/sepia" judul="Stories" />
      <Story gambar="https://placeimg.com/100/100/arch/grayscale" judul="Travelling" />
      <Story gambar="https://placeimg.com/100/100/animals/sepia" judul="Sportd" />
      <Story gambar="https://placeimg.com/100/100/nature/sepia" judul="Instruments" />
      </View>
        </ScrollView>
      
      
    </View>
  );
};

const Story = (props) => {
  return (
    <View style={{marginRight: 20, alignItems:'center'}}>
      <Image
        source={{uri: props.gambar}}
        style={{width: 70, height: 70, borderRadius: 70/2}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({});

import React, {Component} from "react";
import {View, Text, Image, TextInput} from 'react-native'

const BasicComponent = () => {
    return (
      <View>
        <View style={{width: 80, height: 80, backgroundColor: 'green'}} />
  
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
  
        {/* panggil const Nama */}
        <Nama></Nama>
        <Nama />
  
        {/* panggil const Gambar */}
        <Gambar />
  
        <TextInput style={{borderWidth: 1}}></TextInput>
  
        {/* panggil class component Profile */}
        <Profile />
      </View>
    );
  };
  
  const Nama = () => {
    return <Text>Nicholas</Text>;
  };
  
  const Gambar = () => {
    return (
      <Image
        source={{uri: 'https://placeimg.com/100/100/animals'}}
        style={{width: 100, height: 100}}></Image>
    );
  };
  
  class Profile extends Component {
    render() {
      return (
        <View>
          <Text style={{color: 'blue', fontSize: 25}}>Class Component</Text>
          <Image
            source={{uri: 'https://placeimg.com/100/100/people'}}
            style={{width: 100, height: 100, borderRadius: 50}}
          />
          <Text style={{color: 'blue', fontSize: 25}}>Ini foto profile</Text>
        </View>
      );
    }
  }

  export default BasicComponent;
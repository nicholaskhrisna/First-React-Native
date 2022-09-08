import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Text, Button} from 'react-native';

const CallAPI = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const [dataPost, setDataPost] = useState({
    name: '',
    job: ''
  })

  useEffect(() => {
    // GET
    // fetch('https://reqres.in/api/users/2')
    //   .then(response => response.json())
    //   .then(json => console.log(json));
    // POST
    // const dataForAPI = {
    //     name: "morpheus",
    //     job: "leader"
    // }
    // console.log('data object:', dataForAPI);
    // console.log('data stringify: ', JSON.stringify(dataForAPI));
    //     fetch('https://reqres.in/api/users', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(dataForAPI)
    //     })
    //     .then(response => response.json())
    //     .then(json => console.log('post response: ', json));
  }, []);

  const getData = () => {
    fetch('https://reqres.in/api/users/2')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json.data);
      });
  };

  const postData = () => {
    const dataForAPI = {
      name: 'morpheus',
      job: 'leader',
    };
    // console.log('data object:', dataForAPI);
    // console.log('data stringify: ', JSON.stringify(dataForAPI));
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForAPI),
    })
      .then(response => response.json())
      .then(json => {
        console.log('post response: ', json)
        setDataPost(json)
      })
        
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Calling API dengan VanillaJS</Text>

      <Button title="GET DATA" onPress={getData} />
      <Text style={{fontWeight: 'bold'}}>GET response:</Text>
      <Image source={{uri:dataUser.avatar}} style={styles.avatar} />
                        {/* ^ */}
      {/* Sudah dicoba: bisa dengan url gambar lain, namun tidak dengan link avatar dari API */}
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>

      <Text>Link foto : {dataUser.avatar}</Text>

      <View style={styles.line} />

      <Button title="POST DATA" onPress={postData} />
      <Text>POST response:</Text>
      <Text>{dataPost.name}</Text>
      <Text>{dataPost.job}</Text>
    </View>
  );
};

export default CallAPI;

const styles = StyleSheet.create({
  container: {padding: 20},

  textTitle: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },

  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});

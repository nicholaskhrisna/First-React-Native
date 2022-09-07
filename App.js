/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React from 'react';
// import Text from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
//  * LTI update could not be added via codemod */
// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More and more and mOrE">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

import React, {Component} from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import macbook from './macbook.jpeg'

const App = () => {
  return (
    <StylingRNComponent />
  )
}

const StylingRNComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View style={{
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        borderWidth: 5,
        borderColor: 'pink',
        marginTop: 30,
        marginLeft: 30
      }}/>

      {/* Card untuk macbook */}
      <View style={{
        padding: 12, 
        backgroundColor: '#f2f2f2',
        width: 212}}>

        <Image source={macbook} style={{
          width: 188, 
          height: 107,
          borderRadius: 8}}>
        </Image>

        <Text style={{
          fontSize: 14, 
          fontWeight: 'bold', 
          marginTop: 16}}>New Macbook Pro 2019
        </Text>

        <Text style={{
          fontSize: 12,
          fontWeight: 'bold',
          color: '#f2994a',
          marginTop: 14}}>Rp. 25.000.000,-
        </Text>

        <Text style={{
          fontSize: 12,
          fontWeight: '300',
          marginTop: 12
        }}>Jakarta Barat
        </Text>

        <View style={{
          backgroundColor: '#6fcf97',
          borderRadius: 25,
          // paddingVertical: 6, --> bisa pakai ini utk Top dan Bottom
          paddingTop: 6,
          paddingBottom: 6,
          marginTop: 20
        }}>
          <Text style={{
            color: 'white',
            fontSize: 14,
            fontWeight: '600',
            textAlign: 'center'
          }}>BELI</Text>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#10ac84',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 40,
    marginLeft: 30
  }
})

const BasicComponent = () => {
  return(
    <View>
      <View style={{width: 80, height: 80, backgroundColor: 'green'}}/>

      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>

      {/* panggil const Nama */}
      <Nama></Nama> 
      <Nama/>

      {/* panggil const Gambar */}
      <Gambar/>

      <TextInput style={{borderWidth: 1}}></TextInput>

      {/* panggil class component Profile */}
      <Profile />
    </View>
  );
}

const Nama = () => {
  return <Text>Nicholas</Text>
}

const Gambar = () => {
  return <Image source={{uri: 'https://placeimg.com/100/100/animals'}} style={{width: 100, height: 100}}></Image>
}

class Profile extends Component {
  render() {
    return(
      <View>
      <Text style={{color: 'blue', fontSize: 25}}>Class Component</Text>
      <Image 
        source={{uri: 'https://placeimg.com/100/100/people'}} 
        style={{width: 100, height: 100, borderRadius: 50}}/>
      <Text style={{color: 'blue', fontSize: 25}}>Ini foto profile</Text>
    </View>
    );
  }
}

export default App;

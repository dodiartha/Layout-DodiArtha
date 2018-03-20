import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
  
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
          <View style={styles.box1}>
              <Text style={{ padding: 30, fontSize: 20, color: 'white', textAlign: 'center'}} >Pendidikan Teknik Informatika</Text>
          </View>
          <View style={styles.box2}>
              <Text style={styles.text}>Slider</Text>
          </View>
          <View style={styles.box3}>
              <View style={styles.button}><Text> 1 </Text></View>
              <View style={styles.button}><Text> 2 </Text></View>
              <View style={styles.button}><Text> 3 </Text></View>
              <View style={styles.button}><Text> 4 </Text></View>
              
          </View>
          <View style={styles.box4}>
              <View style={styles.button}><Text> 5 </Text></View>
              <View style={styles.button}><Text> 6 </Text></View>
              <View style={styles.button}><Text> 7 </Text></View>
              <View style={styles.button}><Text> 8 </Text></View>
            
          </View>
          <View style={styles.box5}>
              <Text style={{ padding: 15, fontSize: 20, color: 'white', textAlign: 'center'}} >#JaenKuliahdiPTI</Text>
          </View>
               
      </View>
       );
      }
  }

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#a4b0be',
    flex: 1,
    flexDirection: 'column'
  },

  box1: {
    flex: 1,
    backgroundColor: '#2f3542',        
  },

  box2: {
    flex: 4,
    backgroundColor: '#57606f',
      justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10
  },

  box3: {
    flex: 2,
    backgroundColor: '#747d8c',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },

  box4: {
    flex: 2,
    backgroundColor: '#747d8c',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  button: {
    width: 50,
    height: 50,
    backgroundColor: '#ced6e0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  box5: {
    flex: 1,
    backgroundColor: '#2f3542',
    margin: 10
  },


  text: {
    fontSize: 40
  },
});

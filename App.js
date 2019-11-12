import React, { Component } from 'react';
import {
 Text,
 View,
 StyleSheet,
 TextInput,
 SafeAreaView,
 ScrollView,
 Alert,
 Button,
 Image,
} from 'react-native';
import Constants from 'react';
import { red } from 'ansi-colors';
function Separator() {
 return <View style={styles.separator} />;
}
export default class App extends React.Component {
 render() {
   return (
     <SafeAreaView style={styles.container}>
     <View style={styles.img}>
       <Image
         style={{ width: 50, height: 100}}
         source={{
           uri: 'https://cdn.pixabay.com/photo/2016/03/26/01/17/treble-clef-1279909_960_720.png',
         }}
       />
         </View>
        <Text style={styles.txttopo}>Escola de Inicialização Musical
Ancilas do Menino Jesus</Text>
       <Text style={styles.textos}>Matricula:</Text>
       <TextInput
         keyboardType={'numeric'}
         style={styles.placeholder}
         placeholder="56465445"
       />
 
       <Text style={styles.textos}>Senha:</Text>
       <TextInput
         keyboardType={'numeric'}
         style={styles.placeholder}
         placeholder="56464784"
       />

       <View style={styles.botao}>
        <View>
          <Button title="         Entrar          " />  
        </View>
 
       </View>
        <View style={styles.botao}>
           <Button title="Esqueceu a Senha?"/>
         </View>
     </SafeAreaView>
   );
 }
}
const styles = StyleSheet.create({
 container: {
   flex: 1,
   paddingTop: Constants.statusBarHeight,
   padding: 90,
   justifyContent: 'center',
   alignItems: 'center',
 },
 txttopo: {
   fontSize: 25,
   padding: 8,
   textAlign: "center",
   flex: 1
 },
 textos: {
   fontSize: 15,
   padding: 5,
   fontWeight: 'bold',
 },
 placeholder: {
   color: 'black',
   fontSize: 18,
   fontWeight: 'bold',
   borderColor: 'steelblue',
   borderWidth: 2,
   padding: 8,
   backgroundColor:'white',
   borderColor: '#d6d7da'
 },
 botao: {
   marginBottom: 8,
   marginTop: 10,
   flexDirection: 'row',
   fontWeight: 'bold',
   justifyContent: 'center',
   alignItems: 'center',
   left: 1,
   position: 'relative',
 
 },
 separator: {
   backgroundColor:"white",
   marginVertical: 15,
   borderBottomWidth: StyleSheet.hairlineWidth,
 },
   img: {
   fontSize: 15,
   padding: 5,
   justifyContent: 'center',
   alignItems: 'center',
 },
});

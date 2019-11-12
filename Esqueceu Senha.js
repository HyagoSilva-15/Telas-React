import React, { Component } from 'react';
import {
 Text,
 View,
 StyleSheet,
 TextInput,
 SafeAreaView,
 Button,
 Image,
} from 'react-native';
import Constants from 'react';
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
        <Text style={styles.txttopo}>Esqueci a Senha</Text>
       <Text style={styles.textos}>Matricula:</Text>
       <TextInput
         keyboardType={'numeric'}
         style={styles.placeholder}
         placeholder="201814574"
       />
 
       <Text style={styles.textos}>E-mail:</Text>
       <TextInput
         style={styles.placeholder}
         placeholder="joao@gmail.com"
       />

       <View style={styles.botao}>
        <View>
          <Button title="Enviar" />  
        </View>
 
       </View>
        <View style={styles.botao}>
           <Button title="Voltar"/>
         </View>
     </SafeAreaView>
   );
 }
}
const styles = StyleSheet.create({
 container: {
   flex: 2,
   paddingTop: Constants.statusBarHeight,
   padding: 145,
   justifyContent: 'center',
   alignItems: 'center',
 },
 txttopo: {
   fontSize: 25,
   padding: 5,
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
   padding: 10,
   backgroundColor:'white',
   borderColor: '#d6d7da'
 },
 botao: {
   marginBottom: 10,
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
   fontSize: 5,
   padding: 5,
   justifyContent: 'center',
   alignItems: 'center',
 },
});

import React from "react";
import {View, Text, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native'
import  ButtonCal  from './ButtonCal.js'

export default function ViewCalculator() {

    const [value1, setVal1] = React.useState('');
    const [value2, setVal2] = React.useState('');

    const clear = () => {
        setVal1('')
        setVal2('')
    }
        return(
            <View style={styles.container}>
               <TextInput style={styles.input} value={value1}  placeholder='Value A' onChangeText={setVal1}/>
               <TextInput style={styles.input} value={value2} placeholder='Value B'  onChangeText={setVal2}/>
            <ButtonCal inputValue={[value1, value2]} onClear={clear}/>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 50,
        backgroundColor:'pink'
    },
    input: {
        height: 45,
        margin: 12,
        width:300,
        padding: 10,
        borderRadius:5,
        fontSize:17,
        backgroundColor:'rgb(255,255,255)',
      },
    buttonElement: {
        display : 'flex',
        flexDirection: 'row',
        flexWrap:'wrap',
        width:300,
        height:200,
        justifyContent:'center',
        alignItems:'center',
       
    },
    text: {
        fontSize:30,
        fontWeight:800,
        color: 'white'
    },
    button: {
        height:60,
        width:60,
        margin:10,
        borderRadius:5,
        backgroundColor:'salmon',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }
})

import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default function ButtonCal(props) {

    const value1 = props.inputValue[0]
    const value2 = props.inputValue[1]
    const [result, setResult] = React.useState('');

    if(value1 === NaN || value2 === NaN){
        setResult('')
    }

    const tambah = () => {
        if(value1 && value2){
            if(value1 / value1 === 1 && value2 / value2 === 1){
                return setResult(parseInt(value1) + parseInt(value2))
            }
        } else { return setResult('') }
       
    }
    const kali = () => {
        if(value1 && value2){
            if(value1 / value1 === 1 && value2 / value2 === 1){
                return setResult(parseInt(value1) * parseInt(value2))
            }
        } else { return setResult('') }
    }
    const kurang = () => {
        if(value1 && value2){
            if(value1 / value1 === 1 && value2 / value2 === 1){
                return setResult(parseInt(value1) - parseInt(value2))
            }
        } else { return setResult('') }
    }
    const bagi = () => {
        if(value1 && value2){
            if(value1 / value1 === 1 && value2 / value2 === 1){
                return setResult(parseInt(value1) / parseInt(value2))
            }
        } else { return setResult('') }
    }
    const modulus = () => {
        if(value1 && value2){
            if(value1 / value1 === 1 && value2 / value2 === 1){
                return setResult(parseInt(value1) %  parseInt(value2))
            }
        } else { return setResult('') }
    }
    const clear = () => {
        props.onClear()
        setResult('')
    }

   

    console.log(value1 + ' | ' + value2)

        return(
            <View>
                <View style={styles.buttonElement}>
                    <TouchableOpacity style={styles.button} onPress={() => tambah()}>
                        <Text style={styles.text}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => bagi()}>
                        <Text style={styles.text}>/</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => kurang()}>
                        <Text style={styles.text}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => kali()}>
                        <Text style={styles.text}>*</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => modulus()}>
                        <Text style={styles.text}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonClear} onPress={() => clear()}>
                        <Text style={styles.text}>C</Text>
                    </TouchableOpacity>
                </View >
                <Text style={styles.textResult}>Result</Text>
                <Text style={styles.result}>{result} </Text>
            </View>
        )
}

const styles = StyleSheet.create({
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
        fontSize: 30,
        fontWeight: 'bold',
        color:'white'
    },
    textResult: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'rgb(43,43,45)',
        marginBottom:10,
       
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
    },
    buttonClear: {
        height:60,
        width:60,
        margin:10,
        borderRadius:5,
        backgroundColor:'green',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    result: {
        borderRadius: 5,
        padding:5,
        width:300,
        height:45,
        fontSize:20,
        backgroundColor:'#ffff',
        color:'black',
        paddingTop:7,
        paddingLeft:8
    }
})
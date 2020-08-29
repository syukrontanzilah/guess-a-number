import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import Card from '../../component/Card'
import colors from '../../util/colors'
import Input from '../../component/Input'
import NumberContainer from '../../component/NumberContainer'

const StartGame = (props) => {
    const [enterValue, setEnterValue] = useState('')
    const [confirm, setConfirm] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()
    const numberInputHandler = (inputText) => {
        setEnterValue(inputText.replace(/[^0-9]/g, ''));
    }
    const resetInputHandler = () => {
        setEnterValue('')
        setConfirm(false)
    }

    const confirmInputHandler = () => {
        const choseNumber = parseInt(enterValue)
        if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
            Alert.alert('Angka mu salah', 'Masukkan angka 1 - 99', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return
        }
        setConfirm(true)
        setSelectedNumber(parseInt(choseNumber))
        setEnterValue('')
        Keyboard.dismiss()
    }

    let confirmedOutput
    if (confirm) {
        confirmedOutput = (
            <Card style={styles.summary}>
                <Text>Kamu memilih</Text>
                <View style={{flexDirection:'row', marginVertical:20}}>
                    <Image source={require('../../asset/icon/Nussa_Bio_1.png')} 
                    style={{height:100, width:50, marginRight:10}}/>
                     <NumberContainer>
                   {selectedNumber}
               </NumberContainer>
                </View>
              
               <Button title="Start Game" color="green"/>
            </Card>
        )
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => { Keyboard.dismiss() }}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Mulai Permainan</Text>
                <Card style={styles.inputContainer}>
                    <Text>Pilih angka</Text>
                    <Input
                        value={enterValue}
                        onChangeText={numberInputHandler}
                        maxLength={2}
                        autoCorrect={false}
                        placeholder="0"
                        keyboardType="number-pad"
                        style={styles.input} />
                    <View style={styles.btnContainer}>
                        <View style={styles.button}>
                            <Button title="Ubah" color={colors.secondary}
                                onPress={resetInputHandler} />
                        </View>
                        <View style={styles.button}>
                            <Button title="OK" color={colors.primary}
                                onPress={confirmInputHandler}
                            />
                        </View>
                    </View>
                </Card>
                {
                    confirmedOutput
                }
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGame

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 12
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    input: {
        color: '#f4287b',
        fontSize: 35,
        height: 50,
        maxWidth: 150,
        textAlign: 'center',

    },
    btnContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 13
    },
    button: {
        width: 80
    },
    summary:{
        marginTop: 20,
        alignItems:'center'

    }
})

import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableWithoutFeedback, Keyboard, Alert, Dimensions } from 'react-native'
import Card from '../../component/Card'
import colors from '../../util/colors'
import Input from '../../component/Input'
import NumberContainer from '../../component/NumberContainer'
import { fonts } from '../../util/fonts'
import MyButton from '../../component/MyButton'

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

    const Avatar = (props) => {
        if (selectedNumber >= 30 && selectedNumber <= 70) {
            return <Image
                source={require('../../asset/icon/Nussa_Bio_1.png')}
                style={{ height: 100, width: 50, marginRight: 20 }} />
        } if (selectedNumber < 30) {
            return <Image source={require('../../asset/icon/rara.png')}
                style={{ height: 100, width: 50, marginRight: 20 }} />
        } else {
            return <Image source={require('../../asset/icon/nussa-rara.jpg')}
                style={{ height: 100, width: 80, marginRight: 20 }} />
        }
    }

    let confirmedOutput
    if (confirm) {
        confirmedOutput = (
            <Card style={styles.summary}>
                <Text style={{ fontFamily: fonts.happy, fontSize: 25, color: 'green' }}>Kamu memilih :</Text>
                <View style={{ flexDirection: 'row', marginVertical: 20, paddingHorizontal: 20 }}>
                    <Avatar />
                    <NumberContainer>
                        {selectedNumber}
                    </NumberContainer>
                </View>
                <MyButton
                    style={{ backgroundColor: 'green' }}
                    onPress={() => props.onStartGame(selectedNumber)}
                >
                    Start Game
                </MyButton>
                {/* <Button title="Start Game" color="green" onPress={() => props.onStartGame(selectedNumber)} /> */}
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
                    <Text style={{ fontFamily: fonts.happy, fontSize: 25 }}>Pilih angka mu</Text>
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
                            <MyButton
                                style={{ backgroundColor: colors.secondary }}
                                onPress={resetInputHandler}
                            >Ubah</MyButton>
                        </View>
                        <View style={styles.button}>
                            <MyButton onPress={confirmInputHandler}
                            >OKe</MyButton>
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
        fontSize: 25,
        marginVertical: 12,
        fontFamily: fonts.happy
    },
    inputContainer: {
        width: '80%',
        maxWidth: '95%',
        minWidth:300,
        alignItems: 'center',
    },
    input: {
        color: '#f4287b',
        fontSize: 40,
        height: 55,
        maxWidth: 150,
        textAlign: 'center',
        fontFamily: fonts.primary

    },
    btnContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 13
    },
    button: {
        // width: 75
        width: Dimensions.get('window').width /5.5
    },
    summary: {
        marginTop: 20,
        alignItems: 'center',

    }
})

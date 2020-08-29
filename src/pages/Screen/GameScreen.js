import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native'
import NumberContainer from '../../component/NumberContainer';
import Card from '../../component/Card';
import colors from '../../util/colors';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max)
    const rndNum = Math.floor(Math.random() * (max - min)) + min
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum;
    }
}

const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, props.userChoice)
    )

    const currentLow = useRef(1)
    const currentHight = useRef(100)

    const nextGuessHandler = (direction) => {
        if ((direction === 'lebih kecil' && currentGuess < props.userChoice) || (direction === 'lebih besar' && currentGuess > props.userChoice)) {
            Alert.alert("Jangan bohoong dech!", "kamu sendiri tau itu salah hufft...", [{text: 'Okey', style:'cancel'}])
            return;
        }
        if(direction === 'lebih kecil'){
           currentHight.current = currentGuess
        } else {
            currentLow.current = currentGuess;
        }
       const nextNumber = generateRandomBetween(currentLow.current, currentHight.current, currentGuess)
       setCurrentGuess(nextNumber)
    }

    const Avatar = () => {
        if (currentGuess > 0 && currentGuess < 30) {
            return <Image source={require('../../asset/icon/Nussa_Bio_1.png')}
                style={{ height: 100, width: 50, marginRight: 20 }} />
        } if (currentGuess >= 30 && currentGuess <= 70) {
            return <Image source={require('../../asset/icon/rara.png')}
                style={{ height: 100, width: 50, marginRight: 20 }} />
        }
        else {
            return <Image source={require('../../asset/icon/nussa-rara.jpg')}
                style={{ height: 100, width: 80, marginRight: 20 }} />
        }
    }

    return (
        <View style={styles.page}>
            <Text>Tebakan angka: </Text>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Avatar />
                <NumberContainer>
                    {currentGuess}
                </NumberContainer>
            </View>

            <Card style={styles.buttonContainer}>
                <Button
                    title="Lebih kecil"
                    onPress={nextGuessHandler.bind(this, 'lebih kecil')}
                    color={colors.secondary} />
                <Button
                    title="Lebih Besar"
                    onPress={nextGuessHandler.bind(this, 'lebih besar')}
                    color={colors.primary} />
            </Card>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',

    }
})

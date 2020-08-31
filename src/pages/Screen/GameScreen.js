import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Alert, Image, ScrollView, FlatList, Dimensions } from 'react-native'
import NumberContainer from '../../component/NumberContainer';
import Card from '../../component/Card';
import colors from '../../util/colors';
import { fonts } from '../../util/fonts';
import MyButton from '../../component/MyButton';

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


const renderListItem = (listLength, itemData) => (
    <View style={{ padding: 10, marginVertical: 5, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }} >
        <View style={{ backgroundColor: 'orange', width: 30, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
            <Text style={{ color: '#fff', fontFamily: fonts.happy }}>#{listLength - itemData.index}</Text>
        </View>

        <View style={{ height: 35, width: 35, borderRadius: 35 / 2, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontFamily: fonts.happy, color: '#fff', fontSize: 18 }}>{itemData.item}</Text>
        </View>
    </View>
)

const GameScreen = (props) => {
    const initialGuess = generateRandomBetween(1, 100, props.userChoice)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()])
    const currentLow = useRef(1)
    const currentHight = useRef(100)

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length)
        }
    }, [currentGuess, userChoice, onGameOver])

    const nextGuessHandler = (direction) => {
        if ((direction === 'lebih kecil' && currentGuess < props.userChoice) || (direction === 'lebih besar' && currentGuess > props.userChoice)) {
            Alert.alert("Jangan bohoong dech!", "kamu sendiri tau itu salah hufft...", [{ text: 'Okey', style: 'cancel' }])
            return;
        }
        if (direction === 'lebih kecil') {
            currentHight.current = currentGuess
        } else {
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = generateRandomBetween(
            currentLow.current,
            currentHight.current,
            currentGuess
        )
        setCurrentGuess(nextNumber)
        // setRound(curRounds => curRounds + 1)
        setPastGuesses(curPastGuesses => [nextNumber.toString(), ...curPastGuesses]);
    }

    const Avatar = () => {
        if (currentGuess > 0 && currentGuess < 20) {
            return <Image source={require('../../asset/icon/Nussa_Bio_1.png')}
                style={{ height: 100, width: 50, marginRight: 20 }} />
        } if (currentGuess >= 20 && currentGuess < 40) {
            return <Image source={require('../../asset/icon/rara.png')}
                style={{ height: 100, width: 50, marginRight: 20 }} />
        }
        if (currentGuess >= 40 && currentGuess < 60) {
            return <Image source={require('../../asset/icon/nusarara3.png')}
                style={{ height: 100, width: 120, marginRight: 20 }} />
        }
        if (currentGuess >= 60 && currentGuess < 80) {
            return <Image source={require('../../asset/icon/kucing.jpg')}
                style={{ height: 40, width: 60, marginRight: 5, alignSelf: 'flex-end', marginBottom: 10 }} />
        }
        else {
            return <Image source={require('../../asset/icon/nussa-rara.jpg')}
                style={{ height: 100, width: 80, marginRight: 20 }} />
        }
    }

    return (
        <View style={styles.page}>
            <Text style={{ fontFamily: fonts.happy, fontSize: 25, color: colors.secondary, marginTop: 20 }}>Tebakan NUSA Rara: </Text>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                <Avatar />
                <NumberContainer>
                    {currentGuess}
                </NumberContainer>
            </View>
            <Text style={{ fontFamily: fonts.tiki, fontSize: 30, color: colors.primary }}>Apakah benar?? </Text>
            <Card style={styles.buttonContainer}>
                <MyButton
                    onPress={nextGuessHandler.bind(this, 'lebih kecil')}
                    style={{ backgroundColor: colors.secondary }}>
                    Lebih Kecil</MyButton>
                <MyButton
                    onPress={nextGuessHandler.bind(this, 'lebih besar')}>
                    Lebih Besar</MyButton>
            </Card>
            <View style={{ width: '50%', flex: 1 }}>
                {/* <ScrollView 
                contentContainerStyle={{}}
                showsVerticalScrollIndicator={false}>
                    {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
                </ScrollView> */}
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={pastGuesses}
                    keyExtractor={item => item}
                    renderItem={renderListItem.bind(this, pastGuesses.length)}
                />
            </View>

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
        marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
        width: Dimensions.get('window').width > 350 ? '80%' : '90%',
        maxWidth: '80%',

    }
})

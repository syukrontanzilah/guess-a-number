import React, { useState } from 'react'
import { StatusBar, StyleSheet, View, Platform } from 'react-native'
import Header from '../../component/Header'
import colors from '../../util/colors'
import StartGame from '../Screen/StartGame'
import GameScreen from '../Screen/GameScreen'
import GameOver from '../Screen/GameOver'

const Home = () => {
    const [userNumber, setUserNumber] = useState()
    const [guessRound, setGuessRound] = useState(0)

    const configureNewGameHandler = () => {
        setGuessRound(0);
        setUserNumber(null)
    }

    const startGameHandler = (selectNumber) => {
        setUserNumber(selectNumber)
    }

    const gameOverHandler = (numbOfRound) => {
        setGuessRound(numbOfRound)
    }

    let content = <StartGame onStartGame={startGameHandler} />
    if (userNumber && guessRound <= 0) {
        content = (
            <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
        )
    } else if (guessRound > 0) {
        content = (
            <GameOver
                roundsNumber={guessRound}
                userNumber={userNumber}
                onRestart={configureNewGameHandler}
            />
        )
    }

    return (
        <View style={styles.page}>
            <StatusBar backgroundColor={ Platform.OS === "android" ? colors.primary : colors.secondary} />

            <Header title="Tebak Angka" />

            {content}

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        flex: 1
    }
})

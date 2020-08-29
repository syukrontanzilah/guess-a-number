import React, { useState } from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import Header from '../../component/Header'
import colors from '../../util/colors'
import StartGame from '../Screen/StartGame'
import GameScreen from '../Screen/GameScreen'

const Home = () => {
    const [userNumber, setUserNumber] = useState()
    const startGameHandler = (selectNumber) => {
        setUserNumber(selectNumber)
    }

    let content = <StartGame onStartGame ={startGameHandler} />
    if (userNumber) {
        content = <GameScreen userChoice = {userNumber} />
    }

    return (
        <View style={styles.page}>
            <StatusBar backgroundColor={colors.primary} />

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

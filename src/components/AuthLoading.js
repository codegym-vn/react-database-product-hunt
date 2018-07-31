import React, {Component} from 'react'
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native'
import {bootstrapAuth} from "../services/AuthServices"

class AuthLoading extends Component {
    constructor(props) {
        super(props)
        this._bootstrapAsync()
    }

    _bootstrapAsync = () => {
        bootstrapAuth()
            .then(isAuthenticated => {
                const screen = isAuthenticated ? 'App' : 'Auth'
                this.props.navigation.navigate(screen)
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator/>
                <StatusBar barStyle="default"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default AuthLoading
import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {logout} from "../../services/AuthServices"

class LogoutButton extends Component {
    _handlePressLogout = () => {
        logout()
    }

    render() {
        return (
            <TouchableOpacity onPress={this._handlePressLogout}>
                <View style={styles.container}>
                    <Text style={styles.text}>Logout</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingRight: 12,
    },

    text: {
        color: '#333'
    }
})

export default LogoutButton
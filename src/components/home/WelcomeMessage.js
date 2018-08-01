import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import LogoutButton from "./LogoutButton"

class WelcomeMessage extends Component {
    render() {
        const {isAuthenticated, user} = this.props
        const name = user.displayName || user.email

        const welcomeText = isAuthenticated ? `Hello ${name}` : `Hello Guest`

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{welcomeText}</Text>

                {
                    isAuthenticated && <LogoutButton/>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },

    welcome: {
        paddingLeft: 12,
        fontSize: 14,
        color: '#333'
    },
})

WelcomeMessage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
}

export default WelcomeMessage
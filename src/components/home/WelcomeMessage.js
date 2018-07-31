import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import LogoutButton from "./LogoutButton"

class WelcomeMessage extends Component {
    render() {
        const {isAuthenticated, user} = this.props
        const name = user.displayName || user.email

        return (
            <View style={styles.container}>
                {
                    isAuthenticated ? <Text>Hello {name}</Text>
                        : <Text>Hello Guest</Text>
                }

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
        justifyContent: 'space-between'
    }
})

WelcomeMessage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
}

export default WelcomeMessage
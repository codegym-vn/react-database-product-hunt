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
                <View>
                    {
                        isAuthenticated ? <Text>Hello {name}</Text>
                            : <Text>Hello Guest</Text>
                    }

                    {
                        isAuthenticated && <LogoutButton/>
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {}
})

WelcomeMessage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
}

export default WelcomeMessage
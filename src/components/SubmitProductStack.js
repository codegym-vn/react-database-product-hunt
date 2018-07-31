import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import {createStackNavigator} from 'react-navigation'
import FormSubmit from "./submit/FormSubmit"
import withAuthentication from "./shared/withAuthentication"
import {submitProduct} from "../services/RealtimeServices"

class SubmitProductStack extends Component {
    static navigationOptions = {
        title: 'Submit',
        headerStyle: {
            backgroundColor: '#da552f'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }

    _handleOnSubmit = name => {
        submitProduct(name)
            .then(() => {
                this.props.navigation.navigate('Home')
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Submit product</Text>

                <FormSubmit onSubmit={this._handleOnSubmit}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        color: 'red',
        fontSize: 20,
        marginBottom: 30,
    }
})

SubmitProductStack.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
}

export default createStackNavigator({
    Submit: {
        screen: withAuthentication(SubmitProductStack)
    },
})
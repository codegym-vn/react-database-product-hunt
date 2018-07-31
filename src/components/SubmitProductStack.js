import React, {Component} from 'react'
import {View, Text} from 'react-native'
import PropTypes from 'prop-types'
import {createStackNavigator} from 'react-navigation'
import FormSubmit from "./submit/FormSubmit"
import withAuthentication from "./shared/withAuthentication"

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

    }

    render() {
        return (
            <View>
                <Text>Submit product</Text>

                <FormSubmit onSubmit={this._handleOnSubmit}/>
            </View>
        )
    }
}

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
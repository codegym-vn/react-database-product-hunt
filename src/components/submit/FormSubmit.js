import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {View, TextInput, Button, StyleSheet} from 'react-native'

class FormSubmit extends Component {
    state = {
        name: '',
    }

    _handleChangeText = text => {
        this.setState({
            name: text
        })
    }

    _handleOnSubmit = () => {
        this.props.onSubmit(this.state.name)
        
        this.setState({
            name: ''
        })
    }

    render() {
        const {name} = this.state

        return (
            <View style={styles.container}>
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Product name'
                        returnKeyType='done'
                        onChangeText={this._handleChangeText}
                        value={name}/>

                    <Button title='Submit' onPress={this._handleOnSubmit}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {},

    textInput: {
        borderWidth: 1,
        borderColor: '#333',
        fontSize: 16,
        padding: 10,
        minWidth: '80%',
        marginBottom: 10,
    }
})

FormSubmit.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default FormSubmit
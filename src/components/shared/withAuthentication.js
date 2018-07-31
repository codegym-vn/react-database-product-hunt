import React, {Component} from 'react'
import {
    getCurrentUser,
    isAuthenticated,
    subscribeAuthentication,
    unsubscribeAuthentication
} from "../../services/AuthServices"

export default ComposedComponent => class WithAuthentication extends Component {
    static displayName = 'withAuthentication(' + (ComposedComponent.displayName || ComposedComponent.name) + ')'

    state = {
        isAuthenticated: isAuthenticated(),
        user: getCurrentUser()
    }

    componentDidMount() {
        subscribeAuthentication(this._handleAuthenticationChange)
    }

    componentWillUnmount() {
        unsubscribeAuthentication(this._handleAuthenticationChange)
    }

    _handleAuthenticationChange = () => {
        this.setState({
            isAuthenticated: isAuthenticated(),
            user: getCurrentUser()
        })
    }

    render() {
        return (
            <ComposedComponent {...this.state} {...this.props}/>
        )
    }
}
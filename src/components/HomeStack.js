import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {createStackNavigator} from 'react-navigation'
import {
    getCurrentUser,
    isAuthenticated,
    subscribeAuthentication,
    unsubscribeAuthentication
} from "../services/AuthServices"
import WelcomeMessage from "./home/WelcomeMessage"
import {getListProducts, voteProduct} from "../services/RealtimeServices"
import ListProducts from "./home/ListProducts"

class HomeStack extends Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#da552f'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }

    state = {
        isAuthenticated: isAuthenticated(),
        user: getCurrentUser(),
        products: []
    }

    componentDidMount() {
        subscribeAuthentication(this._handleOnChangeAuth)
        getListProducts().on('value', this._handleChangeProducts)
    }

    _handleChangeProducts = snapshot => {
        const products = this._parseObjectProducts(snapshot)

        this.setState({
            products
        })
    }

    _parseObjectProducts = (snapshot) => {
        const products = []

        snapshot.forEach(child => {
            products.push({
                vote: 0,
                name: '',
                key: child.key,
                ...child.val()
            })
        })

        return products.reverse()
    }

    componentWillUnmount() {
        unsubscribeAuthentication(this._handleOnChangeAuth)
    }

    _handleOnChangeAuth = () => {
        this.setState({
            isAuthenticated: isAuthenticated(),
            user: getCurrentUser()
        })
    }

    _handleUpVote = (key, vote) => {
        voteProduct(key, vote)
    }

    render() {
        const {products} = this.state

        return (
            <View style={styles.container}>
                <WelcomeMessage {...this.state}/>

                <ListProducts onUpVote={this._handleUpVote} products={products}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: '100%',
    }
})

export default createStackNavigator({
    Home: {
        screen: HomeStack
    },
})
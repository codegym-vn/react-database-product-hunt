import React, {Component} from "react"
import PropTypes from "prop-types"
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import moment from 'moment'

const _randomColorHex = () => {
    return (Math.random() * 0xFFFFFF << 0).toString(16)
}

class ItemProduct extends Component {
    _handleOnPressUp = () => {
        const {product} =this.props

        this.props.onUpVote(product.key, product.vote + 1)
    }

    render() {
        const {product} = this.props
        const {name, vote, created} = product
        const timeAgo = moment(created).fromNow()
        const voteValidated = vote || 0
        const firstCharacter = name ? name.charAt(0).toUpperCase() : 'P'
        const thumbnail = `https://via.placeholder.com/150/${_randomColorHex()}/${_randomColorHex()}?text=${firstCharacter}`

        return (
            <View style={styles.container}>
                <View style={styles.left}>
                    <View style={styles.thumbnail}>
                        <Image style={{width: 70, height: 70}}
                               source={{uri: thumbnail}}/>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.meta}>{timeAgo}</Text>
                    </View>

                </View>

                <View style={styles.right}>
                    <TouchableOpacity onPress={this._handleOnPressUp}>
                        <View style={styles.vote}>
                            <Ionicons name='ios-arrow-up' size={25} color='#333'/>
                            <Text>{voteValidated}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },

    left: {
        marginLeft: 12,
        marginRight: 12,
        flexDirection: 'row'
    },

    thumbnail: {
        marginRight: 10,
    },

    details: {
        justifyContent: 'space-between'
    },

    title: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
    },

    meta: {
        fontSize: 12,
        color: '#999',
        marginBottom: 10,
    },

    right: {},

    vote: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        justifyContent: 'center'
    }
})

ItemProduct.propTypes = {
    product: PropTypes.object.isRequired,
    onUpVote: PropTypes.func.isRequired
}

export default ItemProduct

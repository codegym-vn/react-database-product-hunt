import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {View, StyleSheet, FlatList} from 'react-native'
import ItemProduct from "./ItemProduct"

class ListProducts extends Component {

    render() {
        const {products, onUpVote} = this.props

        return (
            <View style={styles.container}>
                <FlatList
                    data={products}
                    renderItem={({item}) => <ItemProduct onUpVote={onUpVote} product={item}/>}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 100
    }
})

ListProducts.propTypes = {
    products: PropTypes.array.isRequired,
    onUpVote: PropTypes.func.isRequired,
}

export default ListProducts
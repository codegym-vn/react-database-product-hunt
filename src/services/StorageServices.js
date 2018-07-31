import {AsyncStorage} from 'react-native'

const _getJSON = (key) => {
    return AsyncStorage.getItem(key)
        .then(str => {
            try {
                return JSON.parse(str)
            } catch (e) {
                return str
            }
        })
}

const _saveLocalData = (key, data) => {
    const str = JSON.stringify(data)

    return AsyncStorage.setItem(key, str)
}

export const getUserData = () => {
    return _getJSON('cg@user')
}

export const getToken = () => {
    return _getJSON('cg@token')
}

export const saveAuthData = ({user = {}, token = {}}) => {
    return Promise.all([
        _saveLocalData('cg@user', user),
        _saveLocalData('cg@token', token)
    ])
}

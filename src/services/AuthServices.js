import {getToken, getUserData, saveAuthData} from "./StorageServices"

const _store = {
    isAuthenticated: false,
    user: {},
    token: {
        accessToken: '',
        refreshToken: ''
    },
    subscribers: []
}

export const _getIsAuthenticatedByToken = token => {
    return !(!token || typeof token !== 'object' || Object.keys(token).length < 2 || !token.hasOwnProperty('accessToken'))
}

export const _change = ({user = {}, token = null}) => {
    const isAuthenticated = _getIsAuthenticatedByToken(token)

    _store.user = {
        ...user
    }
    _store.token = {
        ...token
    }
    _store.isAuthenticated = isAuthenticated
    _broadcast()

    return Promise.resolve(isAuthenticated)
}

export const logout = () => {
    _change({})
    saveAuthData({})
}

export const loginSuccess = ({user, token}) => {
    _change({user, token})
    saveAuthData({user, token})

    return Promise.resolve(true)
}

const _broadcast = () => {
    _store.subscribers.forEach(subscriber => {
        typeof subscriber === 'function' && subscriber(_store.user)
    })
}

export const bootstrapAuth = () => {
    return Promise.all([
        getToken(),
        getUserData()
    ]).then(([token, user]) => {
        const isAuthenticated = _getIsAuthenticatedByToken(token)

        if (isAuthenticated) {
            return _change({user, token})
        }

        return Promise.resolve(isAuthenticated)
    })
}

export const isAuthenticated = () => _store.isAuthenticated

export const getCurrentUser = () => _store.user

export const subscribeAuthentication = subscriber => {
    if (typeof subscriber !== 'function') return
    if (_store.subscribers.indexOf(subscriber) !== -1) return

    _store.subscribers = [].concat(_store.subscribers, [subscriber])
}

export const unsubscribeAuthentication = subscriber => {
    _store.subscribers = _store.subscribers.filter(_sub => _sub !== subscriber)
}
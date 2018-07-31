import firebase from '../firebase'

const firebaseInstant = firebase()
const db = firebaseInstant.database()

export const submitProduct = name => {
    if (!name) {
        return Promise.reject(new Error('Product name is required'))
    }

    const newProductRef = db.ref('products').push()

    return newProductRef.set({
        name,
        created: Date.now(),
        vote: 0
    })
}

export const voteProduct = (key, vote) => {
    return db.ref(`products/${key}/vote`).set(vote)
}

export const getListProducts = () => {
    return db.ref('products').orderByChild('vote')
}
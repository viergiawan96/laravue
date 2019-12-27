export function initialize(store, router) {
    if (store.getters.currentUser) {
        setAuthorization(store.getters.currentUser.token);
    }
}

export function setAuthorization(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
}
export function pushCart(credentials) {
    return new Promise((res, err) => {
        axios.post('/api/auth/cart', credentials)
             .then((response) => {
                 res(response.data);
             })
             .catch(error => {
                 err(error)
             })
    })
}
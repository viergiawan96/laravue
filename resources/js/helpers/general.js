export function initialize(store, router) {
    if (store.getters.currentUser) {
        setAuthorization(store.getters.currentUser.token);
    }
}

export function setAuthorization(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

export function getLocalCart() {
    const cartStr = localStorage.getItem("cart");

    if(!cartStr) {
        return null;
    }

    return JSON.parse(cartStr);
}
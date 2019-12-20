import { getLocalUser } from "./helpers/auth";
import { getLocalCart } from "./helpers/general";

const user = getLocalUser();
const cart = getLocalCart();

export default {
    state: {
        currentUser: user,
        isLoggedIn: !!user,
        loading: false,
        auth_error: null,
        product:[],
        cart: cart
    },
    getters: {
        isLoading(state) {
            return state.loading;
        },
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
        currentUser(state) {
            return state.currentUser;
        },
        authError(state) {
            return state.auth_error;
        },
        product(state) {
            return state.product;
        },
        cart(state) {
            return state.cart;
        }
    },
    mutations: {
        login(state) {
            state.loading = true;
            state.auth_error = null;
        },
        register(state) {
            state.loading = true;
            state.auth_error = null;
        },
        prosesSuccess(state, payload) {
            state.auth_error = null;
            state.isLoggedIn = true;
            state.loading = false;
            state.currentUser = Object.assign({}, payload.user, {token: payload.access_token});
            localStorage.setItem("user", JSON.stringify(state.currentUser));
        },
        loginFailed(state, payload) {
            state.loading = false;
            state.auth_error = payload.error;
        },
        logout(state) {
            localStorage.removeItem("user");
            state.isLoggedIn = false;
            state.currentUser = null;
        },
        getProduct(state, product) {
            state.product = product;
        },
        getCart(state, cart) {
            state.cart.push(cart);
            localStorage.setItem("cart", JSON.stringify(state.cart));
        }
    },
    actions: {
        login(context) {
            context.commit("login");
        },
        register(context) {
            context.commit("register");
        }
    }
};
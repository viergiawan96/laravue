import { getLocalUser } from "./helpers/auth";

const user = getLocalUser();

export default {
    state: {
        currentUser: user,
        isLoggedIn: !!user,
        loading: false,
        auth_error: null,
        product:[],
        cart:[]
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
            return state.product;
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
            state.product = cart;
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
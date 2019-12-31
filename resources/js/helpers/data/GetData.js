export function getProduct() {
    return new Promise((res, err) => {
        axios.get('/api/product')
            .then((response) => {
                res(response.data.product);
            })
            .catch(error => {
                err(error);
            })
    })
}
export function getStok(credentials){
    return new Promise((res, rej) => {
        axios.post('/api/GetProduct',credentials)
            .then((response) => {
                res(response.data);
            })
            .catch((error) =>{
                rej("stok kosong");
            })
    })
}
export function pushCart(credentials) {
    return new Promise((res, err) => {
        axios.post('/api/auth/cart', credentials)
             .then((response) => {
                 res(response.data.cart);
             })
             .catch(error => {
                 err(error)
             })
    })
}
export function getCart(credentials) {
    return new Promise((res, rej) => {
        axios.post('/api/auth/getCart', 'id='+credentials)
              .then((response) => {
                  res(response.data);
              })
              .catch((error) => {
                  rej("koneksi bermasalah");
              })
    })
}

export function putCart(credentials) {
    return new Promise((res, rej) => {
        axios.post('/api/auth/putCart', credentials)
              .then((response) => {
                  res(response.data);
              })
              .catch((err) => {
                  rej("koneksi bermasalah")
              })
    })
}


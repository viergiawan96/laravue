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
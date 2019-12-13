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
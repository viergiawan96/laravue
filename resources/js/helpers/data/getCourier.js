export function getCourierProvince() {
    return new Promise((res, rej) => {
        axios.get('/api/auth/getCourier')
            .then((response) => {
                res(response.data);
            })
            .catch((error) => {
                err(error);
            })
    })
}
export function getCourierProvince() {
    return new Promise((res, err) => {
        axios.get('/api/auth/getCourierProvince')
            .then((response) => {
                res(response.data);
            })
            .catch(error => {
                err(error);
            })
    })
}
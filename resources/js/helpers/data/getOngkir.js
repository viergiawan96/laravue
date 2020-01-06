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

export function getCity(credentials) {
    return new Promise((res, rej) => {
        axios.post('/api/auth/getCity', 'id='+credentials)
             .then((response) => {
                 res(response.data);
             })
             .catch(error => {
                 err(error);
             })
    })
}

export function getCost(credentials) {
    return new Promise((res, rej) => {
        axios.post('/api/auth/getCost', credentials)
                .then((response) => {
                    res(response.data);
                })
                .catch((err) => {
                    err(error);
                })
    })
}


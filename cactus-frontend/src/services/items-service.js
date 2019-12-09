const itemService = {
    getAll: function () {
        return fetch(`http://localhost:9999/api/menu`, {
            body: JSON.stringify(data),
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json());
    }
}

export default itemService;
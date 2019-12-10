const itemService = {
    getAll: function (id) {
        return fetch(`http://localhost:9999/api/menu${id ? `/${id}` : ''}`)
            .then(res => res.json());
    }
}

export default itemService;
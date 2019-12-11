const itemService = {
    getAll: function () {
        return fetch(`http://localhost:9999/api/items`)
            .then(res => res.json());
    },
    getDetails : function(id){
        // console.log( id)
            return fetch(`http://localhost:9999/api/items/${id}`)
           .then(res=>res.json()) 
           .catch(err=>console.log(err))
       }
}


export default itemService;
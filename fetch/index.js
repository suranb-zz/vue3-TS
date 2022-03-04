const axios = require('axios');

const results = [{
        "person_id": 275113,
        "contactName": "Compendia AS",
        "personName": "Anne E. Harmansen",
        "product": "ABONNEMENT PÅ WEB",
        "date": "",
        "count": 1
    },
    {
        "person_id": 275097,
        "contactName": "Defigo AS",
        "personName": "Declan McCourt",
        "product": "ABONNEMENT PÅ WEB",
        "date": "",
        "count": 2
    },
    {
        "person_id": 234,
        "contactName": "fdsf AS",
        "personName": "sdf McCourt",
        "product": "sdv PÅ WEB",
        "date": "",
        "count": 2
    }
]

const saveResults = {
    Customers: []
};


axios({
        method: 'GET',
        url: 'http://localhost:3000/list_users',
        data: {
            firstname: "Suran",
            lastname: "Basharati",
            age: "27"
        }
    })
    .then((res) => {
        console.log(res);
    })
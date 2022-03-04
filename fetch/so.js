const axios = require('axios');


axios.defaults.headers.common["Accept"] = 'application/json';
axios.defaults.headers.common["X-XSRF-TOKEN"] = 'YjbiekfDFORx5AGR';


axios.get(`https://online.superoffice.com/Cust22275/api/v1/Contact`)
    .then(({ response }) => {
        console.log(response);
    })
    .catch(e => {
        console.log(e);
    })
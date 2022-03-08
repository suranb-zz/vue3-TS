const response = {
    "odata.count": 2,
    "odata.metadata": "http://suran.geaslabs.no/SuperOffice/api/v1/Archive/$metadata",
    "odata.nextLink": null,
    "value": [{
            "PrimaryKey": "22",
            "EntityName": "phone",
            "phone.phone_id": 22,
            "phone.owner_id": 10,
            "phone.phone": "92216836",
            "phone.searchPhoneNumber": "92216836"
        },
        {
            "PrimaryKey": "23",
            "EntityName": "phone",
            "phone.phone_id": 23,
            "phone.owner_id": 24,
            "phone.phone": "92 21 68 36",
            "phone.searchPhoneNumber": "92216836"
        }
    ]
}


const data = response.value;
console.log(data[0]["phone.owner_id"]);
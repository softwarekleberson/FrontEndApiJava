const form = document.getElementById("form")
const itin = document.getElementById("itin")
const name = document.getElementById("name")
const phone = document.getElementById("phone")
const email = document.getElementById("email")
const update = document.getElementById("update")
const backendBaseURL = 'http://localhost:8080/customers'

update.addEventListener('click', putCustomers)

const params = new URLSearchParams(window.location.search)
const itinNumber = params.get('itin')
getCustomer(codigoProduto)

async function getCustomer(itinNumber) {
    try {
        const response = await fetch(`${backendBaseURL}/${itinNumber}`)

        const customer = await response.json()
        
        itin.value = customer.itin
        name.value = customer.name
        phone.value = customer.phone
        email.value = customer.email
        
    } catch(error) {
        console.error(error)
    }
}

async function putCustomers() {
    try {
        const response = await fetch(`${backendBaseURL}/${codigoProduto}`, {
            method: 'put',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                itin: itin.value,
                name: name.value,
                phone: phone.value,
                email: email.value
            })
        })
        window.location = "index.html"
        
    } catch(error) {
        console.error(error)
    }
}
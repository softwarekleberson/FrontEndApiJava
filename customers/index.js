const productBody = document.getElementById('tableBody')

const backendBaseURL = 'http://localhost:8080/customers'

async function deleteCustomer(itin){
    try {
        await fetch(`${backendBaseURL}/${itin}`, {
            method: 'delete'
        })
        window.location = "index.html"
    } catch (error) {
        console.error(error)
    }
}

async function getCustomers() {
    try {
        const response = await fetch(`http://localhost:8080/customers`)
        const customers = await response.json()
        
        if(customers.length == 0) {
            productBody.innerHTML = `<tr><td colspan="4">No customers found</td></tr>`
        } else {
            for(const customer of customers) {
                productBody.innerHTML = productBody.innerHTML + 
                `<tr>
                    <td><a href="update.html?itin=${customer.itin}">Update<a/></td>

                    <td>${customer.itin}</td>
                    <td>${customer.name}</td>
                    <td>${customer.phone}</td>
                    <td>${customer.email}</td>
                    <td><a
                    href="javascript:void(0)"
                    onclick="deleteCustomer('${customer.itin}')">Delete</a></td>
                </tr>`
            }
            productBody.innerHTML = productBody.innerHTML + `<tr><td colspan="4">${customers.length} customer(s) found.</td></tr>`
        }
        
    } catch(error) {
        console.error(error)
    }
}

getCustomers()
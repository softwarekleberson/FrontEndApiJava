const productBody = document.getElementById('tableBody')
const backendBaseURL = 'http://localhost:8080/product'

async function deleteProduct(codigo){
    try {
        await fetch(`${backendBaseURL}/${codigo}`, {
            method: 'delete'
        })
        window.location = "index.html"
    } catch (error) {
        console.error(error)
    }
}

async function getProduct() {
    try {
        const response = await fetch(`http://localhost:8080/product`)
        const products = await response.json()
        
        if(products.length == 0) {
            productBody.innerHTML = `<tr><td colspan="4">No product found</td></tr>`
        } else {
            for(const product of products) {
                productBody.innerHTML = productBody.innerHTML + 
                `<tr>
                    <td><a href="update.html?codigo=${product.codigo}">Update<a/></td>
                    
                    <td>${product.codigo}</td>
                    <td>${product.nome}</td>
                    <td>${product.descricao}</td>
                    <td>${product.precoUnitario}</td>
                    <td>${product.quantidadeEstoque}</td>
                    <td>${product.perecivel}</td>
                    <td><a
                    href="javascript:void(0)"
                    onclick="deleteProduct('${product.codigo}')">Delete</a></td>
                </tr>`
            }
            productBody.innerHTML = productBody.innerHTML + `<tr><td colspan="4">${products.length} product(s) found.</td></tr>`
        }
        
    } catch(error) {
        console.error(error)
    }
}

getProduct()
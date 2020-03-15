/******************************************************************************
 *                          Fetch and display products
 ******************************************************************************/

displayproducts();


function displayProducts() {
    httpGet('/api/products/all')
        .then(response => response.json())
        .then((response) => {
            var allProducts = response.products;
            // Empty the anchor
            var allProductsAnchor = document.getElementById('all-products-anchor');
            allProductsAnchor.innerHTML = '';
            // Append products to anchor
            allproducts.forEach((product) => {
                allProductsAnchor.innerHTML += getProductDisplayEle(product);
            });
        });
};


function getproductDisplayEle(product) {
    return `<div class="product-display-ele">

        <div class="normal-view">
            <div>Name: ${product.name}</div>
            <div>Email: ${product.email}</div>
            <button class="edit-product-btn" data-product-id="${product.id}">
                Edit
            </button>
            <button class="delete-product-btn" data-product-id="${product.id}">
                Delete
            </button>
        </div>
        
        <div class="edit-view">
            <div>
                Name: <input class="name-edit-input" value="${product.name}">
            </div>
            <div>
                Email: <input class="email-edit-input" value="${product.email}">
            </div>
            <button class="submit-edit-btn" data-product-id="${product.id}">
                Submit
            </button>
            <button class="cancel-edit-btn" data-product-id="${product.id}">
                Cancel
            </button>
        </div>
    </div>`;
}


/******************************************************************************
 *                        Add, Edit, and Delete products
 ******************************************************************************/

document.addEventListener('click', function (event) {
    event.preventDefault();
    var ele = event.target;
    if (ele.matches('#add-product-btn')) {
        addProduct();
    } else if (ele.matches('.edit-product-btn')) {
        showEditView(ele.parentNode.parentNode);
    } else if (ele.matches('.cancel-edit-btn')) {
        cancelEdit(ele.parentNode.parentNode);
    } else if (ele.matches('.submit-edit-btn')) {
        submitEdit(ele);
    } else if (ele.matches('.delete-product-btn')) {
        deleteProduct(ele);
    }
}, false)


function addProduct() {
    var nameInput = document.getElementById('name-input');
    var emailInput = document.getElementById('email-input');
    var data = {
        product: {
            name: nameInput.value,
            email: emailInput.value
        },
    };
    httpPost('/api/products/add', data)
        .then(() => {
            displayProducts();
        })
}


function showEditView(productEle) {
    var normalView = productEle.getElementsByClassName('normal-view')[0];
    var editView = productEle.getElementsByClassName('edit-view')[0];
    normalView.style.display = 'none';
    editView.style.display = 'block';
}


function cancelEdit(productEle) {
    var normalView = productEle.getElementsByClassName('normal-view')[0];
    var editView = productEle.getElementsByClassName('edit-view')[0];
    normalView.style.display = 'block';
    editView.style.display = 'none';
}


function submitEdit(ele) {
    var productEle = ele.parentNode.parentNode;
    var nameInput = productEle.getElementsByClassName('name-edit-input')[0];
    var emailInput = productEle.getElementsByClassName('email-edit-input')[0];
    var id = ele.getAttribute('data-product-id');
    var data = {
        product: {
            name: nameInput.value,
            email: emailInput.value,
            id: id
        }
    };
	httpPut('/api/products/update', data)
        .then(() => {
            displayproducts();
        })
}


function deleteproduct(ele) {
    var id = ele.getAttribute('data-product-id');
	httpDelete('/api/products/delete/' + id)
        .then(() => {
            displayproducts();
        })
}


function httpGet(path) {
    return fetch(path, getOptions('GET'))
}


function httpPost(path, data) {
    return fetch(path, getOptions('POST', data));
}


function httpPut(path, data) {
    return fetch(path, getOptions('PUT', data));
}


function httpDelete(path) {
    return fetch(path, getOptions('DELETE'));
}


function getOptions(verb, data) {
    var options = {
        dataType: 'json',
        method: verb,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    if (data) {
        options.body = JSON.stringify(data);
    }
    return options;
}


// Task 2: Fetch Products from the API Using Fetch and Promises

let productContainer = document.getElementById("product-container");

fetch('https://www.course-api.com/javascript-store-products') 

    .then(response => {
        if (!response.ok) {
            throw new Error("No response");
        }
        return response.json();
    }
)
    .then(products => {
        displayProducts(products);
    }
)

// Task 4: Handle Errors Gracefully
    
.catch(
    error => {    
        console.error("Something went wrong with the fetch operation:', error", error); 
    }
);

// Task 3: Display Product Details Dynamically
 
function displayProducts(products) {
    for (let i = 0; i < products.length; i++) {
        let { name, company, price } = products[i].fields;
        let image = products[i].fields.image[0].url;
        let productPrice = (price / 100).toFixed(2);

        let productElement = document.createElement("div");
        productElement.classList.add("product");

        productElement.innerHTML = `
            <img src="${image}" alt="${name}" class="product-image" />
            <p class="product-name">${name}</p>
            <p class="product-company">by ${company}</p>
            <p class="product-price">$${productPrice}</p>
        `;

        productContainer.appendChild(productElement);
    }
};

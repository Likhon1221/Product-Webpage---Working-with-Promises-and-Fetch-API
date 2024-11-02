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
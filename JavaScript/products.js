// AFRICA LADIES FASHION
// DYNAMIC PRODUCT LISTINGS

document.addEventListener("DOMContentLoaded", function () {

    // PRODUCT DATA

    const products = [

        {
            name: "Women's Dress 1",
            category: "Dresses",
            image: "images/dress1.webp",
            description: "A fashionable dress for different occasions."
        },

        {
            name: "Women's Dress 2",
            category: "Dresses",
            image: "images/dress2.jpg",
            description: "An example of women's fashion dresses."
        },

        {
            name: "Women's Dress 3",
            category: "Dresses",
            image: "images/dress3.jpg",
            description: "Explore different women's dress styles."
        },

        {
            name: "Women's Top 1",
            category: "Tops",
            image: "images/top1.webp",
            description: "A stylish top for everyday outfits."
        },

        {
            name: "Women's Top 2",
            category: "Tops",
            image: "images/top2.jpg",
            description: "An example of women's fashion tops."
        },

        {
            name: "Women's Top 3",
            category: "Tops",
            image: "images/top3.jpg",
            description: "Explore different top styles."
        },

        {
            name: "Women's Jeans 1",
            category: "Jeans and Trousers",
            image: "images/jeans1.webp",
            description: "Fashionable jeans for casual outfits."
        },

        {
            name: "Women's Jeans 2",
            category: "Jeans and Trousers",
            image: "images/jeans2.jpg",
            description: "An example of women's jeans."
        },

        {
            name: "Women's Jeans 3",
            category: "Jeans and Trousers",
            image: "images/jeans3.jpg",
            description: "Explore different jeans styles."
        },

        {
            name: "Women's Handbag 1",
            category: "Handbags",
            image: "images/handbag1.jpg",
            description: "A fashionable handbag example."
        },

        {
            name: "Women's Handbag 2",
            category: "Handbags",
            image: "images/handbag2.jpg",
            description: "An example of a women's handbag."
        },

        {
            name: "Women's Handbag 3",
            category: "Handbags",
            image: "images/handbag3.jpg",
            description: "Explore different handbag styles."
        },

        {
            name: "Women's Shoes 1",
            category: "Shoes",
            image: "images/shoes1.jpg",
            description: "Fashionable footwear for different outfits."
        },

        {
            name: "Women's Shoes 2",
            category: "Shoes",
            image: "images/shoes2.jpg",
            description: "An example of women's fashion shoes."
        },

        {
            name: "Women's Shoes 3",
            category: "Shoes",
            image: "images/shoes3.jpg",
            description: "Explore different footwear styles."
        },

        {
            name: "Fashion Accessory 1",
            category: "Accessories",
            image: "images/accessory1.jpg",
            description: "An example of a fashion accessory."
        },

        {
            name: "Fashion Accessory 2",
            category: "Accessories",
            image: "images/accessory2.jpg",
            description: "Accessories to complement an outfit."
        },

        {
            name: "Fashion Accessory 3",
            category: "Accessories",
            image: "images/accessory3.jpg",
            description: "Explore different fashion accessories."
        }

    ];


    // PAGE ELEMENTS

    const productList = document.getElementById("product-list");

    const searchInput = document.getElementById("product-search");

    const categoryFilter = document.getElementById("category-filter");

    const sortSelect = document.getElementById("product-sort");

    const noProducts = document.getElementById("no-products");


    // DISPLAY PRODUCTS

    function displayProducts(productItems) {

        productList.innerHTML = "";

        noProducts.hidden = productItems.length !== 0;

        productItems.forEach(function (product) {

            const productCard = document.createElement("article");

            productCard.classList.add("product-card");

            const productImage = document.createElement("img");

            productImage.src = product.image;

            productImage.alt = product.name;

            productImage.loading = "lazy";

            const productName = document.createElement("h3");

            productName.textContent = product.name;

            const productCategory = document.createElement("p");

            productCategory.textContent = "Category: " + product.category;

            const productDescription = document.createElement("p");

            productDescription.textContent = product.description;

            productCard.appendChild(productImage);

            productCard.appendChild(productName);

            productCard.appendChild(productCategory);

            productCard.appendChild(productDescription);

            productList.appendChild(productCard);

        });

    }


    // SEARCH, FILTER AND SORT PRODUCTS

    function filterProducts() {

        const searchText = searchInput.value.toLowerCase().trim();

        const selectedCategory = categoryFilter.value;

        const selectedSort = sortSelect.value;


        // Filter products using search and category

        let filteredProducts = products.filter(function (product) {

            const matchesSearch =
                product.name.toLowerCase().includes(searchText) ||
                product.category.toLowerCase().includes(searchText);

            const matchesCategory =
                selectedCategory === "all" ||
                product.category === selectedCategory;

            return matchesSearch && matchesCategory;

        });


        // Sort products alphabetically

        if (selectedSort === "ascending") {

            filteredProducts.sort(function (a, b) {

                return a.name.localeCompare(b.name);

            });

        } else if (selectedSort === "descending") {

            filteredProducts.sort(function (a, b) {

                return b.name.localeCompare(a.name);

            });

        }


        // Display matching products

        displayProducts(filteredProducts);

    }


    // EVENT LISTENERS

    searchInput.addEventListener("input", filterProducts);

    categoryFilter.addEventListener("change", filterProducts);

    sortSelect.addEventListener("change", filterProducts);


    // DISPLAY ALL PRODUCTS WHEN PAGE LOADS

    displayProducts(products);

});

// Product database - all items across all pages
const productDatabase = [
    // Home page products
    {
        name: "Dress",
        category: "Dress",
        page: "index.html",
        image: "img/dress.webp",
        description: "Elegant dress collection",
        price: "$29.99"
    },
    {
        name: "Blouse",
        category: "Blouse", 
        page: "index.html",
        image: "img/Blouse.webp",
        description: "Stylish blouse collection",
        price: "$24.99"
    },
    {
        name: "Denim",
        category: "Denim",
        page: "index.html", 
        image: "https://shopwhatsup.com/cdn/shop/collections/DSC07100_copy_2.jpg?v=1725271534&width=330",
        description: "Classic denim collection",
        price: "$34.99"
    },
    {
        name: "Kimono",
        category: "Kimono",
        page: "index.html",
        image: "img/Kimono.webp", 
        description: "Traditional kimono style",
        price: "$39.99"
    },
    {
        name: "Shirt",
        category: "Shirt",
        page: "index.html",
        image: "img/Shirt.webp",
        description: "Casual shirt collection",
        price: "$19.99"
    },
    {
        name: "SweatShirt",
        category: "SweatShirt",
        page: "index.html",
        image: "img/SweatShirt.webp",
        description: "Comfortable sweatshirt collection",
        price: "$44.99"
    },
    {
        name: "Shirt - Plain",
        category: "Shirt",
        page: "index.html",
        image: "https://shopwhatsup.com/cdn/shop/files/FTM08830.jpg?v=1726735875&width=480",
        description: "Plain shirt with superior elegance",
        price: "$29.99"
    },
    {
        name: "New Arrival",
        category: "New Arrival",
        page: "index.html",
        image: "https://shopwhatsup.com/cdn/shop/files/FTM09093.jpg?v=1726736003&width=535",
        description: "Latest fashion trends",
        price: "$49.99"
    },
    // All Products page
    {
        name: "Basic",
        category: "Basic",
        page: "ALL PRODUCT.html",
        image: "https://shopwhatsup.com/cdn/shop/collections/DSC00612_copy_2.jpg?v=1725271679&width=330",
        description: "Basic collection essentials",
        price: "$19.99"
    },
    {
        name: "Blazer",
        category: "Blazer",
        page: "ALL PRODUCT.html", 
        image: "img/Blazer.webp",
        description: "Professional blazer collection",
        price: "$59.99"
    },
    // Additional categories and products
    {
        name: "Summer Collection",
        category: "Collection",
        page: "index.html",
        image: "https://shopwhatsup.com/cdn/shop/files/webcover.png?v=1723565137&width=1500",
        description: "Summer fashion collection",
        price: "Various"
    },
    {
        name: "Spring Summer 2024",
        category: "Collection",
        page: "index.html",
        image: "https://shopwhatsup.com/cdn/shop/files/webv.png?v=1722176818&width=1500",
        description: "Spring Summer 2024 collection",
        price: "Various"
    },
    // More products for comprehensive search
    {
        name: "Casual Dress",
        category: "Dress",
        page: "index.html",
        image: "img/dress.webp",
        description: "Comfortable casual dress for everyday wear",
        price: "$34.99"
    },
    {
        name: "Formal Blouse",
        category: "Blouse",
        page: "index.html",
        image: "img/Blouse.webp",
        description: "Professional blouse for office wear",
        price: "$39.99"
    },
    {
        name: "Denim Jacket",
        category: "Denim",
        page: "index.html",
        image: "https://shopwhatsup.com/cdn/shop/collections/DSC07100_copy_2.jpg?v=1725271534&width=330",
        description: "Classic denim jacket for all seasons",
        price: "$49.99"
    },
    {
        name: "Traditional Kimono",
        category: "Kimono",
        page: "index.html",
        image: "img/Kimono.webp",
        description: "Beautiful traditional kimono design",
        price: "$59.99"
    },
    {
        name: "Cotton Shirt",
        category: "Shirt",
        page: "index.html",
        image: "img/Shirt.webp",
        description: "Comfortable cotton shirt for daily wear",
        price: "$24.99"
    },
    {
        name: "Hooded Sweatshirt",
        category: "SweatShirt",
        page: "index.html",
        image: "img/SweatShirt.webp",
        description: "Warm and cozy hooded sweatshirt",
        price: "$54.99"
    }
];

// Search functionality
document.addEventListener('DOMContentLoaded', function () {
    var modeSwitch = document.querySelector('.mode-switch');

    if (modeSwitch) {
        modeSwitch.addEventListener('click', function () {
            document.documentElement.classList.toggle('dark');
            modeSwitch.classList.toggle('active');
        });
    }

    // Search functionality
    const searchForm = document.querySelector('.search');
    const searchInput = document.querySelector('.search__input');
    const searchButton = document.querySelector('.search__button');

    // Create search results container
    let searchResultsContainer = null;

    function createSearchResultsContainer() {
        if (!searchResultsContainer) {
            searchResultsContainer = document.createElement('div');
            searchResultsContainer.className = 'search-results-container';
            searchForm.appendChild(searchResultsContainer);
        }
        return searchResultsContainer;
    }

    function searchProducts(query) {
        if (!query.trim()) {
            return [];
        }

        const searchTerm = query.toLowerCase();
        return productDatabase.filter(product => {
            return product.name.toLowerCase().includes(searchTerm) ||
                   product.category.toLowerCase().includes(searchTerm) ||
                   product.description.toLowerCase().includes(searchTerm);
        });
    }

    function displaySearchResults(results) {
        const container = createSearchResultsContainer();
        container.innerHTML = '';

        if (results.length === 0) {
            container.innerHTML = '<div style="padding: 15px; color: #666; text-align: center;">No products found</div>';
        } else {
            results.forEach(product => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                resultItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-info">
                        <div class="product-name">${product.name}</div>
                        <div class="product-category">${product.category}</div>
                        <div class="product-description">${product.description}</div>
                        <div class="product-price">${product.price}</div>
                    </div>
                `;
                
                resultItem.addEventListener('click', () => {
                    window.location.href = product.page;
                });
                

                
                container.appendChild(resultItem);
            });
        }
        
        container.style.display = 'block';
    }

    // Search input event listeners
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value;
            const results = searchProducts(query);
            displaySearchResults(results);
        });

        searchInput.addEventListener('focus', function() {
            const query = this.value;
            if (query.trim()) {
                const results = searchProducts(query);
                displaySearchResults(results);
            }
        });
    }

    // Search button click
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const query = searchInput.value;
            if (query.trim()) {
                const results = searchProducts(query);
                displaySearchResults(results);
            }
        });
    }

    // Hide search results when clicking outside
    document.addEventListener('click', function(event) {
        if (!searchForm.contains(event.target)) {
            if (searchResultsContainer) {
                searchResultsContainer.style.display = 'none';
            }
        }
    });

    // Search button functionality for footer buttons
    const searchButtons = document.querySelectorAll('.btn-outline-dark');

    searchButtons.forEach(button => {
        if (button.textContent.trim() === 'Search') {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                if (searchInput) {
                    searchInput.focus();
                    searchForm.classList.add('search-active');
                }
            });
        }
    });

    // Remove active class when clicking outside
    document.addEventListener('click', function(event) {
        if (!searchForm.contains(event.target) && !event.target.closest('.btn-outline-dark')) {
            searchForm.classList.remove('search-active');
        }
    });

    // Keyboard navigation for search results
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchResultsContainer) {
            searchResultsContainer.style.display = 'none';
        }
    });
});
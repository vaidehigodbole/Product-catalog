const products = [
    // Mobiles
    { id: 1, name: "iPhone 16", category: "Mobiles", description: "Apple's latest iPhone.", image: "https://iplanet.one/cdn/shop/files/iPhone_16_Ultramarine_PDP_Image_Position_1__en-IN_6c707cad-991a-4cce-826c-15a71885ee62.jpg?v=1727247843" },
    { id: 2, name: "Samsung Galaxy S24", category: "Mobiles", description: "Powerful Android flagship.", image: "https://cartronics.be/58649-home_default/samsung-galaxy-s24-158-cm-62-dual-sim-5g-usb-type-c-8-gb-128-gb-4000-mah-black.jpg" },
    { id: 3, name: "OnePlus 11", category: "Mobiles", description: "Fast and smooth experience.", image: "https://vasanthandco.in/UploadedFiles/ProductImages/20230419010207-3ONEPLUS11.png" },
    { id: 4, name: "Google Pixel 7", category: "Mobiles", description: "Best camera phone.", image: "https://m.media-amazon.com/images/I/61eTdIOfV1L.jpg" },
    // Electronics
    { id: 5, name: "MacBook Pro", category: "Electronics", description: "M2 chip-powered laptop.", image: "https://www.apple.com/newsroom/images/product/mac/standard/Apple-MacBook-Pro-M2-Pro-and-M2-Max-hero-230117.jpg.news_app_ed.jpg" },
    { id: 6, name: "Sony Bravia OLED", category: "Electronics", description: "Stunning 4K TV.", image: "https://vasanthandco.in/UploadedFiles/productimages/20240911122720-Untitled-1.png" },
    { id: 7, name: "Bose Home Speaker", category: "Electronics", description: "Premium smart speaker.", image: "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/bose_home_speaker_500/product_silo_images/bose_home_speaker_500_triple_black_vpa_alexa_EC_hero.psd/jcr:content/renditions/cq5dam.web.1920.1920.png" },
    { id: 8, name: "ASUS ROG Gaming Laptop", category: "Electronics", description: "Ultimate gaming beast.", image: "https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120814.jpg" },
    // Accessories
    { id: 9, name: "AirPods Pro", category: "Accessories", description: "Best noise-canceling earbuds.", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=750&hei=556&fmt=jpeg&qlt=90&.v=1724041668836" },
    { id: 10, name: "Samsung Smartwatch", category: "Accessories", description: "Track your fitness.", image: "https://static.toiimg.com/thumb/msid-110820020,width-1280,height-720,resizemode-4/110820020.jpg" },
    { id: 11, name: "Logitech MX Mouse", category: "Accessories", description: "Ergonomic wireless mouse.", image: "https://golchhait.com/cdn/shop/files/MXAnywhere3s.png?v=1729760017&width=720" },
    { id: 12, name: "Anker Power Bank", category: "Accessories", description: "High-capacity fast charger.", image: "https://www.club386.com/wp-content/uploads/2024/09/Anker-power-bank.jpg" },
];
const searchBox = document.getElementById("searchBox");
const mobileGrid = document.getElementById("mobileGrid");
const electronicsGrid = document.getElementById("electronicsGrid");
const accessoriesGrid = document.getElementById("accessoriesGrid");
function displayProducts(filteredProducts) {
    mobileGrid.innerHTML = "";
    electronicsGrid.innerHTML = "";
    accessoriesGrid.innerHTML = "";
    filteredProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        `;
        if (product.category === "Mobiles") {
            mobileGrid.appendChild(productCard);
        }
        else if (product.category === "Electronics") {
            electronicsGrid.appendChild(productCard);
        }
        else if (product.category === "Accessories") {
            accessoriesGrid.appendChild(productCard);
        }
    });
}
searchBox.addEventListener("input", () => {
    const query = searchBox.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query));
    displayProducts(filteredProducts);
});
displayProducts(products);

const coffeeContainer = document.querySelector('.posts');
const logoList = document.querySelector('#logos');

// Articles with images and description

function loadCoffeeItems() {
    coffeeItems.forEach((item) => {
        const coffeeItem = document.createElement('a');
       // coffeeItem.href = '#';
        coffeeItem.className = 'item';

        const itemContent = `
            <div>
                <img src="${item.imageSrc}" alt="${item.altText}">
            </div>
            <div id="item-desc">
                <h2>${item.title}</h2>
                <time datetime="2021-12-07">Published <span>12/07/2021</span></time>
                <p>${item.desc}</p>
                <button onclick="openPage(this)">Read more</button>
            </div>
        `;

        coffeeItem.innerHTML = itemContent;
        coffeeContainer.appendChild(coffeeItem);
    });
};


// Sponsors logos 
function loadSponsorImages() {
    logos.forEach((logo) => {
        const logoImage = document.createElement('img');
        logoImage.src = logo.url;
        logoImage.alt = logo.altText;
        logoList.appendChild(logoImage);
    });
}


        window.addEventListener('load', function () {
            loadSponsorImages();
            loadCoffeeItems()
        });
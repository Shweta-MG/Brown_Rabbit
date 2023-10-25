const coffeeContainer = document.querySelector('.posts');
const logoList = document.querySelector('#logos');

// Articles with images and description

const loadCoffeeItems = () => {
    coffeeItems.forEach((item) => {
        const coffeeItem = document.createElement('div');
       // coffeeItem.href = '#';
        coffeeItem.className = 'item';

        const itemContent = `
            <div>
                <img src="${item.imageSrc}" alt="${item.altText}">
            </div>
            <div class="item-desc">
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


//Search coffee articles

const searchArticle = () => {
    const searchBarInput = document.querySelector('#searchInput').value.toLowerCase();
    const searchedItems = document.querySelectorAll('.item')
    //const searchedItemsTitles = coffeeContainer.getElementsByTagName('h2');
    const searchedItemsTitles = coffeeContainer.getElementsByTagName('h2');
    console.log(searchBarInput)
    //console.log(searchedItems)

    for (i = 0; i < searchedItemsTitles.length; i++){
        let matchIArticle = searchedItems[i].getElementsByTagName('h2')[0];

        if (matchIArticle) {
            let searchValue = matchIArticle.textContent || matchIArticle.innerHTML;

            if (searchValue.toLowerCase().indexOf(searchBarInput) > -1) {
                searchedItems[i].style.display = "";
            } else {
                searchedItems[i].style.display = "none";
            }
        }
    }
}




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
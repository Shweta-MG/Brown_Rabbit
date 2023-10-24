const logoList = document.querySelector('#logos');

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
});
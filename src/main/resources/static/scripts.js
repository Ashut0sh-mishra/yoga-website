function openNav() {
    console.log("openNav called"); // Debug log
    document.getElementById("sidebar").style.width = "250px";
    document.querySelector(".main-content").style.marginLeft = "250px";
}

function closeNav() {
    console.log("closeNav called"); // Debug log
    document.getElementById("sidebar").style.width = "0";
    document.querySelector(".main-content").style.marginLeft = "0";
}

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOMContentLoaded event fired"); // Debug log
    const imageUrls = [
        'https://example.com/yoga-image1.jpg',
        'https://example.com/yoga-image2.jpg',
        'https://example.com/yoga-image3.jpg',
        'https://example.com/yoga-image4.jpg',
        'https://example.com/yoga-image5.jpg',
    ];

    const gallery = document.getElementById('gallery');
    if (!gallery) {
        console.error("Gallery element not found"); // Error log
        return;
    }

    imageUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Yoga Image';  // Add alt text for accessibility
        gallery.appendChild(img);
    });
});

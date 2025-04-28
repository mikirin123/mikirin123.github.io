let allImages = [];

async function loadImages() {
    const response = await fetch('image_list.json');
    allImages = await response.json();
    displayImages(allImages);
}

function displayImages(images) {
    const select = document.getElementById("backgroundSelect");
    select.innerHTML = ''; // リセット
    images.forEach(img => {
        const option = document.createElement('option');
        option.value = img;
        option.textContent = img;
        select.appendChild(option);
    });
}

function searchImages() {
    const keyword = document.getElementById('searchBox').value.toLowerCase();
    const filtered = allImages.filter(img => img.toLowerCase().includes(keyword));
    displayImages(filtered);
}

function updateCard() {
    const name = document.getElementById("name").value;
    const title = document.getElementById("title").value;
    const contact = document.getElementById("contact").value;
    const background = document.getElementById("backgroundSelect").value;

    document.getElementById("previewName").textContent = name;
    document.getElementById("previewTitle").textContent = title;
    document.getElementById("previewContact").textContent = contact;

    document.getElementById("cardPreview").style.backgroundImage = `url('image/${background}')`;
}

window.onload = function() {
    loadImages();
};

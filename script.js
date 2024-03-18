let cardBox = document.getElementById('cardTray')
function addData() {
    let dataBox = document.getElementById('dataBox');

    console.log('Working')

    if (dataBox.style.display === 'none') {
        dataBox.style.display = 'block';
    }
    else {
        dataBox.style.display = 'none';
    }
}


function saveData() {
    let productImage = document.getElementById('productImage').value;
    let productName = document.getElementById('product-price').value;
    let productDes = document.getElementById('product-description').value;

    // Check if input fields have valid values
    if (!productImage || !productName || !productDes) {
        console.error("Please fill in all required fields.");
        return; // Exit the function if any field is empty
    }

    // Extract only the file name from the input value
    // let fileName = productImage.split('\\').pop(); // Extract the file name after the last backslash

    let myCard = document.createElement('div');
    myCard.className = 'card width-card';
    myCard.innerHTML = `<div style="background-image: url('${productImage}'); height: 10rem;"></div><div class="p-2"><h5>${productName}</h5><p>${productDes}</p><p>Shalimar Link Road, Lahore</p><span>2 week ago</span></div>`;

    cardBox.appendChild(myCard); // Use appendChild instead of append
    dataBox.style.display = 'none';
}


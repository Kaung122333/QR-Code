let imgBox = document.querySelector('.img-box');
let qrImg = document.querySelector('#qrImage');
let qrText = document.querySelector('#qrText');

function generateQR() {
    if(qrText.value.length > 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value ;
        imgBox.classList.add("show-img");
    }else{
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }

}

function downloadQR() {
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

    // Create a Blob from the image data
    fetch(qrImg.src)
        .then(response => response.blob())
        .then(blob => {
            // Create an object URL for the Blob
            const blobURL = URL.createObjectURL(blob);

            // Create an anchor element to trigger the download
            const a = document.createElement('a');
            a.href = blobURL;
            a.download = "QRCode.png";

            // Trigger a click event on the anchor to initiate the download
            a.click();

            // Release the object URL
            URL.revokeObjectURL(blobURL);
        })
        .catch(error => {
            console.error("Error downloading QR code:", error);
        });
        moveD();
        
}

const move = document.querySelector('#move');

function moveD() {
    move.classList.add('active');
    setTimeout(() => {
        move.classList.remove("active");
    }, 2000);
}
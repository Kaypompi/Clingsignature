const data = [
    {
        id: "0",
        img: "C:\Users\hp\Desktop\Clingsignature\Image-2 (4).png",
        name: "mySignature",
        price: 2000,
        itemInCart: false,
    },

    {
        id: "1",
        img: "C:\Users\hp\Desktop\Clingsignature\Image-2.png",
        name: "leatherTreatment",
        price: 2500,
        itemInCart: false,
    },

    {
        id: "2",
        img: "C:\Users\hp\Desktop\Clingsignature\Image-2 (3).png",
        name: "deodorizing",
        price: 3000,
        itemInCart: false,
    },

    {
        id: "3",
        img: "C:\Users\hp\Desktop\Clingsignature\Image-2 (1).png",
        name: "Repair",
        price: 1500,
        itemInCart: false,
    },
];

var getId;

function pickUpService() {
    for (i=0; i<data.length; i++) {
        if(mySignature) {
            localStorage.getItem = storedInput
        }
    }
    mySignature.innerHTML = data[getId].price
};

pickUpService();

var mySignature = document.getElementById('mySignature');
var deoDorizing = document.getElementById('deodorizing');
var leatherTreatment = document.getElementById('leatherTreatment');
var repairs = document.getElementById('repairs');
var stainRemoval = document.getElementById('stainRemoval');
const storedInput = localStorage.getItem('pickupservice')

if(mySignature) {
    localStorage.getItem = storedInput
}

function myPrice() {
    localStorage.setItem("Home Service", localStorage);
    const anchorTag = document.createElement('a')
    anchorTag.href = '/checkout.html'
    anchorTag.setAttribute("target", "_blank")
    anchorTag.click()
}





console.log(localStorage.key(0));






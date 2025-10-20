let price;
let price2;
let price3;


//approche manuel comme le cours
// function calculateTotal() {
//     price = parseFloat(document.getElementById('grocery-1').value);
//     price2 = parseFloat(document.getElementById('grocery-2').value);
//     price3 = parseFloat(document.getElementById('grocery-3').value);
    
//     let total = price + price2 + price3;
//     document.getElementById('result').innerText = `This total amount is: $ ${total}`;
// }

//approche iterative
function calculateTotal() {
    //recuperer tous les inputs avec la classe .price
    const prices = document.querySelectorAll('.price'); // ou '.price' si tu utilises une classe
    let total = 0;
    //pour chaque input ajouter la valeur
    prices.forEach(input => {
        total += parseFloat(input.value)||0; // si l’input est vide, ça ajoute 0
    });

    document.getElementById('result').innerText = `This total amount is: $ ${total}`;
}

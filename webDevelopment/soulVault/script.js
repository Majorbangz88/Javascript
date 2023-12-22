let secretKey = sk_test_c717a2ccc2dc0746b1814540ea940bab57415deb;
let select = document.getElementsByTagName('select')[0];
let allBanks = []

let form = document.getElementsByTagName("form");

form.addEventListener()

let url="https://api.paystack.co/bank";

// let url = "https://api.paystack.co/bank/resolve?account_number=0224228579&bank_code=058";

function createRequest() {
    let xhr = new XMLHttpRequest;
    xhr.open('GET', url);
    xhr.setRequestHeader(`Authorization", "Bearer ${secretKey}`);
    return xhr;
}

function createOptions(Bank) {
    let options = document.createElement("options");
    options.innerHTML = Bank;
    select.appendChild(options);
}

let bankUrl = 'https://api.paystack.co/bank';
let xmlh = document.createElement(bankUrl);
xmlh.send();

xhr.onload = function() {
    console.log(JSON.parse(xhr.response))
}


xhr.send();



const myDisplay = (value) => {
    console.log(value);
}

let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;

    if (x == 0) {
        myResolve("Ok");
    } else {
        myReject("Error");
    }
}).then(function(value) {
    myDisplay(value);
}),then(function(error) {
    myDisplay(error);
})

function getFile(myCallBack) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'myUrl');
    xhr.onload() = function() {
        if (xhr.status == 200) {
            myCallBack(xhr.responseText);
        } else {
            myCallBack('Error: ' + xhr.status);
        }
    }
    xhr.send;
}

getFile(myDisplay);
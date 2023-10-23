const content = function(text) {
    let direction1 = "ltr";
    let direction2 = "rtl";
    // let direction3 = "ttb";
    // let direction4 = "btt";
    let count = 0;
    let counter = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === direction1) {
            count++;
        } 
        else if (text[i] === direction2) {
            counter++;
        }
    }
    if (count >= counter) {
        return "The dominant direction is " + direction1;
    }
    else {
        return "The dominant direction is " + direction2;
    }
}

let name = "مرحبا، هذا هو مثال على نص مكتوب من اليمين إلى اليسار. RTL هو اتجاه النص الذي يستخدم في اللغات الكتبية من اليمين إلى اليسار، مثل اللغة العربية";
console.log(content(name));
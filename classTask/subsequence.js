const subset = (text1, text2) => {
     const result = [text1];
     const result2 = [text2];

     const originalWord = [];
     const anotherWord = [];
     

     for (let index = 0; index < result.length; index++) { 
         for (let counter = 0; counter < result2.length; counter++) {
             if (result2[counter] === result[index]) {
                anotherWord.push(counter);
                originalWord.push(index);                            
             }                       
         }
         anotherWord.sort();
         if (JSON.stringify(originalWord) == JSON.stringify(anotherWord)) {return true}
         else{return false}
     }
     return;
}

let s = 'adona';
let t = 'meanderona';
console.log(subset(s, t));

let st = 'met';
let ts = 'stream';
console.log(subset(st, ts));

let sb = 'stem';
let td = 'stream';
console.log(subset(sb, td));

module.exports = { subset }
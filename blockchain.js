const _ = require('underscore');
// const express = require('express');
// const app = express();
// const port = 8000;
//
// app.get('/', (req, res) => res.send('Solving the Algorithm...'));
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));


let string = 'text';


const blockchain = (function(){

    const stringToASCII = (string) => {
        // Haal alle espaties weg
        const stringArray = string.replace(/\s+/g, '');
        // Nieuwe array
        let newArray = [];
        // Loop door de string heen
        for (let i = 0; i < stringArray.length; i++) {
            for (let item of stringArray[i].charCodeAt(0).toString().split('')) {
                newArray.push(item);
            }
        }
        // fillToTen(newArray);
        console.log(newArray);
        return newArray;
    };

    return {
      stringToASCII
    }

}());



function fillToTen(array){
   // Array wordt opgesplitst in blokken van 10
   array = _.chunk(array, 10);

   console.log(array);
    if (array.length === 10) {
        return array;
    }
        fillChunk(array);
}

function fillChunk(chunkedArray){
    let fill = 0;

    for(let array of chunkedArray)
    while(array.length !== 10){
        let newNumb = fill.toString();
        array.splice(array.length, 0, newNumb);
        fill++;
    }
    console.log(chunkedArray);

    addUpArrays(chunkedArray);
}

function addUpArrays(array){

}






module.exports = blockchain;


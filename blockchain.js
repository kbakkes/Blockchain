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

    const chunkToTen = (array) => {
        // Array wordt opgesplitst in blokken van 10
        array = _.chunk(array, 10);

        console.log(array);
        return array;

    };

    const fillChunk = (chunkedArray) => {
        let fill = 0;


        if (chunkedArray.length === 10) {
            return chunkedArray;
        }


        for(let array of chunkedArray)
            while(array.length !== 10){
                let newNumb = fill.toString();
                array.splice(array.length, 0, newNumb);
                fill++;
            }
        console.log(chunkedArray);

        return chunkedArray;
        // addUpArrays(chunkedArray);
    };



    const decrypt = () => {
        let block = stringToASCII(string);
        block = chunkToTen(block);
        block = fillChunk(block);

        console.log('tot nu toe heb ik: ', block);
    };

    return {
        stringToASCII,
        chunkToTen,
        fillChunk,
        decrypt
    }

}());







function addUpArrays(array){

}








module.exports = blockchain;


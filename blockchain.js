const _ = require('underscore');
const sha256 = require('js-sha256');

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
        return newArray;
    };

    const chunkToTen = (array) => {
        // Array wordt opgesplitst in blokken van 10
        array = _.chunk(array, 10);
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
            return chunkedArray;
    };


    const addUpArray = (filledArrays) => {

        // exit condition
        if(filledArrays.length === 1){
            return filledArrays.flat();
        }

        let arrayA = filledArrays[0];
        let arrayB = filledArrays[1];
        let newArray = [];


        for(let i = 0; i < arrayA.length; i++){
                let newNumb = parseInt(arrayA[i]) + parseInt(arrayB[i]);
                newNumb = (newNumb%10);
                newArray.push(newNumb);
            }
            filledArrays.splice(0,2);

        filledArrays.unshift(newArray);

        // Calls itself
        return addUpArray(filledArrays);
    };

    const hashArray = (array) => {
        let string = array.join();
        string = string.replace(/,/g, '');
        string = sha256(string);

        return string;
    };


    const decrypt = (string) => {
        let block = stringToASCII(string);
        block = chunkToTen(block);
        block = fillChunk(block);
        block = addUpArray(block);
        block = hashArray(block);


        console.log(block);
    };

    return {
        stringToASCII,
        chunkToTen,
        fillChunk,
        addUpArray,
        hashArray,
        decrypt
    }

}());

module.exports = blockchain;


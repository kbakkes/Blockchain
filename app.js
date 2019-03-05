const blockhain = require('./blockchain');
const fetch = require('node-fetch');
const request = require('request');


let string = '000078454c038871fa4d67b0022a30baaf25eaa231f8991b108e2624f052f3f8CMGT Mining CorporationBob PIKAB11548689513858154874778871610312';

console.log('Cracking the code....');
console.log(getNextBlock());

console.log(blockhain.decrypt(string));

function getNextBlock(){
    let url = 'http://programmeren9.cmgt.hr.nl:8000/api/blockchain/next';
    let block = {};

    fetch(url)
        .then(res => res.json())
        .then(res => {
            block = getNewHash(res);
        })
        .catch(function (error) {
        console.log('er gaat iets mis: ', error)
    });
    return block;
}


function getNewHash(previousBlock){
    let block = previousBlock.blockchain;

    let hash =
        (
       block.hash + block.data[0].from + block.data[0].to + block.data[0].amount +
       block.data[0].timestamp + block.timestamp + block.nonce
        );
    let newHash = blockhain.decrypt(hash) +
        previousBlock.transactions[0].from + previousBlock.transactions[0].to + previousBlock.transactions[0].amount +
        previousBlock.transactions[0].timestamp + previousBlock.timestamp;

    console.log(newHash);

   mineBlock(newHash,0);
}

function mineBlock(string, nonce) {
    let newString = (string + nonce);

    let newHash = blockhain.decrypt(newString);
    if (newHash.startsWith('0000')) {
        console.log('het is gelukt: ', nonce);
        return newHash;
    }


    nonce = nonce+1;
    mineBlock(string,nonce)
}


function postBlock(nonce){
    console.log('De nonce is: ',nonce );

    let formData = {
        user: 'Karim 0910135',
        nonce: nonce
    };


    request.post({
            url: 'http://programmeren9.cmgt.hr.nl:8000/api/blockchain/',
            form: formData
        },
        function (err, httpResponse, body) {
            console.log(err, body);
        });
}






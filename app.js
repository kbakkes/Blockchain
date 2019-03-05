const blockhain = require('./blockchain');
const fetch = require('node-fetch');
const request = require('request');


let string = 'frmwrkfrmwrkfrmwrk frmwrkfrmwrkfrmwrkfrmwrk';

console.log('Cracking the code....');
blockhain.decrypt(string);
getNextBlock();

function getNextBlock(){
    let url = 'http://programmeren9.cmgt.hr.nl:8000/api/blockchain/next';
    let block = {};

    fetch(url)
        .then(res => res.json())
        .then(res => block = getPreviousBlock(res))
        .catch(function (error) {
        console.log('er gaat iets mis: ', error)
    });

    console.log(block);
}


function getPreviousBlock(previousBlock){
    let block = previousBlock.blockchain;

    let hash =
        (
       block.hash + block.data[0].from + block.data[0].to +
       block.data[0].timestamp + block.timestamp + block.nonce
        );

    // console.log(hash)

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






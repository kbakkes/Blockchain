let expect = require("chai").expect;
let blockhain = require('./../blockchain');


let assert = require('assert');
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
    describe("String to ASCII converter", function () {
        it('should convert string to ASCII', function () {
            let solution = ['1', '1', '6', '1', '0', '1', '1', '2', '0', '1', '1', '6'];
            expect(blockhain.stringToASCII('text')).to.deep.equal(solution);
        })
    });
});

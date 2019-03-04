let expect = require("chai").expect;
let blockhain = require('./../blockchain');
let solutions = require('./../solutions');

describe('Array', function() {
    describe("String to ASCII converter", function () {
        it('should convert string to ASCII', function () {
            expect(blockhain.stringToASCII(solutions.asciiParameter)).to.deep.equal(solutions.asciiSolution);
        })
    });
    describe('Array Chunker', function () {
        it('should chunk 1 big array into multiple arrays of 10', function () {
            expect(blockhain.chunkToTen(solutions.chunkParameter)).to.deep.equal(solutions.chunkSolution);
        })
    });
    describe('Fill to ten', function () {
        it('should fill all arrays untill their length is 10', function () {
            expect(blockhain.fillChunk(solutions.fillParameter)).to.deep.equal(solutions.fillSolution)
        })
    });
});

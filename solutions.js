const solutions = (function() {

    const asciiParameter = 'text';
    const asciiSolution = ['1', '1', '6', '1', '0', '1', '1', '2', '0', '1', '1', '6'];

    const chunkParameter = asciiSolution;
    const chunkSolution = [ [ '1', '1', '6', '1', '0', '1', '1', '2', '0', '1' ],
        [ '1', '6'] ];

    const fillParameter = chunkSolution;
    const fillSolution  = [ [ '1', '1', '6', '1', '0', '1', '1', '2', '0', '1' ],
        [ '1', '6', '0', '1', '2', '3', '4', '5', '6', '7' ] ];



    return {
    asciiParameter,
    asciiSolution,
    chunkParameter,
    chunkSolution,
    fillParameter,
    fillSolution
}
}());

module.exports = solutions;
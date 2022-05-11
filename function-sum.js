import {functionSum} from '../test/test-function-sum' ;

const functionSum = async(...variableNumber) => {
    return variableNumber.reduce((totalCalculation , currntValue ) => totalCalculation + currntValue)
}

module.exports = functionSum;
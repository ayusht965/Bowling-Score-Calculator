const doubleNumbers = (numbers) => {
    if (!Array.isArray(numbers)) {
        throw new Error('Must provide an array');
    }
    numbers.forEach((element) => {
        if (isNaN(element))
            throw new Error('the array contains non integers');
    });
    return numbers.map((num) => num * 2);
};

const filterEvenNumber = (numbers) => {
    if (!Array.isArray(numbers))
        throw new Error('Must Provide an array');
    numbers.forEach((element) => {
        if (isNaN(element))
            throw new Error('the array contains non integers');
    });
    return numbers.filter((element) => element % 2 == 0);
};

const tripleElementAndEvenNumber = (numbers) => {
    if (!Array.isArray(numbers))
        throw new Error('Must Provide an array');
    numbers.forEach((element) => {
        if (isNaN(element))
            throw new Error('the array contains non integers');
    });
    let result = numbers.map((element) => element * 3);//doesnt matter 
    return result.filter((element) => element % 2 == 0);
};

const tripleNumbers = (numbers) => numbers.reduce((acc, item) => {
    if ((item * 3) % 2 === 0) acc.push(item * 3);
    return acc;
}, []);
console.log(tripleNumbers([1, 2, 3, 4, 5]));

module.exports = { doubleNumbers, filterEvenNumber, tripleElementAndEvenNumber, tripleNumbers };
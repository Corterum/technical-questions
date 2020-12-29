export const sumIsOdd = (input1, input2) => {
    // This code should return true if the two inputs provided are odd, and false if they are even
    return false;
}

export const fizzBuzzArray = arrayLength => {
    // This code should return an array of length 'arrayLength' - filling every 3rd number with fizz, every 5th with buzz
    // and every 15th with fizzbuzz. All other values should be the number in question
    return [];
}

export const objectFetch = async () => {
    // This code should call an asynchronous function getValues (provided below), and then parse the array returned to only
    // show the objects provided with "share: true"
    return [];
}

const getValues = () => {
    return Promise.resolve([
        {
            name: 'foo',
            share: true
        },
        {
            name: 'bar',
            share: false
        },
        {
            name: 'foobar',
            share: true
        }
    ]);
}
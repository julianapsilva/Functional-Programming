// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];

    for (let cups = 0; cups < numOfCups; cups++) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 2);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 1);

console.log(
    tea4GreenTeamFCC,
    tea4BlackTeamFCC
);
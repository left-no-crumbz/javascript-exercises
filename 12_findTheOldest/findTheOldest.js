const findTheOldest = (arr) => {
    return arr.reduce((currentPerson, nextPerson) => {

        if (!currentPerson.yearOfDeath){
            currentPerson.yearOfDeath = new Date().getFullYear();
        }
        const currentYearsLived = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        const nextYearsLived = nextPerson.yearOfDeath - nextPerson.yearOfBirth;

        if (currentYearsLived > nextYearsLived){
            return currentPerson;
        }
            return nextPerson;
    })

}

// Do not edit below this line
module.exports = findTheOldest;

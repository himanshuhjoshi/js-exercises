const findTheOldest = function(people) {
   return people.reduce(
    (acc, curr) => ((acc.yearOfDeath || new Date().getFullYear()) - acc.yearOfBirth < (curr.yearOfDeath || new Date().getFullYear()) - curr.yearOfBirth) 
    ? curr : acc)
};

// Do not edit below this line
module.exports = findTheOldest;

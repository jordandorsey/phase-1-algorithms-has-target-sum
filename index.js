function hasTargetSum(array, target) {
  // Write your algorithm here

    // iterate over the array of numbers
  //   for the current number, identify a complementary number that adds to our target
  //   (for example: if our number is 2, and the target is 5, the complementary number is 3)
  //   iterate over the remaining numbers in the array
  //     check if any of the remaining numbers is the complement
  //       if so, return true
  // if we reach the end of the array, return false
}
 

/* 
  Write the Big O time complexity of your function here
*/


  //Add your pseudocode here

hasTargetSum([3, 8, 12, 4, 11, 7], 10);
// returns true, since 3 and 7 add up to 10

hasTargetSum([22, 19, 4, 6, 30], 25);
// returns true, since 19 and 6 add up to 25

hasTargetSum([1, 2, 5], 4);
// returns false, since no pair of numbers adds up to 

hasTargetSum([2,4,5,6], 11);

hasTargetSum([0,3,5], 7);
//if 2 arrays are added the target/sum is equal to the target
//return true if the target matches
//if the target case is not the same return false

/*
  Add written explanation of your solution here
*/

function hasTargetSum(array, target) {
  const seenNumbers = new Set(); // initialize an empty Set
  for (const number of array) {
    const complement = target - number;

    // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;

    // .add adds the number to the Set
    seenNumbers.add(number);
  }
  return false;
}

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));


  console.log("Expecting: true");
  console.log("=>", hasTargetSum([0, 3, 5], 8));


  console.log("Expecting: false");
  console.log("=>", hasTargetSum([2, 4, 5, 6], 10));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 4, 5, 6], 11));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([0, 3 , 5], 7));


}

module.exports = hasTargetSum;


/* function hasTargetSum(array, target) {
  // create an object to keep track of all the numbers we've seen
  const seenNumbers = {};
  // iterate over the array of numbers
  for (const number of array) {
    // for the current number, identify a complementary number that adds to our target
    // (for example: if our number is 2, and the target is 5, the complementary number is 3)
    const complement = target - number;
    // check if any of the keys in our object is the complement to the current number
    // if so, return true
    if (seenNumbers[complement]) return true;
    // save the current number as the key on our object so we can check it later against other numbers
    seenNumbers[number] = true;
  }
  // if we reach the end of the array, return false
  return false;
}*/
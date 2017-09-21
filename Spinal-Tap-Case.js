/*
Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins

    //find the lowercase characters which are immediately followed by uppercase characters and add a space
    var result = str.replace(/[a-z](?=[A-Z])/g, (e, i) => str[i] + ' ');
    return result.replace(/[_ -]/g,'-').toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap")); // should return "this-is-spinal-tap".
console.log(spinalCase("thisIsSpinalTap")); // should return "this-is-spinal-tap".
console.log(spinalCase("The_Andy_Griffith_Show")); // should return "the-andy-griffith-show".
console.log(spinalCase("Teletubbies say Eh-oh")); // should return "teletubbies-say-eh-oh".
console.log(spinalCase("AllThe-small Things")); // should return "all-the-small-things".
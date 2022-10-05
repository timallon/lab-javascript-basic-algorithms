console.log("I'm ready!");
// Iteration 1: Names and Input
const hacker1 = "Stephanie";
console.log(`The driver's name is ${hacker1}.`);
const hacker2 = "Tim";
console.log(`The navigator's name is ${hacker2}.`);

//
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else if (hacker1.length = hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else {
    console.log(`Read the instructions!`)
}
// Iteration 3: Loops
const capitalisedHacker1 = hacker1.toUpperCase();
let spacedOutName = "";
for (let count = 0; count < capitalisedHacker1.length; count++) {
  const char = capitalisedHacker1[count];
  const lastChar = capitalisedHacker1.length - 1;
  if (count !== lastChar ) {
    spacedOutName += char + " ";
  } else {
    spacedOutName += char;
  }
}
console.log(spacedOutName);

let reverseName = "";
for (let count = hacker1.length - 1; count = 0; count--) {
    const char2 =  hacker1[count];
    reverseName += char2;
}

console.log(reverseName)

if (hacker1.length > hacker2.length) {
    console.log("The driver's name goes first.");
}
else if (hacker1.length < hacker2.length) {
    console.log("Yo, the navigator goes first definitely.");
}
else if (hacker1.length = hacker2.length) {
    console.log("What?! You both have the same name?");
}
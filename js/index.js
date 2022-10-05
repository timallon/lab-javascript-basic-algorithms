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

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar vitae ligula et accumsan. Ut suscipit dapibus mollis. Maecenas vitae libero ac nisl rutrum tincidunt ut at est. Maecenas sagittis ex eu venenatis scelerisque. Donec sed vehicula lacus, vitae hendrerit turpis. Mauris sit amet accumsan ante, ac feugiat dui. Integer faucibus lectus ante, quis commodo quam pretium eget. Suspendisse sagittis leo ut lacus vulputate, vitae ullamcorper augue placerat. Duis vitae ultricies augue, ac tempor ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean fermentum, nisi convallis posuere pretium, lectus metus aliquam diam, eget tristique neque urna a mauris. Curabitur mattis neque vitae nisl laoreet, vel sollicitudin nisi elementum. Vivamus interdum erat nunc, egestas commodo felis vehicula in.

Sed ut lectus eget orci tempor accumsan id eget tortor. Curabitur eget tempor orci. Suspendisse vulputate porttitor dui, vitae vehicula risus ornare nec. Praesent consectetur libero vitae imperdiet efficitur. Nulla a ultricies tortor, quis hendrerit dolor. Nulla hendrerit facilisis gravida. Cras non urna enim. Suspendisse rutrum placerat ante, eget porta nulla rutrum eu. Proin urna augue, eleifend eget lacinia eget, molestie non mauris. Nunc bibendum dui magna, cursus ornare tellus accumsan non. Donec sagittis ultrices neque vel faucibus.

Cras at egestas est, quis convallis lectus. Duis eget dapibus lacus, ut facilisis ante. Nulla id convallis purus. Integer vel mollis ligula, ac ultrices mi. Suspendisse sagittis lorem non ipsum accumsan ultricies. Morbi lacus leo, vestibulum ac ligula vitae, ullamcorper consequat turpis. Integer ut libero eget neque finibus vehicula at eget est. Nam rhoncus justo sit amet ex pellentesque, ut porta erat consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed iaculis erat quis pharetra feugiat. Morbi ultricies nibh ac metus scelerisque consectetur. Vivamus aliquet ut libero id sollicitudin. Maecenas et eros quis lectus aliquet lobortis. Mauris pretium lectus quis porttitor sodales. Proin mattis justo in tellus convallis, et molestie nulla placerat. Vivamus pretium massa quis turpis pretium sollicitudin.`;

function subStringCounter (string) {
    let counter = 0;
    for ( let i = 0; i <= string.length - 1; i++ ) {
        const char1 = string[i]; 
        if ( char1 === " " ) {
          for ( let i = 0; i <= string.length - 1; i++ ) {
            const char2 = string[i];
            if ( char2 === "e" ) {
                for ( let i = 0; i <= string.length - 1; i++ ) {
                    const char3 = string[i];
                    if ( char3 === "t" ) {
                        for ( let i = 0; i <= string.length - 1; i++ ) {
                            const char4 = string[i];
                            if ( char4 === " " ) {
                                counter += 1;
                                return;
                            }
                        }
                    }
                }
            }
          }
        }
    }
}
console.log(subStringCounter(lorem));

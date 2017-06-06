var width = 100;

// function scoping

// function setWidth() {
//     var width = 300;
//     console.log(width);
// }

// setWidth();

// console.log(width);


// ---------------------------------


// var age = 100;

// if (age > 12) {
//     const dogYears = age * 7;
//     console.log(`you are ${dogYears} dog years old`);
// }

// console.log(dogYears);



// const key = 'abc123';
// let points = 50;
// let wineer = false;

// if (points > 40) {

// } else {

// }

for (let age = 1; age < 10; age++) {

    setTimeout(function() {
        console.log(`i am ${age} years old`);
    }, 200);

}

let c = 'yes';
const markup = `<h1>He is now ${5*6}</h1>
   ${ feat(c) }
`;

function feat(d) {
    return (
            `<li>${d.map(key => `<span> ${key}</span>`).join('')}</li>`
    );
}

document.body.innerHTML = markup;
const array1 = [];
const array2 = ['Mercedes','Mclaren','Ferrari','RedBull','AstonMartin'];

// console.log(array1.length);
// console.log(array2.length);

// console.log(array2[0]);
// console.log(array2[Math.floor(array2.length / 2)]);
// console.log(array2[array2.length - 1]);

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// console.log(itCompanies.join(', '));
// console.log(itCompanies.length);

// console.log(itCompanies[0]);
// console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
// console.log(itCompanies[itCompanies.length - 1]);

// for(let i = 0; i<itCompanies.length; i++){
//     console.log(itCompanies[i]);
// }

// for(let i = 0; i<itCompanies.length; i++){
//     itCompanies[i] = itCompanies[i].toUpperCase();
//     console.log(itCompanies[i]);
// }

// check = itCompanies.includes('Amazon')
// check==1?console.log('Exists'):console.log('Doesnt exist');

// console.log(itCompanies.sort());
// console.log(itCompanies.slice(0,3));
// console.log(
//   itCompanies.slice(
//     Math.floor(itCompanies.length / 2),
//     Math.floor(itCompanies.length / 2) + 1
//   )
// );

// console.log(itCompanies.reverse());
// console.log(itCompanies.slice(0,3));

// console.log(itCompanies.shift());
// console.log(itCompanies.pop());
// console.log(itCompanies.splice(Math.floor(itCompanies.length / 2), 1));

// itCompanies.length = 0;
// console.log(itCompanies);

const areaOfCircle = (...args) => args * args * args;

console.log(areaOfCircle(Math.PI,2,2));
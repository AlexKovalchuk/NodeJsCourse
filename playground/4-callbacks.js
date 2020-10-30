// setTimeout(() => {
//   console.log('2 seconds are up');
// }, 2000);

// const names = ['Nadiya', 'Alex', 'Jacob'];
// const sortNames =  names.filter((name) => {
//   return name.length <= 5;
// });

// const geocode = (address, callback) => {

  
//   setTimeout(() => {
//     const data = {
//       latitude: -49,
//       longitude: 27
//     }
//     callback(address, data);
//     return data;
//   }, 1000);
// }

// geocode('Vinecia', (address, geo) => console.log(address, geo))

const add = (numOne, numTwo, callback) => {
  setTimeout(() => {
    callback(numOne + numTwo);
  }, 2000);
};

add(1,4,(sum) => console.log(sum))

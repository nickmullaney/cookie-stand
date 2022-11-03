'use strict';

let operatingHours = [`6 AM`, `7 AM`, `8 AM`, `9 AM`, `10 AM`, `11 AM`, `12 PM`, `1 PM`, `2 PM`, `3 PM`, `4 PM`, `5 PM`, `6 PM`, `7 PM`];

let store1 = {
  location: `Seattle`,
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6.3,
  //Array of generated sales numbers
  //Each item should represent an hour of sales
  hourlySales: [],
  totalSales: 0
};

let store2 = {
  location: `Tokyo`,
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSale: 1.2,
  hourlySales: [],
  totalSales: 0  
};

let store3 = {
  location: `Dubai`,
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSale: 3.7,
  hourlySales: [],
  totalSales: 0
};

let store4 = {
  location: `Paris`,
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSale: 2.3,
  hourlySales: [],
  totalSales: 0
};

let store5 = {
  location: `Lima`,
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSale: 4.6,
  hourlySales: [],
  totalSales: 0
};

let allStores = [store1, store2, store3, store4, store5];
console.log(allStores);

function randNumber(min, max) {
  return Math.round(min + Math.random() * (max - min));
}

// console.log(randNumber(23, 65));
// let randomCustomerHour = store1.randNumber(minCustomer,maxCustomer);


//global var of hours
//global array where the hours are strings
//14 hours inside array, iterate over it with calculating avg cookies

// 

//make a function for store input
function storeCalculator(store) {
  console.log(store.location + ' Location');
  for (let i = 0; i < operatingHours.length; i++) {
    let hourlyCustomers = randNumber(store.minCustomer, store.maxCustomer);
    let avgCookiePerCustomer = Math.round(hourlyCustomers * store.avgCookieSale);
    store.hourlySales.push(avgCookiePerCustomer);
    store.totalSales += store.hourlySales[i];
    console.log(operatingHours[i] + ': Cookies', avgCookiePerCustomer)
  }
  console.log(`Total Sales `,store.totalSales)
}

function runThatShit(allLocations){
  for(let i = 0; i < allLocations.length; i++){
    storeCalculator(allStores[i]);
  }
}

runThatShit(allStores);


// storeCalculator(store1);
// storeCalculator(store2);
// storeCalculator(store3);
// storeCalculator(store4);
// storeCalculator(store5);


// Test Code Graveyeard
// function hourlySales(arr, store){
//   for(let i = 0; i < arr.length; i++){
//     store.hourlySales.push(avgCookiePerCustomer)
//   }
// }
// hourlySales(operatingHours, store1);


// Old Hours Business
// let openHour = 6;
// let closeHour = 20;

// function timeConversion(hour) {

// }
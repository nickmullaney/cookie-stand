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
    //pushes the avg cookie per customer to the hourlysales
    store.hourlySales.push(avgCookiePerCustomer);
    let finalSales = (store.totalSales += store.hourlySales[i]);
    addMe(store.hourlySales, finalSales);
    // console.log(operatingHours[i] + ': Cookies', avgCookiePerCustomer)
  }
  console.log(`Total Sales `, store.totalSales)
}

//runs all of the stores through the store calculator
function runThatShit(allLocations) {
  for (let i = 0; i < allLocations.length; i++) {
    storeCalculator(allStores[i]);
  }
}
//runs 
runThatShit(allStores);

function addMe(store, finalSales) {
  // 1. select the parent- document.getElementById()
  let parentElement = document.getElementById(`sales`)

  // 2. Create a new element- document.createElement()
  let orderLi = document.createElement(`li`);

  // 3. Fill created element with Stuff- `.innertext <-- This is a property
  orderLi.innerText = `${store.location} with ${finalSales}`;

  //4. Append the created element to the parent element- document.appendChild()
  //This adds a list item to our webpagea
  parentElement.appendChild(orderLi);
}




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
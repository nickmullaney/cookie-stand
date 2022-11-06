'use strict';

function Store(location, minCustomer, maxCustomer, avgCookieSale, hourlySales, totalSales){
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.hourlySales = hourlySales;
  this.totalSales = totalSales;
}
let store1 = new Store(`Seattle`, 23, 65, 6.3, [], 0);

let store2 = new Store(`Tokyo`, 3, 24, 1.2, [], 0);

let store3 = new Store(`Dubai`, 1, 38, 3.7, [], 0);

let store4 = new Store(`Paris`, 20, 38, 2.3, [], 0);

let store5 = new Store(`Lima`, 2, 16, 4.6, [], 0);


let allStores = [store1, store2, store3, store4, store5];
let operatingHours = [`6 AM`, `7 AM`, `8 AM`, `9 AM`, `10 AM`, `11 AM`, `12 PM`, `1 PM`, `2 PM`, `3 PM`, `4 PM`, `5 PM`, `6 PM`, `7 PM`];


function randNumber(min, max) {
  return Math.round(min + Math.random() * (max - min));
}

//try to put all locations into this function to simplify
//make a function for store input
function storeCalculator(store) {
  // console.log(store.location + ' Location');
  for (let i = 0; i < operatingHours.length; i++) {
    let hourlyCustomers = randNumber(store.minCustomer, store.maxCustomer);
    let avgCookiePerCustomer = Math.round(hourlyCustomers * store.avgCookieSale);
    //pushes the avg cookie per customer to the hourlysales
    store.hourlySales.push(avgCookiePerCustomer);
    // console.log(operatingHours[i] + ': Cookies', avgCookiePerCustomer)
    store.totalSales += store.hourlySales[i];
  }
  // console.log(`final sales`, store.finalSales);
  // console.log(`Total Sales `, store.totalSales)
}

//runs all of the stores through the store calculator
function showAllLocations(allLocations) {
  for (let i = 0; i < allLocations.length; i++) {
    storeCalculator(allStores[i]);
  }
}

//This function builds our table header
function tableHeader(operatingHours){
  let storeHours = document.getElementById('cookieTableHead');
  let tableRow = document.createElement('tr');
  let a1 = document.createElement('td');
  a1.textContent = '';
  tableRow.appendChild(a1);
  for(let i = 0; i < operatingHours.length; i++){
    let tableHeader = document.createElement('th');
    tableHeader.textContent = operatingHours[i];
    tableRow.appendChild(tableHeader);
  }
  let dailyTotal = document.createElement('th');
  dailyTotal.textContent = 'Daily Location Total';
  tableRow.appendChild(dailyTotal);
  storeHours.appendChild(tableRow);
}

//This function builds out the table body data
Store.prototype.render = function(){
  storeCalculator(this)
  let tableElement = document.getElementById('cookieTableBody');
  let cityRow = document.createElement(`tr`);
  //adds our store name to the table
  let cityName = document.createElement('td');
  cityName.textContent = this.location;
  cityRow.appendChild(cityName);
  //adds our hourly sales to the table
  for(let i = 0; i < this.hourlySales.length; i++){
    let cityData = document.createElement('td');
    cityData.textContent = this.hourlySales[i];
    cityRow.appendChild(cityData);
  }
  //daily total sales
  let dailyTotal = document.createElement('td');
  dailyTotal.textContent = this.totalSales;
  cityRow.appendChild(dailyTotal);
  
  tableElement.appendChild(cityRow);
}


//builds our footer table
function tableFooter(store, opHours){
  let footRow = document.getElementById('cookieTableFoot');
  let totalRow = document.createElement('tr');
  let totalTitle = document.createElement('td');
  totalTitle.textContent = 'Totals';
  totalRow.appendChild(totalTitle);
  
  for(let i = 0; i < opHours.length; i++){
    let hourlyValues = 0;
    //***************Come back to try and finish this for loop.
    // add together all of the hourlytotals outside the first loop to give a value.
    let finalSaleValue = 0;
    for(let j = 0; j < store.length; j++){
      hourlyValues += store[j].hourlySales[i];
    }
    let hourlyTotals = document.createElement('td');
    hourlyTotals.textContent = hourlyValues;
    totalRow.appendChild(hourlyTotals);
  }
  footRow.appendChild(totalRow);
  let finalSales = document.createElement(`td`);
  finalSales.textContent =  `${store1.totalSales + store2.totalSales + store3.totalSales + store4.totalSales + store5.totalSales}`;
  totalRow.appendChild(finalSales);
}

tableHeader(operatingHours);
store1.render();
store2.render();
store3.render();
store4.render();
store5.render();
tableFooter(allStores, operatingHours);
  
function finalCookies(allStores){  
  let parentElement = document.getElementById(`finalSales`)
    let finalSales = document.createElement(`p`);
    finalSales.textContent = `Total Cookies Sold: ${store1.totalSales + store2.totalSales + store3.totalSales + store4.totalSales}`;
    parentElement.appendChild(finalSales);
  }

  function pushToPage(allStores) {
    for (let i = 0; i < allStores.length; i++) {
    tableBody(allStores[i]);
  }
}

// showAllLocations(allStores);
// pushToPage(allStores);
// finalCookies(allStores);

// Test Code Graveyard


// function addMe(store) {
  //   // 1. select the parent- document.getElementById()
  //   let parentElement = document.getElementById(`sales`)
  
//   let cityName = document.createElement(`h2`);
//   cityName.textContent = `Store Location: ${store.location}`;
//   parentElement.appendChild(cityName);
//   console.log(`City Name`, cityName);

//   for (let i = 0; i < operatingHours.length; i++) {
  //     // 2. Create a new element- document.createElement()
  //     let orderLi = document.createElement(`li`);
  
  //     // 3. Fill created element with Stuff- `.innertext <-- This is a property
  //     orderLi.textContent = `${operatingHours[i]}: ${store.hourlySales[i]} Cookies`;
  
  //     //4. Append the created element to the parent element- document.appendChild()
  //     //This adds a list item to our webpage
  //     parentElement.appendChild(orderLi);
  //   }
  //   //Total store sales added to the end of the list
  //   let storeTotalSales = document.createElement(`li`);
  //   storeTotalSales.textContent = `Total Cookies Sold: ${store.totalSales}`;
  //   parentElement.appendChild(storeTotalSales);
  // }
// let store1 = {
//   location: `Seattle`,
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgCookieSale: 6.3,
//   //Array of generated sales numbers
//   //Each item should represent an hour of sales
//   hourlySales: [],
//   totalSales: 0
// };

// let store2 = {
//   location: `Tokyo`,
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookieSale: 1.2,
//   hourlySales: [],
//   totalSales: 0
// };

// let store3 = {
//   location: `Dubai`,
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookieSale: 3.7,
//   hourlySales: [],
//   totalSales: 0
// };

// let store4 = {
//   location: `Paris`,
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgCookieSale: 2.3,
//   hourlySales: [],
//   totalSales: 0
// };

// let store5 = {
//   location: `Lima`,
//   minCustomer: 2,
//   maxCustomer: 16,
//   avgCookieSale: 4.6,
//   hourlySales: [],
//   totalSales: 0
// };

// function tableBody(store){
//   let locationData = document.getElementById('cookieTableBody');
//   let cityRow = document.createElement('tr');
//   //adds our store name to the table
//   let cityName = document.createElement('td');
//   cityName.textContent = store.location;
//   cityRow.appendChild(cityName);
//  //adds our hourly sales to the table
//   for(let i = 0; i < store.hourlySales.length; i++){
  //     let cityData = document.createElement('td');
  //     cityData.textContent = store.hourlySales[i];
  //     cityRow.appendChild(cityData);
  //   }
//   //daily total sales
//   let dailyTotal = document.createElement('td');
//   dailyTotal.textContent = store.totalSales;
//   cityRow.appendChild(dailyTotal);

//   locationData.appendChild(cityRow);
// }
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

//tester code
// finalSales(allStores);

// function finalSales(allStores) {
  //   for (let i = 0; i < allStores.length; i++) {
    //     finalSales += allStores.totalSales;
    //   }
    //   console.log(`Final sales`, finalSales);
    // }

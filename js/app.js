'use strict';

// Global variables
function Store(location, minCustomer, maxCustomer, avgCookieSale, hourlySales, totalSales) {
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
let footRow = document.getElementById('cookieTableFoot');
let parentElement = document.getElementById(`finalSales`);

// Functions

// This function gets our randomly generated customers based on the min and max per location
function randNumber(min, max) {
  return Math.round(min + Math.random() * (max - min));
}

//function to generate random average cookie sales instead of asking customer
// Experimental code that works
function randAvgCookies(min, max) {
  let num = min + Math.random() * (max - min);
  return num.toFixed(1);
}

//This function calculates all the operating data for the stores and pushes it to the hourly sales array
function storeCalculator(store) {
  for (let i = 0; i < operatingHours.length; i++) {
    let hourlyCustomers = randNumber(store.minCustomer, store.maxCustomer);
    let avgCookiePerCustomer = Math.floor(hourlyCustomers * store.avgCookieSale);
    //pushes the avg cookie per customer to the hourlysales
    store.hourlySales.push(avgCookiePerCustomer);
    store.totalSales += store.hourlySales[i];
  }
}

//runs all of the stores through the store calculator
function showAllLocations(allLocations) {
  for (let i = 0; i < allLocations.length; i++) {
    storeCalculator(allStores[i]);
  }
}

//This function builds our table header
function tableHeader(operatingHours) {
  let storeHours = document.getElementById('cookieTableHead');
  let tableRow = document.createElement('tr');
  let a1 = document.createElement('td');
  a1.textContent = '';
  tableRow.appendChild(a1);
  for (let i = 0; i < operatingHours.length; i++) {
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
Store.prototype.render = function () {
  storeCalculator(this)
  let tableElement = document.getElementById('cookieTableBody');
  let cityRow = document.createElement(`tr`);
  //adds our store name to the table
  let cityName = document.createElement('td');
  cityName.textContent = this.location;
  cityRow.appendChild(cityName);
  //adds our hourly sales to the table
  for (let i = 0; i < this.hourlySales.length; i++) {
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
function tableFooter(store, opHours) {
  let totalRow = document.createElement('tr');
  let totalTitle = document.createElement('td');
  totalTitle.textContent = 'Totals';
  totalRow.appendChild(totalTitle);
  for (let i = 0; i < opHours.length; i++) {
    let hourlyValues = 0;
    for (let j = 0; j < store.length; j++) {
      hourlyValues += store[j].hourlySales[i];
    }
    let hourlyTotals = document.createElement('td');
    hourlyTotals.textContent = hourlyValues;
    totalRow.appendChild(hourlyTotals);
  }
  footRow.appendChild(totalRow);
  let finalSales = document.createElement(`td`);
  finalSales.textContent = `${allSales(allStores)}`;
  totalRow.appendChild(finalSales);
}

//Renders every location in the array
function renderAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].render();
  }
}

//Gets All around total sales information
function allSales(arr) {
  let final = 0;
  for (let i = 0; i < arr.length; i++) {
    final += arr[i].totalSales;
    console.log(final);
  }
  return final;
}

//Posts final sales for all stores
function finalCookies(allStores) {
  let finalSales = document.createElement(`p`);
  finalSales.textContent = `Total Cookies Sold: ${allSales(allStores)}`;
  parentElement.appendChild(finalSales);
}

////////////////////
//Form Code
////////////////////

let addStoreForm = document.getElementById(`addStoreForm`);
addStoreForm.addEventListener(`submit`, addStore);

function addStore(event) {
  event.preventDefault();
  let form = event.target;
  let location = form.storeLocation.value;
  let minCustomer = parseInt(form.minCustomer.value);
  let maxCustomer = parseInt(form.maxCustomer.value);
  let avgCookieSale = form.avgCookie.value;
  let store = new Store(location, minCustomer, maxCustomer, avgCookieSale, [], 0);
  location = location.toLowerCase();
  if (location == allStores.location) {
    alert("That is already a store");
  }
  else {
    allStores.push(store);
    store.render();
    footRow.innerHTML = "";
    tableFooter(allStores, operatingHours);
    parentElement.innerHTML = "";
    finalCookies(allStores);
  }
}

// Execution Code

tableHeader(operatingHours);
renderAll(allStores);
tableFooter(allStores, operatingHours);
finalCookies(allStores);

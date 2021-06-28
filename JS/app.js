'use strict';



let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let listOfShops = [];
function firstRaw() {
    let divEL = document.getElementById("list1");
    let tableEl = document.createElement("table");
    divEL.appendChild(tableEl);
    let trEl = document.createElement("tr");
    tableEl.appendChild(trEl);
    let tdEl1 = document.createElement("th");
    tdEl1.textContent = "                           ";
    trEl.appendChild(tdEl1);
    for (let i = 0; i < hours.length; i++) {
        let thEl = document.createElement("th");
        thEl.textContent = hours[i];
        trEl.appendChild(thEl);
    }
    let thEl2 = document.createElement("th"); 
    thEl2.textContent = "Daily Location Total";
    trEl.appendChild(thEl2);
};
function lastRaw() {
    let divEL = document.getElementById("list1");
    let tableEl = document.createElement("table");
    divEL.appendChild(tableEl);
    let trEl = document.createElement("tr");
    tableEl.appendChild(trEl);
    let tdEl1 = document.createElement("td");
    tdEl1.textContent = "Total: ";
    trEl.appendChild(tdEl1);
    for (let i = 0; i < hours.length; i++) {
        let thEl = document.createElement("td");
            thEl.textContent =listOfShops[0].cookiesNumberPerHours[i]+listOfShops[1].cookiesNumberPerHours[i]+listOfShops[2].cookiesNumberPerHours[i]+listOfShops[3].cookiesNumberPerHours[i]+listOfShops[4].cookiesNumberPerHours[i];;
            trEl.appendChild(thEl);
    }
    let tdEl2 = document.createElement("td");
    tdEl2.textContent = "                 ";
    trEl.appendChild(tdEl2);
    
};


function Shop(shopName, minCust, maxCust, avgCust) {
    this.shopName = shopName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCust = avgCust;
    this.total = 0;
    this.customerNumberPerHours = [];
    this.cookiesNumberPerHours = [];
    this.totalCookiesNumberPerHours = [];
    this.hourlySales = [];
    listOfShops.push(this);
}
Shop.prototype.csutRandom = function () {
    for (let i = 0; i < hours.length; i++) {
        let min = Math.ceil(this.minCust);
        let max = Math.floor(this.maxCust);
        let randCust = Math.floor(Math.random() * (max - min + 1) + min);
        this.customerNumberPerHours.push(randCust);
    }
}
Shop.prototype.cookiesRandom = function () {
    for (let i = 0; i < hours.length; i++) {
        this.cookiesNumberPerHours[i] = Math.ceil(this.customerNumberPerHours[i] * this.avgCust);
        this.total += this.cookiesNumberPerHours[i];

    }
}

Shop.prototype.render = function () {
    let divEL = document.getElementById("list1");
    let tableEl = document.createElement("table");
    divEL.appendChild(tableEl);
    let trEl = document.createElement("tr");
    tableEl.appendChild(trEl);
    let tdEl1 = document.createElement("td");
    tdEl1.textContent = this.shopName;
    trEl.appendChild(tdEl1);
    for (let i = 0; i < hours.length; i++) {
        let tdEl = document.createElement("td");
        tdEl.textContent =this.cookiesNumberPerHours[i];
        trEl.appendChild(tdEl);
    }
    let tdEl2 = document.createElement("td");
    tdEl2.textContent = hours.length;
    trEl.appendChild(tdEl2);


    

}
let seattle = new Shop("Seattle", 23, 65, 6.3);
let tokyo = new Shop("Tokyo", 3, 24, 1.2);
let dubai = new Shop("Dubai", 11, 38, 3.7);
let paris = new Shop("Paris", 20, 38, 2.3);
let lima = new Shop("Lima", 2, 16, 4.6);
seattle.csutRandom();
seattle.cookiesRandom();
tokyo.csutRandom();
tokyo.cookiesRandom();
dubai.csutRandom();
dubai.cookiesRandom();
seattle.csutRandom();
seattle.cookiesRandom();
paris.csutRandom();
paris.cookiesRandom();
lima.csutRandom();
lima.cookiesRandom();
console.log(tokyo);
firstRaw();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
lastRaw();

//trEl.appendChild(thEl);

    // thEl.textContent="asdas";

    // let divEL = document.getElementById("list1");
    // let h2EL = document.createElement("h2");
    // h2EL.textContent = this.loc;

    // divEL.appendChild(h2EL)
    // let ulEL = document.createElement("ul");
    // divEL.appendChild(ulEL);
    // for (let i = 0; i < hours.length; i++) {
    //     let liEL = document.createElement("li");
    //     liEL.textContent = hours[i] + " : " + this.cookiesNumberPerHours[i] + " Cookies";
    //     ulEL.appendChild(liEL);
    // }
    // let liTotalEL = document.createElement("li");
    // liTotalEL.textContent = "Total : " + this.total + " Cookies";
    // ulEL.appendChild(liTotalEL);
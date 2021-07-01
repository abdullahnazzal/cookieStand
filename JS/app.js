'use strict';
// let btn1 = document.getElementById("btn1")
// let btn2 = document.getElementById("btn2")
//let contener= document.getElementById("div1")
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let listOfShops = [];
let divEL = document.getElementById("list1");
let tableEl = document.createElement("table");
divEL.appendChild(tableEl);
let tfootEl = document.createElement("tr");

function firstRaw() {
    let trEl = document.createElement("tr");
    tableEl.appendChild(trEl);
    let thEl1 = document.createElement("th");
    thEl1.textContent = "Shops ";
    trEl.appendChild(thEl1);
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
    tfootEl = document.createElement("tr");
    let tdEl = document.createElement("td");
    tdEl.textContent = "Totals: ";
    tfootEl.appendChild(tdEl);
    tableEl.appendChild(tfootEl);
    let mainTotel = 0;
    
    for (let h = 0; h < hours.length; h++) {
        let tdEl = document.createElement("td");
        let sum = 0;
        for (let s = 0; s < listOfShops.length; s++) {
            sum = sum + listOfShops[s].cookiesNumberPerHours[h];
        }
        mainTotel += sum;
        //tdEl.textContent = listOfShops[0].cookiesNumberPerHours[i] + listOfShops[1].cookiesNumberPerHours[i] + listOfShops[2].cookiesNumberPerHours[i] + listOfShops[3].cookiesNumberPerHours[i] + listOfShops[4].cookiesNumberPerHours[i];;
        tdEl.textContent = sum;
        tfootEl.appendChild(tdEl);
    }
    let tdTotalEl = document.createElement("td");
    tdTotalEl.textContent = mainTotel;
    tfootEl.appendChild(tdTotalEl);

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
    //this.hourlySales = [];
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
    let trEl = document.createElement("tr");
    let tdEl1 = document.createElement("td");
    tdEl1.textContent = this.shopName;
    trEl.appendChild(tdEl1);
    for (let i = 0; i < hours.length; i++) {
        let tdEl = document.createElement("td");
        tdEl.textContent = this.cookiesNumberPerHours[i];
        trEl.appendChild(tdEl);
    }
    let tdEl2 = document.createElement("td");
    tdEl2.textContent = this.total;
    trEl.appendChild(tdEl2);
    tableEl.appendChild(trEl);

}

let seattle = new Shop("Seattle", 23, 65, 6.3);
let tokyo = new Shop("Tokyo", 3, 24, 1.2);
let dubai = new Shop("Dubai", 11, 38, 3.7);
let paris = new Shop("Paris", 20, 38, 2.3);
let lima = new Shop("Lima", 2, 16, 4.6);


let myFormEl = document.getElementById("myForm");
myFormEl.addEventListener("submit", addP);

function addP(event) {
    event.preventDefault();
    let shopName = event.target.shopLoc.value;
    let minCust = event.target.minCust.value;
    let maxCust = event.target.maxCust.value;
    let avg = event.target.avg.value;
    let newShops=new Shop(shopName, minCust, maxCust, avg);

    newShops.csutRandom();
    newShops.cookiesRandom();
    newShops.render();
    tfootEl.remove();
    
    lastRaw();

}


 firstRaw();
for (let i = 0; i < listOfShops.length; i++) {
    listOfShops[i].csutRandom();
    listOfShops[i].cookiesRandom();
    listOfShops[i].render();
}
lastRaw();
// seattle.csutRandom();
// seattle.cookiesRandom();
// tokyo.csutRandom();
// tokyo.cookiesRandom();
// dubai.csutRandom();
// dubai.cookiesRandom();
// seattle.csutRandom();
// seattle.cookiesRandom();
// paris.csutRandom();
// paris.cookiesRandom();
// lima.csutRandom();
// lima.cookiesRandom();
// console.log(tokyo);

// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();


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
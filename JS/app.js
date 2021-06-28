'use strict';



let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let Seattle = {
    loc: "Seattle",
    minCust: 23,
    maxCust: 65,
    avgCust: 6.3,
    total: 0,
    customerNumberPerHours: [],
    cookiesNumberPerHours: [],
    custRandom: function () {
        for (let i = 0; i < hours.length; i++) {
            let min = Math.ceil(this.minCust);
            let max = Math.floor(this.maxCust);
            let randCust = Math.floor(Math.random() * (max - min + 1) + min);
            this.customerNumberPerHours.push(randCust);
        }

    },
    cookiesRandom: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesNumberPerHours[i] = Math.ceil(this.customerNumberPerHours[i] * this.avgCust);
            this.total+=this.cookiesNumberPerHours[i];

        }
    },
    render: function () {
        let divEL = document.getElementById("list1");
        let h2EL = document.createElement("h2");
        h2EL.textContent = this.loc;

        divEL.appendChild(h2EL)
        let ulEL = document.createElement("ul");
        divEL.appendChild(ulEL);
        for (let i = 0; i < hours.length; i++) {
            let liEL = document.createElement("li");
            liEL.textContent = hours[i] +" : " +this.cookiesNumberPerHours[i]+" Cookies";
            ulEL.appendChild(liEL);
        }
        let liTotalEL = document.createElement("li");
        liTotalEL.textContent="Total : "+this.total+" Cookies";
        ulEL.appendChild(liTotalEL);






    }

   
}
//console.log(Seattle);
Seattle.custRandom();
Seattle.cookiesRandom();
Seattle.render();
//Seattle.cookiesRandom();
console.log(Seattle);

let Tokyo = {
    loc: "Tokyo",
    minCust: 3,
    maxCust: 24,
    avgCust: 1.2,
    total: 0,
    customerNumberPerHours: [],
    cookiesNumberPerHours: [],
    custRandom: function () {
        for (let i = 0; i < hours.length; i++) {
            let min = Math.ceil(this.minCust);
            let max = Math.floor(this.maxCust);
            let randCust = Math.floor(Math.random() * (max - min + 1) + min);
            this.customerNumberPerHours.push(randCust);
        }

    },
    cookiesRandom: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesNumberPerHours[i] = Math.ceil(this.customerNumberPerHours[i] * this.avgCust);
            this.total+=this.cookiesNumberPerHours[i];


        }
        //this.cookiesNumberPerHours[0]=customerNumberPerHours[0]*avgCust;
    },
    render: function () {
        let divEL = document.getElementById("list1");
        let h2EL = document.createElement("h2");
        h2EL.textContent = this.loc;

        divEL.appendChild(h2EL)
        let ulEL = document.createElement("ul");
        divEL.appendChild(ulEL);
        for (let i = 0; i < hours.length; i++) {
            let liEL = document.createElement("li");
            liEL.textContent = hours[i] +" : " +this.cookiesNumberPerHours[i]+" Cookies";
            ulEL.appendChild(liEL);
        }
        
        let liTotalEL = document.createElement("li");
        liTotalEL.textContent="Total : "+this.total+" Cookies";
        ulEL.appendChild(liTotalEL);
    }
}
//console.log(Seattle);
Tokyo.custRandom();
Tokyo.cookiesRandom();
Tokyo.render();
//Seattle.cookiesRandom();
console.log(Tokyo);

let Dubai = {
    loc: "Dubai",
    minCust: 11,
    maxCust: 38,
    avgCust: 3.7,
    total: 0,
    customerNumberPerHours: [],
    cookiesNumberPerHours: [],
    custRandom: function () {
        for (let i = 0; i < hours.length; i++) {
            let min = Math.ceil(this.minCust);
            let max = Math.floor(this.maxCust);
            let randCust = Math.floor(Math.random() * (max - min + 1) + min);
            this.customerNumberPerHours.push(randCust);
        }

    },
    cookiesRandom: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesNumberPerHours[i] = Math.ceil(this.customerNumberPerHours[i] * this.avgCust);
            this.total+=this.cookiesNumberPerHours[i];


        }
        //this.cookiesNumberPerHours[0]=customerNumberPerHours[0]*avgCust;
    },
    render: function () {
        let divEL = document.getElementById("list1");
        let h2EL = document.createElement("h2");
        h2EL.textContent = this.loc;

        divEL.appendChild(h2EL)
        let ulEL = document.createElement("ul");
        divEL.appendChild(ulEL);
        for (let i = 0; i < hours.length; i++) {
            let liEL = document.createElement("li");
            liEL.textContent = hours[i] +" : " +this.cookiesNumberPerHours[i]+" Cookies";
            ulEL.appendChild(liEL);
        }
        
        let liTotalEL = document.createElement("li");
        liTotalEL.textContent="Total : "+this.total+" Cookies";
        ulEL.appendChild(liTotalEL);
    }
}
//console.log(Seattle);
Dubai.custRandom();
Dubai.cookiesRandom();
Dubai.render();
//Seattle.cookiesRandom();
console.log(Dubai);

let Paris = {
    loc: "Paris",
    minCust: 20,
    maxCust: 38,
    avgCust: 2.3,
    total: 0,
    customerNumberPerHours: [],
    cookiesNumberPerHours: [],
    custRandom: function () {
        for (let i = 0; i < hours.length; i++) {
            let min = Math.ceil(this.minCust);
            let max = Math.floor(this.maxCust);
            let randCust = Math.floor(Math.random() * (max - min + 1) + min);
            this.customerNumberPerHours.push(randCust);
        }

    },
    cookiesRandom: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesNumberPerHours[i] = Math.ceil(this.customerNumberPerHours[i] * this.avgCust);
            this.total+=this.cookiesNumberPerHours[i];


        }
        //this.cookiesNumberPerHours[0]=customerNumberPerHours[0]*avgCust;
    },
    render: function () {
        let divEL = document.getElementById("list1");
        let h2EL = document.createElement("h2");
        h2EL.textContent = this.loc;

        divEL.appendChild(h2EL)
        let ulEL = document.createElement("ul");
        divEL.appendChild(ulEL);
        for (let i = 0; i < hours.length; i++) {
            let liEL = document.createElement("li");
            liEL.textContent = hours[i] +" : " +this.cookiesNumberPerHours[i]+" Cookies";
            ulEL.appendChild(liEL);
        }
        
        let liTotalEL = document.createElement("li");
        liTotalEL.textContent="Total : "+this.total+" Cookies";
        ulEL.appendChild(liTotalEL);
    }
}
//console.log(Seattle);
Paris.custRandom();
Paris.cookiesRandom();
Paris.render();
//Seattle.cookiesRandom();
console.log(Paris);


let Lima = {
    loc: "Lima",
    minCust: 2,
    maxCust: 16,
    avgCust: 4.6,
    total: 0,
    customerNumberPerHours: [],
    cookiesNumberPerHours: [],
    custRandom: function () {
        for (let i = 0; i < hours.length; i++) {
            let min = Math.ceil(this.minCust);
            let max = Math.floor(this.maxCust);
            let randCust = Math.floor(Math.random() * (max - min + 1) + min);
            this.customerNumberPerHours.push(randCust);
        }

    },
    cookiesRandom: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesNumberPerHours[i] = Math.ceil(this.customerNumberPerHours[i] * this.avgCust);
            this.total+=this.cookiesNumberPerHours[i];


        }
        //this.cookiesNumberPerHours[0]=customerNumberPerHours[0]*avgCust;
    },
    render: function () {
        let divEL = document.getElementById("list1");
        let h2EL = document.createElement("h2");
        h2EL.textContent = this.loc;

        divEL.appendChild(h2EL)
        let ulEL = document.createElement("ul");
        divEL.appendChild(ulEL);
        for (let i = 0; i < hours.length; i++) {
            let liEL = document.createElement("li");
            liEL.textContent = hours[i] +" : " +this.cookiesNumberPerHours[i]+" Cookies";
            ulEL.appendChild(liEL);
        }
        
        let liTotalEL = document.createElement("li");
        liTotalEL.textContent="Total : "+this.total+" Cookies";
        ulEL.appendChild(liTotalEL);
    }
}
//console.log(Seattle);
Lima.custRandom();
Lima.cookiesRandom();
Lima.render();
//Seattle.cookiesRandom();
console.log(Lima);

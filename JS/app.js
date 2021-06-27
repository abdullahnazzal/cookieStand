'use strict';



let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


let Seattle = {
    loc: "Seattle",
    min: 23,
    max: 65,
    avg: 6.3,
    customerNumberPerHours: [],
    cookiesNumberPerHours: [],

    // resultHours: [],
    customerRandom: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customerNumberPerHours[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
            // this.customerNumberPerHours[i]=Math.floor(Math.random()*(this.max-this.min+1)+this.min);
        }

    },
    CookiesRandom: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesNumberPerHours[i] = Math.floor(this.avg * this.customerNumberPerHours[i]);

        }
        //this.cookiesNumberPerHours[i]=Math.floor(this.avg*this.customerNumberPerHours[i]);

    },
    render: function () {
        let divEL = document.getElementById("list1");
        let articleEl = document.createElement("article");
        divEL.appendChild(articleEl);

        let h2EL = document.createElement("h2");
        h2EL.textContent = this.loc;
        articleEl.appendChild(h2EL);

        //articleEl.appendChild(h2EL);

        let ulEl = document.createElement("ul");
        //console.log(this.cookiesNumberPerHours);

        let total = 0;
        for (let i = 0; i < hours.length; i++) {
            total += this.cookiesNumberPerHours[i];
            let liEl = document.createElement("li");
            liEl.textContent = `${hours[i]} : ${this.cookiesNumberPerHours[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        let liTotal = document.createElement("li");
        liTotal.textContent = `Total Cookies : ${total}`;
        ulEl.appendChild(liTotal);
        articleEl.appendChild(ulEl);



    }

}
Seattle.customerRandom();
Seattle.CookiesRandom();
Seattle.render();


let Tokyo = {
    loc: "Tokyo",
    min: 3,
    max: 24,
    avg: 1.2,
    customerNumberPerHours: [],
    cookiesNumberPerHours: [],

    // resultHours: [],
    customerRandom: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customerNumberPerHours[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        }

    },
    CookiesRandom: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesNumberPerHours[i] = Math.floor(this.avg * this.customerNumberPerHours[i]);

        }

    },
    render: function () {
        let divEL = document.getElementById("list2");
        let articleEl = document.createElement("article");
        divEL.appendChild(articleEl);

        let h2EL = document.createElement("h2");
        h2EL.textContent = this.loc;
        articleEl.appendChild(h2EL);

        let ulEl = document.createElement("ul");

        let total = 0;
        for (let i = 0; i < hours.length; i++) {
            total += this.cookiesNumberPerHours[i];
            let liEl = document.createElement("li");
            liEl.textContent = `${hours[i]} : ${this.cookiesNumberPerHours[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        let liTotal = document.createElement("li");
        liTotal.textContent = `Total Cookies : ${total}`;
        ulEl.appendChild(liTotal);
        articleEl.appendChild(ulEl);



    }

}
Tokyo.customerRandom();
Tokyo.CookiesRandom();
Tokyo.render();

let Dubai = {
    loc: "Dubai",
    min: 11,
    max: 38,
    avg: 3.7,
    customerNumberPerHours: [],
    cookiesNumberPerHours: [],

    // resultHours: [],
    customerRandom: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customerNumberPerHours[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        }

    },
    CookiesRandom: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesNumberPerHours[i] = Math.floor(this.avg * this.customerNumberPerHours[i]);

        }

    },
    render: function () {
        let divEL = document.getElementById("list3");
        let articleEl = document.createElement("article");
        divEL.appendChild(articleEl);

        let h2EL = document.createElement("h2");
        h2EL.textContent = this.loc;
        articleEl.appendChild(h2EL);

        let ulEl = document.createElement("ul");

        let total = 0;
        for (let i = 0; i < hours.length; i++) {
            total += this.cookiesNumberPerHours[i];
            let liEl = document.createElement("li");
            liEl.textContent = `${hours[i]} : ${this.cookiesNumberPerHours[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        let liTotal = document.createElement("li");
        liTotal.textContent = `Total Cookies : ${total}`;
        ulEl.appendChild(liTotal);
        articleEl.appendChild(ulEl);



    }

}
Dubai.customerRandom();
Dubai.CookiesRandom();
Dubai.render();

let Paris = {
    loc: "Paris",
    min: 20,
    max: 38,
    avg: 2.3,
    customerNumberPerHours: [],
    cookiesNumberPerHours: [],

    // resultHours: [],
    customerRandom: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customerNumberPerHours[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        }

    },
    CookiesRandom: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesNumberPerHours[i] = Math.floor(this.avg * this.customerNumberPerHours[i]);

        }

    },
    render: function () {
        let divEL = document.getElementById("list4");
        let articleEl = document.createElement("article");
        divEL.appendChild(articleEl);

        let h2EL = document.createElement("h2");
        h2EL.textContent = this.loc;
        articleEl.appendChild(h2EL);

        let ulEl = document.createElement("ul");

        let total = 0;
        for (let i = 0; i < hours.length; i++) {
            total += this.cookiesNumberPerHours[i];
            let liEl = document.createElement("li");
            liEl.textContent = `${hours[i]} : ${this.cookiesNumberPerHours[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        let liTotal = document.createElement("li");
        liTotal.textContent = `Total Cookies : ${total}`;
        ulEl.appendChild(liTotal);
        articleEl.appendChild(ulEl);



    }

}
Paris.customerRandom();
Paris.CookiesRandom();
Paris.render();


let Lima = {
    loc: "Lima",
    min: 2,
    max: 16,
    avg: 4.6,
    customerNumberPerHours: [],
    cookiesNumberPerHours: [],

    // resultHours: [],
    customerRandom: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customerNumberPerHours[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        }

    },
    CookiesRandom: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesNumberPerHours[i] = Math.floor(this.avg * this.customerNumberPerHours[i]);

        }

    },
    render: function () {
        let divEL = document.getElementById("list5");
        let articleEl = document.createElement("article");
        divEL.appendChild(articleEl);

        let h2EL = document.createElement("h2");
        h2EL.textContent = this.loc;
        articleEl.appendChild(h2EL);

        let ulEl = document.createElement("ul");

        let total = 0;
        for (let i = 0; i < hours.length; i++) {
            total += this.cookiesNumberPerHours[i];
            let liEl = document.createElement("li");
            liEl.textContent = `${hours[i]} : ${this.cookiesNumberPerHours[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        let liTotal = document.createElement("li");
        liTotal.textContent = `Total Cookies : ${total}`;
        ulEl.appendChild(liTotal);
        articleEl.appendChild(ulEl);



    }

}
Lima.customerRandom();
Lima.CookiesRandom();
Lima.render();





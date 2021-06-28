let salmon = {
    imgSrc:'img/salmon.png',
    
    putImg: function () {
        let divEl = document.getElementById('divImg');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);

        let imgEl = document.createElement('img');
        imgEl.setAttribute('src', this.imgSrc);
        articleEl.appendChild(imgEl);


        // let imgEl = document.createElement('img');
        // imgEl.setAttribute('src', this.imgSrc);
        // //articleEl.appendChild(imgEl);
        // let divEl = document.createElement('div');
        // // imgEL= document.getElementById("img1");
        // // imgEL.setAttribute("src", this.imgSrc);
        // divEl.appendChild(imgEl)
    }
}
salmon.putImg();
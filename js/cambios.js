console.log("--------------------------CreateBotonRobot.JS-------------------------------------------- ");

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {
        console.log(this.responseText);

        var fr = (this.responseText);

        document.getElementsByClassName('search-bar')[0].value = fr; //Envio de informacion de API a index

    }
});

xhr.open("GET", "https://httpbin.org/ip");
xhr.send();




console.log("--------------------------FinBotonRobot.JS-------------------------------------------- ");
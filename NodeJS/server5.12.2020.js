-
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

var carList = [
    {
        "CarID": "HISA9",
        "CarName": "NISAN"
    },
    {
        "CarID": "CDP9",
        "CarName": "YOYOTA"
    },
    {
        "CarID": "8JHBU",
        "CarName": "MAZDA"
    }
    ]

app.get('/', function (req, res) {

    res.send('Hello World');
})

app.get('/Areen', function (req, res) {

    res.send(carList);
})

app.post('/Areen', function (req, res) {

    var car = req.body

    carList.push(car)



    if (!car.CarName || car.CarName === "") {
        res.status("500").send({
            "error": "Car Name is empty"
        })
        //error
    } else {
        carList.push(car)
        res.status("200").send(carList)
    }

    //   res.send(car+1)
})

app.put('/issa/:carid', function (req, res) {

    let newCarName = req.body.batata;

    /*console.log(req.params.carid)
    console.log(newCarName)*/

    for (i = 0; i < carList.length; i++) {

        let cartocheck = carList(i);

        if (cartocheck.CarId = res.params.carid) {

            carList[i].CarName = newCarName;
        }
    }
    res.status("200").send()
})

app.listen(3000, function () {

    console.log("It's really running");
})

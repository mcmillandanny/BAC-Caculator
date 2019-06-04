"use strict";

function clearBox() {
    var card1Result = document.querySelector(".card1-result").innerHTML = "";
    var card2Result = document.querySelector(".card2-result").innerHTML = "";
    var card3Result = document.querySelector(".card3-result").innerHTML = "";
    var card4Result = document.querySelector(".card4-result").innerHTML = "";
    var card5Result = document.querySelector(".card5-result").innerHTML = "";
    var card6Result = document.querySelector(".card6-result").innerHTML = "";
}

var card1 = document.querySelector(".card-1");
var card2 = document.querySelector(".card-2");
var card3 = document.querySelector(".card-3");
var card4 = document.querySelector(".card-4");
var card5 = document.querySelector(".card-5");
var card6 = document.querySelector(".card-6");
var card7 = document.querySelector(".card-7");
var bac = void 0; // BLOOD ALCOHOL TOTAL
var H = void 0; // HOURS
var R; // ALCOHOL DISTRIBUTION RATIO
var W; // BODY WEIGHT
var totalAlcohol; // AMOUNT CONSUMED
var amount;
var weightRatio;

// get Gender //


var getGender = function getGender() {
    var genderInputs = document.querySelectorAll('input[name="gender"]:checked');
    genderInputs.forEach(function (gender) {
        R = gender.value;

        if (gender.value === 'male') {
            R = 0.68;
        } else {
            R = 0.60;
        }
    });
};

// get weight //


var weightValue = function weightValue() {
    var weight = document.getElementById("weight-input").value;
    W = parseInt(weight);
    weightRatio = W * R;
    console.log(weightRatio, 'weight Ratio');
};

// get number of Drinks //

var totalConsumed = function totalConsumed() {
    var drinksAmountBeer = document.querySelector('select[name=beer]').value;
    var drinksAmountWine = document.querySelector('select[name=wine]').value;
    var drinksAmountSpirits = document.querySelector('select[name=spirits]').value;

    var beer = drinksAmountBeer * 12 * 0.06;
    var wine = drinksAmountWine * 5 * 0.14;
    var spirits = drinksAmountSpirits * 1.5 * 0.50;

    totalAlcohol = beer + wine + spirits;
    amount = totalAlcohol * 5.14;
};

// get hours elapsed

var hoursInputs = document.querySelector('.hours-wrap');

var hoursTotal = function hoursTotal() {

    hoursInputs.addEventListener("click", function () {

        var hoursElapsed = document.querySelectorAll('input[name="time"]:checked');

        hoursElapsed.forEach(function (hour) {
            H = hour.value;
        });

        getGender();
        weightValue();
        totalConsumed();
        clearBox();

        console.log(R, "dist ratio");
        console.log(amount, "total alcohol");

        bac = amount / weightRatio - .015 * H;
        console.log(bac);
        bac = Math.ceil(bac * 100) / 100;
        console.log(bac);

        var bacResult = document.createElement('div');
        bacResult.classList.add("result");
        bacResult.innerText = bac;

        switch (bac) {
            case 0.00:
            case -0.01:
                TweenMax.fromTo(".card-7", .3, {
                    y: "70px",
                    display: "inline-block"
                }, {
                    y: "0px"
                });
                card1.style.display = "none";
                card2.style.display = "none";
                card3.style.display = "none";
                card4.style.display = "none";
                card5.style.display = "none";
                card6.style.display = "none";
                card6.style.display = "none";
        }

        switch (bac) {
            case 0.01:
            case 0.02:
            case 0.03:
                TweenMax.fromTo(".card-1", .3, {
                    y: "70px",
                    display: "inline-block"
                }, {
                    y: "0px"
                });
                card2.style.display = "none";
                card3.style.display = "none";
                card4.style.display = "none";
                card5.style.display = "none";
                card6.style.display = "none";
                card7.style.display = "none";
                var card1Result = document.querySelector(".card1-result");
                card1Result.appendChild(bacResult);
        }

        switch (bac) {
            case 0.04:
            case 0.05:
            case 0.06:
                TweenMax.fromTo(".card-2", .3, {
                    y: "70px",
                    display: "inline-block"
                }, {
                    y: "0px"
                });
                card1.style.display = "none";
                card3.style.display = "none";
                card4.style.display = "none";
                card5.style.display = "none";
                card6.style.display = "none";
                card7.style.display = "none";
                var card2Result = document.querySelector(".card2-result");
                card2Result.appendChild(bacResult);

        }

        switch (bac) {
            case 0.07:
            case 0.08:
            case 0.09:
            case 0.10:
                TweenMax.fromTo(".card-3", .3, {
                    y: "70px",
                    display: "inline-block"
                }, {
                    y: "0px"
                });
                card1.style.display = "none";
                card2.style.display = "none";
                card4.style.display = "none";
                card5.style.display = "none";
                card6.style.display = "none";
                card7.style.display = "none";
                var card3Result = document.querySelector(".card3-result");
                card3Result.appendChild(bacResult);
        }

        if (bac >= 0.11 && bac <= 0.20) {
            TweenMax.fromTo(".card-4", .3, {
                y: "70px",
                display: "inline-block"
            }, {
                y: "0px"
            });
            card1.style.display = "none";
            card2.style.display = "none";
            card3.style.display = "none";
            card5.style.display = "none";
            card6.style.display = "none";
            card7.style.display = "none";
            var card4Result = document.querySelector(".card4-result");
            card4Result.appendChild(bacResult);
        } else if (bac >= 0.21 && bac <= 0.34) {
            TweenMax.fromTo(".card-5", .3, {
                y: "70px",
                display: "inline-block"
            }, {
                y: "0px"
            });
            card1.style.display = "none";
            card2.style.display = "none";
            card3.style.display = "none";
            card4.style.display = "none";
            card6.style.display = "none";
            card7.style.display = "none";
            var card5Result = document.querySelector(".card5-result");
            card5Result.appendChild(bacResult);
        } else if (bac >= 0.35) {
            TweenMax.fromTo(".card-6", .3, {
                y: "70px",
                display: "inline-block"
            }, {
                y: "0px"
            });
            card1.style.display = "none";
            card2.style.display = "none";
            card3.style.display = "none";
            card4.style.display = "none";
            card5.style.display = "none";
            card7.style.display = "none";
            var card6Result = document.querySelector(".card6-result");
            card6Result.appendChild(bacResult);
        }
    });
};

hoursTotal();
//# sourceMappingURL=main.js.map

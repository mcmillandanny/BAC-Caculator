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
var beer;
var wine;
var spirits;
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

// var weight = document.querySelector(".weight-input");

// weight.addEventListener("input", weightValue);


// get number of Drinks //}


var totalConsumed = function totalConsumed() {
    var drinksAmountBeer = document.querySelector('select[name=beer]').value;
    var drinksAmountWine = document.querySelector('select[name=wine]').value;
    var drinksAmountSpirits = document.querySelector('select[name=spirits]').value;

    var beer = drinksAmountBeer * 12 * 0.06;
    var wine = drinksAmountWine * 5 * 0.14;
    var spirits = drinksAmountSpirits * 1.5 * 0.50;

    totalAlcohol = beer + wine + spirits;
    amount = totalAlcohol * 5.14;

    getGender();
    weightValue();
    // totalConsumed();
    clearBox();
    complieResult();
    console.log("Inside totalConsumed function", amount);
};

var beerSelect = document.querySelector(".beer-list");
var wineSelect = document.querySelector(".wine-list");
var spiritsSelect = document.querySelector(".spirits-list");

beerSelect.addEventListener("change", totalConsumed);
wineSelect.addEventListener("change", totalConsumed);
spiritsSelect.addEventListener("change", totalConsumed);

// get hours elapsed

var hoursInputs = document.querySelector('.hours-wrap');
hoursInputs.addEventListener("click", function () {

    var hoursElapsed = document.querySelectorAll('input[name="time"]:checked');

    hoursElapsed.forEach(function (hour) {
        H = hour.value;
    });

    getGender();
    weightValue();
    totalConsumed();
    clearBox();
    complieResult();

    console.log(R, "dist ratio");
    console.log(amount, "total alcohol");
});

var complieResult = function complieResult() {
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
            card1.style.display = "none";
            card2.style.display = "none";
            card3.style.display = "none";
            card4.style.display = "none";
            card5.style.display = "none";
            card6.style.display = "none";
            card6.style.display = "none";
            card7.style.display = "inline-block";
    }

    switch (bac) {
        case 0.01:
        case 0.02:
        case 0.03:
        case 0.04:
            card1.style.display = "inline-block";
            card2.style.display = "none";
            card3.style.display = "none";
            card4.style.display = "none";
            card5.style.display = "none";
            card6.style.display = "none";
            card7.style.display = "none";

            var card1Result = document.querySelector(".card1-result");
            card1Result.appendChild(bacResult);
            //Show Color

            TweenMax.to('.light-green', .3, { opacity: 1 });
            //Hide Color
            TweenMax.to('.yellow', .3, { opacity: 0 });
            TweenMax.to('.red', .3, { opacity: 0 });
            TweenMax.to('.orange', .3, { opacity: 0 });
            TweenMax.to('.black', .3, { opacity: 0 });

    }

    switch (bac) {
        case 0.05:
        case 0.06:
        case 0.07:
        case 0.08:
        case 0.09:
            card1.style.display = "none";
            card2.style.display = "inline-block";
            card3.style.display = "none";
            card4.style.display = "none";
            card5.style.display = "none";
            card6.style.display = "none";
            card7.style.display = "none";

            var card2Result = document.querySelector(".card2-result");
            card2Result.appendChild(bacResult);
            //Show Color
            TweenMax.to('.light-green', .3, { opacity: 1 });
            TweenMax.to('.yellow', .3, { opacity: 1 });
            //Hide Colors
            TweenMax.to('.red', .3, { opacity: 0 });
            TweenMax.to('.orange', .3, { opacity: 0 });
            TweenMax.to('.black', .3, { opacity: 0 });
    }

    switch (bac) {
        case 0.10:
        case 0.11:
        case 0.12:
        case 0.13:
        case 0.14:
        case 0.15:
        case 0.16:
        case 0.17:
        case 0.18:
        case 0.19:
            card1.style.display = "none";
            card2.style.display = "none";
            card3.style.display = "inline-block";
            card4.style.display = "none";
            card5.style.display = "none";
            card6.style.display = "none";
            card7.style.display = "none";

            var card3Result = document.querySelector(".card3-result");
            card3Result.appendChild(bacResult);
            //Show Color
            TweenMax.to('.light-green', .3, { opacity: 1 });
            TweenMax.to('.yellow', .3, { opacity: 1 });
            TweenMax.to('.orange', .3, { opacity: 1 });
            //Hide Color
            TweenMax.to('.red', .3, { opacity: 0 });
            TweenMax.to('.black', .3, { opacity: 0 });
    }

    if (bac >= 0.20 && bac <= 0.29) {
        card1.style.display = "none";
        card2.style.display = "none";
        card3.style.display = "none";
        card4.style.display = "inline-block";
        card5.style.display = "none";
        card6.style.display = "none";
        card7.style.display = "none";

        var card4Result = document.querySelector(".card4-result");
        card4Result.appendChild(bacResult);
        //Show Color
        TweenMax.to('.light-green', .3, { opacity: 1 });
        TweenMax.to('.yellow', .3, { opacity: 1 });
        TweenMax.to('.orange', .3, { opacity: 1 });
        TweenMax.to('.red', .3, { opacity: 1 });
        //Hide Color
        TweenMax.to('.black', .3, { opacity: 0 });
    }

    // else if (bac >= 0.29 && bac <= 0.34) {
    //     TweenMax.fromTo(".card-5", .3, {
    //         y: "70px",
    //         display: "inline-block",
    //     },
    //         {
    //             y: "0px"
    //         }
    //     )
    //     card1.style.display = "none";
    //     card2.style.display = "none";
    //     card3.style.display = "none";
    //     card4.style.display = "none";
    //     card6.style.display = "none";
    //     card7.style.display = "none";
    //     let card5Result = document.querySelector(".card5-result"); 
    //     card5Result.appendChild(bacResult);
    // }
    else if (bac >= 0.30) {
            card1.style.display = "none";
            card2.style.display = "none";
            card3.style.display = "none";
            card4.style.display = "none";
            card5.style.display = "none";
            card6.style.display = "inline-block";
            card7.style.display = "none";

            var card6Result = document.querySelector(".card6-result");
            card6Result.appendChild(bacResult);

            TweenMax.to('.light-green', 1, { opacity: 1 });
            TweenMax.to('.yellow', 1, { opacity: 1 });
            TweenMax.to('.orange', 1, { opacity: 1 });
            TweenMax.to('.red', 1, { opacity: 1 });
            TweenMax.to('.black', 1, { opacity: 1 });
        }
};
//# sourceMappingURL=main.js.map

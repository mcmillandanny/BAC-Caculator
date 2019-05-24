

// BAC = (A x 5.14 / W x r) – .015 x H
// A = total alcohol
// W = body weight in pounds
// r = alcohol distribution ratio, men = 0.73, women = 0.66
// H = Time passed since drinking


let card1 = document.querySelector(".card-1");
let card2 = document.querySelector(".card-2");
let card3 = document.querySelector(".card-3");
let card4 = document.querySelector(".card-4");
let card5 = document.querySelector(".card-5");
let card6 = document.querySelector(".card-6");


let Btn = document.querySelector('.submit-btn');


Btn.addEventListener('click', function getBAC() {
    let bac;
    var gender =  document.querySelector('input[name="gender"]:checked');
    var R; // alcohol distribution ratio
    var hoursElapsed =  document.querySelectorAll('input[name="time"]:checked');
    var H; // time passed 
    var drinksAmountBeer =  document.querySelector('select[name=beer]').value;
    var drinksAmountWine =  document.querySelector('select[name=wine]').value;
    var drinksAmountSpirits =  document.querySelector('select[name=spirits]').value;
    var A; //amount consumed
    var weight = document.getElementById("weight-input").value;
    var W; // body weight
    W = parseInt(weight);
    
    let beer = drinksAmountBeer * 12 * 0.05;
    let wine = drinksAmountWine *  5 * 0.12;    
    let spirits = drinksAmountSpirits * 1.5 * 0.40;    

    let totalAlcohol = beer + wine + spirits;
      
    hoursElapsed.forEach(function(hour) {
    H = hour.value;
    console.log("hours elapsed" , + H);
    });
  
    if( gender.value === 'male') {
        console.log("MALE")
        var R = 0.73;
    }
    else  {
        console.log('FEMALE')
        var R = 0.66;
    }


    bac = ((totalAlcohol * 5.15 ) / (W * R)) - (.015 * H);
    bac = Math.round(bac * 100) / 100;
    console.log(bac);



    switch (bac) {
        case 0.01:
        case 0.02:
        case 0.03:
        TweenMax.fromTo(".card-1", .3, {
            y: "70px",
            display: "inline-block",
        },
            {
                y: "0px"
            }
        )
        card2.style.display = "none";
        card3.style.display = "none";
        card4.style.display = "none";
        card5.style.display = "none";
        card6.style.display = "none";
    }

    switch (bac) {
        case 0.04:
        case 0.05:
        case 0.06:
        TweenMax.fromTo(".card-2", .3, {
            y: "70px",
            display: "inline-block",
        },
            {
                y: "0px"
            }
        )
        card1.style.display = "none";
        card3.style.display = "none";
        card4.style.display = "none";
        card5.style.display = "none";
        card6.style.display = "none";
        
    }

    switch (bac) {
        case 0.07:
        case 0.08:
        case 0.09:
        case 0.10:
        TweenMax.fromTo(".card-3", .3, {
            y: "70px",
            display: "inline-block",
        },
            {
                y: "0px"
            }
        )
        card1.style.display = "none";
        card2.style.display = "none";
        card4.style.display = "none";
        card5.style.display = "none";
        card6.style.display = "none"; 
    }

    if (bac >= 0.11 && bac <= 0.20) {
        TweenMax.fromTo(".card-4", .3, {
            y: "70px",
            display: "inline-block",
        },
            {
                y: "0px"
            }
        )
        card1.style.display = "none";
        card2.style.display = "none";
        card3.style.display = "none";
        card5.style.display = "none";
        card6.style.display = "none";
    }

    else if (bac >= 0.21 && bac <= 0.34) {
        TweenMax.fromTo(".card-5", .3, {
            y: "70px",
            display: "inline-block",
        },
            {
                y: "0px"
            }
        )
        card1.style.display = "none";
        card2.style.display = "none";
        card3.style.display = "none";
        card4.style.display = "none";
        card6.style.display = "none";
    }
    else if (bac >= 0.35) {
        TweenMax.fromTo(".card-6", .3, {
            y: "70px",
            display: "inline-block",
        },
            {
                y: "0px"
            }
        )
        card1.style.display = "none";
        card2.style.display = "none";
        card3.style.display = "none";
        card4.style.display = "none";
        card5.style.display = "none";
    }    

})  

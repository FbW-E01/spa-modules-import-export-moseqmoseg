// Your code goes here!
import { fixRoundingErrors } from "./aspect-ratio.js";
import { calculateAspectRatio } from "./aspect-ratio.js";
import { modulo, percentage, percentageOf, difference } from "./percentage.js";

///// Modulo

const modVal1 = document.querySelector("#modulo_1");
const modVal2 = document.querySelector("#modulo_2");
const modResultBox = document.querySelector("#modulo_result");

function modPro() {
    modResultBox.value = modulo(modVal1.value, modVal2.value);
}
modVal1.addEventListener("change", modPro);
modVal2.addEventListener("change", modPro);

///// Percentage

const perVal1 = document.getElementById("percentage_1");
const perVal2 = document.getElementById("percentage_2");
const perResultBox = document.getElementById("percentage_result");

function perPro() {
    perResultBox.value = percentage(perVal1.value, perVal2.value);
}

perVal1.addEventListener("change", perPro);
perVal2.addEventListener("change", perPro);

//// Percentage Of

const perOfVal1 = document.getElementById("percentageOf_1");
const perOfVal2 = document.getElementById("percentageOf_2");
const perOfResultBox = document.getElementById("percentageOf_result");

function perOfPro() {
    perOfResultBox.value = percentageOf(perOfVal1.value, perOfVal2.value);
}

perOfVal1.addEventListener("change", perOfPro);
perOfVal2.addEventListener("change", perOfPro);

/// Difference

const diffVal1 = document.getElementById("difference_1");
const diffVal2 = document.getElementById("difference_2");
const diffResultBox = document.getElementById("difference_result");

function diffPro() {
    diffResultBox.value = difference(diffVal1.value, diffVal2.value);
}

diffVal1.addEventListener("change", diffPro);
diffVal2.addEventListener("change", diffPro);

////Aspect Ratio

const ratioVal1 = document.getElementById("ratio_1");
const ratioVal2 = document.getElementById("ratio_2");
const ratioNewWi = document.getElementById("ratio_result-width");
const ratioNewHe = document.getElementById("ratio_result-height");

// function aRatPro(e) {
//     if (e.target.id === "ratio_result-height") {
//         ratioNewWi.value = calculateAspectRatio(
//             ratioVal1.value,
//             ratioVal2.value,
//             ratioNewHe.value,
//             "h"
//         );
//     } else {
//         ratioNewHe.value = calculateAspectRatio(
//             ratioVal1.value,
//             ratioVal2.value,
//             ratioNewWi.value,
//             "w"
//         );
//     }
// }

ratioNewWi.addEventListener(
    "change",
    function() {
        ratioNewHe.value = calculateAspectRatio(
            ratioVal1.value,
            ratioVal2.value,
            ratioNewWi.value,
            "w"
        );
    }
);

ratioNewHe.addEventListener(
    "change",
    function() {
        ratioNewWi.value = calculateAspectRatio(
            ratioVal1.value,
            ratioVal2.value,
            ratioNewHe.value,
            "h"
        );
    }

);
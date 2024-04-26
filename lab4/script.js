 
function changeBackgroundColor() {
    var selectElement = document.getElementById("daySelector");
    var container = document.querySelector(".container");
    var selectedDay = selectElement.value.toLowerCase();

    switch (selectedDay) {
        case "monday":
            container.style.backgroundColor = "lightblue";
            break;
        case "tuesday":
            container.style.backgroundColor = "lightgreen";
            break;
        case "wednesday":
            container.style.backgroundColor = "lightcoral";
            break;
        case "thursday":
            container.style.backgroundColor = "lightgoldenrodyellow";
            break;
        case "friday":
            container.style.backgroundColor = "lightpink";
            break;
        case "saturday":
            container.style.backgroundColor = "lightskyblue";
            break;
        case "sunday":
            container.style.backgroundColor = "lightseagreen";
            break;
        default:
            container.style.backgroundColor = "white";
    }
}

function analyzeNumber() {
    var inputNumber = parseInt(document.getElementById("inputNumber").value);

    // input = isNaN
    if (isNaN(inputNumber)) {
        alert("Please enter a valid number.");
        return;
    }

    // odd /even cheeck
    var parity = (inputNumber % 2 === 0) ? "even" : "odd";

    //prime / composite check
    var isPrime = true;
    for (var i = 2; i < inputNumber; i++) {
        if (inputNumber % i === 0) {
            isPrime = false;
            break;
        }
    }
    var numberType = isPrime ? "prime" : "composite";

    var rangeMessage;
    if (inputNumber <= 50) {
        rangeMessage = "less than or equal to 50";
    } else if (inputNumber <= 75) {
        rangeMessage = "greater than 50 and less than or equal to 75";
    } else if (inputNumber <= 100) {
        rangeMessage = "greater than 75 and less than or equal to 100";
    } else {
        rangeMessage = "greater than 100";
    }

    var resultMessage = `The number entered is an ${parity} ${numberType} number ${rangeMessage}.`;
    document.getElementById("resultMessage").innerHTML = resultMessage;
}

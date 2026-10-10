// Get the calculator display

const display = document.getElementById("display");


// Add numbers and operators

function addToDisplay(value) {

    display.value += value;

}


// Clear display

function clearDisplay() {

    display.value = "";

}


// Delete last character


function deleteLast() {

    display.value =
        display.value.slice(0, -1);

}


// Calculate result


function calculate() {

    try {

        // Don't calculate empty display

        if (display.value === "") {

            return;

        }


        // Calculate expression

        let result =
            eval(display.value);


        // Show result

        display.value = result;


    } catch (error) {

        display.value = "Error";

    }

}

// KEYBOARD SUPPORT

document.addEventListener(
    "keydown",
    function(event) {


        // Get pressed key

        const key = event.key;


        // Numbers

        if (
            key >= "0" &&
            key <= "9"
        ) {

            addToDisplay(key);

        }


        // Decimal point

        else if (key === ".") {

            addToDisplay(".");

        }


        // Addition

        else if (key === "+") {

            addToDisplay("+");

        }


        // Subtraction

        else if (key === "-") {

            addToDisplay("-");

        }


        // Multiplication

        else if (key === "*") {

            addToDisplay("*");

        }


        // Division

        else if (key === "/") {

            addToDisplay("/");

        }


        // Enter = Calculate

        else if (
            key === "Enter" ||
            key === "="
        ) {

            calculate();

        }


        // Backspace = Delete

        else if (key === "Backspace") {

            deleteLast();

        }


        // Escape = Clear

        else if (key === "Escape") {

            clearDisplay();

        }

    }
);
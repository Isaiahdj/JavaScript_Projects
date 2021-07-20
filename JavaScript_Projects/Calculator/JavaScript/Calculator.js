// creates an object to keep track of values
const Calculator = {
    Display_Value: "0",
    First_Operand: null,
    Wait_Second_Operand: false,
    operator: null,
};

// this function modifies values each time a button is clicked
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand } = Calculator
    //we are checking to see if wait_second_operand is true and
    // set display_value to the key that was clicked
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        Calculator.Display_Value = Display_Value === "0" ? digit : Display_Value + digit;
    }
}

// This handles decimal points
function Input_Decimal(dot) {
    //ensures that accidental decimal point does not cause a bug
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        // if no decimal point we want to add one
        Calculator.Display_Value += dot;
    }
}

//this section handles operators -*/+
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator
    //when an opperator is clicked convert the current number displayed on the screen
    //to a number then store results in Calculator.First_Operand if it doesnt already exist
    const Value_of_Input = parseFloat(Display_Value);
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {// chaecks if an operator already exist
        const Value_Now = First_Operand || 0;
        const result = Perform_Calculation[operator](Value_Now, Value_of_Input);

        Calculator.Display_Value = String(result);
        Calculator.First_Operand = result;
    }

    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    "/": (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    "*": (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    "+": (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    "-": (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    "=": (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = "0";
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

// this updates the screen with Display_Value
function Update_Display() {
    const display = document.querySelector(".calculator-screen");
    display.value = Calculator.Display_Value;
}
Update_Display();

const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
    const{ target } = event;
    if (!target.matches("button")) {
        return;
    }
    if (target.classList.contains("operator")) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains("decimal")) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains("all-clear")) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    
    Input_Digit(target.value);
    Update_Display();
})
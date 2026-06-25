// Math Operation functions:

// Add

function add(n, n2){
    return n + n2;
};

// subtract

function subtract(n, n2){
   return n - n2;
};

// Multiply

function multiply(n, n2){
   return n * n2;
};

// Divide

function divide(n, n2){
   return n / n2;
};

function operate(op){
    switch (op[1]) {
            case "+":
            lastOperation = operation;
            return result.textContent = `${add(Number(operation[0]), Number(operation[2]))}`;
            break;

            case "-":
            lastOperation = operation;
            return result.textContent = `${subtract(Number(operation[0]), Number(operation[2]))}`;
            break;

            case "*":
            lastOperation = operation;
            return result.textContent = `${multiply(Number(operation[0]), Number(operation[2]))}`;
            break;

            case "/":
            lastOperation = operation;
            return result.textContent = `${divide(Number(operation[0]), Number(operation[2]))}`;
            break;
        }
        
}
// Making Site

// Operation values updater

function operationUpdater(){
    let symbolPosition = displayInput.value.split("").findIndex(item => symbols.includes(item));
    console.log(symbolPosition)
    operation[0] = displayInput.value.slice(0, symbolPosition);
    operation[1] = displayInput.value.slice(symbolPosition, symbolPosition+1)
    operation[2] = displayInput.value.slice(symbolPosition+1, )
}



// Variable to save operation input and symbols
let symbols = ["+", "-", "*", "/", "%"];
let operation = [1, "", 1];

// On click display select input

let display = document.querySelector("#display");
let displayInput = document.querySelector("#displayInput");
let buttonContainer = document.querySelector("#buttonContainer");
let lastOperation = [];
let result = document.querySelector("#result");

// delete last character button
let topBar = document.querySelector("#topBar");
topBar.addEventListener("click", e => {
    if(e.target.textContent === "⌫"){
        displayInput.value = displayInput.value.slice(0, -1);
    }
    if(e.target.textContent === "<=="){
        operation = lastOperation;
        displayInput.value = operation.join("");
    }
});

display.addEventListener("click", (e) => {
    displayInput.focus();
    displayInput.setSelectionRange(displayInput.value.length, displayInput.value.length);
});

buttonContainer.addEventListener("click", (e) => {
    target = e.target;



//Actions button
    if(target === buttonContainer){
        return;
    }
    if(target.textContent === "C"){
        return displayInput.value = "";
    }
    if(target.textContent === "CE"){
        displayInput.value = "";
        return lastOperation = [];

    }
    if(target.textContent === "="){
        displayInput.value = operate(operation);
        if(target.textContent !== "="){
            displayInput.value += target.textContent;
        }
        operationUpdater();
        return;
    } 
    if(target.textContent === "."){
        if(operation[0].split("").filter(item => item.includes(".")).length === 1 && operation[2].split("").filter(item => item.includes(".")).length === 1 ){
            return alert("you cant use multiple decimals!");
        }
        
    }

    // if is a symbol

    if(symbols.includes(target.textContent)){

        // if symbol is repeated
    if((symbols.includes(target.textContent) && symbols.includes(displayInput.value.at(-1)))){
        return; 
    }
    // if symbol is on start
    if(symbols.includes(target.textContent) && displayInput.value.length === 0){
        return;

    } else {
        displayInput.value += target.textContent;
        
    }

    // if there are another symbol

    if(displayInput.value.split("").filter(item => symbols.includes(item)).length > 1){
        displayInput.value = operate(operation);
        displayInput.value += target.textContent;
    }

    } else {
        displayInput.value += target.textContent;
    }
    operationUpdater()
    // update operation values:

// if arent symbols:

if(displayInput.value.split("").filter(item => symbols.includes(item)).length === 0){
    operation[0] = displayInput.value;
}

// if theres a symbol:

if(displayInput.value.split("").filter(item => symbols.includes(item)).length === 1){
    operationUpdater();
}
});



/* LAter 24 jun

// if other symbol exist simply act like = 

    if(displayInput.value.split("").filter(item => symbols.includes(item)).length === 1){
        displayInput.value = `${operate(operation) + target.textContent}`;
    }




if(displayInput.value){
    if(!displayInput.value.split("").filter(item => symbols.includes(item))){
        operation[0] = displayInput.value;
    }
    if(!displayInput.value.split("").filter(item => symbols.includes(item))){


        symbolIndex = displayInput.value.split("").findIndex(item => symbols.includes(item));
        operation[0] = displayInput.value.slice(symbolIndex, 0)
    }
}



 /* USE LATER 12 jun

    //Calc Behavior

    // If the user last writed symbol is repeated or symbols is on start of sentence
    // if user wants to put other decimal:

    if(displayInput.value.split("").filter(item => "." === item).length > 2){
        return alert("you cant use more than one decimal!");
    }


    // if is a number 
    if(!symbols.includes(target.textContent) || !(symbols.includes(displayInput.value))){
        displayInput.value += `${target.textContent}`;
    }

    if(target.includes(symbols)){

    }

    if(displayInput.value.split("").filter(item => symbols.includes(item)).length === 2){
        let opSymbols = displayInput.value.split("").filter(item => symbols.includes(item));
        console.log(opSymbols)
        operation = displayInput.value.slice(0, -1);
        operation = operation.split(`${opSymbols[0]}`); 
        operation.splice(1, 0, opSymbols[0]);
        lastOperation.push(operation.join(""));
        operate(operation);
        displayInput.value = `${result.textContent + opSymbols[1]}`;
    }
})  


    // old
    /*
    if(displayInput.value.split("").filter(item => symbols.includes(item)).length > 1){
        operation.push(displayInput.value.slice(0, -1));
        lastOperations.push(operation.at(-1));
        operation.push(displayInput.value.at(-1)); 
        lastOperations.push(displayInput.value.at(-1));
    }
*/
/* pensamiento
Si el usuario usa mas de 2 simbolos, eso significa que ya hay que hacer la operacion:

2 + 2 seria una operacion que no necesita realizarse aun. Cuando el usuario presione otro + o - o lo que sea, este actua como un = dejando el ultimo simbolo por delante del resultado: 

2 + 2 + 
=
4 + (lugar a escribir)

Que es lo que pide TOP

Entonces el flujo seria:

*/


// display.addEventListener("click", (e) => {
//     target = e.target;
//     if(symbols.includes(displayInput.value.at(-1))){
//         return;
//     }
//     if(displayInput.split("").filter(item => symbols.includes(item)).length === 2){

//     }
    
// });







/* OLD CODE TO USE LATEr

let display = document.querySelector("#display");
let inputDisplay = document.querySelector("#displayInput");
display.addEventListener("click", (e) => {
    inputDisplay.focus();
    inputDisplay.setSelectionRange(inputDisplay.value.length, inputDisplay.value.length);
});

// On click button action

let buttonContainer = document.querySelector("#buttonContainer");
let getOperation = [];
buttonContainer.addEventListener("click", (e) => {
    if(symbols.includes(e.target.textContent)){
        console.log("not more than 2 symbols")
    } else{
        switch(e.target.textContent){
            case "C":
                inputDisplay.value = "";
                break;
            case "CE":
                inputDisplay.value = "";
                break;
            case "=":

        }
    }
    if ()
+  +  });

/*
let result = document.querySelector("#resultDisplay");
result.textContent = `result`;
*/


























/* OLD CODE

// General options to avoid rare behavior
// document.body.style.backgroundColor = "gray";
document.body.style.width = "100%";
document.body.style.height = "100%";
document.body.style.boxSizing = "border-box";
document.body.style.padding = "0px";
document.body.style.margin = "0px";



// TOP get premium bar as joke.
let mainContainer = document.querySelector("#mainContainer");
let getPremium = document.createElement("div");
mainContainer.style.display = "flex";
mainContainer.style.flexDirection = "column";
mainContainer.style.alignItems = "center";
mainContainer.appendChild(getPremium);

let getPremiumText = document.createElement("p");
getPremiumText.textContent = "Get the premium calculator for only 9999999.99 bucks!";
getPremiumText.style.borderRadius = "5%";
getPremiumText.style.backgroundColor = "gray";

let getPremiumLink = document.createElement("a");
getPremiumLink.href = "https://youtu.be/dQw4w9WgXcQ"
getPremiumLink.textContent = " HERE";
getPremiumText.appendChild(getPremiumLink);

getPremium.appendChild(getPremiumText);

// Calculator start

/* to copy 

    <div class="getPremiumAd">
        <p>Get the premium calculator for only 9999999.99 bucks! <a href="https://youtu.be/dQw4w9WgXcQ">HERE!</a> </p>
    </div>

    
    <div id="calculatorContainer">
        <div id="calculator">
            <div class="lastOperationBar"></div>
            <div class="calcDisplay"></div>
            <div class="calcButtonsContainer"></div>
            
        </div>
    </div>



let calculatorContainer = document.createElement("div");
calculatorContainer.style.display = "flex";
calculatorContainer.id = "calculatorContainer";
calculatorContainer.style.width = "350px";
calculatorContainer.style.height = "500px";
calculatorContainer.style.outline = "1px solid black";
calculatorContainer.style.borderRadius = "2%";
mainContainer.appendChild(calculatorContainer);
*/

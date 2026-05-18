// Math Operation functions:

// Add

function add(n, n2){
    n + n2;
};

// subtract

function subtract(n, n2){
    n - n2;
};

// Multiply

function multiply(n, n2){
    n * n2;
};

// Divide

function divide(n, n2){
    n / n2;
};


// Variable to save operation input

let operation = [];


// Making Site


























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
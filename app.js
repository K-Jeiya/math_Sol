function startMathSolution() {
    let choice = prompt("What would you like to do?  \n➡️ Forward \n➡️ Backward \n➡️ Table");

    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; 

    if (choice === 'forward') {
        let output = "<h2>Forward Counting</h2>";
        for (let i = 1; i <= 100; i++) {
            output += `<p class="math-output">${i}</p>`;
        }
        resultDiv.innerHTML = output;

    } else if (choice === 'backward') {
        let output = "<h2>Backward Counting</h2>";
        for (let i = 100; i >= 1; i--) {
            output += `<p class="math-output">${i}</p>`;
        }
        resultDiv.innerHTML = output;

    } else if (choice === 'table') {
        let number = prompt("Which number's table do you want?");
        number = parseInt(number);
        if (!isNaN(number)) {
            let output = `<h2>Multiplication Table of ${number}</h2>`;
            for (let i = 1; i <= 10; i++) {
                output += `<p class="math-output">${number} x ${i} = ${number * i}</p>`;
            }
            resultDiv.innerHTML = output;
        } else {
            resultDiv.innerHTML = "<p>Please enter a valid number.</p>";
        }

    } else {
        resultDiv.innerHTML = "<p>Invalid choice. Please refresh and try again.</p>";
    }
}

window.onload = startMathSolution;

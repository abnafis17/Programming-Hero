function incomeCalculation() {
    var income = parseInt(document.getElementById("income").value);
    var expFood = parseInt(document.getElementById("food").value);
    var expRent = parseInt(document.getElementById("rent").value);
    var expClothes = parseInt(document.getElementById("clothes").value);

    if (income < 0 || expFood < 0 || expRent < 0 || expClothes < 0) {
        if (income < 0) {
            document.getElementById("conOne").innerHTML = "Please enter a positive number";
        }
        if (expFood < 0) {
            document.getElementById("conTwo").innerHTML = "Please enter a positive number";
        }
        if (expRent < 0) {
            document.getElementById("conThree").innerHTML = "Please enter a positive number";
        }
        if (expClothes < 0) {
            document.getElementById("conFour").innerHTML = "Please enter a positive number";
        }
    } else {
        let totalExp = expFood + expRent + expClothes;
        let balance = income - totalExp;

        if (income > totalExp) {
            document.getElementById("totalExp").innerHTML = totalExp;
            document.getElementById("netbalance").innerHTML = balance;
        }
        else {
            document.getElementById("conFive").innerHTML = "Income must be greater than expenses";
        }
    }
}

function savings() {
    var income = parseInt(document.getElementById("income").value);
    var expFood = parseInt(document.getElementById("food").value);
    var expRent = parseInt(document.getElementById("rent").value);
    var expClothes = parseInt(document.getElementById("clothes").value);

    if (income < 0 || expFood < 0 || expRent < 0 || expClothes < 0) {
        return;
    } else {
        let totalExp = expFood + expRent + expClothes;
        let balance = income - totalExp;

        var save = parseInt(document.getElementById("savePercent").value);

        if (save > 0) {
            let saving = (income * save) / 100;
            let remainBalance = balance - saving;

            document.getElementById("saveAmount").innerHTML = saving;
            document.getElementById("remainBalance").innerHTML = remainBalance;
        } else {
            document.getElementById("conSix").innerHTML = "Saving percentage must be positive number";
        }
    }
}

document.getElementById("calButton").addEventListener("click", incomeCalculation);

document.getElementById("btnsave").addEventListener("click", savings);
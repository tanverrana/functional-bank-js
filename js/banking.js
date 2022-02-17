function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmmountText = inputField.value;
    const ammountvalue = parseFloat(inputAmmountText);
    inputField.value = "";
    return ammountvalue;
};

function updateTotalField(totalFieldId, ammount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + ammount;
};

function getCurrentBalance() {
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    return previousBalance;
}

function updateBalance(ammount, isAdd) {
    const balanceTotal = document.getElementById("balance-total");
    /*
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText); 
    */
    const previousBalance = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalance + ammount;
    }
    else {
        balanceTotal.innerText = previousBalance - ammount;
    }
}


document.getElementById("deposit-button").addEventListener("click", function () {
    /* const depositInput = document.getElementById("deposit-input");
    const depositAmmountText = depositInput.value;
    const depositAmmount = parseFloat(depositAmmountText); */
    const depositAmmount = getInputValue("deposit-input");
    if (depositAmmount > 0) {
        updateTotalField("deposit-total", depositAmmount);
        updateBalance(depositAmmount, true);
    }


    //Get and update Current Deposit

    /* const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmmount; */

    //update balance

    /* const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalance + depositAmmount; */

    //clear Input field

    // depositInput.value = "";
})
//Handle Withdraw
document.getElementById("withdraw-button").addEventListener("click", function () {
    const withdrawAmmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance();
    if (withdrawAmmount > 0 && currentBalance > withdrawAmmount) {
        updateTotalField("withdraw-total", withdrawAmmount);
        updateBalance(withdrawAmmount, false);
    }
    if (currentBalance < withdrawAmmount) {
        console.log("You can not withdraw more than", currentBalance);
    }
    /* const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmmountText = withdrawInput.value;
    const withdrawAmmount = parseFloat(withdrawAmmountText); */

    //Get and update withdraw Total

    /* const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawPreviousAmmount = parseFloat(withdrawTotalText);

    withdrawTotal.innerText = withdrawPreviousAmmount + withdrawAmmount; */

    //Update Balance

    /* const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotalAmmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotalAmmount - withdrawAmmount; */


    /* //clear Input field
    withdrawInput.value = ""; */
})
document.getElementById("deposit-button").addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const depositInputText = depositInput.value;
    const depositAmmount = parseFloat(depositInputText);

    const depositTotal = document.getElementById("deposit-total");
    const previousDeposit = depositTotal.innerText;
    const prevousDepositAmmount = parseFloat(previousDeposit);

    const depositTotalAmmount = depositAmmount + prevousDepositAmmount;
    depositTotal.innerText = depositTotalAmmount;

    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceTotalText = balanceTotal.innerText;
    const totalAmmount = parseFloat(previousBalanceTotalText);
    const toatalBalanceAmmount = totalAmmount + depositAmmount;
    balanceTotal.innerText = toatalBalanceAmmount;

    depositInput.value = "";
});

document.getElementById("withdraw-button").addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawInputText = withdrawInput.value;
    const withdrawInputAmmount = parseFloat(withdrawInputText);

    const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmmount = parseFloat(withdrawTotalText);

    const withdrawAmmount = withdrawInputAmmount + withdrawTotalAmmount;
    withdrawTotal.innerText = withdrawAmmount;

    const balanceTotal = document.getElementById("balance-total");
    const previousBalnceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalnceText);

    const balanceTotalAmmount = previousBalanceTotal - withdrawInputAmmount;
    balanceTotal.innerText = balanceTotalAmmount;
    withdrawInput.value = "";

})
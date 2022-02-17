document.getElementById("deposit-button").addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const depositInputText = depositInput.value;
    const depositAmmount = parseFloat(depositInputText);

    const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotalAmmount = parseFloat(depositTotalText);
    const depositTotalAmmount = previousDepositTotalAmmount + depositAmmount;
    depositTotal.innerText = depositTotalAmmount;

    const previousBalanceTotal = document.getElementById("balance-total");
    const previousBalanceTotalText = previousBalanceTotal.innerText;
    const previousBalanceAmmount = parseFloat(previousBalanceTotalText);

    const totalBalance = previousBalanceAmmount + depositAmmount;
    previousBalanceTotal.innerText = totalBalance;

    depositInput.value = "";

});

document.getElementById("withdraw-button").addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawInputText = withdrawInput.value;
    const withdrawInputAmmount = parseFloat(withdrawInputText);

    const withdrawPrevious = document.getElementById("withdraw-total");
    const withdrawPreviousText = withdrawPrevious.innerText;
    const withdrawPreviousAmmount = parseFloat(withdrawPreviousText);

    const withdrawTotal = withdrawInputAmmount + withdrawPreviousAmmount;
    withdrawPrevious.innerText = withdrawTotal;

    const previousBalanceTotal = document.getElementById("balance-total");
    const previousBalanceTotalText = previousBalanceTotal.innerText;
    const previousBalanceAmmount = parseFloat(previousBalanceTotalText);

    const totalBalance = previousBalanceAmmount - withdrawInputAmmount;
    previousBalanceTotal.innerText = totalBalance;

    withdrawInput.value = "";


})
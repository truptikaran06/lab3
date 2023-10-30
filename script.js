const totalBillIp = document.getElementById('billTotal');
const PercentageTipIp = document.getElementById('tipPercentage');
const amountTipIp = document.getElementById('tipAmount');
const totalWithTipIp = document.getElementById('totalWithTip');
const tipCalculatorForm = document.getElementById('tipCalculatorForm');

const resetButton = document.getElementById('resetButton');


tipCalculatorForm.addEventListener('input', calculatingTips);

function calculatingTips() {

    const totalBill = parseFloat(totalBillIp.value);
    const tipPercentages = PercentageTipIp.value;
    const tipAmount = (totalBill * tipPercentages) / 100;
    const totalWithTips = totalBill + tipAmount;

    if (!isNaN(totalBill)) {
        amountTipIp.value = tipAmount.toFixed(2);
        totalWithTipIp.value = totalWithTips.toFixed(2);
    } else {
        amountTipIp.value = '';
        totalWithTipIp.value = '';
    }
}

calculatingTips();


tipCalculatorForm.addEventListener('input', calculatingTips);


resetButton.addEventListener('click', () => {
    totalBillIp.value = '';
    PercentageTipIp.value = 0;
    amountTipIp.value = '';
    totalWithTipIp.value = '';
});


calculatingTips();
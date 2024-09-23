function handleDonation(inputId, balanceId) {
    const addDonation = document.getElementById(inputId).value;
    const addDonationNumber = parseFloat(addDonation);

    if (isNaN(addDonationNumber) || addDonationNumber <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }

    const amount = document.getElementById('amount').innerText;
    const amountNumber = parseFloat(amount);

    const donationAmount = document.getElementById(balanceId).innerText;
    const donationAmountNumber = parseFloat(donationAmount);

    const remainingBalance = amountNumber - addDonationNumber;
    if (remainingBalance < 0) {
        alert("Insufficient funds.");
        return;
    }
    const newDonation = addDonationNumber + donationAmountNumber;

    document.getElementById('amount').innerText = remainingBalance;
    document.getElementById(balanceId).innerText = newDonation;

    document.getElementById('my_modal_5').showModal();
}

// Noakhali donation
document.getElementById('donation-button').addEventListener('click', function() {
    handleDonation('noakhaliInput', 'noakhali-donation');
});

// Feni donation
document.getElementById('donation-button1').addEventListener('click', function() {
    handleDonation('feniInput', 'feni-donation');
});

// Quota donation
document.getElementById('donation-button2').addEventListener('click', function() {
    handleDonation('protestInput', 'qouta-donation');
});

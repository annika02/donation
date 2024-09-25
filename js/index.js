function handleDonation(inputId, balanceId,description) {
    const addDonation = document.getElementById(inputId).value;
    const addDonationNumber = Number(addDonation);

    if (!isNaN(addDonationNumber) && addDonationNumber > 0) {
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

        // history 
        const d = new Date();
        const formattedDate = d.toLocaleDateString();
        const div = document.createElement('div');
        
        div.innerHTML = `
            <p class="font-bold">${addDonationNumber} Taka is Donated for ${description} on ${formattedDate}</p>
            <p>Date : ${d} </p>`

        document.getElementById('history').appendChild(div);

        // modal and clearing text field
        document.getElementById('my_modal_5').showModal();
        document.getElementById(inputId).value = '';
    } else {
        alert("Please enter a valid donation amount!");
    }
}


// Noakhali donation
document.getElementById('donation-button').addEventListener('click', function() {
    handleDonation('noakhaliInput', 'noakhali-donation','Noakhali Flood');
});

// Feni donation
document.getElementById('donation-button1').addEventListener('click', function() {
    handleDonation('feniInput', 'feni-donation','Feni Flood');
});

// Quota donation
document.getElementById('donation-button2').addEventListener('click', function() {
    handleDonation('protestInput', 'qouta-donation','Quota Protest');
});

// swap to blog
document.getElementById('blog').addEventListener('click',function(){
    window.location.href = "./blog.html";
})












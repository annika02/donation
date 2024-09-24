function showElementbyId(id){
    document.getElementById('donationSection').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');

}

// active tab

function activateTab(activeTabId) {
    document.getElementById('donationTab').classList.remove('bg-primary', 'text-black');
    document.getElementById('donationTab').classList.add('bg-white', 'text-[#595959]','border');
    
    document.getElementById('historyTab').classList.remove('bg-primary', 'text-black');
    document.getElementById('historyTab').classList.add('bg-white', 'text-[#595959]','border');
    
    document.getElementById(activeTabId).classList.remove('bg-white', 'text-[#595959]','border');
    document.getElementById(activeTabId).classList.add('bg-primary', 'text-black');
}

// donation tab
document.getElementById('donationTab').addEventListener('click', function () {
    showElementbyId('donationSection');
    activateTab('donationTab');
});

// history tab
document.getElementById('historyTab').addEventListener('click', function () {
    showElementbyId('history-section');
    activateTab('historyTab');
});

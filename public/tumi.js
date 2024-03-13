const searchInput = document.getElementById('searchInput');

const searchForm = document.getElementById('searchForm');

const clearButton = document.getElementById('clearSearch');

// Var om het vertragingsinterval tussen toetsaanslagen bij te houden
let typingTimer;

// Tijd tussen toetsaanslagen voordat de zoekopdracht wordt ingediend
const doneTypingInterval = 700;

// Eventlistener die reageert op het 'input'-evenement van het zoekinputveld
searchInput.addEventListener('input', function() {
    // Haal het huidige vertragingsinterval tussen toetsaanslagen weg
    clearTimeout(typingTimer);
    // Stelt een nieuw vertragingsinterval in nadat de gebruiker is gestopt met typen
    typingTimer = setTimeout(submitSearchForm, doneTypingInterval);
});

clearButton.addEventListener('click', function() {
    searchInput.value = ''; // Clear the input field
    searchForm.submit(); // Submit the form to clear the search results
});


// Functie om het zoekformulier in te dienen
function submitSearchForm() {
    searchForm.submit();
}

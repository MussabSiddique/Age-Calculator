function calculateAge() {
    var currentYear = new Date().getFullYear();
    var birthYear = document.getElementById("birthYear").value;
    var age = currentYear - birthYear;
    var resultDiv = document.getElementById(`result`);
    if (birthYear > 0 && birthYear <= currentYear) {
        resultDiv.innerHTML = `<p><strong>Current Year:</strong> ${currentYear}</p>
                               <p><strong>Birth Year:</strong> ${birthYear}</p>
                               <p><strong>Your Age:</strong> ${age}</p>`;
    } else {
        resultDiv.innerHTML = `<p>Please enter a valid birth year.</p>`;
    }
}
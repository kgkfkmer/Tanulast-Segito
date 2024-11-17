function submitForm() {
    const website = document.getElementById('website').value.trim();
    const rating = document.getElementById('rating').value;

    if (website === "" || rating === "") {
        alert("Kérlek, töltsd ki az összes mezőt!");
        return;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p><strong>${website}</strong> weboldalt ${rating}/5-re értékelted. Köszönjük a visszajelzést!</p>
    `;
    resultDiv.style.backgroundColor = "#e8f5e9";
    resultDiv.style.padding = "1rem";
    resultDiv.style.border = "1px solid #4CAF50";
    resultDiv.style.borderRadius = "5px";

    document.getElementById('surveyForm').reset();
}

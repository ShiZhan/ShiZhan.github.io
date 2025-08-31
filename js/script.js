function togglePublications() {
    var olderPublications = document.getElementById("older-publications");
    var toggleButton = document.getElementById("toggle-publications");
    
    if (olderPublications.style.display === "none") {
        olderPublications.style.display = "block";
        toggleButton.textContent = "less...";
    } else {
        olderPublications.style.display = "none";
        toggleButton.textContent = "more...";
    }
}
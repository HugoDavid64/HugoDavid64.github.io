document.addEventListener("DOMContentLoaded", function() {
    const toggleInput = document.getElementById('languageSwitch');
    toggleInput.addEventListener('change', function() {
        if (this.checked) {
            window.location.href = window.location.href.replace("/es/", "/en/");
        } else {
            window.location.href = window.location.href.replace("/en/", "/es/");
        }
    });
});

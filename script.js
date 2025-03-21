document.addEventListener("DOMContentLoaded", function () {
    // Typing effect
    const textElement = document.getElementById("typing-text");
    const text = "Hello! I'm Sanika, an engineering student passionate about space, art, and coding.";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            textElement.innerHTML += text[index];
            index++;
            setTimeout(typeText, 50);
        }
    }

    textElement.innerHTML = ""; // Clear text
    typeText();

    // Make the moon slowly move
    const moon = document.querySelector(".moon");
    document.addEventListener("mousemove", function(event) {
        let x = (event.clientX / window.innerWidth) * 100;
        let y = (event.clientY / window.innerHeight) * 100;
        moon.style.transform = `translate(${x-50}%, ${y-50}%)`;
    });
});

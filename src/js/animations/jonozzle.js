
function jonozzle() {


    const words = ["zzle", "stril", "saurus", "sology", "xiously", "bbler", "nagon", "dical", "odled", "misms", "dders", "vel"]; // Add your words here
    let currentIndex = 0;
    let isAnimating = false;
    let isHovered = false; // Flag to track if the mouse is over the element

    const prefixElement = document.getElementById("prefix");
    const suffixElement = document.getElementById("suffix");
    const textContainer = document.querySelector(".jonozzle");

    // Initialize suffixElement with the first suffix
    suffixElement.innerText = words[currentIndex];

    textContainer.addEventListener("mouseenter", () => {
        if (!isAnimating && !isHovered) {
            currentIndex = (currentIndex + 1) % words.length;
            animateText(words[currentIndex]);
            isHovered = true; // Set the flag to true to prevent further animations
        }
    });

    textContainer.addEventListener("mouseleave", () => {
        isHovered = false; // Reset the flag when the mouse moves away
    });

    async function animateText(newSuffix) {
        isAnimating = true;
        const currentSuffix = suffixElement.innerText;
        const maxLength = Math.max(currentSuffix.length, newSuffix.length);

        for (let i = currentSuffix.length; i >= 0; i--) {
            suffixElement.innerText = currentSuffix.slice(0, i);
            await sleep(50);
        }

        for (let i = 0; i < newSuffix.length; i++) {
            suffixElement.innerText += newSuffix[i];
            await sleep(50);
        }

        isAnimating = false;
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }



}

export default jonozzle;